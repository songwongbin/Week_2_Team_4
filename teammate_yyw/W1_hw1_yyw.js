/*
    1. 반복문으로  'p'의 개수와 'y'의 개수를 카운트
    2. 비교하기
    3. 
    */

//let s = "PasdYasdg"
function solution(s) {
  var answer = true;
  let sp = 0;
  let sy = 0;
  // s = s.toUpprCase() // 대문자로 만들기

  /* // 소문자로 만들기
      for (let char of s) {
  if (char.toLowerCase() === "p") sp++;
  else if (char.toLowerCase() === "y") sy++;
  }
  */

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") {
      sp++;
    } else if (s[i] === "y" || s[i] === "Y") {
      sy++;
    }
  }

  // return sp === sy ? answer : (answer = false);
  if (sp === sy) {
    return answer;
  } else {
    answer = false;
    return answer;
  }
}

//console.log(solution(s));
