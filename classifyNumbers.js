function classifyNumbers(arr) {
    var classes = {
        odd:[], even:[], units:[], tens:[], hundreds:[], others:[]
    }

    const fil = arr.filter((x) => typeof x !== "string");

    for (let index = 0; index < arr.length; index++) {
        const num = fil[index];
       
        if (num % 2 === 0) {
            classes.even.push(num);
        } else if ("number" === typeof num){
            classes["odd"].push(num);
        }

        if (num > 0 && num < 10) {
            classes.units.push(num);
        }
        if (num > 9 && num < 100) {
            classes.tens.push(num);
        }
        if (num > 99 && num < 1000) {
            classes.hundreds.push(num);
        }
        if (num === 0 || num >= 1000) {
            classes.others.push(num);
        }
    }

    return classes;
}

module.exports = classifyNumbers;

