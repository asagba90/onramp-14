const withdrawal = require('./withdrawal.js');

test('check number of note to be withdrawed', () => {
    const arr = [231, 2, 0, 2];
    expect(withdrawal(23142)).toEqual(arr);
});

// test('check number of note to be withdrawed', () => {
//     if (withdrawal(23142) === [231, 2, 0, 2]) {
//         console.log('Got expected result');
//     } else{
//         console.log('Test failed');
//     }
// })

// console.log(withdrawal(23142)); [ 231, 2, 0, 2 ]