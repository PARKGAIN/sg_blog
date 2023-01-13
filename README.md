# Blog 

### 📒 개요
스마일게이트 데브 캠프 1인 프로젝트 blog 입니다. 
### 📗 기간
#### 구현 : 2022.12.05. ~ 2022.12.25.
#### refactor : 2022.12.26. ~
### 📙 Feature
✔ 글 쓰기/ 수정 

✔ 글 목록/삭제

✔ 댓글 (대댓글은 추후 구현 예정)

✔관리자 도구

✔ UI디자인

✔ 다크모드


### 📔 화면
#### 홈화면

<img src="https://user-images.githubusercontent.com/84880886/209471001-bae454fe-8c0f-455a-9692-2947fe9d7a77.png" width="900px"/>

#### 관리자도구
<img src="https://user-images.githubusercontent.com/84880886/209459708-346ad8e0-24ad-439e-941b-c86e45cf7d12.png" width="900px"/>

#### 글 작성화면
<img src="https://user-images.githubusercontent.com/84880886/209459714-20d2208d-f7bb-45cc-b15b-f15399201094.png" width="800px"/>

#### 글 보여주는 화면
<img src="https://user-images.githubusercontent.com/84880886/209460705-d55ad6a0-fd0a-42a9-9f94-d41f4e205dde.png" width="800px"/>

<br/>

### 📘 Tech stack
#### front
- React   &nbsp;v.18

#### back
- node.js  &nbsp; v16.18.1
- MySQL    &nbsp; v5.7


#### 개발도구
- VScode

### 💻 실행방법


      post-server , image-server 디렉토리 명령어 npm start
      client 디렉토리 명령어 npm run start:dev
      제 컴퓨터에서 Nginx 설정을 해서 실행하실 때 client 폴더에서 80번 포트로의 요청을 3000번 포트로 변경해주셔야 합니다.

### ⚙ 서버 포트 번호
- 리액트 : 8080
- nginx(프록시 서버) :80
- 글, 댓글 서버 : 3000
- 이미지 서버 : 4000


### ⭐ 개발 과정에서 궁금했던 부분

       
       1.  현재 컴포넌트마다 각각 api 호출해서 하고 있는데 api 호출하는 부분을 recoil이나 redux로 전역상태로 따로 빼서 관리하는 것이 좋은지 궁금합니다.(코드리뷰를 통해 따로 커스텀 훅으로 변경함)
          
       2. axios.get 으로 받아온 json array를 Obect.keys().map()으로 처리했는데 json array에서 배열만 빼서 map메소드로만 처리하는 방법이 궁금합니다. (답변 해주셔서 해결 완료)
      
     
       
       
       
      



