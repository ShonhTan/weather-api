var degToCard = function (deg, lg) {
  if (lg === "fr") {
    if (deg > 11.25 && deg < 33.75) {
      return "Nord Nord-Est";
    } else if (deg > 33.75 && deg < 56.25) {
      return "Nord-Est";
    } else if (deg > 56.25 && deg < 78.75) {
      return "Est Nord-Est";
    } else if (deg > 78.75 && deg < 101.25) {
      return "Est";
    } else if (deg > 101.25 && deg < 123.75) {
      return "Est Sud-Est";
    } else if (deg > 123.75 && deg < 146.25) {
      return "Sud-Est";
    } else if (deg > 146.25 && deg < 168.75) {
      return "Sud Sud-Est";
    } else if (deg > 168.75 && deg < 191.25) {
      return "Sud";
    } else if (deg > 191.25 && deg < 213.75) {
      return "Sud Sud-Ouest";
    } else if (deg > 213.75 && deg < 236.25) {
      return "Sud-Ouest";
    } else if (deg > 236.25 && deg < 258.75) {
      return "Ouest Sud-Ouest";
    } else if (deg > 258.75 && deg < 281.25) {
      return "Ouest";
    } else if (deg > 281.25 && deg < 303.75) {
      return "Ouest Nord-Ouest";
    } else if (deg > 303.75 && deg < 326.25) {
      return "Nord-Ouest";
    } else if (deg > 326.25 && deg < 348.75) {
      return "Nord Nord-Ouest";
    } else {
      return "Nord";
    }
  } else if (lg === "en") {
    if (deg > 11.25 && deg < 33.75) {
      return "North North-East";
    } else if (deg > 33.75 && deg < 56.25) {
      return "North-East";
    } else if (deg > 56.25 && deg < 78.75) {
      return "East North-East";
    } else if (deg > 78.75 && deg < 101.25) {
      return "East";
    } else if (deg > 101.25 && deg < 123.75) {
      return "East South-East";
    } else if (deg > 123.75 && deg < 146.25) {
      return "South-East";
    } else if (deg > 146.25 && deg < 168.75) {
      return "South South-East";
    } else if (deg > 168.75 && deg < 191.25) {
      return "South";
    } else if (deg > 191.25 && deg < 213.75) {
      return "South South-West";
    } else if (deg > 213.75 && deg < 236.25) {
      return "South-West";
    } else if (deg > 236.25 && deg < 258.75) {
      return "West South-West";
    } else if (deg > 258.75 && deg < 281.25) {
      return "West";
    } else if (deg > 281.25 && deg < 303.75) {
      return "West North-West";
    } else if (deg > 303.75 && deg < 326.25) {
      return "North-West";
    } else if (deg > 326.25 && deg < 348.75) {
      return "North North-West";
    } else {
      return "North";
    }
  } else if (lg === "jp") {
    if (deg > 11.25 && deg < 33.75) {
      return "北 北-東";
    } else if (deg > 33.75 && deg < 56.25) {
      return "北-東";
    } else if (deg > 56.25 && deg < 78.75) {
      return "東 北-東";
    } else if (deg > 78.75 && deg < 101.25) {
      return "東";
    } else if (deg > 101.25 && deg < 123.75) {
      return "東 南-東";
    } else if (deg > 123.75 && deg < 146.25) {
      return "南-東";
    } else if (deg > 146.25 && deg < 168.75) {
      return "南 南-東";
    } else if (deg > 168.75 && deg < 191.25) {
      return "南";
    } else if (deg > 191.25 && deg < 213.75) {
      return "南 南-西";
    } else if (deg > 213.75 && deg < 236.25) {
      return "南-西";
    } else if (deg > 236.25 && deg < 258.75) {
      return "西 南-西";
    } else if (deg > 258.75 && deg < 281.25) {
      return "西";
    } else if (deg > 281.25 && deg < 303.75) {
      return "西 北-西";
    } else if (deg > 303.75 && deg < 326.25) {
      return "北-西";
    } else if (deg > 326.25 && deg < 348.75) {
      return "北 北-西";
    } else {
      return "北";
    }
  }
}

export default {
  degToCard
};