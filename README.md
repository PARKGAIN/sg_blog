# Blog 

12/25 1차 완료했고, 조회수기능과 RSS기능 부분은 아직 좀 더 진행 예정입니다
### 📒 개요
스마일게이트 데브 캠프 1인 프로젝트 blog 입니다. 
### 📗 기간
2022.12.05. ~ 2022.12.25.
### 📙 Feature
✔ 글 쓰기/ 수정 

✔ 글 목록/삭제

✔ 댓글

✔관리자 도구

✔ UI디자인



### 📔 화면
#### 홈화면

<img src="https://user-images.githubusercontent.com/84880886/209471001-bae454fe-8c0f-455a-9692-2947fe9d7a77.png" width="900px"/>

#### 관리자도구
<img src="https://user-images.githubusercontent.com/84880886/209459708-346ad8e0-24ad-439e-941b-c86e45cf7d12.png" width="900px"/>

#### 글 작성화면
<img src="https://user-images.githubusercontent.com/84880886/209459714-20d2208d-f7bb-45cc-b15b-f15399201094.png" width="700px"/>

#### 글 보여주는 화면
<img src="https://user-images.githubusercontent.com/84880886/209460705-d55ad6a0-fd0a-42a9-9f94-d41f4e205dde.png" width="700px"/>


### 📘 Tech stack
#### front
- React   

#### back
- node.js  &nbsp; v16.18.1
- MySQL    &nbsp; v5.7


#### 개발도구
- VScode

### 📖 시스템 구조 (개발 전 설계할 때 이렇게 설계한 후 개발하였습니다)
<img src="https://user-images.githubusercontent.com/84880886/207066961-8c5a736c-e490-4788-8100-be6d103dad00.png" width="700px"/>

### 서버 포트 번호
- 리액트 : 8080
- nginx(프록시 서버) :80
- 글, 댓글 서버 : 3000
- 이미지 서버 : 4000

### ⭐ 프로젝트 중 확인받고 싶었던 부분
#### 페이징처리부분!

```javascript
const connection = require("../dbConfig");
const router = require("express").Router();

const postPerPage = 6;
router.get("/:page", async (req, res) => {
  const received = req.params;
  const page = parseInt(received.page);
  const startNumber = (page - 1) * postPerPage;
  const sql = `select * from post limit ${startNumber}, 6`;
  connection.query(sql, (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});

module.exports = router;
```

### ⭐ 개발 과정에서 궁금했던 부분

       
       1.  리액트 폴더구조 구성할 때 api 받아오는 부분은 따로 파일을 구성해서 한다고 하던데 그렇게 했을 경우 api 호출 컴포넌트의 데이터를 redux와 같은 상태관리라이브러리로 다른 컴포넌트에서 불러와서 사용하는 것인지 궁금합니다
          
       2. axios.get 으로 받아온 json array를 Obect.keys().map()으로 처리했는데 json array에서 배열만 빼서 map메소드로만 처리하는 방법이 궁금합니다.
      
       3.  issue#9 (링크: https://github.com/PARKGAIN/sg_blog/issues/9) 여기에서 삭제 후 getPost()를 호출해도 바로 렌더링이 안되는 이유가 궁금합니다
       
       
       
      



