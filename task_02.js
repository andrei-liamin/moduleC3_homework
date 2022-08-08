function keyIsInObject(str, obj) {
    return str in obj
}

const meal = {
    breakfast: ["eggs", "toast"],
    lunch: ["borsch", "coul slow"],
    dinner: ["pasta", "pancake"],
}

console.log(keyIsInObject("lunch", meal))