var input = document.querySelector('.masukan');
var main = document.querySelector('.city');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var button = document.querySelector('.submit');
var icon = document.querySelector('.icon');
var humidity = document.querySelector('.humidity');
var wind = document.querySelector('.wind');
var cuaca = document.querySelector('.cuaca');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=1e9cf4dd21c595a9d432000a9dd48d3b&units=metric')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var humidityValue = data['main']['humidity'];
  var windValue = data['wind']['speed'];
  var iconValue = data['weather'][0]['icon'];
  cuaca.style.display='block';
  
  main.innerHTML = "Weather At " + nameValue;
  desc.innerHTML = descValue;
  temp.innerHTML = tempValue + "°C";
  humidity.innerHTML = "Humidity : "+humidityValue + "%";
  wind.innerHTML ="Wind Speed : " + windValue + "m/s";
  icon.src = "https://openweathermap.org/img/wn/" + iconValue + "@2x.png";
  input.value = "";

})

.catch(err => alert("Wrong city name!"));
})
