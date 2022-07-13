console.clear();

function cleanString(s) {
    let newString = '';

    for (const symbol of s) {
        if (symbol !== '#') {
            newString += symbol;
        } else {
            newString = newString.slice(0, -1);
        }
    }

    return newString;
}

console.log(cleanString('abc#d##c'), 'ac');
console.log(cleanString('abc####d##c#'), ''); 