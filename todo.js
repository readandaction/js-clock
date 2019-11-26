// 1-3.
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");
// 3-1.
const TODOS_LS = "toDos";
// 7-6. todo를 담을 array를 가진 변수 생성.
let toDos = [];

// 11. delToDo() 생성
function delToDo(event) {
  // 11-1. 원하는 li를 지우기 위해 delBtn의 부모값을 알아야 함
  // console.dir()을 이용해 확인
  // parentNode를 찾을 수 있다.
  console.dir(event.target);
  console.log(event.target.parentNode);
  // 11-2. 변수 생성
  // 내가 클릭한 li
  const btn = event.target;
  const li = btn.parentNode;
  // 11-3. toDoList.removeChild()로 내가 클릭한 li 삭제
  toDoList.removeChild(li);
  // 11-4. toDos.filter()는 forEach()처럼 각 element에 실행
  // filterFn(toDo) 나온 값으로 toDos의 element를 필터링.
  const cleanToDos = toDos.filter(function filterFn(toDo) {
    // 작동이 안돼 확인을 해보니.
    // toDo.id는 숫자 li.id는 스트링
    console.log(toDo.id, li.id);
    // parseInt로 스트링을 숫자로 바꿔줌
    return toDo.id !== parseInt(li.id);
  });
  // toDos와 cleanToDos가 다른 것을 알 수 있다
  console.log(cleanToDos);
  // 11-5. toDos에 cleanToDos를 넣어줌
  // toDos를 처음에 const로 선언했으니 let로 바꿔
  // 값을 바꿀 수 있게 바꾼다.
  toDos = cleanToDos;
  // 10B.
  saveToDos();
}
// 9. saveToDos()
function saveToDos() {
  // 9.1 TODOS_LS 값(key)에 대한 value로 7-6변수 toDos를 넣고 LS에 저장.
  // 9.2 JSON.stringify
  // object를 string형태로 만들어준다.
  // 이유는 LS에서는 모든 데이터를 string으로 저장. JS의 object 데이터를 저장하지 못한다.
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
// 7.
function paintToDo(text) {
  // 7-1. li를 생성하는 변수 생성.!!???
  const li = document.createElement("li");
  // 7-2. btn이 생성되는 변수 생성??!?@
  const delBtn = document.createElement("button");
  delBtn.innerText = "🥡";
  // 12. delToDo() 실행
  delBtn.addEventListener("click", delToDo);
  // 7-3. span을 생성하는 변수 생성?!@?!
  const span = document.createElement("span");
  // 7-9. toDoObj에 id: toDos.length + 1 는 보기 안 좋으니 변수로 만들어 넣음
  const newId = toDos.length + 1;
  // 7-10. li에도 id를 주어 삭제하고 싶은 id를 삭제할 수 있게 만든다.
  li.id = newId;
  // 7-4. span에 내용을 text인자에게 받는다.
  span.innerText = text;
  // 7-5. 만든 요소들을 붙여야 html에 만들어진다.
  // 위에 만든 거 자체로 생성된 것이 아닌 내용만 가지고 있고
  // 내용만 가졌던 것을 html에 넣는 함수를 정의해주어야
  // 보이게 된다.
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
  // 7-7. toDoObj 생성
  const toDoObj = {
    text: text,
    id: newId
  };
  // 7-8. toDoObj를 array인 toDos에 넣음
  toDos.push(toDoObj);
  //10A. 실행
  // 바로 위 push 하기 전에 실행하면(push 위에 코딩하면 저장할 값이 없어서 저장 안됨.)
  saveToDos();
}

// 5.
function handleSubmit(event) {
  // 5.1
  event.preventDefault();
  // 5.2
  const currentValue = toDoInput.value;
  // 8.
  paintToDo(currentValue);
  // 5-3 8번 다음
  toDoInput.value = "";
}
// 3.
function loadToDo() {
  // 3.2
  // toDos array와 변수가 중복되니 변경 loadedToDos
  const loadedToDos = localStorage.getItem(TODOS_LS);
  // 3.3
  if (loadedToDos !== null) {
    // JSON.parse
    // string을 object로 바꿈
    // 엄밀히 말하면 JSON은 js데이타를 string으로, string을 js데이터로 바꿔준다.
    console.log(loadedToDos);
    const parsedToDos = JSON.parse(loadedToDos);
    console.log(parsedToDos);
    // 11 forEach()는 array 안에 내용 하나하나에 함수 실행
    // todo인자는 array안에 내용 하나 하나를 가킨다.
    parsedToDos.forEach(function(toDo) {
      console.log(toDo.text);
      paintToDo(toDo.text);
    });
  }
}
// 1.
function init() {
  // 4.
  loadToDo();
  // 6.
  toDoForm.addEventListener("submit", handleSubmit);
}
// 2.
init();
