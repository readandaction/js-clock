const body = document.querySelector("body");

// 3.1 내가 가진 이미지 수
const IMG_NUMBER = 3;
// 5.
function paintImage(imgNumber) {
  // createElement("img")랑 무엇이 다를까?
  // createElement("tagName"), new Object().
  const image = new Image();
  console.log(image);
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("imgBg");
  body.appendChild(image);
}
// 3.
function genRandom() {
  // 3.1 Math
  // floor내림 ceilng올림
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

// 1.
function init() {
  // 4.
  const randomNumber = genRandom();
  // 6.
  paintImage(randomNumber);
}
// 2.
init();
