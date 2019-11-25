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

// 11. saveName() 생성
function saveName(text) {
  // 11-1. saveName() 기능 구현
  // 대문자 변수는 복붙이 용이하기 위해 쓴다. 언제 어떻게 쓰는지 감을 어떻게 잡아야하나.
  // localStorage.setItem(key,value);
  localStorage.setItem(USER_LS, text);
}

// 9. handleSubmit() 생성. event 인자를 가짐.
function handleSubmit(event) {
  // 9-1. handleSubmit() 기능 구현
  // 이벤트가 발생해도 페이지가 새로고침 안 되도록
  event.preventDefault();
  // 9-2. 변수 생성
  // 변수에 input 창에 적어 보낸 값을 할당
  const currentValue = input.value;
  // 6B. paintGreeting (text) 실행
  paintGreeting(currentValue);
  // 12. saveName(text) 실행
  saveName(currentValue);
}

//7. askForName() 생성
function askForName() {
  // 7-1. askForName() 기능 구현
  form.classList.add(SHOWING_CN);
  // 10. handleSubmit()
  form.addEventListener("submit", handleSubmit);
}

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
    // 8. askForName() 실행
    askForName();
  } else {
    // 저장된 정보가 있을 때
    // 6A. paintGreeting 함수 실행
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
