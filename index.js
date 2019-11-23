// 홀수는 함수 생성, 짝수는 함수 실행 주석
// 1. 함수 생성
function sayHello() {
  // 1-2. console창에 출력 함수, 변수의 값이 출력됨.
  // 여기선 "Hello"가 값
  console.log("Hello");
}
// 2. 함수 실행
sayHello();

// 3. 함수 생성, argument 넣어 외부 데이터 사용하기
// argument는 변수와 같다. 아무 이름 정해주면 됨.
// 인자(변수) 선언. ()안에 적어주는 것
function sayHello2(argument) {
  // 3-2. console창에 출력 함수 실행, 변수의 값이 출력됨.
  // 'Hello (argument의 값)'이 출력
  console.log("Hello", argument);
}
// 4. 함수 실행
// 인자 argumnet에 "Nico"라는 값을 넣어서 함수 실행
sayHello2("Nico");
// 결과 - Hello Nico

// 위 응용.
// 1
function sayHello3(name, age) {
  // 1-2
  console.log("Hello", name, "You have", age, "years of age");
}
// 2
sayHello3("Baek", 22);
// 결과 - Hello Baek  you have 22 years of age
