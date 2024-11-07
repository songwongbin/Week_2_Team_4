// 배열을 정렬하는 메서드 sort(), 기본 설정이 오름차순임
// 콜백함수에서 정렬 기준을 정할 수 이씀
// 문자열 비교를 위해 localCompare()를 써야하나?
// n번째 인덱스 요소가 같을 경우의 조건도 설정해줘야 할 듯?
// 무튼 조건에 맞게 정렬한 strings를 answer에 넣어주면 끗

function solution(strings, n) {
    var answer = [];

    let new_strings = strings.sort(function(a, b) {
        // 글자를 비교한 값을 담을 변수 설정, 값은 글자가 다르면 1 또는 -1, 같으면 0
        let compare = a[n].localeCompare(b[n]);
        
        if (compare !== 0) {
            // n번째 글자가 다르면 n번째 글자들 비교 기준으로 재정렬하고
            return compare;
        } else {
            // n번째 글자가 같으면 문자열을 통째로 비교한 후 재정렬
            compare = a.localeCompare(b);
            return compare; 
        } 
    });
    
    // 조건에 맞게 정렬한 새 배열을 answer에 넣고, 출력
    answer = [...new_strings];
    return answer;
}

console.log(solution(["sun", "bed", "car"],1));
console.log(solution(["abce", "abcd", "cdx"],2));
