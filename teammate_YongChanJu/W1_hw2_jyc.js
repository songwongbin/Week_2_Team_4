function solution(absolutes, signs) {
    let result = 0;

    for (let i = 0; i < absolutes.length; i++) {
        if(signs[i] === true) { // true 값만큼 더하기
            result = result + absolutes[i];
        } else if (signs[i] === false) { // false 값만큼 빼기
            result = result - absolutes[i];
        }
    }

    return result;
}

let absolutes = [10, 9, 25];
let signs = [true, false, true];

console.log(solution(absolutes, signs));