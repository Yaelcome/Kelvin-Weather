//The forecast today is 293 Kelvin
const kelvin = 293;

//Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
const celsius = kelvin - 273;
//celsius = 20;
console.log(kelvin - 273);

//To calculate fahrenheit 
let fahrenheit = celsius * (9/5) + 32;
//fahrenheit = 68;
console.log(celsius * (9 / 5) + 32);

//When you convert from Celsius to Fahrenheit, you often get a decimal number.
fahrenheit = Math.floor(fahrenheit);
console.log(`'The temperature is'${fahrenheit}degrees Fahrenheit'`);

//Convert to Newton
let Newton = celsius * (33 / 100);

//Round down
Newton = Math.floor(Newton);
console.log(`The Newton scale temperature is ${Newton} degrees`);
