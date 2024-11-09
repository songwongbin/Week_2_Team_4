function solution(strings, n) {
    var answer = [];

    for (let i = 0; i < strings.length; i++) {
        strings[i] = strings[i][n] + strings[i];
    };
    strings.sort();

    for (let a = 0; a < strings.length; a++) { 
        strings[a] = strings[a].replace(strings[a][0],"");
        answer.push(strings[a]);
    };

    console.log("answer", answer)

    return answer;
}

solution(["abc", "sun", "bed", "car"], 1);