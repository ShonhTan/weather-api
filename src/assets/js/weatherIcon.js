function weatherIcon(id){
  if(id==="01d") {
    return "wi-day-sunny";
  } else if(id==="01n") {
    return "wi-night-clear";
  } else if(id==="02d") {
    return "wi-day-cloudy";
  } else if(id==="02n") {
    return "wi-night-alt-cloudy";
  } else if(id==="03d") {
    return "wi-cloud";
  } else if(id==="03n") {
    return "wi-cloud";
  } else if(id==="04d") {
    return "wi-cloudy";
  } else if(id==="04n") {
    return "wi-cloudy";
  } else if(id==="09d") {
    return "wi-rain";
  } else if(id==="09n") {
    return "wi-rain";
  } else if(id==="10d") {
    return "wi-day-rain";
  } else if(id==="10n") {
    return "wi-night-alt-rain";
  } else if(id==="11d") {
    return "wi-thunderstorm";
  } else if(id==="11n") {
    return "wi-thunderstorm";
  } else if(id==="13d") {
    return "wi-snow";
  } else if(id==="13n") {
    return "wi-snow";
  } else if(id==="50d") {
    return "wi-fog";
  } else if(id==="50n") {
    return "wi-fog";
  } else {
    return "noooooooooooooooo"
  }
}
  
export default weatherIcon