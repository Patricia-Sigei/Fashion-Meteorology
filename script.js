// Temperature is in degrees Celsius
// Function to predict what to wear using temperature
function dressCode(temperature) {
    if (temperature < 10) {
        return ['dress warmly', 'Carry your Umbrella'];
    } else if (temperature >= 10 && temperature < 25) {
        return ['layer your clothing', 'it might get colder in the evening'];
    } else {
        return ['dress lightly', 'Stay hydrated'];
    }
}

let temperature = prompt('Enter current temperature in degrees Celsius');
temperature = Number(temperature);
let dressCodeAdvice = dressCode(temperature);

if (dressCodeAdvice) {
    console.log(dressCodeAdvice[0]);
    console.log(dressCodeAdvice[1]);
} else {
    console.log("Please enter a valid number.");
}
