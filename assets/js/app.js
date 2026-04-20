/**
 * @typedef {Object} QuizQuestion
 * @property {string} question
 * @property {string[]} choices
 * @property {number} answer
 * @property {string} explanation
 */

/**
 * @typedef {Object} QuizCategory
 * @property {string} id
 * @property {string} title
 * @property {string} tag
 * @property {string} dataFile
 * @property {QuizQuestion[]} questions
 */

/**
 * @typedef {Object} SecretBody
 * @property {HTMLImageElement} element
 * @property {number} x
 * @property {number} y
 * @property {number} width
 * @property {number} height
 * @property {number} vx
 * @property {number} vy
 * @property {number} rotation
 * @property {number} angularVelocity
 * @property {number} sleepFrames
 * @property {number} expiresAt
 */

const APP_CONFIG = {
  questionsPerQuiz: 20,
  menuPlaceholderText: 'ジャンルを選択すると、ここに説明が表示されます。',
  menuStatusText: 'Menu',
  readyStatusText: 'Ready',
  correctStatusText: 'Correct',
  missStatusText: 'Miss',
  completeStatusText: 'Complete',
  storageKeys: {
    bestScorePrefix: 'cyber-pixel-quiz-best-score:',
    seenQuestionsPrefix: 'cyber-pixel-quiz-seen-questions:'
  },
  secretImages: [
    './img/troll_01.png',
    './img/troll_02.png',
    './img/troll_03.png',
    './img/troll_04.png',
    './img/troll_05.png',
    './img/troll_06.png',
    './img/troll_07.png',
    './img/troll_08.png',
    './img/troll_09.png',
    './img/troll_10.png',
    './img/troll_11.png',
    './img/troll_12.png',
    './img/troll_13.png',
    './img/troll_14.png',
    './img/troll_15.png',
    './img/troll_23.png',
    './img/troll_24.png',
    './img/troll_25.png'
  ],
  secretPhysics: {
    gravity: 2200,
    airDrag: 0.0015,
    bounce: 0.16,
    floorFriction: 0.985,
    spinFriction: 0.992,
    maxBodies: 60,
    lifespanMs: 5000,
    fadeDurationMs: 600
  }
};

const CATEGORY_SPECS = [
  {
    id: 'frontend',
    title: 'フロントエンドクイズ',
    tag: 'Frontend',
    dataFile: 'frontend-quiz-data.js',
    poolName: 'frontendQuestionPool'
  },
  {
    id: 'backend',
    title: 'バックエンドクイズ',
    tag: 'Backend',
    dataFile: 'backend-quiz-data.js',
    poolName: 'backendQuestionPool'
  },
  {
    id: 'it-passport',
    title: 'ITパスポート',
    tag: 'IP',
    dataFile: 'it-passport-quiz-data.js',
    poolName: 'itPassportQuestionPool'
  },
  {
    id: 'basic-info',
    title: '基本情報技術者',
    tag: 'FE',
    dataFile: 'basic-info-quiz-data.js',
    poolName: 'basicInfoQuestionPool'
  },
  {
    id: 'applied-info',
    title: '応用情報技術者',
    tag: 'AP',
    dataFile: 'applied-info-quiz-data.js',
    poolName: 'appliedInfoQuestionPool'
  },
  {
    id: 'g-cert',
    title: 'G検定',
    tag: 'G',
    dataFile: 'g-cert-quiz-data.js',
    poolName: 'gCertQuestionPool'
  }
];

const ANSWER_LABELS = ['A', 'B', 'C', 'D'];

const dom = {
  body: document.body,
  brandTitle: document.querySelector('.brand__title'),
  categoryName: document.getElementById('categoryName'),
  questionCounter: document.getElementById('questionCounter'),
  scoreValue: document.getElementById('scoreValue'),
  statusValue: document.getElementById('statusValue'),
  progressText: document.getElementById('progressText'),
  progressBar: document.getElementById('progressBar'),
  questionNumber: document.getElementById('questionNumber'),
  questionText: document.getElementById('questionText'),
  choices: document.getElementById('choices'),
  messageBox: document.getElementById('messageBox'),
  nextButton: document.getElementById('nextBtn'),
  restartButton: document.getElementById('restartBtn'),
  retryButton: document.getElementById('retryBtn'),
  startButton: document.getElementById('startBtn'),
  backToMenuButton: document.getElementById('backToMenuBtn'),
  resultMenuButton: document.getElementById('resultMenuBtn'),
  quizScreen: document.getElementById('quizScreen'),
  resultScreen: document.getElementById('resultScreen'),
  menuScreen: document.getElementById('menuScreen'),
  finalScore: document.getElementById('finalScore'),
  resultText: document.getElementById('resultText'),
  categoryGrid: document.getElementById('categoryGrid'),
  menuSelectedText: document.getElementById('menuSelectedText')
};

const state = {
  selectedCategoryId: null,
  currentQuiz: /** @type {QuizQuestion[]} */ ([]),
  currentIndex: 0,
  score: 0,
  answered: false,
  currentScreen: 'menu',
  armedAction: null,
  armedActionTimerId: null,
  secret: {
    layer: /** @type {HTMLDivElement | null} */ (null),
    bodies: /** @type {SecretBody[]} */ ([]),
    animationFrameId: 0,
    lastTimestamp: 0
  }
};

/** @type {QuizCategory[]} */
const quizCategories = CATEGORY_SPECS.map(spec => ({
  id: spec.id,
  title: spec.title,
  tag: spec.tag,
  dataFile: spec.dataFile,
  questions: Array.isArray(window[spec.poolName]) ? window[spec.poolName] : []
}));

/**
 * Safely reads JSON from localStorage.
 * @template T
 * @param {string} key
 * @param {T} fallbackValue
 * @returns {T}
 */
function readStorageJson(key, fallbackValue) {
  try {
    const rawValue = window.localStorage.getItem(key);
    return rawValue ? JSON.parse(rawValue) : fallbackValue;
  } catch {
    return fallbackValue;
  }
}

/**
 * Safely writes JSON to localStorage.
 * @param {string} key
 * @param {unknown} value
 */
function writeStorageJson(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage write failures and continue without persistence.
  }
}

/**
 * @param {string} categoryId
 * @returns {string}
 */
function getBestScoreKey(categoryId) {
  return `${APP_CONFIG.storageKeys.bestScorePrefix}${categoryId}`;
}

/**
 * @param {string} categoryId
 * @returns {string}
 */
function getSeenQuestionsKey(categoryId) {
  return `${APP_CONFIG.storageKeys.seenQuestionsPrefix}${categoryId}`;
}

/**
 * @param {string} categoryId
 * @returns {number}
 */
function getBestScore(categoryId) {
  return readStorageJson(getBestScoreKey(categoryId), 0);
}

/**
 * @param {string} categoryId
 * @param {number} bestScore
 */
function setBestScore(categoryId, bestScore) {
  writeStorageJson(getBestScoreKey(categoryId), bestScore);
}

/**
 * @param {string} categoryId
 * @returns {string[]}
 */
function getSeenQuestionTexts(categoryId) {
  return readStorageJson(getSeenQuestionsKey(categoryId), []);
}

/**
 * @param {string} categoryId
 * @param {string[]} questionTexts
 */
function setSeenQuestionTexts(categoryId, questionTexts) {
  writeStorageJson(getSeenQuestionsKey(categoryId), questionTexts);
}

/**
 * @param {string} value
 * @returns {string}
 */
function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * @param {QuizCategory['questions']} questions
 * @param {number} count
 * @returns {QuizCategory['questions']}
 */
function pickRandomQuestions(questions, count) {
  const shuffled = [...questions];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * @param {QuizQuestion} question
 * @returns {QuizQuestion}
 */
function shuffleQuestionChoices(question) {
  const choicesWithAnswerState = question.choices.map((choice, index) => ({
    choice,
    isAnswer: index === question.answer
  }));

  for (let index = choicesWithAnswerState.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [choicesWithAnswerState[index], choicesWithAnswerState[randomIndex]] = [
      choicesWithAnswerState[randomIndex],
      choicesWithAnswerState[index]
    ];
  }

  return {
    ...question,
    choices: choicesWithAnswerState.map(entry => entry.choice),
    answer: choicesWithAnswerState.findIndex(entry => entry.isAnswer)
  };
}

/**
 * @param {QuizCategory} category
 * @param {number} count
 * @returns {QuizQuestion[]}
 */
function pickFreshQuestions(category, count) {
  const seenQuestionTexts = new Set(getSeenQuestionTexts(category.id));
  let availableQuestions = category.questions.filter(question => !seenQuestionTexts.has(question.question));

  if (availableQuestions.length < count) {
    availableQuestions = [...category.questions];
    setSeenQuestionTexts(category.id, []);
  }

  const selectedQuestions = pickRandomQuestions(availableQuestions, count);
  const updatedSeenQuestionTexts = [
    ...new Set([
      ...getSeenQuestionTexts(category.id),
      ...selectedQuestions.map(question => question.question)
    ])
  ];

  setSeenQuestionTexts(category.id, updatedSeenQuestionTexts);
  return selectedQuestions.map(shuffleQuestionChoices);
}

/**
 * @param {string | null} categoryId
 * @returns {QuizCategory | null}
 */
function getCategoryById(categoryId) {
  return quizCategories.find(category => category.id === categoryId) || null;
}

/**
 * @param {QuizCategory} category
 * @returns {number}
 */
function getQuizQuestionLimit(category) {
  return Math.min(APP_CONFIG.questionsPerQuiz, category.questions.length);
}

/**
 * @param {QuizCategory} category
 * @returns {string}
 */
function getCategoryDescription(category) {
  const quizSize = getQuizQuestionLimit(category);
  return category.questions.length > 0
    ? `${category.title}分野からランダムで ${quizSize} 問を出題します。`
    : `${category.dataFile} が読み込まれていません。`;
}

/**
 * @param {QuizCategory} category
 * @returns {string}
 */
function getMenuSelectionMarkup(category) {
  const bestScore = getBestScore(category.id);
  return [
    `<strong>Selected:</strong> ${escapeHtml(category.title)}`,
    `<span>${escapeHtml(getCategoryDescription(category))}（問題プール全 ${category.questions.length} 問）</span>`,
    `<span>最高得点: ${bestScore} / ${getQuizQuestionLimit(category)}</span>`
  ].join('<br>');
}

/**
 * @param {QuizCategory} category
 * @returns {string}
 */
function getCategoryCardMarkup(category) {
  const bestScore = getBestScore(category.id);
  return `
    <div class="category-card__meta">
      <span class="category-card__tag">${escapeHtml(category.tag)}</span>
      <span class="category-card__score">
        <span class="category-card__score-label">Best</span>
        <span class="category-card__score-value">${bestScore} / ${getQuizQuestionLimit(category)}</span>
      </span>
    </div>
    <h2 class="category-card__title">${escapeHtml(category.title)}</h2>
    <p class="category-card__desc">${escapeHtml(getCategoryDescription(category))}</p>
  `;
}

/**
 * @param {'menu' | 'quiz' | 'result'} screenName
 */
function setScreen(screenName) {
  state.currentScreen = screenName;
  dom.body.classList.remove('screen-menu', 'screen-quiz', 'screen-result');
  dom.body.classList.add(`screen-${screenName}`);
  dom.menuScreen.classList.toggle('show', screenName === 'menu');
  dom.quizScreen.classList.toggle('show', screenName === 'quiz');
  dom.resultScreen.classList.toggle('show', screenName === 'result');
}

function updateHud() {
  const total = state.currentQuiz.length;
  const displayIndex = total === 0 ? 0 : Math.min(state.currentIndex + 1, total);
  const progress = state.currentScreen === 'result'
    ? 100
    : total === 0
      ? 0
      : Math.round((displayIndex / total) * 100);

  dom.questionCounter.textContent = `${displayIndex} / ${total}`;
  dom.scoreValue.textContent = String(state.score);
  dom.progressText.textContent = `${progress}%`;
  dom.progressBar.style.width = `${progress}%`;
}

function clearArmedQuizAction() {
  if (state.armedActionTimerId) {
    window.clearTimeout(state.armedActionTimerId);
    state.armedActionTimerId = null;
  }

  [dom.backToMenuButton, dom.restartButton].forEach(button => {
    button.classList.remove('is-armed');
    button.textContent = button.dataset.defaultLabel || '';
  });

  state.armedAction = null;
}

/**
 * @param {HTMLButtonElement} button
 * @param {'menu' | 'restart'} actionName
 * @param {string} confirmLabel
 * @returns {boolean}
 */
function armQuizAction(button, actionName, confirmLabel) {
  const shouldExecute = state.armedAction === actionName;
  clearArmedQuizAction();

  if (shouldExecute) {
    return true;
  }

  state.armedAction = actionName;
  button.classList.add('is-armed');
  button.textContent = confirmLabel;
  state.armedActionTimerId = window.setTimeout(clearArmedQuizAction, 1600);
  return false;
}

function updateCategorySelectionUI() {
  const selectedCategory = getCategoryById(state.selectedCategoryId);

  [...dom.categoryGrid.querySelectorAll('.category-card')].forEach(card => {
    const isActive = card.dataset.categoryId === state.selectedCategoryId;
    card.classList.toggle('active', isActive);
    card.setAttribute('aria-pressed', String(isActive));
  });

  if (selectedCategory) {
    dom.categoryName.textContent = selectedCategory.title;
    dom.menuSelectedText.innerHTML = getMenuSelectionMarkup(selectedCategory);
    dom.startButton.disabled = selectedCategory.questions.length === 0;
    return;
  }

  dom.categoryName.textContent = 'Select';
  dom.menuSelectedText.textContent = APP_CONFIG.menuPlaceholderText;
  dom.startButton.disabled = true;
}

/**
 * @param {string} categoryId
 */
function selectCategory(categoryId) {
  state.selectedCategoryId = categoryId;
  updateCategorySelectionUI();
}

function renderCategoryMenu() {
  dom.categoryGrid.innerHTML = '';

  quizCategories.forEach((category, index) => {
    const button = document.createElement('button');
    button.className = 'category-card';
    button.type = 'button';
    button.dataset.categoryId = category.id;
    button.setAttribute('aria-pressed', String(category.id === state.selectedCategoryId));
    button.innerHTML = getCategoryCardMarkup(category);
    button.addEventListener('click', () => selectCategory(category.id));

    if (index === 0 && !state.selectedCategoryId) {
      state.selectedCategoryId = category.id;
    }

    dom.categoryGrid.appendChild(button);
  });

  updateCategorySelectionUI();
}

function renderQuestion() {
  /** @type {QuizQuestion | undefined} */
  const currentQuestion = state.currentQuiz[state.currentIndex];
  if (!currentQuestion) return;

  state.answered = false;
  dom.nextButton.disabled = true;
  dom.statusValue.textContent = APP_CONFIG.readyStatusText;
  dom.statusValue.classList.add('blink');
  dom.messageBox.textContent = '4つの選択肢から正解を選んでください。';
  dom.questionNumber.textContent = `Question ${String(state.currentIndex + 1).padStart(2, '0')}`;
  dom.questionText.textContent = currentQuestion.question;
  dom.choices.innerHTML = '';

  currentQuestion.choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.className = 'choice-btn';
    button.type = 'button';
    button.dataset.label = ANSWER_LABELS[index] || '';
    button.innerHTML = `<span>${escapeHtml(choice)}</span>`;
    button.addEventListener('click', () => selectAnswer(index));
    dom.choices.appendChild(button);
  });

  updateHud();
}

/**
 * @param {number} selectedIndex
 */
function selectAnswer(selectedIndex) {
  if (state.answered) return;

  /** @type {QuizQuestion | undefined} */
  const currentQuestion = state.currentQuiz[state.currentIndex];
  if (!currentQuestion) return;

  state.answered = true;
  const choiceButtons = [...dom.choices.querySelectorAll('.choice-btn')];
  const isCorrect = selectedIndex === currentQuestion.answer;

  choiceButtons.forEach((button, index) => {
    button.disabled = true;

    if (index === currentQuestion.answer) {
      button.classList.add('correct');
    } else if (index === selectedIndex) {
      button.classList.add('wrong');
    } else {
      button.classList.add('dim');
    }
  });

  if (isCorrect) {
    state.score += 1;
    dom.statusValue.textContent = APP_CONFIG.correctStatusText;
    dom.messageBox.textContent = `正解！ ${currentQuestion.explanation}`;
  } else {
    dom.statusValue.textContent = APP_CONFIG.missStatusText;
    dom.messageBox.textContent = `不正解…。 ${currentQuestion.explanation}`;
  }

  dom.statusValue.classList.remove('blink');
  dom.nextButton.disabled = false;
  dom.nextButton.focus();
  updateHud();
}

function showResult() {
  const selectedCategory = getCategoryById(state.selectedCategoryId);
  if (!selectedCategory) return;

  const totalQuestions = state.currentQuiz.length;
  const scoreRate = totalQuestions === 0 ? 0 : state.score / totalQuestions;
  const previousBestScore = getBestScore(selectedCategory.id);

  if (state.score > previousBestScore) {
    setBestScore(selectedCategory.id, state.score);
  }

  setScreen('result');
  dom.finalScore.textContent = `${state.score} / ${totalQuestions}`;
  dom.statusValue.textContent = APP_CONFIG.completeStatusText;
  dom.statusValue.classList.remove('blink');
  dom.progressText.textContent = '100%';
  dom.progressBar.style.width = '100%';
  dom.questionCounter.textContent = `${totalQuestions} / ${totalQuestions}`;

  if (scoreRate === 1) {
    dom.resultText.textContent = `${selectedCategory.title} を完全制覇しました。ネオン街の知識ネットワークを突破です。`;
  } else if (scoreRate >= 0.7) {
    dom.resultText.textContent = `${selectedCategory.title} でかなり良い成績です。あと少しでフルスコアです。`;
  } else if (scoreRate >= 0.4) {
    dom.resultText.textContent = `${selectedCategory.title} はまずまずの結果です。別ジャンルにも挑戦できます。`;
  } else {
    dom.resultText.textContent = `${selectedCategory.title} をもう一度チャレンジしましょう。メニューから別ジャンルも選べます。`;
  }
}

function startQuiz() {
  const selectedCategory = getCategoryById(state.selectedCategoryId);
  if (!selectedCategory || selectedCategory.questions.length === 0) return;

  clearArmedQuizAction();
  state.currentQuiz = pickFreshQuestions(selectedCategory, APP_CONFIG.questionsPerQuiz);
  state.currentIndex = 0;
  state.score = 0;
  state.answered = false;

  dom.scoreValue.textContent = '0';
  dom.statusValue.textContent = APP_CONFIG.readyStatusText;
  dom.statusValue.classList.add('blink');

  setScreen('quiz');
  renderQuestion();
}

function goToNextQuestion() {
  if (!state.answered) return;

  clearArmedQuizAction();
  state.currentIndex += 1;

  if (state.currentIndex < state.currentQuiz.length) {
    renderQuestion();
    return;
  }

  showResult();
}

function resetCurrentQuiz() {
  if (!state.selectedCategoryId) return;
  clearArmedQuizAction();
  startQuiz();
}

function goToMenu() {
  clearArmedQuizAction();
  setScreen('menu');
  state.currentQuiz = [];
  state.currentIndex = 0;
  state.score = 0;
  state.answered = false;

  dom.statusValue.textContent = APP_CONFIG.menuStatusText;
  dom.statusValue.classList.add('blink');
  dom.questionCounter.textContent = '0 / 0';
  dom.scoreValue.textContent = '0';
  dom.progressText.textContent = '0%';
  dom.progressBar.style.width = '0%';

  renderCategoryMenu();
}

function ensureSecretDropLayer() {
  if (state.secret.layer) return state.secret.layer;

  const layer = document.createElement('div');
  layer.className = 'secret-drop-layer';
  dom.body.appendChild(layer);
  state.secret.layer = layer;
  return layer;
}

/**
 * @returns {string}
 */
function getRandomSecretImagePath() {
  const { secretImages } = APP_CONFIG;
  return secretImages[Math.floor(Math.random() * secretImages.length)];
}

/**
 * @returns {SecretBody}
 */
function createSecretBody() {
  const layer = ensureSecretDropLayer();
  const size = 44 + Math.random() * 30;
  const viewportWidth = window.innerWidth;
  const titleRect = dom.brandTitle
    ? dom.brandTitle.getBoundingClientRect()
    : { left: viewportWidth * 0.35, width: viewportWidth * 0.3 };
  const spawnCenter = titleRect.left + (titleRect.width / 2);
  const spawnSpread = Math.max(60, titleRect.width * 0.9);
  const now = window.performance.now();
  const body = {
    element: document.createElement('img'),
    x: Math.max(0, Math.min(
      viewportWidth - size,
      spawnCenter + ((Math.random() - 0.5) * spawnSpread) - (size / 2)
    )),
    y: -size - (Math.random() * 90),
    width: size,
    height: size,
    vx: (Math.random() - 0.5) * 180,
    vy: Math.random() * 60,
    rotation: (Math.random() - 0.5) * 18,
    angularVelocity: (Math.random() - 0.5) * 120,
    sleepFrames: 0,
    expiresAt: now + APP_CONFIG.secretPhysics.lifespanMs
  };

  body.element.className = 'secret-drop-item';
  body.element.src = getRandomSecretImagePath();
  body.element.alt = '';
  body.element.decoding = 'async';
  body.element.draggable = false;
  body.element.style.width = `${size}px`;
  body.element.style.height = `${size}px`;
  layer.appendChild(body.element);

  return body;
}

/**
 * @typedef {{ x: number, y: number, width: number, height: number }} Rect
 */

/**
 * @returns {Rect[]}
 */
function getSecretStaticColliders() {
  const colliders = [
    { x: 0, y: window.innerHeight, width: window.innerWidth, height: 600 }
  ];

  const selector = [
    '.menu-actions',
    '.bottom-bar',
    '#retryBtn',
    '#resultMenuBtn',
    '#nextBtn',
    '#backToMenuBtn',
    '#restartBtn'
  ].join(',');

  document.querySelectorAll(selector).forEach(element => {
    const rect = element.getBoundingClientRect();
    const styles = window.getComputedStyle(element);

    if (
      styles.display === 'none' ||
      styles.visibility === 'hidden' ||
      rect.width < 8 ||
      rect.height < 8 ||
      rect.bottom < 0 ||
      rect.top > window.innerHeight
    ) {
      return;
    }

    colliders.push({
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height
    });
  });

  return colliders;
}

/**
 * @param {Rect} first
 * @param {Rect} second
 * @returns {boolean}
 */
function rectanglesOverlap(first, second) {
  return (
    first.x < second.x + second.width &&
    first.x + first.width > second.x &&
    first.y < second.y + second.height &&
    first.y + first.height > second.y
  );
}

/**
 * @param {SecretBody} body
 * @param {Rect} collider
 */
function resolveBodyAgainstStatic(body, collider) {
  if (!rectanglesOverlap(body, collider)) return;

  const overlapLeft = (body.x + body.width) - collider.x;
  const overlapRight = (collider.x + collider.width) - body.x;
  const overlapTop = (body.y + body.height) - collider.y;
  const overlapBottom = (collider.y + collider.height) - body.y;
  const minOverlapX = Math.min(overlapLeft, overlapRight);
  const minOverlapY = Math.min(overlapTop, overlapBottom);

  if (minOverlapY <= minOverlapX) {
    if ((body.y + body.height / 2) < (collider.y + collider.height / 2)) {
      body.y -= minOverlapY;
      if (body.vy > 0) body.vy *= -APP_CONFIG.secretPhysics.bounce;
      body.vx *= APP_CONFIG.secretPhysics.floorFriction;
      body.angularVelocity *= 0.95;
      if (Math.abs(body.vy) < 18) body.vy = 0;
    } else {
      body.y += minOverlapY;
      if (body.vy < 0) body.vy *= -APP_CONFIG.secretPhysics.bounce;
    }
    return;
  }

  if ((body.x + body.width / 2) < (collider.x + collider.width / 2)) {
    body.x -= minOverlapX;
  } else {
    body.x += minOverlapX;
  }

  body.vx *= -0.28;
  body.angularVelocity *= 0.96;
}

function resolveSecretBodyCollisions() {
  const bodies = state.secret.bodies;

  for (let firstIndex = 0; firstIndex < bodies.length; firstIndex += 1) {
    for (let secondIndex = firstIndex + 1; secondIndex < bodies.length; secondIndex += 1) {
      const first = bodies[firstIndex];
      const second = bodies[secondIndex];

      if (!rectanglesOverlap(first, second)) continue;

      const overlapX = Math.min(
        (first.x + first.width) - second.x,
        (second.x + second.width) - first.x
      );
      const overlapY = Math.min(
        (first.y + first.height) - second.y,
        (second.y + second.height) - first.y
      );

      if (overlapY <= overlapX) {
        const correction = overlapY / 2;

        if ((first.y + first.height / 2) < (second.y + second.height / 2)) {
          first.y -= correction;
          second.y += correction;
          if (first.vy > second.vy) first.vy = second.vy * 0.2;
        } else {
          first.y += correction;
          second.y -= correction;
          if (second.vy > first.vy) second.vy = first.vy * 0.2;
        }

        first.vx *= 0.995;
        second.vx *= 0.995;
        continue;
      }

      const correction = overlapX / 2;
      const temporaryVelocity = first.vx;

      if ((first.x + first.width / 2) < (second.x + second.width / 2)) {
        first.x -= correction;
        second.x += correction;
      } else {
        first.x += correction;
        second.x -= correction;
      }

      first.vx = second.vx * 0.45;
      second.vx = temporaryVelocity * 0.45;
    }
  }
}

/**
 * @param {SecretBody} body
 * @param {number} deltaSeconds
 * @param {Rect[]} colliders
 */
function updateSecretBody(body, deltaSeconds, colliders) {
  const physics = APP_CONFIG.secretPhysics;

  body.vy += physics.gravity * deltaSeconds;
  body.vx *= (1 - physics.airDrag);
  body.angularVelocity *= physics.spinFriction;
  body.x += body.vx * deltaSeconds;
  body.y += body.vy * deltaSeconds;
  body.rotation += body.angularVelocity * deltaSeconds;

  if (body.x < 0) {
    body.x = 0;
    body.vx *= -0.28;
  } else if (body.x + body.width > window.innerWidth) {
    body.x = window.innerWidth - body.width;
    body.vx *= -0.28;
  }

  colliders.forEach(collider => resolveBodyAgainstStatic(body, collider));

  if (Math.abs(body.vx) < 6 && Math.abs(body.vy) < 8) {
    body.sleepFrames += 1;
  } else {
    body.sleepFrames = 0;
  }

  const remainingMs = body.expiresAt - window.performance.now();
  if (remainingMs <= physics.fadeDurationMs) {
    body.element.style.opacity = String(Math.max(0, remainingMs / physics.fadeDurationMs));
  }

  body.element.style.transform = `translate3d(${body.x}px, ${body.y}px, 0) rotate(${body.rotation}deg)`;
}

/**
 * @param {number} timestamp
 */
function stepSecretPhysics(timestamp) {
  if (state.secret.bodies.length === 0) {
    state.secret.animationFrameId = 0;
    state.secret.lastTimestamp = 0;
    return;
  }

  const deltaSeconds = Math.min(
    0.033,
    ((timestamp - (state.secret.lastTimestamp || timestamp)) / 1000) || 0.016
  );

  state.secret.lastTimestamp = timestamp;
  const colliders = getSecretStaticColliders();

  state.secret.bodies.forEach(body => {
    updateSecretBody(body, deltaSeconds, colliders);
  });

  resolveSecretBodyCollisions();

  const now = window.performance.now();
  state.secret.bodies = state.secret.bodies.filter(body => {
    const isAlive = body.expiresAt > now;
    if (!isAlive) body.element.remove();
    return isAlive;
  });

  state.secret.bodies.forEach(body => {
    body.element.style.transform = `translate3d(${body.x}px, ${body.y}px, 0) rotate(${body.rotation}deg)`;
  });

  state.secret.animationFrameId = window.requestAnimationFrame(stepSecretPhysics);
}

function trimSecretBodies() {
  while (state.secret.bodies.length > APP_CONFIG.secretPhysics.maxBodies) {
    const removedBody = state.secret.bodies.shift();
    removedBody?.element.remove();
  }
}

function spawnSecretDrop() {
  state.secret.bodies.push(createSecretBody());
  trimSecretBodies();

  if (!state.secret.animationFrameId) {
    state.secret.animationFrameId = window.requestAnimationFrame(stepSecretPhysics);
  }
}

function handleGlobalKeydown(event) {
  if (state.currentScreen === 'menu') {
    const keyNumber = Number(event.key);

    if (keyNumber >= 1 && keyNumber <= quizCategories.length) {
      selectCategory(quizCategories[keyNumber - 1].id);
    }

    if (event.key === 'Enter' && state.selectedCategoryId) {
      startQuiz();
    }

    return;
  }

  if (state.currentScreen === 'result') {
    if (event.key === 'Enter') {
      resetCurrentQuiz();
    }
    return;
  }

  if (!state.answered) {
    const keyIndex = { '1': 0, '2': 1, '3': 2, '4': 3 }[event.key];
    if (keyIndex === undefined) return;

    const button = dom.choices.querySelectorAll('.choice-btn')[keyIndex];
    if (button instanceof HTMLButtonElement) {
      button.click();
    }
    return;
  }

  if (event.key === 'Enter') {
    goToNextQuestion();
  }
}

function bindEvents() {
  dom.backToMenuButton.dataset.defaultLabel = dom.backToMenuButton.textContent || '';
  dom.restartButton.dataset.defaultLabel = dom.restartButton.textContent || '';

  dom.brandTitle?.addEventListener('click', spawnSecretDrop);
  dom.startButton.addEventListener('click', startQuiz);
  dom.nextButton.addEventListener('click', goToNextQuestion);
  dom.retryButton.addEventListener('click', resetCurrentQuiz);
  dom.resultMenuButton.addEventListener('click', goToMenu);
  dom.restartButton.addEventListener('click', () => {
    if (armQuizAction(dom.restartButton, 'restart', 'Press Again')) {
      resetCurrentQuiz();
    }
  });
  dom.backToMenuButton.addEventListener('click', () => {
    if (armQuizAction(dom.backToMenuButton, 'menu', 'Press Again')) {
      goToMenu();
    }
  });
  window.addEventListener('keydown', handleGlobalKeydown);
}

function init() {
  bindEvents();
  renderCategoryMenu();
  goToMenu();
}

init();
