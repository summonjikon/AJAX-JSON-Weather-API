let activate1 = document.getElementById('activate1'); // bind via DOM
let activate2 = document.getElementById('activate2'); // bind via DOM aan JS
let activate3 = document.getElementById('activate3'); // bind via DOMbutton aan JS
activate1.addEventListener("click", getWeather1); 
activate2.addEventListener("click", getWeather2); 
activate3.addEventListener("click", getWeather3); 
// activate3.addEventListener("click", getWeather3);  Functies moeten nog gemaakt worden
const debug = true; 
let result = document.getElementById('result');

let apiAddress = "http://weerlive.nl/api/json-data-10min.php?key=";
let key = "demo";
let locatie = "&locatie=";
let geoLocation = "Amsterdam"; 
let url = apiAddress + key + locatie + geoLocation; 


function getWeather1(){
   console.log(url);
   makeAjaxCall(url, "GET"). then (showWeather1, errorHandler); 
}
function showWeather1(JSONresponseFromAjax){
   result.innerHTML = JSONresponseFromAjax;
}



function getWeather2(){
   result.innerHTML;
   makeAjaxCall(url, "GET"). then (showWeather2, errorHandler)
}

function showWeather2(weatherString){
   let weatherObject = JSON.parse(weatherString);
   let completeData = "";
   for (const [key,value] of Object.entries(weatherObject.liveweer[0])) {
      debug ? console.log(`${key}: ${value}`) : ""; 
      completeData += key + " : " + value + "<br>"; 
      result.innerHTML = completeData; 
   }
}


function getWeather3(){
   console.log(url);
   makeAjaxCall(url, "GET"). then (showWeather, errorHandler); 
}


function showWeather(weatherString){
   let weatherObject = JSON.parse(weatherString);
   let completeData =
   weatherObject.liveweer[0].plaats +
   "<br>Temperatuur " +
   weatherObject.liveweer[0].temp + "&#176;C" +
   "<br>Verwachting " +
   weatherObject.liveweer[0].verw +
   "<br>" +
   weatherObject.liveweer[0].samenv +
   "<br>"

   result.innerHTML = completeData; 
}





