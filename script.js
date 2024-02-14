async function fetchWeatherCity(cityName){
	let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4398bc447fb7e34932a28a5d9eae4b34`;
	const response = await fetch(url)
	const data = await response.json();
	console.log(data)
}
//demo()
function fetchCity(){
	let cityName = document.getElementById("city_name");
	if(cityName.value===""){
		alert("enter a city name");
	}
	else{
		fetchWeatherCity(cityName.value);
		cityName.value="";
	}
}