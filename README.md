# README

## 実行方法


### 環境

* Rails 5.0.1
* Ruby 2.3.1p112
* NodeJS v6.9.5
* Mac OS X 10.11.6

**Gem群をインストール**

```
bundle install --path vendor/bundle

```

**Node.jsモジュール群をインストール**

```
npm install // or yarn install

```

**assets_src以下のファイルをトランスパイルして、assets以下に配置**

```
npm run prod // or yarn run prod
```


**アセットプリコンパイルを実行**

```
bundle exec rails assets:precompile

```

**起動 (development)**


```
bundle exec rails s
```

**起動 (production)**

**※便宜上、SECRET_KEY_BASEを起動時に指定しています。実際にはこのように指定せずに環境変数として設定・ロードしてください。**

```
SECRET_KEY_BASE=donotusemeinproduction RAILS_SERVE_STATIC_FILES=true rails s -eproduction
```