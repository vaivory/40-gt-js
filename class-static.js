console.clear();

class Car {
    constructor(name) {
        this.name = name;
        this.ignition = false;
        this.distanceInKm = 0;
    }

    turnOn() {
        if (this.ignition) {
            return console.log('Varyklis jau ijungtas');
        }
        this.ignition = true;
    }

    turnOff() {
        if (!this.ignition) {
            return console.log('Varyklis jau isjungtas');
        }
        this.ignition = false;
    }

    static positiveNumber(n) {
        if (typeof n !== 'number'
            || !isFinite(n)
            || n <= 0) {
            return false;
        }
        return true;
    }

    static kmToMi(km) {
        if (!Car.positiveNumber(km)) {
            return 0;
        }
        return km / 1.6;
    }

    static miToKm(mi) {
        if (!Car.positiveNumber(mi)) {
            return 0;
        }
        return mi * 1.6;
    }

    ride(dist, unit = 'km') {
        if (!this.ignition) {
            return console.log('Negalim vaziuoti su isjungtu varykliu');
        }
        this.distanceInKm += unit === 'km' ? dist : Car.miToKm(dist);
    }
}

// objektas nereikalingas, dirbam ant klases
console.log(Car.kmToMi(100));
console.log(Car.miToKm(100));

const tesla = new Car('Tesla');
// privalau tureti objekta
tesla.turnOn();
tesla.turnOff();
tesla.ride(20);
tesla.turnOn();
tesla.ride(15);
tesla.ride(35);
tesla.ride(31.25, 'mi');

console.log(tesla); 