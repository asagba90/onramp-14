var n = "asdsdasdsds"

vow = ['a', 'e', 'i', 'o', 'u'];
vowels = [];
cons = [];
for (let i = 0; i < n.length; i++ ){
    if (vow.includes(n[i])){
        vowels.push(n[i]);
    } else {
        cons.push(n[i]);
    }
}


console.log(`The vowels are ${vowels} and the consonant ${cons}`);
