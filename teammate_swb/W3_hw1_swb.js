// 가장 아래의 코드가 실행 되었을 때, “Passed ~” 가 출력되도록 getAge 함수를 채워주세요
/* 기존 객체 */
let user = {
    name: "john",
    age: 20,
}

/* 깊은 복사 함수 */
// 이번 문제에선 복제할 객체가 중첩 객체가 아니기 때문에 얕은 복사로도 요구하는 답을 얻을 수 있지만,
// 개념 이해하고 연습할 겸 굳이 깊은 복사로 확실히 해결해보기로 했음
let deepCopy_obj = function (key) {
    let result = {};
    // 상위 객체의 프로퍼티가 참조형 데이터고 값이 비어있지 않으면
    if (typeof key === 'object' && key !== null) {
        // 하위 객체의 프로퍼티에 접근해 복사하는데 만약 또 하하위객체가 있으면 재귀 실행
        for (let lower_key in key) {
            result[lower_key] = deepCopy_obj(key[lower_key]);
        }
    } else {
        // 상위 객체의 프로퍼티가 기본형 데이터면 그냥 복사
        result = key;
    }
    // 깊은 복사 완료된 객체 반환
    return result;
}

let getAged = function (user, passedTime) {
    // 복제 객체 생성
    let copied_obj = deepCopy_obj(user);
    // 복제 객체의 age 속성에 passedTime 더해줌
    copied_obj.age += passedTime;
    // 복제 객체 반환
    return copied_obj;
}

let agedUser = getAged(user, 6);

let agedUserMustBeDifferentFromUser = function (user1, user2) {
    if (!user2) {
        console.log("Failed! user2 doesn't exist!");
    } else if (user1 !== user2) {
        console.log("Passed! If you become older, you will be different from you in the past!")
    } else {
        console.log("Failed! User same with past one");
    }
}

agedUserMustBeDifferentFromUser(user, agedUser);