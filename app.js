const storage = new Storage();
document.addEventListener('DOMContentLoaded', getWeater);
getWeather();
function getWeater(){
  weather.getWeater()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}