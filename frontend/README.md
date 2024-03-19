# emocha - frontend

## File Structure Overview

```
frontend/
    ├ public/
    |   ├ navIcon/    # ナビゲーションで使用するアイコン
    |   ├ favion.ico
    |   ├ index.html
    |   ├ manifest.json
    |   └ robots.txt
    |
    ├ src/
    |   ├ components/
    |   |   ├ api/    # Python ( FastAPI )との通信
    |   |   |
    |   |   ├ main/    # 画面を構成するコンポーネントを格納するフォルダ
    |   |   |   ├ chat/    # Chatページで使用するコンポーネント
    |   |   |   |   └ parts/    # Chatページで使用するパーツ
    |   |   |   |
    |   |   |   ├ globalParts/    # 複数のページで使用されるコンポーネント
    |   |   |   |
    |   |   |   ├ slangs/    # スラングを取得するコンポーネント（バックエンドと連携予定）
    |   |   |   |
    |   |   |   └ nav/    # ナビゲーションを表示するコンポーネント
    |   |   |
    |   |   ├ providers/    # プロバイダー（グローバル値）を保存
    |   |   |
    |   |   ├ router/    # URLなどのルーター設定
    |   |   |
    |   |   └ socketio/    # socket.ioでの通信
    |   |
    |   ├ pages/    # 表示するページのレイアウト
    |   |
    |   ├ App.css    # Twemojiの大きさを定義
    |   ├ App.jsx    # Rooterを呼び出してページを表示
    |   ├ index.css    # Tailwind CSSを反映
    |   └ index.js    # Providerの呼び出し
    |   
    ├ .gitignore
    ├ package-lock.json
    ├ package.json
    └ tailwind.config.js    # Tailwind CSSの設定
```

## Sequence Diagram
### Auth ~ Home

```mermaid
sequenceDiagram

participant User
participant Frontend
participant Frontend Providers
participant Firebase Auth
participant Firebase User
participant Firebase Message
participant Firebase Slangs

Note left of User: URL: ./
User ->> Frontend: メールアドレス
Frontend -->> Firebase Auth: メールアドレス
Note over Firebase Auth: 認証処理
Firebase Auth -->> Frontend: 認証情報(ユーザID？)

opt Sign up
Frontend ->> User: Setupページ
Note left of User: URL: ./setup
User ->> Frontend: ユーザ設定（icon/id/name/snsUrl/language）
Note over Frontend: POST
Frontend -->> Firebase User: ユーザ設定（icon/id/name/snsUrl/language）
Firebase User-->> Frontend: 登録完了
Note over Frontend: setUserSettings(ユーザ設定)
Frontend ->> Frontend Providers: ユーザ設定
Note over Frontend Providers: ユーザ設定がFrontendに反映
Frontend Providers ->> Frontend: ユーザ設定を反映
Frontend ->> User: Homeページ
end

opt Login
Frontend -->> Firebase User:ユーザID？
Note over Firebase User: ユーザIDからユーザ設定を取得
Firebase User -->> Frontend: ユーザ設定（icon/id/name/snsUrl/language）
Frontend ->> Frontend Providers: ユーザ設定（icon/id/name/snsUrl/language）
Note over Frontend Providers: ユーザ設定をFrontendに反映
Frontend ->> User: Homeページ
end
Note left of User: URL: ./main/home
```
### Chat

```mermaid
sequenceDiagram

participant User
participant Frontend
participant Frontend Providers
participant Firebase Auth
participant Firebase User
participant Firebase Message
participant Firebase Slangs

Note over Frontend: GET
Firebase Message -->> Frontend: ユーザID＋メッセージの履歴
Note over Frontend: POST
Frontend -->> Firebase User: ユーザID
Firebase User -->> Frontend: ユーザ設定（icon/id/name/snsUrl/language）
Note over Frontend: メッセージ履歴のデータを構築
Note over Frontend: メッセージ履歴を表示
Frontend ->> User: メッセージ履歴を表示
Note left of User: URL: ./main/chat

Note over User: メッセージを入力
Note over User: Sendボタンをクリック
User ->> Frontend: メッセージ

Note over Frontend: POST
Frontend -->> Firebase Slangs: メッセージ
Note over Firebase Slangs: メッセージにスラングが含まれるかチェック

alt メッセージにスラングが含まれる
    Firebase Slangs -->> Frontend: スラングのリスト（ [ { shortcodes : "",meaning : "" } , ... ] ）
    Frontend ->> User: スラング一覧と注意

    alt Sendボタンをクリック
        Note over User: Sendボタンをクリック

        Frontend ->> Frontend Providers: ユーザ設定を参照
        Frontend Providers ->> Frontend: ユーザ設定（icon/id/name/snsUrl/language）

        Note over Frontend: POST
        Frontend -->> Firebase Message: ユーザ設定（icon/id/name/snsUrl/language）＋メッセージ
        Note over Firebase Message: メッセージを全員に反映
        Firebase Message -->> Frontend: メッセージを反映？？

    else Fixボタンをクリック
        Note over User: Fixボタンをクリック
        Note over Frontend: None
    end

else メッセージにスラングが含まれない
    Firebase Slangs -->> Frontend: 空配列（ [ ] ）

    Frontend ->> Frontend Providers: ユーザ設定を参照
    Frontend Providers ->> Frontend: ユーザ設定（icon/id/name/snsUrl/language）

    Note over Frontend: POST
    Frontend -->> Firebase Message: ユーザ設定（icon/id/name/snsUrl/language）＋メッセージ
    Note over Firebase Message: メッセージを全員に反映
    Firebase Message -->> Frontend: メッセージを反映？？

end
```

### Change Settings

```mermaid
sequenceDiagram

participant User
participant Frontend
participant Frontend Providers
participant Firebase Auth
participant Firebase User
participant Firebase Message
participant Firebase Slangs

Frontend ->> Frontend Providers: 現在のユーザ設定を参照
Frontend Providers ->> Frontend: 現在のユーザ設定
Frontend ->> User: 現在のユーザ設定を表示
Note left of User: URL: ./main/settings

loop 変更のプレビュー
    Note over User: 変更を入力
    User ->> Frontend: ユーザ設定の変更
    Note over Frontend: プレビューを更新
    Frontend ->> User: プレビューを表示
end

Note over User: Sendボタンをクリック
Note over Frontend: POST
Frontend -->> Firebase User: ユーザID＋新しいユーザ設定（icon/id/name/snsUrl/language）
Note over Firebase User: ユーザ設定を更新
Firebase User -->> Frontend: 更新を知らせる
Frontend ->> Frontend Providers: 新しいユーザ設定
Note over Frontend Providers: 新しいユーザ設定を反映
Frontend Providers ->> Frontend: 新しいユーザ設定を反映
Frontend ->> User: 新しいユーザ設定を表示

```