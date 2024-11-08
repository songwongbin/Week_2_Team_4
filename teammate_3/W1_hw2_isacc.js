function add(absolutes,signs) {
    let a=0;
    for (let i=0;i<absolutes.length; i++ ){
        if (signg[i]===true){
            a-=absolutes[i];
        }
        else{
            a+=absolutes[i];
        }
    }
return a;
};

