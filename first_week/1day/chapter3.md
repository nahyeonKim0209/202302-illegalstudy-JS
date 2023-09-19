## 4장 변수
### 과제 1) 아래의 코드를 실행한 값을 알아오시오. 그리고 그 이유도.

* 코드_1
```
console.log(a)
var a;
a=11;
console.log(a);
```
* 결과값_1
```
undefined
11
```
* 코드_2
```
console.log(a);
a=10;
var a;
console.log(a);
```
* 결과값_2 
```
undefined
10
```
| 해설 : 런타임 이전 단계에서 변수 선언문인 var a가 먼저 실행되었기 때문. <span style="color:yellowgreen">(변수 호이스팅)</span>

### 과제 2) 헝가리안 케이스에 대해서 알아오시오
1. 변수명 앞에 자료형을 붙이는 표기법
```
int intMath=50;
string strName="뭉";
```
2. 장점
    1. 변수의 이름만으로 변수의 자료형을 파악할 수 있음.
3. 단점
    1. 변수의 자료형이 바뀔 때마다 변수명을 바꿔야 함.