function solution(s){
    // 필요한 변수 선언 및 초기값 할당
    var answer = true;
    let countP = 0;
    let countY = 0;
    let array_s = Array.from(s);

    // p의 개수와 y의 개수 세는 반복문
    for (let i = 0; i < array_s.length; i++) {
        if (array_s[i] === 'p' || array_s[i] === 'P') {
            countP++;
        } else if (array_s[i] === 'y' || array_s[i] === 'Y') {
            countY++;
        }
    }

    // p의 개수와 y의 개수 비교해 answer 값 지정하는 조건문
    if (countP === 0 && countY === 0) {
        answer = true;
    } else if (countP === countY) {
        answer = true;
    } else {
        answer = false;
    }
    return answer;
}