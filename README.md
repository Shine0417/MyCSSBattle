# Web Programming Readme(Report)

## 組別 第34組

- 成員
    - 張翔文 資工三 B07902109
- 此次專題全部都是自己做並無找外援
- report中互評的部分因只有一人就不特別寫出來(還是有寫eval.txt)
- deploy網址: https://obscure-reaches-51945.herokuapp.com/

## 題目

- 這個作品是從頭開始做的作品，並不是其他作品的延伸
- 理念
    - 參考有趣的遊戲CSS Battle，遊戲理念在於比較玩家熟悉階層式樣式表CSS的程度
- 內容
    - 遊戲中會顯示一張圖片，玩家須使用HTML+CSS來做出和圖片很相似的網站，細節可參考 https://cssbattle.dev/ ，本次作品主要是參考這個網站的內容
- 評分
    - 第一個重要的評分點在於圖片像不像，這部分我使用 Jimp 套件來比較圖片的相似程度
    - 第二部分的評分點在於寫扣的字數，使用的字母越多分數就越低

## 服務內容

- 參考知名遊戲CSS Battle
- 使用者在輸入姓名後可以參加一場比試CSS技巧的遊戲
- 後端會傳給前端一系列的題目，並顯示這些題目目前最高得分是誰，分數多少
- 前端可以選擇要破哪一關，寫出滿意的code以後可以上傳code到後端，而後端會把這些扣轉成一張圖並回傳和題目的相似度。
- 如果玩家的分數超過最高得分，那最高得分會更新成玩家的姓名和分數

## 使用技術

- 前端
    - axios: 
        - 串接前後端
    - bootstrap和react-bootstrap: 
        - 使用其方便的CSS模板
    - html-to-image:
        - 將使用者打入的html code轉為img給react-compare-slider使用
    - react-color:
        - 顯示色彩選取panel
    - react-color-extractor:
        - 用來分析目標圖片中有那些顏色，以方便玩家設定顏色
    - react-compare-slider:
        - 用於方便玩家分辨自己的圖片和目標圖片的差異
    - react-html-parser:
        - 用於將html字串轉成React Dom以放入shadow DOM下面
    - react-prism-editor:
        - 用於創建一個漂亮的Editor
    - react-shadow-root:
        - 用於創建shadow DOM，shadow DOM裡面的CSS不會影響到外面的CSS
- 後端
    - cors: 
        - 防止觸發CORS policy
    - dotenv-defaults
        - 用於準備Default .env給server填寫
    - express
        - 接收api
    - jimp
        - 用於比較兩圖片間的相似度
    - mongoose
        - 串接db和後端
    - multer
        - 用於upload題目的圖片到後端
        - 他可以設定要接收哪一種檔案、檔案大小等條件
    - node-html-to-image
        - 用於將前端傳來的code轉為圖片，來比較相似度
    - path
        - 用於設定圖片要存在哪個資料夾
- 資料庫
    - mongoDB atlas
- 部屬
    - heroku

## 測試注意事項

- deploy連結/demo連結
- local 測試時需自行準備mongo db atlas的url

## 心得

這次實作專題很有趣，把一個服務從DB、後端到前端包起來，和分組合作各有好處，差別最大的點在於不需要跟別人溝通api，全部自己想做甚麼就改甚麼，缺點是做出來的東西跟分工來比沒那麼完整。



## Demo 影片
https://www.youtube.com/watch?v=q63oSTRfFwY
# README
## Before running
- 準備一組mongo atlas 的db url並創建一個MyCSSBattle/backend/.env並寫入
    - ex: ![](https://i.imgur.com/2dv43iv.png)
    - [重要!]如果要看到題目的圖片的話，需先使用我的db: MONGO_URL=mongodb+srv://root:0000@testcluster01.ufddt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
## How to run local (development mode)
```
# starts backend server in development mode
cd MyCSSBattle
yarn build
yarn start 

# starts frontend in development mode
cd MyCSSBattle/frontend
yarn start

# open localhost:3000
```
然後就看的到網頁了，但是由於DB中沒有題目的資料(local)，所以會沒有題目，這部分需要特別傳送一個axios POST request來init server:
```
url: http://localhost:5000/api/image/newImage
Header: "Content-Type: multipart/form-data"
body: 
key: image ,value:圖片(請傳小一點的圖片 ex: 400 x 300)
key: name  ,value:題目的名字
```
這部分屬於維護者開的後門，若要測試可以使用postman來發送請求
![](https://i.imgur.com/jKYrf4t.png)