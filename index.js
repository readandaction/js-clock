// // #2.1
// // 홀수는 함수 생성, 짝수는 함수 실행 주석
// // 1. 함수 생성
// function sayHello() {
//   // 1-2. console창에 출력 함수, 변수의 값이 출력됨.
//   // 여기선 "Hello"가 값
//   console.log("Hello");
// }
// // 2. 함수 실행
// sayHello();

// // 3. 함수 생성, argument 넣어 외부 데이터 사용하기
// // argument는 변수와 같다. 아무 이름 정해주면 됨.
// // 인자(변수) 선언. ()안에 적어주는 것
// function sayHello2(argument) {
//   // 3-2. console창에 출력 함수 실행, 변수의 값이 출력됨.
//   // 'Hello (argument의 값)'이 출력
//   console.log("Hello", argument);
// }
// // 4. 함수 실행
// // 인자 argumnet에 "Nico"라는 값을 넣어서 함수 실행
// sayHello2("Nico");
// // 결과 - Hello Nico

// // 위 응용.
// // 1
// function sayHello3(name, age) {
//   // 1-2
//   console.log("Hello", name, "You have", age, "years of age");
// }
// // 2
// sayHello3("Baek", 22);
// // 결과 - Hello Baek  you have 22 years of age

// // #2.1.1
// //``(백틱) 사용하기, 코마는 보기 좋지 않아서 만든 방법.
// function sayHello4(name, age) {
//   // ${argument}, ``안에 쓴 것들을 문자로 인식
//   console.log(`Hello ${name} You have ${age} years of age`);
// }
// sayHello4("Baek", 22);
// // 결과 - Hello Baek  you have 22 years of age
// 드래그 후 command+/ 하면 주석처리 하는 것이 가능.

// -------------------return에 대한 이야기--------------------
// 변수에 값을 할당하는 것과 유사.
// '함수 = 값' 함수도 값이 있다.
function sayHelloNoRetrun(name, age) {
  console.log(`Hello ${name} You have ${age} years of age`);
}
// 함수 실행
sayHelloNoRetrun("Baek", 22);
// sayHelloRetrun("GOod", 22)를 실행해버리네.
// 왜? 나는 그냥 변수에 함수를 넣은 것 뿐인 것 같은데?
const greeting = sayHelloNoRetrun("GOod", 22);
// 그래서 한번 console.log로 변수 a 선언 및 초기화를 해보았다.
// 똑같네. a 값이 할당되지 않음, a는 텅빈 그릇(초기화가 안됨)
const a = console.log(
  "Hello~가 위에 뜨면 위에 코드가 실행 아래가 뜨면 아래 코드가 실행된 것"
);
// undefined - greeting에는 값이 없어서 변수 초기화가 안 되었다는 이야기.
// sayHelloRetrun("Ba", 22)에는 값이 존재하지 않음.
console.log(greeting);
// undefined
console.log(a);

// return 적용시
console.log("return으로 하면?");
console.log("return으로 하면?");
console.log("return으로 하면?");
// return 적용시

function sayHelloRetrun(name, age) {
  return `Hello ${name} You have ${age} years of age`;
}
// 함수 실행. 0
sayHelloRetrun("Baek", 22);

// 콘솔창에 뜨던 것이 사라짐. 변수가 sayHelloRetrun()의 값만 가짐.
const greetingReturn = sayHelloRetrun("GOod", 22);
const b = console.log(
  "Hello~ 위에 뜨면 위에 코드가 실행 아래가 뜨면 아래 코드가 실행된 것"
);
// 여기서 sayHelloRetrun("GOod", 22)의 값이 보임
console.log(greetingReturn);
// undefined
console.log(b);

// 결론 console.log는 값이 없는 함수구나. return이 없겠구나.
// 함수는 return 뒤에 값을 적어주어야 값을 가지는 구나.

//return 응용
//calculator

const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  divide: function(a, b) {
    return a / b;
  },
  power: function(a, b) {
    return a ** b;
  },
  custom: function(a, b) {
    return (a + b) * (a + b);
  }
};
const plus = calculator.plus(5, 5);
const minus = calculator.minus(5, 5);
const divide = calculator.divide(5, 5);
const power = calculator.power(5, 5);
const custom = calculator.custom(5, 5);
console.log(plus);
console.log(minus);
console.log(divide);
console.log(power);
console.log(custom);
console.log("오브젝트");
console.log(calculator.plus(5, 5), calculator.minus(5, 5));

//---------------#2.2 JS DOM function

// index.js와 연결된 index.html이 콘솔창에 뜬다.
console.log(document);

// 1. 변수 title 생성. 값은 document.getElementById("title")
// 연결된 index.html에서 title이라는 id를 가진 요소를 값으로 리턴
const title = document.getElementById("title");
// 1.1 객체.innerText
// 페이지에서 자바스크립트로 선택하는 것들은 객체가 된다.
// 아래처럼 객체.(정해진변수이름)에 값을 넣으면 바뀐다.
title.innerText = "Hi. From JS";
console.log(title);

// title로 할 수 있는 명령어들을 보여줌. 객체의 내용을 보여준다.
console.dir(title);
// 그 중 찾아서 사용
title.style.color = "red";

// index.html 객체로서, 내용을 보여줌
console.dir(document);
// 그중 찾아서 사용
// <head>안에 <title>이 변경된다.
document.title = "HI";

// querySelector
// getElement와 기능이 유사
// 인자에 해당하는 요소 중 첫번째 자식의 값으로 리턴하는 함수
// .은 class, #은 id, 아무것도 없으면 태그.
const query = document.querySelector(".query");
query.style.color = "red";
