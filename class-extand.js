class Pet {  //darysim tiesiog klase naminiu gyvunu ir pastoviai rasyt const rex=new Pet () yra nelogiska, nes jis vistiek yra naminis gyvunas
    constructor(name, color){  //cia ikeliam visus vienodus kad sutrumpinti koda
        this.name=name;
        this.color=color;
        this.sound='au miau';
    }

    saiHi() {
        return `Hi, my name is ${this.name} and my color is ${this.color}`;
    }
    voice() {
        if (!this.sound) {
            return `${this.name}: not in mood to talk!`
        }
        return `${this.name}: ${this.sound}!`
    }

}

// const gyvunas = new Pet('Rezusas', 'raudona');
// console.log(gyvunas);
// console.log(gyvunas.sayHi());

//extandinam reiskia copy/paste reiksmes is tevynes klases i vaiku

class Dog extends Pet {
    constructor (name, color) {  //sitas konstruktorius nesitike gauti varda ir spalva, todel jam cia pazymim kad jis vis gi turetu gauti name ir spalva,
        super(name, color);  //tai yra musu tunelis tevyniui kontruktoriui perduoti info, t.y. ta pati ka turim vaiko constuktoriuje
        this.sound='Au au';
        
    }
   
}

class Cat extends Pet {
    constructor (catName, carColor, lives=9) {  //cia parametrai todel nesvarbu kaip juos nurodysim
        super(catName, carColor); //surysam tevyni konstruktoriu su vaiku
        this.sound='Miau miau';
        this.lives=lives;
    }
  
}

const rex= new Dog('Rex', 'black');
const sniegius= new Cat('Sniegius', 'white', ); // by defaoult turi 9 gyvybes, je icia paduosim papildomai tracia reiskme pvz8 tai lives bus 8 vietoj 9

console.log(rex);
console.log(sniegius);

console.log(rex.voice());
console.log(sniegius.voice());
