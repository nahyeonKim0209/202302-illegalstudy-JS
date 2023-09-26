## 10장 객체 리터럴
### 과제 1) 아래의 코드를 실행하고 왜 그런 결과값이 나오는지 생각해보시오
**1. 1번 코드** 
```
var person = {
    firstName : 'turtle',
    'last-name' : 'park' 
}

console.log("1번: ", person);
```
```
1번:  { firstName: 'turtle', 'last-name': 'park' }
```
> last-name으로 키 값 설정 시 JS 식별자 네이밍 규칙에 어긋나 에러 발생. 'last-name' 또는 네이밍 규칙에 맞게 수정하여 실행

**2. 2번 코드**
```
var word1 = {
    var: '',
    function: ''
};

console.log("2번: ", word1);
``` 
```
{ var: '', function: '' }
```
> 프로퍼티 값은 JS에서 사용할 수 있는 모든 값이며, 빈 문자열 또한 값으로 취급하므로 정상적으로 출력

> 객체에서는 예약어도 키 값으로 사용 가능

**3. 3번 코드**
```
var objES5={}
var keyES5='ES5'
objES5[keyES5] = 'world';

console.log("3번: ",objES5);
```
```
{ ES5: 'world' }
```
> objES5는 빈 객체. 빈 객체에 프로퍼티 키로 keyES5의 값을 주고, 프로퍼티 값에는 'world'를 할당하여 프로퍼티 키를 동적으로 생성함

**4. 4번 코드**
```
var keyES6 = hell;
var objES6 = {[keyES6]: 'o'};

console.log("4번: ", objES6);
```
```
4번:  { HELL: 'o' }
```
> ES6 문법에서 추가된 계산된 프로퍼티 동적 생성. 대괄호 안에 키 값을 할당할 수 있다. 이 때 키 값은 '' 안에 묶어야 한다.

**5. 5번 코드**
```
var emptyObj = {
    '': ''
};

console.log("5번: ",emptyObj);
```
```
5번:  { '': '' }
```
> 프로퍼티 키 조건 : 빈 문자열을 포함한 모든 문자열, 심벌 값<br/>
> 프로퍼티 값 조건 : JS 사용하는 모든 값

**6. 6번 코드**
```
var numObj = {
    1: 0,
    2: 1, 
    3: 2
};

console.log("6번: ", numObj);
```
```
6번:  { '1': 0, '2': 1, '3': 2 }
```
> 프로퍼티 키가 숫자로 이루어진 경우 JS 엔진이 자동으로 ''처리를 하여 출력한다.

**7. 7번 코드**
```
var duplicateObj = {
    name: 'park',
    name: 'kim'
};

console.log("7번: ",duplicateObj);
```
```
7번:  { name: 'kim' }
```
> 존재하는 프로퍼티에 값을 재할당 -> 프로퍼티 값이 갱신됨


### 과제 2) 아래의 코드를 실행해보시오.
```
var wind = {
    'last-name' : 'park',
    1:10
};

wind.'last-name';
wind.last-name;

wind[last-name];
wind['last-name'];

wind.1;
wind.'1';
wind[1];
wind['1'];
```
- wind.'last-name';
> 마침표 프로퍼티 접근 연산자 사용 시 따옴표 사용 불가

- wind.last-name;
> JS 식별자 네이밍 규칙에 어긋나므로 따옴표 없이는 키 값을 읽을 수 없음

- wind[last-name];
> 대괄호 프로퍼티 접근 연산자 사용 시 프로퍼티 키 네임을 무조건 ''로 감싸야 함

- wind['last-name'];
```
park
```

- wind.1;
> 숫자로 이루어진 키의 경우 JS 엔진에 의해 '숫자 키'의 형식으로 치환되며, 마침표 프로퍼티는 따옴표 사용 불가

- wind.'1';
> 마침표 프로퍼티는 따옴표 사용 불가

- wind[1];
```
10
```
> 숫자로 이루어진 키의 경우 JS 엔진에 의해 '숫자 키'의 형식으로 치환되어 정상 출력

- wind['1']
```
10
```