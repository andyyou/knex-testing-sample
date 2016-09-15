# Knex 設定與使用

1. 設定專案
2. 安裝全域/專案 `knex`
3. 使用 psql 建立 database
4. knex init 組織設定檔 > 連線字串, `migrations` 與 `seeds` 目錄
5. 新增 migrations `knex migrate:make tv_shows`
6. 設定 migrations
7. 新增 `db/knex.js` > 匯入環境設定 test/development/production
8. 執行 migrate `knex migrate:latest --env development`
9. 產生 seed `knex seed:make shows_seed --env development`
10. 加入 seed 資料
11. 執行 seed `knex seed:run --env development`

# Mocha/Chai 設定

1. 安裝全域 Mocha
2. 安裝專案 mocha/chai/chai-http
3. 新增 `test` 目錄和 `/test/routes.spec.js`

# 指令

```
$ express [project_name]
$ cd [project_name]
$ npm i
$ npm i pg knex -S
$ npm i knex -g

$ psql -h [localhost] -U [username] -W [required_password] -d [database]
$ psql --host [localhost] --username [username] -w [no_password] --dbname [database]
$ select current_user;
$ \q
$ \?
$ \help
$ alert user [username] with password 'new_password';
$ \l # 列出所有資料庫，含 owner 資料
$ \d # 列出所有資料表
$ \d tablename
$ \d+ tablename
$ select * from pg_user;
$ \du # 列出角色權限
$ \dn+ # 列出該 db schema 和角色權限
$ \dp # 列出 Table/View 權限

# 建立資料庫
$ CREATE DATABASE mocha_chai_tv_shows;
$ CREATE DATABASE mocha_chai_tv_shows_test;

$ knex init
# 設定 knexfile.js
$ knex migrate:make [table_name`s`]
# 設定 db/migrations，設定 table schema
# 設定 db/knex.js 針對環境初始化 knex instance
$ knex migrate:latest --env development
# migrate:make/migrate:latest/migrate:rollback/migrate:currentVerstion
$ knex seed:make [table_name_seed] --env development
# 撰寫資料
$ knex seed:run --env development
# seed:make/seed:run
```

# 參考

* [Test driven development with node](http://mherman.org/blog/2016/04/28/test-driven-development-with-node/#.V9it87WAjdR)
