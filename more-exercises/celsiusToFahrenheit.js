function celsiusToFahrenheit(input) {
    let degreesCelsius = Number(input[0]);
    let celsiusToFahrenheit = (degreesCelsius * 1.8) + 32;

    console.log(celsiusToFahrenheit.toFixed(2));
}

celsiusToFahrenheit(["25"]);