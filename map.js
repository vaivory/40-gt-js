const marks = [2, 8, 7, 10, 5];

const doubleMarks = marks.map(n => n * 2); //n yra f-jos parametras ,n*2 yra f-jos logika
//3 ir 5 eilutes yra analogiskos
const anonDoubleMarks = marks.map(function (n) { return n * 2 }); //n yra parametras och n*2 yra logika

console.log(marks);
console.log(doubleMarks);
console.log(anonDoubleMarks);
