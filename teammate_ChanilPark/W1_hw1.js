function solution(s){
    var answer = true;
    var ss = s.toLowerCase();
    var y = 0, p = 0;

    for(e in ss){
        if(ss[e] === 'y') y++;
        if(ss[e] === 'p') p++;
    }

    if( y === p){
        return true;
    }else{
        return false;
    }
}