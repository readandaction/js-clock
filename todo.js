// 1-3.
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");
// 3-1.
const TODOS_LS = "todos";
// 7.
function paintToDo(text) {
  // 7-1. li를 생성하는 변수 생성.!!???
  const li = document.createElement("li");
  // 7-2. btn이 생성되는 변수 생성??!?@
  const delBtn = document.createElement("button");
  delBtn.innerText = "🥡";
  // 7-3. span을 생성하는 변수 생성?!@?!
  const span = document.createElement("span");
  // 7-4. span에 내용을 text인자에게 받는다.
  span.innerText = text;
  // 7-5. 만든 요소들을 붙여야 html에 만들어진다.
  // 위에 만든 거 자체로 생성된 것이 아닌 내용만 가지고 있고
  // 내용만 가졌던 것을 html에 넣는 함수를 정의해주어야
  // 보이게 된다.
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
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
  const toDos = localStorage.getItem(TODOS_LS);
  // 3.3
  if (toDos !== null) {
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
