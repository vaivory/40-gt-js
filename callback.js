console.clear();

function sum(a, b, callback) {
    const ats = a + b;
    callback(ats);
}

const numbers = [
    [2, 4],
    [7, 9],
    [-8, 16],

];

//tas kuris gauna i save funkcija tai mes ji vadinsime callbacku

for (const nums of numbers) {
    const [pirmas, antras] = nums;
    sum(pirmas, antras, (atsakymas) => {
        console.log(`${pirmas} + ${antras} = ${atsakymas}`);
 
    })
}

//callbackus naudojam kai reikia failu sistemos, kuris vyksta per async/awaito

// const pirmaFunc=(callbackus) =>{
//     setTimeout(()=>{
//         console.log('Pirma finkcija');
//         callback();
//     }, 1000);
// }
// const antraFunc=() =>{
//     setTimeout(()=>{
//         console.log('Antra finkcija');
//     }, 1000);
// }

// pirmaFunc(antraFunc);