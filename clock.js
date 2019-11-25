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
  clockTitle.innerText = `${hour}:${minutes}:${seconds}`;
}
// 1. init 함수 생성.
function init() {
  // 4. getTime 함수 실행
  getTime();
}
// 2. init 함수 실행
init();
