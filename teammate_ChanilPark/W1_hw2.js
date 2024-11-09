function solution(absolutes, signs) {
    var answer = 0;
    var arr = [];
    for(let i = 0; i < signs.length; i++){
        if(signs[i]){
            arr.push(absolutes[i]);
        }else{
            arr.push(-1 * absolutes[i]);
        }
    }
    for(let i = 0; i < arr.length; i++){
        answer += arr[i];
    }
    return answer;
}