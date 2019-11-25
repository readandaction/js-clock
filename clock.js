// 1-1 함수에 쓸 변수 생성.
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");
// 3. getTime 함수 생성
function getTime() {
  // 3-1. 함수에서 쓸 변수 생성
  // Date()에 관해서는 유튜블 클론 강의에서 지금은 객체로 이해할 것.
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  // 3-2. getTime()이 수행할 기능 구현.
  /* 3-2-d 미니 조건문 작성
   시계에 1:1:1로 표시 되는 것이 아닌 01:01:01로 표시 될 수 있게 조건문 넣어준다.
   `${조건 ? 블럭 : 블럭}`*/
  clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}
// 1. init 함수 생성.
function init() {
  // 4. getTime 함수 실행
  getTime();
  // 4-1 getTime 함수 보조 함수
  // setInterval 정한 시간마다 함수가 실행되게 하는 함수.
  setInterval(getTime, 1000);
}
// 2. init 함수 실행
init();
