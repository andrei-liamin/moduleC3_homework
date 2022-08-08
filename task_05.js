class Vehicle {
    constructor(brand, wheelsCount) {
        this.brand = brand;
        this.wheelsCount = wheelsCount;
        this.isOperative = false;
    }

    fix() {
        this.isOperative = true;
        console.log(this.brand + " is ready to go!");
    }

    broke() {
        this.isOperative = false;
        console.log(this.brand + " is broken!");
    }
}

// Велосипед
class Bicycle extends Vehicle {
    constructor(brand, wheelsCount, purpose) {
        super(brand, wheelsCount);
        this.purpose = purpose;
        this.isOperative = true;
    }
}

// Автомобиль
class Car extends Vehicle {
    constructor(brand, wheelsCount, energySource, type) {
        super(brand, wheelsCount);
        this.energySource = energySource;
        this.type = type;
        this.isOperative = false;
    }
}

// Трамвай
class Tram extends Vehicle {
    constructor(brand, wheelsCount, schedule) {
        super(brand, wheelsCount);
        this.schedule = schedule;
        this.isOperative = true;
    }
}

const myBike = new Bicycle("GT", 2, "mountain");
const myKiaSoul = new Car("KIA Soul", 4, "gasoline", "SUV");
const localTram = new Tram("Siemens", 8, {monday: "14:30", wednesday: "10:30"});

myBike.broke();
myKiaSoul.fix();

console.log(myBike)
console.log(myKiaSoul)
console.log(localTram)