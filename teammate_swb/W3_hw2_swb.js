// 출력의 결과를 제출해주세요, 그리고 그 이유를 최대한 상세히 설명해주세요
// 주의사항 : 브라우저에서 테스트해주세요

/* 코드 하단에 출력 시도별로 설명 기재!! */

var fullname = 'Ciryl Gane'

var fighter = {
    fullname: 'John Jones',
    opponent: {
        fullname: 'Francis Ngannou',
        getFullname: function () {
            return this.fullname;
        }
    },

    getName: function() {
        return this.fullname;
    },

    getFirstName: () => {
        return this.fullname.split(' ')[0];
    },

    getLastName: (function() {
        return this.fullname.split(' ')[1];
    })()

}

/* 브라우저 실행 결과 */
// Not Francis Ngannou VS John Jones
// It is John Jones VS Ciryl Gane

console.log('Not', fighter.opponent.getFullname(), 'VS', fighter.getName());
/* 객체 fighter의 프로퍼티인 opponent가 getFullname을 메서드로 호출했기 때문에, 호출 주체를 바인딩하는 메서드 내부 this의 특성에 따라 
getFullname의 this는 opponent를 가리킴. 따라서 opponent.fullname의 값인 "Francis Ngannou"를 반환 */

/* 객체 fighter가 getName을 메서드로 호출했기 때문에, 호출 주체를 바인딩하는 메서드 내부 this의 특성에 따라
getName의 this는 fighter를 가리킴. 따라서 fighter.fullname의 값인 "John Jones"를 반환 */

console.log('It is', fighter.getName(), 'VS', fighter.getFirstName(), fighter.getLastName);
/* 객체 fighter가 getName을 메서드로 호출했기 때문에, 호출 주체를 바인딩하는 메서드 내부 this의 특성에 따라 
getName의 this는 fighter를 가리킴. 따라서 fighter.fullname의 값인 "John Jones"를 반환 */

/* 객체 fighter가 getFirstName을 메서드로 호출했지만, 이 메서드는 화살표함수로 표현됐기 때문에 this가 호출 주체로 바인딩되지 않음. 
따라서 getFirstName의 this는 전역 객체를 그대로 가리키고 있기 때문에, 전역 공간의 fullname인 "Ciryl Gane"에 split을 적용, 
분할돼 생긴 두 문자열 중 인덱스 값이 0인 "Ciryl"을 반환 */

/* 객체 fighter가 getLastName을 메서드로 호출했지만, 
이 메서드가 반환할 내용이 내부함수 꼴이고, 별도의 명시적 바인딩이 없는 상태기 때문에, getLastName의 this는 전역 객체를 가리킴. 
따라서 전역 공간의 fullname인 "Ciryl Gane"에 split을 적용, 분할돼 생긴 두 문자열 중 인덱스 값이 1인 "Gane"을 반환 */