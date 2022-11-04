const classif = require('./classifyNumbers.js');

test('To classify numbers', () => {
    const ans = {
        odd: [ 1 ],
        even: [ 2, 30, 400, 5000 ],
        units: [ 1, 2 ],
        tens: [ 30 ],
        hundreds: [ 400 ],
        others: [ 5000 ] }

    const ques = [1, 2, 30, 400, 5000];

    expect(classif(ques)).toEqual(ans);
});