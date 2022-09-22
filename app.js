let area =document.querySelector('#area');
let dateIn =document.querySelector('#dateIn');
let temprature =document.querySelector('.temprature');
let humidity =document.querySelector('.humidity');
let winds =document.querySelector('.winds');
let cloude =document.querySelector('.cloude');

var date =new Date();
var days =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months =  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var today = days[date.getDay()];
console.log(today);
var resentMonth = months[date.getMonth()];
console.log(resentMonth);


function loadOnIt(){
let lat;
let lon;

if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position) => )  {
        lat =position.coords.latitude;
        lon = position.coords.longitude;
      fetch('https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=7d64ac11a8cd4edd3f3f5ae265fa4000')
      .then(response=>{
        return response.jason();
      })  
      .then(data1 =>{
        console
      } )
    }
}


}


// let weatherlink = "https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=";
// let apikey= "7d64ac11a8cd4edd3f3f5ae265fa4000";


// let weatherAp ="https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=7d64ac11a8cd4edd3f3f5ae265fa4000"
// // console.log(weatherApi);