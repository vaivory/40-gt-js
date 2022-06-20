console.log();

const daiktai = ['jungiklis', 'durys', 'lenta', 'tapetas'];

const pirmas = daiktai[0];
const antras = daiktai[1];
const visiKiti = [];

for (let i = 2; i < daiktai.length; i++) {
    visiKiti.push(daiktai[i]);
}



console.log(pirmas);
console.log(antras);
console.log(visiKiti);

//kai mes destruktizuojam tai turim zinoti is ko yra padarytas, daiktas, t.y. masyvas sias ,masyvas ten. Masyve yra pirmoj pozicijoje
//kuri mes istraukiam

const [first, second, ...other] = daiktai;

console.log(first);
console.log(second);
console.log(other);

const response = [true, 'Per trumpas'];

//const err=response[0];
//const msg=response[1];

const [err, msg] = response;

console.log(err);
console.log(msg);

//galima ir objektus destrukturizuoti

const person = {
    name: 'Petras',
    age: 99,
    isMarried: true,
    phone: 4565465,
    email: 'gfg=.gmail.com',
}

// const name=person.name;
// const age=person.age;
// const isMarried=person.isMarried;

const { age, name, ...personOtherInfo } = person;

console.log(name);
console.log(age);
console.log(isMarried);