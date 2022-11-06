function multsOf(n, m, d) {
    const mults = [];

    for (let index = 1; n > mults.length; index++) {
        const mult = m * index;

        if (mult % d === 0) {
            mults.push(mult);
        }
        
    }

    return mults;
}

var print = multsOf(10, 2, 5);

console.log(print);
setInterval()
// [
//     21,  42,  63,  84,
//    105, 126, 147, 168,
//    189, 210
//  ]