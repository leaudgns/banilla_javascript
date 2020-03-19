const COORDS = "coords";

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringfly(coordsObj));
}

function handleGeoSucces(position){
const latitude = position.coords.latitude;
const longitude = position.coords.longitude
const coordsObj ={
    latitude,
    longitude
};
    console.log(coordsObj);
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces)
}

function loadCoords() {
  const loadedCords = localStorage.getItem;
  if(loadCoords===null){
      askForCoords();
  }else{
      // gerWeather
  }

function init() {};

init()