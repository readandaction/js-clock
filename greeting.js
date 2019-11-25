// 1-1
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  // 5-1 변수 생성
  greeting = document.querySelector(".js-greeting");

// 3-2 로컬스토리지 변수 생성
// 로컬스토리지에 저장된 유저
// 대문자 변수는 중복되는 정보를 복/붙하기 귀찮아서 만듬.
const USER_LS = "currentUser",
  // 클래스 이름 showing.
  SHOWING_CN = "showing";

// 5. paintGreeting 함수 생성. text 인자를 가짐
function paintGreeting(text) {
  // 5-1. paintGreeting 함수 기능 구현
  // 5-1-3 form에 showing 클래스를 제거하여 안 보이게 함
  form.classList.remove(SHOWING_CN);
  // 5-1-2. greeting에 showing 클래스를 추가 하여 보이게 함
  greeting.classList.add(SHOWING_CN);
  // 5-1-1. paintGreeting() 괄호 안에 값이 ${text}에 들어감
  greeting.innerText = `Hello ${text}`;
}
// 3. loadName 함수 생성
// 로컬 스토리지에서 유저 정보를 불러오는 기능
function loadName() {
  // 3-1. loadName 함수 내 변수 생성
  const currentUser = localStorage.getItem(USER_LS);
  // 3-3. loadName 함수 기능 구현
  if (currentUser === null) {
    // 저장된 정보가 없을 때
  } else {
    // 저장된 정보가 있을 때
    // 6. paintGreeting 함수 실행
    paintGreeting(currentUser);
  }
}

// 1
function init() {
  // 4. loadName 함수 실행
  loadName();
}
// 2
init();
