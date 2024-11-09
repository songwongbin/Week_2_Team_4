function solution(absolutes, signs) {
    // 필요한 변수 선언
    var answer = 123456789;
    let Nums = [];
    let sum_Nums = 0;
    
    // 부호가 구분된 정수들로 재배열
    for (let i = 0; i < absolutes.length; i++) {
        let num;
        (signs[i]) ? num = absolutes[i] : num = -1 * absolutes[i];
        Nums.push(num);
    }

    // 새 배열 바탕으로 정수들의 합 계산
    Nums.forEach(function(item) {
        sum_Nums += item;
    });
    
    answer = sum_Nums;
    return answer;
}