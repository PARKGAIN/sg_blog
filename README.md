# Blog 

12/25 1차 완료했고, 페이징처리 부분과 조회수기능 부분은 아직 좀 더 진행 예정입니다
### 📒 개요
스마일게이트 데브 캠프 1인 프로젝트 blog 입니다. 
### 📗 기간
2022.12.05. ~ 2022.12.25.
### 📙 Feature
✔ 글 쓰기/ 수정 

✔ 글 삭제

✔ 댓글

✔관리자 도구

✔ UI디자인

🧷 글 목록관련하여 페이지네이션 수정중입니다

### 📔 화면
#### 홈화면

<img src="https://user-images.githubusercontent.com/84880886/209459698-40aa31d2-7626-4a23-ba97-fed346f1cb0e.png" width="900px"/>

#### 관리자도구
<img src="https://user-images.githubusercontent.com/84880886/209459708-346ad8e0-24ad-439e-941b-c86e45cf7d12.png" width="900px"/>

#### 글 작성화면
<img src="https://user-images.githubusercontent.com/84880886/209459714-20d2208d-f7bb-45cc-b15b-f15399201094.png" width="700px"/>

### 📘 Tech stack
#### front
- React   

#### back
- node.js  &nbsp; v16.18.1
- MySQL    &nbsp; v5.7


#### 개발도구
- VScode

### 📖 시스템 구조
<img src="https://user-images.githubusercontent.com/84880886/207066961-8c5a736c-e490-4788-8100-be6d103dad00.png" width="700px"/>

### 서버 포트 번호
- 리액트 : 8080
- nginx(프록시 서버) :80
- 글, 댓글 서버 : 3000
- 이미지 서버 : 4000

### ⭐ 프로젝트 중 확인받고 싶었던 부분

### ⭐ 개발 과정에서 궁금했던 부분

       
       1.  리액트 폴더구조 구성할 때 api 받아오는 부분은 따로 파일을 구성해서 한다고 하던데 그렇게 했을 경우 api 호출 컴포넌트의 데이터를 redux와 같은 상태관리라이브러리로           다른 컴포넌트에서 불러와서 사용하는 것인지 궁금합니다
          
       2. axios.get 으로 받아온 json array를 Obect.keys().map()으로 처리했는데 json array에서 배열만 빼서 map메소드로만 처리하는 방법이 궁금합니다.
      
       3.  issue#9 (링크: https://github.com/PARKGAIN/sg_blog/issues/9) 여기에서 삭제 후 getPost()를 호출해도 바로 렌더링이 안되는 이유가 궁금합니다
       
       4. 페이징처리를 서버에서 api로 받아와서 처리하고 있는데 
       
       ```javascript
       router.get("/", async (req, res) => {
  let sql = "select * from post";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    const numOfPosts = result.length;
    const numOfPages = Math.ceil(numOfPosts / postPerPage);
    let page = req.query.page ? Number(req.query.page) : 1;
    if (page > numOfPages) {
      res.redirect("/page?=" + encodeURIComponent(numOfPages));
    } else if (page < 1) {
      res.redirect("/page?=" + encodeURIComponent("1"));
    }
    const startingLimit = (page - 1) * postPerPage;
    sql = `select * from post limit ${startingLimit},${postPerPage}`;
    connection.query(sql, (error, result) => {
      if (error) throw error;
      let iterator = page - 5 < 1 ? 1 : page - 5;
      let endingLink =
        iterator + 9 < numOfPages ? iterator + 9 : page + (numOfPages - page);
      if (endingLink < page + 4) {
        iterator -= page + 4 - numOfPages;
      }
      res.send({ result, page, iterator, endingLink, numOfPages });
    });
  });
  // console.log(posts);
});
```



