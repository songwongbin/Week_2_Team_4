var fullname = 'Ciryl Gane'

var fighter = {
    fullname: 'John Jones',
    opponent: {
        fullname: 'Francis Ngannou',
        getFullname: function () {
            return this.fullname; // 1. 객체 this 바인딩
        }
    },

    getName: function() {
        return this.fullname; // 2. 객체 this 바인딩
    },

    getFirstName: () => {
        return this.fullname.split(' ')[0]; // 3. 함수 this 바인딩
    },

    getLastName: (function() {
        return this.fullname.split(' ')[1]; // 4. 함수 this 바인딩
    })()

}

console.log('Not', fighter.opponent.getFullname(), 'VS', fighter.getName());
console.log('It is', fighter.getName(), 'VS', fighter.getFirstName(), fighter.getLastName);