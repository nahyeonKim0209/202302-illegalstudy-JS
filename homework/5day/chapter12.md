## 12장 함수
### 과제 1) 아래의 빈칸과 서로 차이점을 서술하시오
```
function add(x,y) {// x, y -> 매개변수
    return x+y;
}
add(2,6)//2, 6 -> 인수
```
- 매개변수 : 인수가 건넨 값을 함수 내부로 전달하기 위한 변수
- 인수 : 함수를 호출할 때 함수로 값을 전달하기 위한 값

### 과제 2) 본인이 생각하기에 이상적인 개발자는 어떤 형태인가?
- **함께 일하고 싶은 개발자**
- 1인 개발이란 단어는 허상이라고 생각한다. 아주 작고 개인적인 프로젝트 개발에 있어서는 1인 개발이 가능할 지 모르겠으나, 프로젝트를 서비스하기 위해서는 필연적으로 협업이 발생한다.
- 다시 말해, 개발자는 항상 타인과 소통해야 하는 위치에 있는 직업이다.
- 소통을 잘 하는 동료와는 도움을 주고 받는데에 거리낌이 없다. 소통을 잘 하는 고용인은 믿음직하고 신뢰성이 높다. 즉, 함께 일하고 싶어지는 개발자는 일을 얻을 기회, 스스로의 기술을 발전시킬 기회, 업무를 효율적으로 진행할 수 있는 기회 모두 얻을 수 있을 테고 때문에 가장 이상적인 형태의 개발자라 생각한다.

 
### 과제 3) 선언문에서는 함수 이름을 생략할 수 없다. 만약 함수 이름을 생략하면 나오는 에러는 어떤 건지 확인해보세요.

```
SyntaxError: Function statements require a function name
```
- 식별자 부재에 관한 오류 발생

### 과제 4) {}는 블록문일까 객체 리터럴일까?
- 본인의 생각을 쓰고 그 이유에 대해 서술하시오.
1. 블록문과 객체 리터럴
    1. 블록문: 중괄호{}로 둘러싸인 코드의 영역. 0개 이상의 구문을 묶을 때 사용.
    2. 객체 리터럴: 중괄호{}로 감싸진 하나 이상의 속성 이름과 속성 값의 리스트
    ``` 
    const info={
        name: '박거북',
        age: '삼천갑자동박사'
    } //객체 리터럴
    ```

2. 중괄호를 어떻게 해석할 지에 대해서는 해당 위치에서 중괄호가 어떤 역할로 사용되는 지를 확인해볼 필요가 있다.
    1. 0개 이상의 구문을 묶기 위해 사용(주로 제어문에서 사용) -> 블록문
    2. 속성 이름과 값을 가지는 리스트를 표현하기 위해 사용 -> 객체 리터럴
        - 이 경우 값으로 평가되기 때문에 괄호 뒤 세미콜론(;) 사용

### 과제 5) 에러 이유 찾기
```
var add1 = (function() {
    var a = 10;
    return function (x, y){
        return x+y+a;
    };
}());

console.log(add1(1,2))//13

var add2 = function(){
    var a = 10;
    return new Function('x','y','return x+y+a;')
}();

console.log(add2(1,2))
```
- var a를 정의한 시점이 ``new Function``의 생성자 함수가 생성되기 이전이라 참조할 수 없음. 


### 과제 6) 아래 함수를 실행해보고 결과 값을 적으시오.
1.
```
function add(x,y){
    console.log(x,y);
    return x+y;
}

add(2,5);

console.log(x,y);
```
```
ReferenceError: x is not defined
```

2. 
```
function add2(x,y){
    return x+y;
}
console.log(add2(2));
```
```
NaN
```
- y의 값이 undefined이므로 2+undefined = NaN 출력

3.
```
function add3(x,y){
    console.log(arguments);
    return x+y;
}
console.log(add3(2,5,10));
```
```
[Arguments] { '0': 2, '1': 5, '2': 10 }
7
```
- arguments : 모든 함수 내에서 이용 가능한 지역 변수
- 함수 내에서 사용 가능한 수 : 매개 변수로 배정받은 x=2, y=5

### 과제 7) Call by Reference, Call by Value
1. Call by Reference(Call by Sharing)
    1. **참조에 의한 호출**
    2. 함수 호출 시 받은 인자가 **참조 타입**이면 인자의 *메모리 주소*값을 복사하여 매개변수로 전달
    3. 원본 값이 함수의 영향을 받음

2. Call by Value
    1. **값에 의한 호출**
    2. 함수 호출 시 받은 인자가 **원시 타입**이면 *원본 값*을 그대로 복사하여 매개변수로 전달
    3. 원본 값이 함수의 영향 받지 않음

### 과제 8) 재귀함수로 팩토리얼을 구현해보시오.
```
let facto = 1;

function factorial(num){
    if(num<1) {
        console.log(facto);
        return;
    }
    facto = facto*num;
    factorial(num-1);
}

factorial(20);
```

### 과제 9) callback 지옥을 만들어보고 왜 위험한지 서술하시오.
```
function sum(a,b){
    return a+b;
} 

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function cal(a,b,f){
    console.log(f(a,b));
}

cal(3,5,sum);
cal(3,5,sub);
cal(3,5,mul);
```
* JS는 비동기 처리의 특성을 지님
    - A B의 순서로 작성된 코드를 동작시킬 경우 B는 A의 동작이 완료될 때까지 기다리지 않고, A가 진행되는 동안 B를 막무가내로 진행함. 즉, **A의 값을 토대로 B를 진행해야 하는 코드에서 오류 발생**
* 이를 방지하기 위해 CallBack 함수 등장
    - A 함수에 B를 매개변수로 전달 -> A의 로직이 모두 종료된 후 B 함수가 진행되도록 순서 조정 가능
* callBack 지옥?
    - 그러나 웹 개발 진행 시 callback이 callback을 물어 depth가 계속 깊어지는 코드 작성할 때 있음.
    - ex) A(B) -> B(C) -> C(D)와 같이 필요에 의해 callback이 반복될 수 있으나, 코드 가독성이 현저하게 떨어짐.

### 과제 10) 아래의 코드 중 어떤 것이 순수 함수/비순수 함수인지에 대해 서술하시오.

```
var count = 0;

function increase(n){
    return ++n;
}

count= increase(count);
console.log(count);

count=increase(count);
console.log(count);
```
* 순수 함수
    - increase 함수는 n이라는 매개변수의 값을 받아, n의 값을 변경시킬 뿐 이외 함수 외부적 요건을 변경시키지는 않음.

```
var count = 0;

function increase(){
    return ++count;
}

count= increase(count);
console.log(count);

count=increase(count);
console.log(count);
```
* 비순수 함수
    - increase 함수는 함수 외부에 있는 count라는 값을 직접적으로 변경시킴.
    - 만일 외부 환경이 달라진다면(count 변수 -> avg 변수로 변경) 비순수 함수인 increase는 count에 의존하고 있으므로 정상적으로 작동하지 못함.