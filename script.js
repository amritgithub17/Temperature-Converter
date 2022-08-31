let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');

//celsius to fahrenheit
celsius.oninput = () => {
    let output = (parseFloat(celsius.value)*9)/5+32;
    fahrenheit.value=parseFloat(output.toFixed(2));
};

fahrenheit.oninput = () => {
    let output = ((parseFloat(fahrenheit.value)-32)*5)/9;
    celsius.value=parseFloat(output.toFixed(2));
};

//Celsius to kelvin
Celsius.oninput = () => {
    let output = (parseFloat(Celsius.value)+273.15);
    kelvin.value=parseFloat(output.toFixed(2));
};

kelvin.oninput = () => {
    let output = (parseFloat(Celsius.value)-273.15);
    Celsius.value=parseFloat(output.toFixed(2));
};

//Kelvin to Fahrenheit
Kelvin.oninput = () => {
    let output = ((parseFloat(Kelvin.value)-273)*1.8)+32;
    Fahr.value=parseFloat(output.toFixed(2));
};

Fahr.oninput = () => {
    let output = (parseFloat(Fahr.value)+459.67)*(5/9);
    Kelvin.value=parseFloat(output.toFixed(2));
};

