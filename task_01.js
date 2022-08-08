function keys(obj) {
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            console.log(key)
            for(let i = 1; i <= obj[key].length; i++) {
              console.log(i, obj[key][i-1])
            }
        }
    }
}

const meal = {
    breakfast: ["eggs", "toast"],
    lunch: ["borsch", "coul slow"],
    dinner: ["pasta", "pancake"],
}

keys(meal);