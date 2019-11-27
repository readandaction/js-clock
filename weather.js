// 3.2
const COORDS = "coords";

// 11.
function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

// 7. 좌표값을 얻었을 때, 함수
function handleGeoSucces(position) {
  // 7.1 받은 좌표값의 내용을 확인
  console.log(position);
  // 7.2 내용에서 필요한 부분을 변수로 선언
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    // tip. 객체의 변수와 객체의 key값이 같으면 한번만 적으면 된다.
    latitude: latitude,
    // logitude : logitude
    longitude
  };
  // 12.
  saveCoords(coordsObj);
}
// 9. 좌표값을 얻지 못했을 때, 함수
function handleGeoError() {
  console.log("what");
}

// 5.
function askForCoords() {
  //5.1 유저에게 유저의 좌표값을 줄 건지 묻는 함수
  // 8. 좌표값을 얻었을 때, 함수 실행
  // 10. 좌표값을 얻지 못했을 때, 함수 실행
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

// 3.
function loadCoords() {
  // 3.1
  const loadedCoords = localStorage.getItem(COORDS);
  // 3.3
  if (loadedCoords === null) {
    // 6.
    askForCoords();
  } else {
    // getWeather
  }
}
// 1.
function init() {
  // 4.
  loadCoords();
}
// 2.
init();
