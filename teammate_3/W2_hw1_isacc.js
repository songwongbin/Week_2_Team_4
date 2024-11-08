let strings = ["abce", "abcd", "cdx"];
let n = 2;


function solution(strings, n) {
    let a = [];
    for (let i = 0; i < strings.length; i++) {
        a[i] = strings[i].slice(n, n+1);
    };
    console.log(a);

    for (let x = 0; x < strings.length; x++){
          for (let i = 0; i < strings.length; i++) {
        if (a[i] > a[i + 1]) {
            let b;
            b = a[i];
            a[i] = a[i + 1];
            a[i + 1] = b;

            let c;
            c = strings[i];
            strings[i] = strings[i + 1];
            strings[i + 1] = c;
        }
    }
    }
  
    console.log(strings);
};



solution(strings, n)
