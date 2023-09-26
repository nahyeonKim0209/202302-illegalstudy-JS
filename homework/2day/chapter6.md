## 6장 데이터 타입
### 과제 1) 2진수, 8진수, 16진수의 number type 출력
* number type을 모두 실수로 측정한다면 2진수, 8진수, 16진수를 출력할 때 어떻게 될까?
```
var binary = 0b01000001;
var octal = 0o101;
var hex = 0x41;

console.log(binary,octal,hex);

if(binary === hex) console.log(true);
if(binary === octal) console.log(true);
```

```
65 65 65
true
true
```
| 해설 : ECMAScript 기준으로 변수에 저장되는 숫자 값은 모두 실수 형태로 변환. 더불어 binary, hex, octal 모두 동일한 number 타입의 65라는 값이므로 true가 출력됨.

### 과제 2) 아래 비교문의 결과는 어떻게 나올까?
* number type을 모두 실수로 측정한다면 아래의 비교문의 결과는 어떻게 나올까?
```
console.log(1 === 1.0); //true
console.log(4 / 2); //2
console.log(3 / 2); //1.5
```
| 해설 : 1이나 1.0이나 JS에겐 동일한 실수 형태의 1임.

### 과제 3) 양의 무한대, 음의 무한대, NaN을 console을 이용해 도출하시오.
```
console.log(Infinity) //Infinity
console.log(Infinity + 1) //Infinity
```