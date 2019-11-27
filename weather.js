// 15.
const weather = document.querySelector(".js-weather");

// 13.1
const API_KEY = "ed13828ea270b3a6ced0f06e32ef6e30";
// 3.2
const COORDS = "coords";

// 13.
function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    // 99. 유튜브 클론 강의를 보면 더 자세히 알 수 있는 부분
    // 99. 데이터가 완전히 들어온 후 실행.
    // 99. .then이 없다면 데이터가 완전히 들어오지 않은체 아래 함수가 실행되어
    // 99. 데이터를 완전히 못 받을 수 있음
    // 99. .then(function(argument)) argument는 위 network 데이터를 받는다.
    .then(function(response) {
      // 99.response.json() 데이터를 받는 중이라고 뜸
      // console.log(response.json());
      // 위랑 같이 적으면 충돌(실행된 파일을 다른 경로로 옮기는 것과 같은 느낌?)
      return response.json();
    })
    // 99. response.json()가 완전히 로딩된 후
    .then(function(json) {
      // 99. json 데이타가 나타남
      console.log(json);
      const temperature = json.main.temp;
      const place = json.name;
      // 16.
      weather.innerText = `${temperature} @ ${place}`;
    });
}
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
  // 14A.
  getWeather();
}
// 9. 좌표값을 얻지 못했을 때, 함수
function handleGeoError() {
  console.log("what");
}

// 5.
function askForCoords() {
  // 5.1 유저에게 유저의 좌표값을 줄 건지 묻는 함수
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
    // 13.2
    const parsedCoords = JSON.parse(loadedCoords);
    console.log(parsedCoords);
    // 14B.
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}
// 1.
function init() {
  // 4.
  loadCoords();
}
// 2.
init();
