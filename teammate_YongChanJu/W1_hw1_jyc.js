function solution(s){
    var resultStr = true; // true 및 false 변수 선언
    s = s.toUpperCase(); // 대문자 만들기 (비교하기위해 구글링으로 대문자만드는 코드를 씀)

    console.log(s);

    let str = 0;
    for (i=0; i < s.length; i++) { // 비교할 반복문 만들기
        if (s[i] === "P") {
            str++;
        }
        if (s[i] === "Y") {
            str--;
        }
    }
    if (str !== 0) { // 갯수가 다르면 false로 만들기
        resultStr = false;
    }

    return resultStr; 
}

let a = "pPoooyY";
let b = "Pyy";

console.log(solution(a));