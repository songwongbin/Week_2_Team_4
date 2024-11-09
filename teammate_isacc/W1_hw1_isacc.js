function distinction(s){
    let nump =0;
    let numy =0;
    let answer;
    
    for(let i=0; i<s.length; i++){
        if (s[i]==="p"||s[i]==="P")
            {
                nump++;
            }
        else if (s[i]==="y"||s[i]==="Y")
            {
                numy++;
            }
    }
    
    if (nump===numy){
        answer=true;
    } else{
        answer=false;
    }
    return answer;
    }
    
    let answer= distinction("pPyY");
    console.log (answer);