function Vehicle(brand, wheelsCount) {
    this.brand = brand;
    this.wheelsCount = wheelsCount;
    this.isOperative = false;
}

Vehicle.prototype.fix = function() {
    this.isOperative = true;
    console.log(this.brand + " is ready to go!");
}

Vehicle.prototype.broke = function() {
    this.isOperative = false;
    console.log(this.brand + " is broken!");
}

// Велосипед
function Bicycle(brand, wheelsCount, purpose) {
    this.brand = brand;
    this.wheelsCount = wheelsCount
    this.purpose = purpose;
    this.isOperative = true;
}

Bicycle.prototype = new Vehicle();

// Автомобиль
function Car(brand, wheelsCount, energySource, type) {
    this.brand = brand;
    this.wheelsCount = wheelsCount;
    this.energySource = energySource;
    this.type = type;
    this.isOperative = false;
}

Car.prototype = new Vehicle();

// Трамвай
function Tram(brand, wheelsCount, schedule) {
    this.brand = brand;
    this.wheelsCount = wheelsCount;
    this.schedule = schedule;
    this.isOperative = true;
}

Tram.prototype = new Vehicle();

const myBike = new Bicycle("GT", 2, "mountain");
const myKiaSoul = new Car("KIA Soul", 4, "gasoline", "SUV");
const localTram = new Tram("Siemens", 8, {monday: "14:30", wednesday: "10:30"});

myBike.broke();
myKiaSoul.fix();

console.log(myBike)
console.log(myKiaSoul)
console.log(localTram)