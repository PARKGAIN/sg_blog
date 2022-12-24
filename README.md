# Blog 

### 📒 개요
스마일게이트 데브 캠프 1인 프로젝트 blog 입니다. 기능 구현에 초점을 맞추었습니다. 
### 📗 기간
2022.12.05. ~ 2022.12.25.
### 📙 Requirements
- 글 쓰기/ 수정
- 글 목록/삭제
- 댓글
- 관리자 도구
- 좋아요
- RSS

### 📘 Tech stack
#### front
- React   

#### back
- node.js  &nbsp; v16.18.1
- MySQL    &nbsp; v5.7


#### 개발도구
- VScode

### 📔 시스템 구조
![blog drawio](https://user-images.githubusercontent.com/84880886/207066961-8c5a736c-e490-4788-8100-be6d103dad00.png)

### 서버 포트 번호
- 리액트 : 8080
- nginx(프록시 서버) :80
- 글, 댓글 서버 : 3000
- 이미지 서버 : 4000

### ⭐ 프로젝트 중 확인받고 싶었던 부분
### ⭐ 개발 과정에서 궁금했던 부분

       1 axios.get 으로 받아온 json array를 Obect.keys().map()으로 처리했는데 json array에서 배열만 빼서 map메소드로만 처리하는 방법이 궁금합니다.
       
       2  데이터를 api폴더 안에 apiClient 파일 따로 만들어서 axios.get해서 데이터 불러온거 저장하고 필요한 컴포넌트에서 apiClient안의 데이터를 가져와서 쓰고 싶은 경우
          리덕스를 사용해서 상태관리를 해야하는지 궁금합니다.
      
       

### 
<img src="https://user-images.githubusercontent.com/84880886/205682962-058295d1-02b6-4b13-be07-3ff20414c47e.png" width="500px"/>

