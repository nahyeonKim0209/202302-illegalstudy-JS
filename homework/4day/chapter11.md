1. 밑의 코드를 실행해보고 이유를 생각해보시오.

```jsx
const original = [
    [18, 18, 18, 18],
    [19, 19, 19, 19],
    [20, 20, 20, 20],
    [21, 21, 21, 21],
    ];
    const copy = original.slice();//copy에 original 객체의 Array를 복사
    console.log(JSON.stringify(original) === JSON.stringify(copy)); //->true
		//original의 문자열과 copy의 문자열은 동일함(그야 전체 복사를 했으니까.)

    copy[0][0] = 99;
    copy[2].push("02");
		//복사한 객체의 값을 변환

    console.log(JSON.stringify(original) === JSON.stringify(copy)); //->true
		//True 출력. original과 copy의 인스턴스 변수는 서로 같은 메모리 주소를 공유함.
		//즉, 객체를 부르는 단어는 두 가지지만 출력되는 값은 하나의 메모리를 공유하므로,
		//original과 copy는 서로 같은 값을 가짐(True 출력)

    console.log(original);
    console.log(copy);
```

1. 밑에 있는 코드들을 실행해보고 이유를 생각해보시오.

```jsx
const obj={a:1};
const newObj = Object.assign({},obj);//newObj에 빈 객체와 obj를 병합한 값 입력-> 깊은 복사

newObj.a=2; //newObj의 값 변경

console.log(obj); //obj의 값은 1로 유지
console.log(obj===newObj); //obj=1, newObj=2 -> false출력

const obj2={
    a:1,
    b:{
        c:2,
    },
};

const newObj2 = Object.assign({}, obj2);//newObj2에 obj2의 객체를 복사
//빈 객체와 obj2의 값인 a:1, b:{}를 병합 -> 깊은 복사 진행
//b의 값인 c:2는 깊은 복사 대상이 아니므로 참조만 해옴 

newObj2.b.c=3; //newObj2의 값을 변경

console.log(obj2); //obj2의 값 3으로 변경(2차원 객체는 assign()을 사용하면 얕은 복사)
console.log(obj2.b.c === newObj2.b.c);// -> true 출력
```

1. 밑에 있는 코드들을 실행해보고 이유를 생각해보시오.

```jsx
const obj = { a: 1 };
const newObj = Object.assign({}, obj);
newObj.a = 2;
console.log(obj); //-> 1
console.log(obj === newObj); //->2
//1차원 객체는 assign()을 사용하면 깊은 복사가 이루어지므로 false 출력
```

```jsx
const obj = {
    a: 1,
    b: {
    c: 2,},
};
const newObj = { ...obj };
newObj.b.c = 3;
console.log(obj);
console.log(obj.b.c === newObj.b.c); // ->true
//2번과 동일하게 2차 이상의 객체에서는 얕은 복사가 이루어짐
```

1. 아래의 함수를 동작시켜보시오.

```jsx
function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
	    return obj;
    } //obj가 null이거나 object 타입이 아닐 경우 === object 타입이 아닌 모든 경우에 -> obj 반환
    let copy = {};
    for (let key in obj) {
	    copy[key] = deepCopy(obj[key]); //copy에 obj의 값을 복사
    }
    return copy;
}

const obj = {
	a: 1,
  b: {
    c: 2,
	},
  func: function () {
    return this.a;
  },
};

const newObj = deepCopy(obj); //newObj에 obj 값 복사

newObj.b.c = 3;

console.log(obj); // { a: 1, b: { c: 2 }, func: [Function: func] } //깊은 복사가 이루어져 원형 그대로 출력
console.log(obj.b.c === newObj.b.c); //false -> newObj.b.c의 값은 3이 되었으므로 false
```

1. Lodash 라이브러리와 cloneDeep 메서드에 대해 조사
- Lodash 라이브러리
    - Lodash 라이브러리란?
        - 일반적으로 array, collection, date 등의 데이터 구조를 다루기 위해 사용
        - 배열 안의 객체 값을 다루는 데에 유용(배열, 객체 및 문자열 반복/ 복합 함수 생성 등)
    - 사용 예
        - 배열, 숫자, 객체, 문자열 등을 순회하며 각 요소마다 원하는 기능 실행
        - dobounce, throttle과 같은 구현하기 번거로운 함수 제공
- cloneDeep 메서드
    - Lodash 라이브러리를 사용해 객체를 복사하는 메서드
    - 2차원 이상의 객체를 깊은 복사를 수행하고자 할 때 사용 가능
    - ladash 라이브러리를 설치해야 하나 그 이외 단점 없음

1. 얕은 복사 깊은 복사 다른 언어
- Kotlin
    - 얕은 복사
        - ‘=’
            - 참조 연산자 활용하여 얕은 복사 가능
        - data class,  copy() 메서드
            - data class 안에 기본 타입(byte, short, int, long, float, double, char, string)만 있는 경우 → 깊은 복사
            - data class 안에 기본 타입 이외 다른 타입도 존재할 경우 → 얕은 복사
    - 깊은 복사
        - data class, copy()  메서드
            - 위에서 기술한 바와 같이 data class 안에 기본 타입만 있을 경우 깊은 복사 가능
        - Cloneable
            - Cloneable 인터페이스를 상속 받아 clone() 메서드 오버라이딩 → 깊은 복사
            - 단, 기본형이 아닌 변수는 깊은 복사가 되지 않음
        - Gson 라이브러리
            - toJson 메소드를 사용하여 지정한 타입의 데이터를 json 형식으로 변환
            - fromJson 메서드를 사용하여 해당 데이터를 다시 data class 형식으로 변환 → 깊은 복사
