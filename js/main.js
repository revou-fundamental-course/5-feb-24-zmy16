function convertToFahrenheit() {
   const celsius = document.getElementById("celsius").value;

   if (celsius === "") return;

   const fahrenheit = parseFloat(celsius) * (9 / 5) + 32;

   document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);

   document.getElementById(
      "formula"
   ).innerText = `${celsius}°C x (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
}

function convertToCelsius() {
   const fahrenheit = document.getElementById("fahrenheit").value;

   if (fahrenheit === "") return;

   const celsius = (parseFloat(fahrenheit) - 32) * (5 / 9);

   document.getElementById("celsius").value = celsius.toFixed(2);

   document.getElementById(
      "formula"
   ).innerText = `${fahrenheit}°F - 32) x (5/9) = ${celsius.toFixed(2)}°C`;
}

function reset() {
   document.getElementById("celsius").value = "";
   document.getElementById("fahrenheit").value = "";
   document.getElementById("formula").innerText = "";
}
