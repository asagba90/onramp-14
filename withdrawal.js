function withdrawal(amount) {
    var note = [];
    
    if (Math.floor(amount / 100) > 0) {
        num = Math.floor(amount / 100);
        note.push(num);
        amount = amount % 100;
    } else{
        note.push(0);
    }

    if (Math.floor(amount / 20) > 0) {
        num = Math.floor(amount / 20);
        note.push(num);
        amount = amount % 20;
    } else{
        note.push(0);
    }

    if (Math.floor(amount / 9) > 0) {
        num = Math.floor(amount / 9);
        note.push(num);
        amount = amount % 9;
    } else{
        note.push(0);
    }

    if (Math.floor(amount / 1) > 0) {
        num = Math.floor(amount / 1);
        note.push(num);
    } else{
        note.push(0);
    }

    return note;
    
}

module.exports = withdrawal

// console.log(withdrawal(23142)); [ 231, 2, 0, 2 ]