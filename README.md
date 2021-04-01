# HTMLサイトにReactを拡張したテンプレート | Website in React
Reactをcreate-react-appを用いずに一からwebpackをつくり作成したテンプレートです。
通常のHTMLサイトにReactを組み込めればUIコンポーネントが実装しやすいという理由で作りました。
※ベースのHTMLは「[html5-boilerplate_v8.0.0](https://github.com/okamoai/static-website-boilerplate)」を利用して改良しています。

## 使い方 | How to use

### データダウンロード/環境構築

```bash
# 「react-html」でダウンロードされるので任意でフォルダ名変更
$ git clone https://github.com/dai-570415/react-html.git

# 名称変更した際はその名称にする
$ cd react-html

# パッケージインストール
$ npm i
```
index.htmlをそのままダブルクリックすると開きます。
以下が表示されたらOK

```
React in WebSite
Hello World!
Copyright
```
「React in WebSite」はheader.jsx
「Hello World!」は通常のHTML
「Copyright」はfooter.jsx

### ディレクトリ構成
- css - 通常のcssフォルダ（通常通りhtmlファイルで読み込む）
- dist - src内のjsxをコンパイルしたファイル（このファイルをhtmlのbodyタグの終端で読み込む）
- img - 通常のimgフォルダ
- index.html - htmlファイル
- js - 通常のjsフォルダ（通常通りhtmlファイルで読み込む）
- meta - favionやiconのフォルダ
- node_modules - npmパッケージ（直接いじることはありません）
- package-lock.json - npmパッケージリストと同時に生成(直接いじることはありません)
- package.json - npmパッケージリスト（直接いじることはありません）
- src - jsx（React）のフォルダ
- webpack.config.js - webpackファイル（jsxを追加したり、モジュールを追加するのに使用）

#### index.html編集

```html
<body>
    <div class="container">
        <!-- header.jsx を読み込み -->
        <header id="header"></header>
        <!-- 通常のHTML -->
        <main>
            <div class="smoothScroll">Hello World!</div>
        </main>
        <!-- footer.jsx を読み込み -->
        <footer id="footer"></footer>
    </div>

    <!-- ローカルサーバーで動かす場合 -->
    <!-- <script src="header.bundle.js" charset="utf-8"></script>
    <script src="footer.bundle.js" charset="utf-8"></script> -->

    <!-- 実際にWebサイトに埋め込む時はそのままpathを指定 -->
    <script src="./dist/header.bundle.js" charset="utf-8"></script>
    <script src="./dist/footer.bundle.js" charset="utf-8"></script>
    
    <!-- 通常のJS -->
    <script src="./js/main.js"></script>
</body>
```

#### jsxファイル作成
srcフォルダに格納
- header.jsx
シンプルな基本形

```jsx
import React from 'react';
import { render } from 'react-dom';
// srcフォルダ内のcssを読み込む(webpackにてsass組み込み済)
import headerStyle from './css/header.scss';

const Header = () => {
    return (
        <>
            <h1 className={headerStyle.title}>React in WebSite</h1>
        </>
    );
}
// htmlの「id="header"」にrender(表示)させる
// <Header/>は上記関数名
render(<Header/>, document.getElementById('header'));
```

- footer.jsx
header.jsx同様

- css(jsxで読み込むcss)

#### webpack.config.js
※webpackの詳しい内容は割愛させていただきます

```js
// 省略...
module.exports = {
  // mode: 'development', // 開発モード
  mode: "production", // 本番モード

    entry: {
        header: src + '/header.jsx',
        footer: src + '/footer.jsx',
        // jsxを追加する場合はこちらに書く
    },

    output: {
        path: dist,
        // [name] => entryで設定した名称が自動で入ってファイルが生成される
        filename: '[name].bundle.js' // [name]はいじらないように
    },
  // 省略...
}
```

##### 【jsx追加手順】
1. webpack.config.jsの`entry: { <keyname>: <foldername> + '<filename>.jsx' , }`部分に追加する
2. srcフォルダ内に基本セットと同様に名称を変更して追加
3. ターミナルを開いて下記コマンドでコンパイル

```bash
# コンパイルする
$ ./node_modules/.bin/webpack

# ローカルサーバーを起動しながらコンパイル（保存するたびにコンパイルされる）
$ ./node_modules/.bin/webpack-dev-server
```

4. htmlでdistフォルダにコンパイルされたファイルを読み込む