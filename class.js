console.clear();

class Dog {
    constructor(vardas) {  //vardas- lokalus kintamasis
        this.name=vardas; //zodis this yra kontekstinis kintamasis, jis reiskia sis suo, sis statlas ir t.t.
        this.boneCount=0;  //kiek gavo kaulu ka ika tik atsirado suniukas
        this.sound='au';
    }
    sayHi() {
        return `${this.name}: Labas!`
    }

    sayGoodbye (otherName ='mielas drauge') {
        return `${this.name}: Iki ${otherName}!`;
    }

    voice(sako='Au au!') {
        const sound = `${this.sound} ${this.sound}`;
        return `${this.name}: ${this.capitalize(sound)} !`;
      //  console.log(`${this.name}: ${this.sound.charAt(0).toUpperCase()+this.sound.slice(1)} ${this.sound} !`);
       // let Test=this.sound.split("")[0].toUpperCase();
       // console.log(Test);
     //  console.log(this.sound.charAt(0).toUpperCase()+this.sound.slice(1));
   //  console.log(`${this.name}: ${sako}`);

        
    }

    changeVoice(_sound) {
        this.sound=_sound;
    }

    capitalize(str) {
        //labas rytas -> Labas Rytas
        console.log('---------------------');
      //  console.log(str);
      //  console.log(str.split(' '));
      //  console.log(str.split(' ').map(w => this.firstLetterUp(w)));
        //console.log(str.split(' ').map(w => this.firstLetterUp(w)).join(' ')); //sijungiam zodziu i viena bendra teksta

        
        return str
        .split(' ')
        .map(w => this.firstLetterUp(w))
        .join(' ');
    }

    firstLetterUp(str) {
        //labas rytas -> Labas rytas

    //return str.replace(str[0], str[0].toUpperCase());
        return str[0].toUpperCase()+str.slice(1);
    }


    newBone() {
        return `${this.name}: ${'🦴'.repeat(++this.boneCount)} ! `   //padidinam ir boneCount vienu vienetu ir tuomet atspausdinam, tai kauliuku piesima kartojam tike kartu kiek yra boneCount
    }

   

}


const rex = new Dog('Rex');
const spike= new Dog('Spike');
const brisius=new Dog('Brisius');


console.log(rex);
console.log(spike);
console.log(brisius);

console.log(rex.sayHi());
//rex.sayHi();
console.log(rex.sayGoodbye());
console.log(rex.sayGoodbye('Maryte'));

brisius.voice();

console.log(rex.newBone());//Rex: 🦴 !
console.log(rex.newBone());//Rex:🦴🦴!
console.log(rex.newBone());//Rex:🦴🦴🦴!
console.log(rex.newBone());//Rex:🦴🦴🦴🦴!

rex.changeVoice('bark');
rex.changeVoice('woof');

console.log(rex.voice()); //Rex: Bark bark!
rex.voice();



class Cat {
    constructor(nameCat) {
        this.name=nameCat;
        this.mouseCount=0;
    }

    sayHi(){
        return `${this.name}: Labas!`;
    }

    sayGoodbye(other){
        return `${this.name}: Iki ${other}!`;
    }

    newMouse(){
        return `${this.name}: ${'🐭'.repeat(++this.mouseCount)} ! `
    }

}

const rainis = new Cat('Rainis');
console.log(rainis);

console.log(rainis.sayHi()); //Rainis: Labas!
console.log(rainis.sayGoodbye('Petrai'));

console.log(rainis.newMouse());//Rainis: 🐭 !
console.log(rainis.newMouse());//Rainis:🐭🐭!
console.log(rainis.newMouse());//Rainis:🐭🐭🐭!
console.log(rainis.newMouse());//Rainis:🐭🐭🐭🐭!