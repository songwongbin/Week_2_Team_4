function solution(strings, n) {
    var answer = [];

    answer = strings.sort(isFirst);

    function isFirst(str1, str2) {
        var x = str1[n];
        var y = str2[n];
        if (x < y) { // str1이 str2보다 앞이면 return -1;
            return -1;
        } else if (x > y) {// str1이 str2보다 뒤면 return 1;
            return 1;
        } else {// str1과 str2의 순서가 같으면 그냥 비교;
            return str1.localeCompare(str2);
        }
    }

    return answer;
}