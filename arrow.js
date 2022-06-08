//Finkcijos evoliucija

//function declaration
function suma(a, b) {
    return a + b;
}

//anonimine funkcija, nes ji neturi pavadinimo, bet jos logika yra priskirta kintamajam
const skirtumas = function (a, b) {
    return a - b;

}

//arrow function (rodykle)

const daugyba = (a, b) => {
    return a * b;
}

//arrow funkcija - jeigu logikos kune yra TIK 1 salyga (statement)
//galima nerasyti riestiniu skliaustu ir return
const dalyba = (a, b) => a / b;

//arrow funkcija - jeigu parametru bloke yra TIK 1 parametras
//galima nerasyti paprastuju skliaustu
const kvadratu = a => a ** 2;