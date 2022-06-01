const marks = [10, 2, -7, 5, Infinity, -Infinity, -1, -3.14];
const marks1 = [-7, -Infinity, -1, -3.14];
const marks2 = [7, 11, -1, -3.14];
const marks3 = [7, 121, 3.14];
const marks4 = ['Labukas', true, [], {}, () => { }];
const marks5 = [0];
const marks6 = [];
const marks7 = [NaN];

function maxNumber(list) {
    let max = -Infinity;
    for (const mark of list) {
        if (typeof mark === 'number'
            && isFinite(mark)
            && mark > max) {
            max = mark;
        }
    }

    if (max === -Infinity) {
        return 'ERROR: duotame masyve nerasta nei vieno normalaus skaiciaus :(';
    }

    return max;
}

console.log(true);
console.log(false);

// false = 0; true = 1;
console.log(false + false);
console.log(false + true);
console.log(true + false);
console.log(true + true);

console.log('---------------');
console.log(typeof 5);
console.log(typeof -Infinity);
console.log(typeof Infinity);
console.log(typeof '5');
console.log(typeof true);
console.log(typeof {});
console.log(typeof (() => { }));

console.log('------------------');

console.log(maxNumber(marks));
console.log(maxNumber(marks1));
console.log(maxNumber(marks2));
console.log(maxNumber(marks3));
console.log(maxNumber(marks4));
console.log(maxNumber(marks5));
console.log(maxNumber(marks6));
console.log(maxNumber(marks7));

console.log('------------------');
console.log(Math.max(...marks));
console.log(Math.max(...marks1));
console.log(Math.max(...marks2));
console.log(Math.max(...marks3));
console.log(Math.max(...marks4));
console.log(Math.max(...marks5));
console.log(Math.max(...marks6));
console.log(Math.max(...marks7));

// ... spread operator