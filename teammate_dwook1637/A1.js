let strings1 = "pPoooyY";

function solution1(s){
    let p=0, y=0;
    for(let i=0; i<s.length; i++){
        if (s[i] === 'p' || s[i] === 'P') p++;
        else if (s[i] === 'y' || s[i] === 'Y') y++;
    }
    return p === y;
}

console.log(solution1(strings1));

let absolutes = [4,7,12];
let signs = [true,false,true];

function solution2(absolutes, signs) {
    let sum = 0;
    for (let i = 0; i < absolutes.length; i++) {
        sum += (signs[i] ? absolutes[i] : absolutes[i] * -1);
    }
    return sum;
}

console.log(solution2(absolutes, signs));

























/////////////////////////////////////////////////////////////////////////////


let strings2 = ["sun", "bed", "car"];
let n = 1;


function solution3(strings, n){
    let str = strings.slice();

    for (let i = 0; i < str.length - 1; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (isBack(str[i], str[j], n)) {
                let temp = str[i];
                str[i] = str[j];
                str[j] = temp;
            }
        }
    }

    return str;
}

function isBack(src, target, index) {
    if (src[index] > target[index]) {
        return true;
    } else if (src[index] < target[index]) {
        return false;
    } else {
        if (src > target) return true;
        else return false;
    }
}


console.log(solution2(strings2, n));


console.log(strings);
console.log(Array.from(strings));
