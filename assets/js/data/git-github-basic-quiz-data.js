window.gitGithubBasicQuestionPool = [
    {
        question: "Gitとは何をするためのツール？",
        choices: ["画像編集をするためのツール", "バージョン管理を行うためのツール", "動画配信を行うためのツール", "Webブラウザそのもの"],
        answer: 1,
        explanation: "Gitはファイルの変更履歴を記録し、ソースコードなどのバージョン管理を行うツールです。"
    },
    {
        question: "GitHubの主な役割として最も適切なのはどれ？",
        choices: ["ローカルPC専用のエディタ", "Gitリポジトリをホスティングして共有・共同開発をしやすくするサービス", "OSをインストールするためのサービス", "DBを自動生成するサービス"],
        answer: 1,
        explanation: "GitHubはGitリポジトリをオンラインで管理し、共有やレビューをしやすくするサービスです。"
    },
    {
        question: "新しくGit管理を開始するときに使うコマンドはどれ？",
        choices: ["git start", "git init", "git new", "git create"],
        answer: 1,
        explanation: "git init は現在のディレクトリをGitリポジトリとして初期化します。"
    },
    {
        question: "既存のリモートリポジトリを手元に複製するときのコマンドはどれ？",
        choices: ["git copy", "git fetch", "git clone", "git pull"],
        answer: 2,
        explanation: "git clone はリモートのリポジトリをローカルに丸ごと複製します。"
    },
    {
        question: "現在の作業ツリーやステージ状態を確認するコマンドはどれ？",
        choices: ["git status", "git log", "git branch", "git diff --cached-only"],
        answer: 0,
        explanation: "git status で変更ファイルやステージ済みファイルなどの状態を確認できます。"
    },
    {
        question: "変更したファイルをコミット対象としてステージングするコマンドはどれ？",
        choices: ["git stage", "git add", "git push", "git save"],
        answer: 1,
        explanation: "git add で変更をステージングエリアに追加します。"
    },
    {
        question: "すべての変更ファイルをまとめてステージングしたいときに使えるのはどれ？",
        choices: ["git add .", "git push .", "git commit .", "git stage all"],
        answer: 0,
        explanation: "git add . はカレントディレクトリ以下の変更をまとめてステージングできます。"
    },
    {
        question: "ステージングした変更を履歴として記録するコマンドはどれ？",
        choices: ["git record", "git log", "git commit", "git save"],
        answer: 2,
        explanation: "git commit はステージ済みの変更を履歴として保存します。"
    },
    {
        question: "コミットメッセージを付けてコミットする基本形として正しいのはどれ？",
        choices: ["git commit -m \"メッセージ\"", "git commit \"メッセージ\"", "git save -m \"メッセージ\"", "git push -m \"メッセージ\""],
        answer: 0,
        explanation: "git commit -m \"...\" でメッセージ付きのコミットを作成します。"
    },
    {
        question: "ローカルのコミットをリモートへ送信するコマンドはどれ？",
        choices: ["git upload", "git push", "git send", "git publish"],
        answer: 1,
        explanation: "git push はローカルのコミットをリモートリポジトリへ反映します。"
    },
    {
        question: "リモートの変更を取得して現在のブランチへ取り込むコマンドはどれ？",
        choices: ["git merge", "git clone", "git pull", "git branch"],
        answer: 2,
        explanation: "git pull は通常、取得(fetch)とマージ(merge)をまとめて行います。"
    },
    {
        question: "リモートの最新情報を取得するが、自動マージはしないコマンドはどれ？",
        choices: ["git fetch", "git pull", "git clone", "git sync"],
        answer: 0,
        explanation: "git fetch はリモート情報だけ取得し、作業中ブランチへは自動反映しません。"
    },
    {
        question: "コミット履歴を確認する基本コマンドはどれ？",
        choices: ["git status", "git log", "git history", "git show-all"],
        answer: 1,
        explanation: "git log でコミット履歴を確認できます。"
    },
    {
        question: "ブランチ一覧を表示するコマンドはどれ？",
        choices: ["git list-branch", "git branches", "git branch", "git show branch"],
        answer: 2,
        explanation: "git branch でローカルブランチ一覧を表示できます。"
    },
    {
        question: "新しいブランチを作成するコマンドはどれ？",
        choices: ["git branch ブランチ名", "git create branch ブランチ名", "git checkout ブランチ名 --new", "git new ブランチ名"],
        answer: 0,
        explanation: "git branch ブランチ名 で新しいブランチを作成できます。"
    },
    {
        question: "ブランチを作成してすぐにそのブランチへ切り替えるコマンドとして適切なのはどれ？",
        choices: ["git branch -m ブランチ名", "git checkout -b ブランチ名", "git merge -b ブランチ名", "git switch -d ブランチ名"],
        answer: 1,
        explanation: "git checkout -b ブランチ名 は作成と切り替えを同時に行います。"
    },
    {
        question: "既存ブランチへ切り替える新しめの推奨コマンドはどれ？",
        choices: ["git move", "git switch", "git jump", "git change"],
        answer: 1,
        explanation: "git switch はブランチ切り替え専用のコマンドとして使われます。"
    },
    {
        question: "mainブランチにfeatureブランチの変更を取り込む操作はどれ？",
        choices: ["commit", "merge", "stash", "tag"],
        answer: 1,
        explanation: "merge は別ブランチの変更を現在のブランチに統合する操作です。"
    },
    {
        question: "別ブランチの履歴を一直線に並べ直しながら取り込む操作はどれ？",
        choices: ["stash", "fetch", "rebase", "clone"],
        answer: 2,
        explanation: "rebase は履歴を付け替えて、より直線的な履歴に整える際に使います。"
    },
    {
        question: "一時的に作業内容を退避したいときに使うコマンドはどれ？",
        choices: ["git temp", "git stash", "git hold", "git backup-now"],
        answer: 1,
        explanation: "git stash はコミットせずに変更を一時退避するのに便利です。"
    },
    {
        question: "退避した変更の一覧を確認するコマンドはどれ？",
        choices: ["git stash log", "git stash list", "git list stash", "git stash status"],
        answer: 1,
        explanation: "git stash list で保存済みのstash一覧を確認できます。"
    },
    {
        question: "直前にstashした内容を作業ツリーへ戻す基本コマンドはどれ？",
        choices: ["git stash pop", "git stash back", "git stash return", "git pop stash"],
        answer: 0,
        explanation: "git stash pop は退避した変更を戻し、通常はstash一覧からも削除します。"
    },
    {
        question: "特定のコミットに名前付きの目印を付ける機能はどれ？",
        choices: ["branch", "stash", "tag", "fork"],
        answer: 2,
        explanation: "tag はリリース版など特定コミットへ名前を付けるのに使います。"
    },
    {
        question: "リモートの一覧を確認するコマンドとして適切なのはどれ？",
        choices: ["git remote -v", "git remotes", "git show-remote", "git config remote"],
        answer: 0,
        explanation: "git remote -v でリモート名とURLを確認できます。"
    },
    {
        question: "origin はGitで一般的に何を指す？",
        choices: ["最初のコミット", "標準的なリモートリポジトリ名", "現在のブランチ名", "GitHubの管理者権限"],
        answer: 1,
        explanation: "origin は clone 時などに設定される代表的なリモート名です。"
    },
    {
        question: "upstream はFork運用で一般的に何を指す？",
        choices: ["自分のFork元となった本家リポジトリ", "現在のローカルブランチ", "コミットメッセージのテンプレート", "削除予定ブランチ"],
        answer: 0,
        explanation: "Forkした場合、本家リポジトリを upstream として登録することが多いです。"
    },
    {
        question: "リモートを追加するコマンドはどれ？",
        choices: ["git remote add 名前 URL", "git add remote 名前 URL", "git remote create 名前 URL", "git connect 名前 URL"],
        answer: 0,
        explanation: "git remote add origin URL のようにしてリモートを追加します。"
    },
    {
        question: ".gitignore の主な役割はどれ？",
        choices: ["コミット履歴を暗号化する", "Gitで追跡しないファイルを指定する", "READMEを自動生成する", "リモートURLを保存する"],
        answer: 1,
        explanation: ".gitignore には、追跡対象にしたくないファイルやフォルダを書きます。"
    },
    {
        question: "node_modules を通常 .gitignore に入れる主な理由として適切なのはどれ？",
        choices: ["容量が大きく、再インストール可能だから", "JavaScriptでは必ず禁止されているから", "GitHubが自動削除するから", "コミットできない仕様だから"],
        answer: 0,
        explanation: "node_modules は容量が大きく、package.json などから再生成できるため通常は除外します。"
    },
    {
        question: "README.md によく書く内容として最も適切なのはどれ？",
        choices: ["CPUのシリアル番号", "プロジェクト概要や使い方", "OSのパスワード", "Gitの内部バイナリ"],
        answer: 1,
        explanation: "README.md には概要、セットアップ方法、使い方などを記載するのが一般的です。"
    },
    {
        question: "Pull Request の主な目的はどれ？",
        choices: ["変更内容をレビューして統合を提案すること", "ローカルPCを初期化すること", "Gitをアンインストールすること", "リポジトリを削除すること"],
        answer: 0,
        explanation: "Pull Request は変更をレビューしてもらい、ブランチを統合する提案です。"
    },
    {
        question: "Issue の主な用途として適切なのはどれ？",
        choices: ["動画編集", "タスク・バグ・議論の管理", "OSアップデート", "コンパイラの代替"],
        answer: 1,
        explanation: "Issue はバグ報告、タスク整理、仕様検討などに使われます。"
    },
    {
        question: "Fork とは何をする機能？",
        choices: ["他人のリポジトリを自分のGitHubアカウントに複製する機能", "ブランチを削除する機能", "コミットを圧縮する機能", "コンフリクトを自動で無効化する機能"],
        answer: 0,
        explanation: "Fork は他人のリポジトリを自分の管理下に複製して作業できるGitHubの機能です。"
    },
    {
        question: "コンフリクトが起きるのは主にどんなとき？",
        choices: ["同じ箇所を別々に変更して統合しようとしたとき", "READMEを作成したとき", "画像を追加したとき", "Issueを閉じたとき"],
        answer: 0,
        explanation: "同じ部分に異なる変更があると、Gitが自動で決められずコンフリクトになります。"
    },
    {
        question: "コンフリクト解消後に通常必要になる作業はどれ？",
        choices: ["Gitを再インストールする", "修正内容をステージングしてコミットする", "必ず全ブランチを削除する", "Issueを10個作る"],
        answer: 1,
        explanation: "コンフリクト解消後は内容を確認し、git add してコミットします。"
    },
    {
        question: "現在のブランチ名を確認するのに役立つコマンドはどれ？",
        choices: ["git status", "git remote -v", "git tag", "git stash list"],
        answer: 0,
        explanation: "git status の出力には現在のブランチ名が表示されます。"
    },
    {
        question: "変更内容の差分を確認する基本コマンドはどれ？",
        choices: ["git diff", "git branch", "git push", "git remote"],
        answer: 0,
        explanation: "git diff で未ステージの変更差分を確認できます。"
    },
    {
        question: "ステージ済み変更の差分を確認するコマンドはどれ？",
        choices: ["git diff --cached", "git diff origin", "git diff --remote", "git status --cached"],
        answer: 0,
        explanation: "git diff --cached でステージ済み変更の差分を見られます。"
    },
    {
        question: "コミットを取り消すのではなく、打ち消す新しいコミットを作るコマンドはどれ？",
        choices: ["git reset", "git revert", "git remove", "git cancel"],
        answer: 1,
        explanation: "git revert は履歴を壊さずに変更を打ち消す新しいコミットを作ります。"
    },
    {
        question: "履歴を巻き戻す操作として使われるコマンドはどれ？",
        choices: ["git reset", "git fork", "git issue", "git stash list"],
        answer: 0,
        explanation: "git reset はHEADやステージ状態を巻き戻すときに使います。"
    },
    {
        question: "git reset --soft の特徴として正しいものはどれ？",
        choices: ["変更内容も消える", "コミットだけ戻し、変更はステージ済みのまま残る", "リモートも自動で書き換わる", "stashがすべて削除される"],
        answer: 1,
        explanation: "git reset --soft はコミットだけを戻し、変更はステージ済みの状態で保持します。"
    },
    {
        question: "git reset --hard の説明として正しいものはどれ？",
        choices: ["作業ツリーとステージも含めて指定状態へ強制的に戻す", "タグだけを削除する", "Pull Requestを閉じる", "rebaseを中断するだけ"],
        answer: 0,
        explanation: "git reset --hard は変更が失われる可能性があるため注意が必要です。"
    },
    {
        question: "ファイルの変更を破棄して最後のコミット状態に戻したいとき、新しめのコマンドとして適切なのはどれ？",
        choices: ["git restore ファイル名", "git pull ファイル名", "git stash drop ファイル名", "git remote remove ファイル名"],
        answer: 0,
        explanation: "git restore は作業ツリーの変更を戻す用途で使われます。"
    },
    {
        question: "ステージングを取り消したいときに使えるコマンドはどれ？",
        choices: ["git restore --staged ファイル名", "git push --staged ファイル名", "git clone --staged ファイル名", "git issue --staged ファイル名"],
        answer: 0,
        explanation: "git restore --staged でステージングだけを取り消せます。"
    },
    {
        question: "現在のHEADが指す最新コミットを短く確認するのに便利なコマンドはどれ？",
        choices: ["git log --oneline", "git remote -v", "git init --simple", "git push --short"],
        answer: 0,
        explanation: "git log --oneline は履歴を1行ずつ簡潔に表示できます。"
    },
    {
        question: "GitHub上でコードレビュー時によく行うことはどれ？",
        choices: ["差分にコメントを付ける", "PCの電源設定を変える", "必ずリポジトリ名を変更する", "OS言語を英語に変える"],
        answer: 0,
        explanation: "Pull Request の差分に対してレビューコメントを付けるのが一般的です。"
    },
    {
        question: "default branch としてよく使われる名前はどれ？",
        choices: ["default", "root", "main", "base"],
        answer: 2,
        explanation: "近年は main がデフォルトブランチ名として広く使われています。"
    },
    {
        question: "feature/login のようなブランチ名は一般に何を表すことが多い？",
        choices: ["本番障害", "新機能開発用ブランチ", "削除専用ブランチ", "Git内部専用ブランチ"],
        answer: 1,
        explanation: "feature/〜 は新機能開発用としてよく使われる命名です。"
    },
    {
        question: "hotfix/〜 のようなブランチ名が表すこととして一般的なのはどれ？",
        choices: ["緊急修正", "画像最適化専用", "ドキュメント翻訳専用", "必ずタグ作成前の状態"],
        answer: 0,
        explanation: "hotfix は本番不具合などの緊急修正で使われることが多いです。"
    },
    {
        question: "git branch -d の意味として正しいものはどれ？",
        choices: ["ブランチを安全に削除する", "ブランチを複製する", "リモートを追加する", "差分を表示する"],
        answer: 0,
        explanation: "git branch -d は通常、マージ済みブランチを削除するときに使います。"
    },
    {
        question: "リモートブランチを削除するコマンドとして一般的なのはどれ？",
        choices: ["git push origin --delete ブランチ名", "git remote delete ブランチ名", "git branch -D origin/ブランチ名", "git remove remote ブランチ名"],
        answer: 0,
        explanation: "git push origin --delete ブランチ名 でリモートブランチを削除できます。"
    },
    {
        question: "git branch -m の用途として正しいものはどれ？",
        choices: ["ブランチ名を変更する", "ブランチをマージする", "ブランチをミラーコピーする", "mainへ移動する"],
        answer: 0,
        explanation: "git branch -m でブランチ名を変更できます。"
    },
    {
        question: "コミットに含めるべきでないものとして最も適切なのはどれ？",
        choices: ["必要なソースコード", "APIキーやパスワードなどの秘密情報", "READMEの更新", "バグ修正内容"],
        answer: 1,
        explanation: "秘密情報は漏洩リスクがあるため、コミットしてはいけません。"
    },
    {
        question: "GitHubで秘密情報の誤コミットを防ぐ観点で有効なのはどれ？",
        choices: [".gitignore の活用や Secrets 管理", "mainブランチ名を変える", "Issueを増やす", "タグを毎日作る"],
        answer: 0,
        explanation: "秘密情報は .gitignore や環境変数、Secrets管理などで保護するのが重要です。"
    },
    {
        question: "git pull が内部的に行うこととして一般的に正しいのはどれ？",
        choices: ["fetch と merge", "clone と reset", "add と commit", "tag と push"],
        answer: 0,
        explanation: "git pull は通常、リモート取得(fetch)と取り込み(merge)を連続して行います。"
    },
    {
        question: "git fetch を使う利点として適切なのはどれ？",
        choices: ["自動マージされないので状況確認しやすい", "必ずコンフリクトがなくなる", "コミットメッセージが不要になる", "Push権限が不要になる"],
        answer: 0,
        explanation: "fetch はまず情報だけ取得するので、安全に確認してから統合できます。"
    },
    {
        question: "git merge を実行する位置として正しい考え方はどれ？",
        choices: ["取り込み先のブランチ上で実行する", "取り込み元のブランチ上でのみ実行する", "どこでも結果は同じ", "必ず detached HEAD で実行する"],
        answer: 0,
        explanation: "merge は現在いるブランチに、指定した別ブランチの変更を取り込みます。"
    },
    {
        question: "main に feature を取り込みたい場合、通常まず切り替えるべきブランチはどれ？",
        choices: ["feature", "main", "stash", "origin"],
        answer: 1,
        explanation: "main に取り込みたいなら、まず main に移動してから merge します。"
    },
    {
        question: "Pull Request を作る前に行うとよいこととして適切なのはどれ？",
        choices: ["差分や動作確認をして不要変更を含めない", "必ず全ファイルを作り直す", "履歴を1件に固定する", "Issueを全部閉じる"],
        answer: 0,
        explanation: "PR前には差分確認や動作確認をして、レビューしやすい状態に整えるのが大切です。"
    },
    {
        question: "git log --oneline --graph の用途として適切なのはどれ？",
        choices: ["履歴の分岐構造を見やすく確認する", "画像を圧縮する", "stashを削除する", "Issueを作成する"],
        answer: 0,
        explanation: "graph オプションを付けると分岐やマージの関係を視覚的に確認しやすくなります。"
    },
    {
        question: "HEAD はGitで何を表す？",
        choices: ["現在チェックアウト中の位置を示す参照", "必ずmainブランチそのもの", "最後に削除したファイル", "リモートURL"],
        answer: 0,
        explanation: "HEAD は現在見ているコミットやブランチ先頭を指す参照です。"
    },
    {
        question: "detached HEAD 状態の説明として適切なのはどれ？",
        choices: ["ブランチではなく特定コミットを直接見ている状態", "リモート接続が切れた状態", "GitHubからログアウトした状態", "stashが空の状態"],
        answer: 0,
        explanation: "detached HEAD はブランチ先頭ではなく、特定コミットを直接参照している状態です。"
    },
    {
        question: "git checkout の役割として正しいものはどれ？",
        choices: ["ブランチやコミットへ切り替えるなどに使える", "必ずpushする", "Issueを作る", "GitHub Actionsを起動するだけ"],
        answer: 0,
        explanation: "git checkout は従来、ブランチ切り替えやファイル復元など複数用途で使われました。"
    },
    {
        question: "GitHub Actions は主に何に使われる？",
        choices: ["CI/CD や自動化処理", "手動コミットの強制", "ブランチ命名の固定", "ローカル端末の電源管理"],
        answer: 0,
        explanation: "GitHub Actions はテスト、ビルド、デプロイなどの自動化に使われます。"
    },
    {
        question: "CI の意味として適切なのはどれ？",
        choices: ["Continuous Integration", "Central Internet", "Code Injection", "Client Installation"],
        answer: 0,
        explanation: "CI は Continuous Integration の略で、継続的インテグレーションを指します。"
    },
    {
        question: "ブランチ保護ルールの目的として適切なのはどれ？",
        choices: ["重要ブランチへの直接Pushや未レビューmergeを制限する", "PCのストレージを増やす", "画像の解像度を変更する", "ローカルGitを無効化する"],
        answer: 0,
        explanation: "main など重要ブランチを安全に守るための仕組みです。"
    },
    {
        question: "Review Request を出す主な目的はどれ？",
        choices: ["変更内容を他者に確認してもらうため", "リポジトリ名を変更するため", "ローカルの履歴を削除するため", "タグを強制作成するため"],
        answer: 0,
        explanation: "レビュー依頼を出すことで、他メンバーに確認してもらえます。"
    },
    {
        question: "Squash merge の説明として適切なのはどれ？",
        choices: ["複数コミットを1つにまとめてマージする", "履歴を完全削除する", "強制pushを無効化する", "rebaseを自動中止する"],
        answer: 0,
        explanation: "Squash merge はPR内の複数コミットを1コミットにまとめて統合します。"
    },
    {
        question: "Rebase and merge の特徴として適切なのはどれ？",
        choices: ["マージコミットを作らず、履歴を直線的に保ちやすい", "必ずコンフリクトが起きない", "Issueが自動削除される", "ローカル作業が消える"],
        answer: 0,
        explanation: "Rebase and merge は履歴をすっきり見せたいときに使われます。"
    },
    {
        question: "Merge commit を作る通常のマージ方法の特徴はどれ？",
        choices: ["ブランチ統合の履歴が残りやすい", "履歴が1件に固定される", "コミットメッセージが不要になる", "リモートが消える"],
        answer: 0,
        explanation: "通常の merge は統合の経路が履歴に残りやすいです。"
    },
    {
        question: "git cherry-pick の用途として適切なのはどれ？",
        choices: ["特定のコミットだけを別ブランチへ取り込む", "リポジトリを削除する", "全履歴を圧縮する", "全タグを削除する"],
        answer: 0,
        explanation: "cherry-pick は必要なコミットだけ選んで取り込みたいときに使います。"
    },
    {
        question: "git blame の用途として適切なのはどれ？",
        choices: ["各行を最後に変更したコミットや作者を確認する", "バグを自動修正する", "レビュー依頼を自動送信する", "リモートを追加する"],
        answer: 0,
        explanation: "git blame は行単位で履歴を追いたいときに役立ちます。"
    },
    {
        question: "git show の用途として適切なのはどれ？",
        choices: ["特定コミットの詳細や差分を確認する", "ブランチを保護する", "Forkを作る", "Issueテンプレートを生成する"],
        answer: 0,
        explanation: "git show でコミット詳細やその差分を確認できます。"
    },
    {
        question: "git rm の用途として正しいのはどれ？",
        choices: ["ファイルを削除し、その削除をGitにも反映させる", "リモートブランチだけ削除する", "stashだけ削除する", "タグだけ削除する"],
        answer: 0,
        explanation: "git rm はファイル削除とその追跡情報更新をまとめて行えます。"
    },
    {
        question: "git mv の用途として正しいのはどれ？",
        choices: ["ファイル名変更や移動をGitに追跡させやすくする", "ブランチ名変更専用", "リモートURL変更専用", "Issue移動専用"],
        answer: 0,
        explanation: "git mv はファイル移動・改名を行うコマンドです。"
    },
    {
        question: "git clean の用途として適切なのはどれ？",
        choices: ["未追跡ファイルを削除する", "コミット履歴を全部消す", "PRを閉じる", "リモートを再生成する"],
        answer: 0,
        explanation: "git clean は未追跡ファイルの整理に使いますが、削除前に注意が必要です。"
    },
    {
        question: "git clean -n の意味として正しいのはどれ？",
        choices: ["実際には消さず、削除対象を確認する", "強制的に全部削除する", "新しいブランチを作る", "mainに自動マージする"],
        answer: 0,
        explanation: "git clean -n はドライランで、何が削除されるかを確認できます。"
    },
    {
        question: "git push -u origin ブランチ名 の -u の役割はどれ？",
        choices: ["upstream を設定して次回以降のpush/pullを簡単にする", "強制pushする", "ユーザー名を登録する", "コミットを圧縮する"],
        answer: 0,
        explanation: "-u は追跡対象の上流ブランチを設定するオプションです。"
    },
    {
        question: "git push --force の説明として適切なのはどれ？",
        choices: ["リモート履歴を上書きし得るので注意が必要", "安全な通常pushと完全に同じ", "stashだけを送信する", "Issueも同時送信する"],
        answer: 0,
        explanation: "force push は他人の履歴を壊す危険があるため慎重に使います。"
    },
    {
        question: "git push --force-with-lease の利点として適切なのはどれ？",
        choices: ["他人の更新を上書きしにくく、forceより安全寄り", "完全に無条件で上書きする", "pushせずにpullする", "ローカルファイルだけ消す"],
        answer: 0,
        explanation: "--force-with-lease はリモートが想定外に更新されていないかを確認してから上書きします。"
    },
    {
        question: "git config --global user.name の用途はどれ？",
        choices: ["コミット作者名を設定する", "GitHubのパスワードを表示する", "ブランチ保護を設定する", "Issueラベルを作る"],
        answer: 0,
        explanation: "user.name はコミットに記録される作者名の設定です。"
    },
    {
        question: "git config --global user.email の用途はどれ？",
        choices: ["コミット作者メールアドレスを設定する", "PR通知先を変更するだけ", "リモートURLを登録する", "READMEを生成する"],
        answer: 0,
        explanation: "user.email はコミットに紐づくメールアドレスの設定です。"
    },
    {
        question: "SSH接続でGitHubを使う利点として一般的なのはどれ？",
        choices: ["認証を鍵で行いやすい", "Gitが不要になる", "必ずGUIだけになる", "ローカル保存ができなくなる"],
        answer: 0,
        explanation: "SSHキーを使うと、認証を安全かつ便利に行いやすくなります。"
    },
    {
        question: "HTTPSで clone するURLの特徴として適切なのはどれ？",
        choices: ["WebのURL形式で扱いやすい", "必ず匿名でpushできる", "SSHキーが必須", "ローカル専用URLになる"],
        answer: 0,
        explanation: "HTTPS形式は扱いやすく、多くの環境で使われます。"
    },
    {
        question: "Personal Access Token が使われる主な場面はどれ？",
        choices: ["HTTPS経由の認証など", "README自動生成のみ", "ブランチ名変更のみ", "stash一覧表示のみ"],
        answer: 0,
        explanation: "GitHubではパスワードの代わりにトークン認証が使われることがあります。"
    },
    {
        question: "Draft Pull Request の意味として適切なのはどれ？",
        choices: ["まだレビュー準備が完全ではないPR", "自動でmerge済みのPR", "削除予定のPR", "リモート未接続のPR"],
        answer: 0,
        explanation: "Draft PR は作業途中で、まだ本格レビュー前であることを示します。"
    },
    {
        question: "Assignees の用途として適切なのはどれ？",
        choices: ["IssueやPRの担当者を割り当てる", "ブランチ名を暗号化する", "リポジトリ容量を増やす", "Git本体を更新する"],
        answer: 0,
        explanation: "Assignees は担当者管理に使われます。"
    },
    {
        question: "Labels の用途として適切なのはどれ？",
        choices: ["IssueやPRを分類・整理する", "リモートURLを保存する", "コミットを削除する", "SSHキーを生成する"],
        answer: 0,
        explanation: "Labels は bug, enhancement などの分類に役立ちます。"
    },
    {
        question: "Milestone の主な用途はどれ？",
        choices: ["IssueやPRを期限や目標単位でまとめる", "コミット署名を作る", "ローカル履歴を消す", "stashを自動送信する"],
        answer: 0,
        explanation: "Milestone はリリースやスプリントごとの進捗管理に使われます。"
    },
    {
        question: "Projects の用途として適切なのはどれ？",
        choices: ["IssueやPRをボード形式などで管理する", "Git本体をビルドする", "push権限を削除する", "リポジトリを必ず公開にする"],
        answer: 0,
        explanation: "GitHub Projects はタスク管理や進捗可視化に使えます。"
    },
    {
        question: "Star の意味として適切なのはどれ？",
        choices: ["気になるリポジトリをブックマーク的に保存する", "必ずForkする", "自動でクローンする", "PRを強制承認する"],
        answer: 0,
        explanation: "Star はお気に入り登録や注目の意思表示として使われます。"
    },
    {
        question: "Watch の意味として適切なのはどれ？",
        choices: ["リポジトリの通知を受け取りやすくする", "自動で削除予約する", "強制pushを防ぐだけ", "ブランチ名を固定する"],
        answer: 0,
        explanation: "Watch により、そのリポジトリの通知を受け取りやすくなります。"
    },
    {
        question: "Public repository の説明として正しいのはどれ？",
        choices: ["誰でも閲覧できるリポジトリ", "自分しか見られないリポジトリ", "ローカルにしか存在しないリポジトリ", "Issueが使えないリポジトリ"],
        answer: 0,
        explanation: "Public repository は一般公開され、誰でも閲覧できます。"
    },
    {
        question: "Private repository の説明として正しいのはどれ？",
        choices: ["許可されたメンバーのみが閲覧できる", "必ず無料では使えない", "Gitを使えない", "fork不可能"],
        answer: 0,
        explanation: "Private repository はアクセス権を持つ人だけが閲覧できます。"
    },
    {
        question: "Protected branch の意味として適切なのはどれ？",
        choices: ["保護ルールが設定された重要ブランチ", "削除済みブランチ", "ローカル専用ブランチ", "stash専用ブランチ"],
        answer: 0,
        explanation: "Protected branch はレビュー必須や直接push禁止などの制約を持たせられます。"
    },
    {
        question: "Review comments と Issue comments の違いとして適切なのはどれ？",
        choices: ["Review comments はPR差分の特定行に付けやすい", "Issue comments はコード差分行に必ず付く", "両者は完全に同一", "Review comments は公開されない"],
        answer: 0,
        explanation: "レビューコメントはPRの差分に紐づけて具体的に指摘しやすいです。"
    },
    {
        question: "Code Owners の主な役割はどれ？",
        choices: ["特定パスのレビュー担当者を定義しやすくする", "自動で全Issueを閉じる", "mainを削除する", "rebaseを禁止するだけ"],
        answer: 0,
        explanation: "CODEOWNERS により、特定ファイル群の担当者を明示できます。"
    },
    {
        question: "git tag v1.0.0 の意味として正しいのはどれ？",
        choices: ["現在のコミットに v1.0.0 というタグを付ける", "v1.0.0 ブランチへ移動する", "v1.0.0 というIssueを作る", "READMEをv1.0.0に戻す"],
        answer: 0,
        explanation: "git tag 名前 で現在コミットにタグを作成できます。"
    },
    {
        question: "タグをリモートへ送るコマンドとして適切なのはどれ？",
        choices: ["git push origin タグ名", "git send tag タグ名", "git remote tag タグ名", "git publish tag タグ名"],
        answer: 0,
        explanation: "個別タグなら git push origin タグ名 で送信できます。"
    },
    {
        question: "すべてのタグをリモートへ送るコマンドはどれ？",
        choices: ["git push --tags", "git tag --all", "git push origin all-tags", "git remote push-tags"],
        answer: 0,
        explanation: "git push --tags でローカルのタグをまとめて送れます。"
    },
    {
        question: "git tag -d v1.0.0 の意味として正しいのはどれ？",
        choices: ["ローカルタグ v1.0.0 を削除する", "リモートタグだけ削除する", "v1.0.0 ブランチを削除する", "v1.0.0 のIssueを閉じる"],
        answer: 0,
        explanation: "tag -d はローカル側のタグ削除です。"
    },
    {
        question: "コミットメッセージとして望ましいものはどれ？",
        choices: ["変更内容が分かる具体的なメッセージ", "aaa", "あとで直す", "123"],
        answer: 0,
        explanation: "後から履歴を追いやすいよう、変更内容が伝わるメッセージが望ましいです。"
    },
    {
        question: "1つのコミットに含める変更として理想に近いのはどれ？",
        choices: ["関連する変更をひとまとまりにしたもの", "無関係な変更を大量に混ぜたもの", "全プロジェクトの一括整形と機能追加とバグ修正を全部同時", "毎回空コミット"],
        answer: 0,
        explanation: "コミットは意味のある単位でまとめるとレビューや履歴追跡がしやすくなります。"
    },
    {
        question: "空コミットを作るコマンドとして適切なのはどれ？",
        choices: ["git commit --allow-empty -m \"msg\"", "git commit --empty-only", "git add --empty", "git push --allow-empty"],
        answer: 0,
        explanation: "allow-empty を使うと変更なしでもコミットを作成できます。"
    },
    {
        question: "git commit --amend の用途として適切なのはどれ？",
        choices: ["直前のコミットを修正する", "最初のコミットを削除する", "全履歴を初期化する", "Issueを変更する"],
        answer: 0,
        explanation: "--amend は直前コミットのメッセージや内容を修正するときに使います。"
    },
    {
        question: "すでにpush済み履歴に対して amend や rebase をした後、必要になることがある操作はどれ？",
        choices: ["慎重な force push", "必ず clone のやり直し", "Issueの全削除", "READMEの削除"],
        answer: 0,
        explanation: "履歴を書き換えた場合、リモート反映には force 系 push が必要になることがあります。"
    },
    {
        question: "git rebase main を feature ブランチ上で実行する意味として適切なのはどれ？",
        choices: ["feature の土台を main の最新に付け替える", "main を削除する", "feature を即時公開にする", "タグを消す"],
        answer: 0,
        explanation: "feature ブランチの変更を main の最新コミットの上に積み直します。"
    },
    {
        question: "rebase 中にコンフリクトしたとき、解消後に通常使うコマンドはどれ？",
        choices: ["git rebase --continue", "git merge --continue", "git stash --continue", "git push --continue"],
        answer: 0,
        explanation: "rebase の途中なら、解消後は git rebase --continue で進めます。"
    },
    {
        question: "rebase を途中でやめたいときのコマンドはどれ？",
        choices: ["git rebase --abort", "git reset rebase", "git rebase --stop", "git abort"],
        answer: 0,
        explanation: "git rebase --abort で rebase 開始前の状態へ戻せます。"
    },
    {
        question: "merge コンフリクト解消中にマージ自体を中止したいときのコマンドはどれ？",
        choices: ["git merge --abort", "git merge --quit-now", "git abort merge", "git cancel merge"],
        answer: 0,
        explanation: "git merge --abort でマージ前の状態に戻せることがあります。"
    },
    {
        question: "git stash apply と git stash pop の違いとして正しいのはどれ？",
        choices: ["pop は適用後にstashを削除しやすいが、applyは残す", "apply は必ず削除する", "両方とも完全に同じ", "pop はリモート専用"],
        answer: 0,
        explanation: "apply は適用してもstashを残し、pop は通常削除まで行います。"
    },
    {
        question: "ローカル変更を一時退避して別ブランチへ移動したいときに役立つのはどれ？",
        choices: ["git stash", "git tag", "git blame", "git remote -v"],
        answer: 0,
        explanation: "stash を使うと、作業途中の変更をいったん退避してブランチ移動しやすくなります。"
    },
    {
        question: "GitHubでリポジトリを新規作成したあと、ローカル既存プロジェクトを紐づける流れとして適切なのはどれ？",
        choices: ["git init → git remote add → git add → git commit → git push", "git push → git init → git clone", "git merge → git fork → git pull", "git stash → git tag → git revert"],
        answer: 0,
        explanation: "ローカルを初期化し、リモート追加・コミット・push の順で紐づけるのが基本です。"
    },
    {
        question: "GitHubのWeb画面でファイルを直接編集してコミットした場合、主にどこに履歴が残る？",
        choices: ["そのリポジトリのGit履歴", "自分のPCのメモ帳だけ", "Issue一覧だけ", "READMEだけ"],
        answer: 0,
        explanation: "Web上での編集も通常のGitコミットとして履歴に残ります。"
    },
    {
        question: "GitHubのRelease の主な用途はどれ？",
        choices: ["タグ付きの公開版情報や配布物を整理する", "Issueを自動削除する", "ローカル設定を初期化する", "ブランチを非表示にする"],
        answer: 0,
        explanation: "Release はバージョン公開や変更点共有、配布物添付などに使われます。"
    }
];
