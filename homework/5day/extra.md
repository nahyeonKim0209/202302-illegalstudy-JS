### 추가 1번) commonJS와 ES6차이점을 조사해보자.

- CommonJS : NodeJS 환경을 위해 만들어진 모듈 시스템
    - ``exports``, ``module.exports`` 키워드로 내보내기 가능
    - ``required``를 통해 모듈 불러오기 가능
    - 특징
        - 불러오기를 수행하는 require 키워드가 동기 방식으로 동작 -> promise를 return하지 않음
        - 실행 전까지 import,export 에러 감지 불가
        - top-level await 불가 
- ES Module : ES6에 도입된 자바스크립트 모듈 시스템
    - ``named export``, ``default export`` 키워드로 내보내기 가능
    - ``import``하여 모듈 불러오기 가능(개발자가 지정한 파일을 entry point로 지정, 나머지 파일은 import 문을 따라가며 찾음.)
    - 특징
        - 모듈을 비동기 환경에서 다운로드, import export 구문을 찾아 파싱
        - 실행해보지 않아도 import, export 에러 감지 가능
        - top-level await 가능

### 추가 2번) callback 지옥을 해결하기 위한 예방법 혹은 대체법 찾아오기.
- Promise, async/await, Generator 등의 방법으로 대체 가능
1. Promise
    - 비동기 처리에 사용되는 객체
    - 비동기 작업의 성공과 실패 유무에 따라 다른 함수를 처리
        - 에러/예외 처리의 어려움 해결
        - 중첩으로 인한 복잡도 증가 해결
    - Pending(대기), Fulfilled(이행), Rejected(실패)의 세 가지 상태를 가짐
    ```
    const promise = new Promise((resulve, reject)=>{
        //처리 내용
    })

    promise.then(
        //resolve 호출 시 then 실행
    ).catch(
        //reject 호출 시 catch 실행
    ).finally(
        //콜백 작업 종료 시 무조건 실행
    )
    ```
2. async&await
    - 비동기식 코드를 동기식으로 표현하여 간단하게 나타내는 처리
    - Promise 코드가 장황하다는 점 보완하기 위해 도입
    - promise 객체를 반환(= then을 사용할 수 있다.)

```
async function 함수명(){
    await 비동기_처리_메서드_명()
}
//async : function 앞에 위치. 해당 함수는 항상 프로미스 반환
//await : async 함수 안에서만 동작. await 키워드를 만날 시 프로미스 처리를 기다리고 결과는 그 이후 반환
```