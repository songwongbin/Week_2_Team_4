var fullname = 'Ciryl Gane' //전역변수

var fighter = {
    fullname: 'John Jones',
    opponent: {
        fullname: 'Francis Ngannou',
        getFullname: function () {
            return this.fullname;
        }//애도 매소드라.
    },

    getName: function() {
        return this.fullname;
    },

    getFirstName: () => {
        return this.fullname.split(' ')[0];
    }, //화살표 함수라 무조건 상위 객체를 쳐다본다.

    getLastName: (function() {
        return this.fullname.split(' ')[1];
    })() //콜백 함수이기에 무조건 전역함수를 본다.

}

console.log('Not', fighter.opponent.getFullname(), 'VS', fighter.getName());
console.log('It is', fighter.getName(), 'VS', fighter.getFirstName(), fighter.getLastName);

//결과값
//VM54:26 Not Francis Ngannou VS John Jones
//VM54:27 It is John Jones VS Ciryl Gane

//1번 //fighter.opponent.getFullname() 이기에.
//this는opponent 이므로.opponent.fullname을 부름.

//2번 fighter.getName() 이기에. this는 fighter이므로.
//fighter.fullname 의 John Jones을 부름

//3-1번 fighter.getFirstName()은 화살표 함수이기에 상위 객체를 보기때문에 
//solution2의 fullname 을 본다. 이해한게 맞나.

//3-2번 fighter.getLastName는 콜백. 즉 매개변수가 함수이기 때문에 this는 전역객체임.