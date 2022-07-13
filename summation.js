function summation(num) {
    let suma = 0;

    // V-1
    // for (let i = 1; i <= num; i++) {
    //     suma += i;
    // }

    // V-2
    // for (let i = 1; i <= num;) {
    //     suma += i++;
    // }

    // V-3
    // let i = 1;
    // for (; i <= num;) {
    //     suma += i++;
    // }

    // V-4
    // for (let i = num; i > 0; i--) {
    //     suma += i;
    // }

    // V-5
    // for (let i = num; i; i--) {
    //     suma += i;
    // }

    // V-6
    // for (let i = num; i;) {
    //     suma += i--;
    // }

    // V-7
    // for (; num;) {
    //     suma += num--;
    // }

    // V-8
    // while (num) {
    //     suma += num--;
    // }

    // return suma;

    // V-9
    return num * (num + 1) / 2;
}

console.log(summation(1), 1)
console.log(summation(2), 3)
console.log(summation(3), 6)
console.log(summation(4), 10)
console.log(summation(5), 15)
console.log(summation(6), 21)
console.log(summation(100), 5050)
console.log(summation(1000))
console.log(summation(99999))
console.log(summation(999999))
console.log(summation(9999999))
console.log(summation(99999999))
console.log(summation(999999999))
console.log(summation(9_999_999_999))
console.log(summation(99_999_999_999))
console.log(summation(99_999_999_999_999_999_999_999)) 