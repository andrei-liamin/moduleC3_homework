function generateObjWithoutPrototype() {
    return Object.create(null);
}

const obj = generateObjWithoutPrototype();

console.log(typeof(obj)) //object
console.log(Object.getPrototypeOf(obj)) //null