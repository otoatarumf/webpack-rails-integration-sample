# README


ビルドシステムの一例

https://github.com/otoatarumf/pfm_web/tree/assets_trivial

やっていること

* 1 assets_srcディレクトリをappディレクトリの直下に配置する。
* 2 assets_srcディレクトリ配下のJavaScript、SCSSをNode.jsでコンパイルして、assetsディレクトリ以下に放出する。(LintやCsscombなどもこの段階でかける。)
* 3 後はRailsのレールに乗せて通常どおりアセットパイプラインで処理。

## 動かし方

```
npm install
npm run build
npm run styleguide (http://localhost:1234にアクセス)
```

## 基本方針:
ライブラリーなど全体で使用されるものはまとめてバンドル化して、キャッシュさせる。
それぞれのページのJavaScriptやCSSが他のページに影響を与えないようにする。
digestやアセットパイプライン等のRailsのレールに乗せる。


### JavaScript

基本的には各ページには以下2つのJavaScriptファイルしか読み込まない
  * application.jsにはReactやjQuery、moment.jsなど全ページで共通に使うライブラリをnpmでロードする。そして、それらをJavaScriptのグローバルな名前空間に開放する。
  * 各ページ固有の.jsファイルを ex: (home#index => home/index.js)

### SCSS

JavaScriptと同じく基本的には各ページには以下2つのCSSファイルしか読み込まない
  * application.css (ライブラリに付随する.cssファイルやlayout, module, resetcssなど、アプリケーション全体で用いるもの)
  * 各ページ固有の.cssファイル ex: (home#index => home/index.css)
  * PCとSPそれぞれのスタイルガイドをscssから生成して一貫したデザインを保つようにする。 (内部的にはsc5-styleguideを使用)
  * PCとSPそれぞれのスタイルガイドをscssから生成して一貫したデザインを保つようにする。 (内部的にはsc5-styleguideを使用)


## 課題
画像はどうするか? そのままpublicに置いてしまうか? ビルドにも時間を要するし、あまり更新されないものに、ダイジェストをつける効用があるかな。。。
フロント側のテスト (Mocha, Chai, Sinonなど) は未考慮