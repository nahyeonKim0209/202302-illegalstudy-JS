## 2장 JS란
### 과제 1) 아래의 내용에 대해 알아오시오.


1. **Ajax**에 대해서 알아오시오.
    1. Asynchronous JavaScript and XML
    2. 자바스크립트를 이용해 클라이언트와 서버 간에 XML 데이터를 주고받는 *비동기 HTTP 통신* 기술
    3. 빠르게 동작하는 동적인 웹 페이지를 만들기 위한 기법
    4. 장점
        1. XMLHttpRequest(XHR) 객체를 이용하여 전체 페이지가 아닌 필요한 데이터만 불러올 수 있음(웹 페이지 및 웹 페이지 전환 속도 향상)
        2. 필요한 데이터만 불러올 수 있으므로 페이지 전체를 일일이 코딩할 필요 없음(전체 코드 양 감소)
    5. 단점
        1. CORS 정책으로 외부로의 요청이 어려움
        2. 히스토리 관리 불가 및 보안 이슈
        3. JS 사용량 증가 → JQuery를 통해 보완 가능
2. **jQuery**에 대해서 알아오시오.
    1. 자바스크립트를 쉽게 활용할 수 있도록 도와주는 오픈소스 기반의 자바스크립트 라이브러리
        1. <div style="border:1px solid #c4c4c4; border-radius:5px; color:yellowgreen;padding:5px; background-color:#f5f5f5">write less, do more</div>
    2. <span style="color:yellowgreen"></span>
    2. 장점
        1. 주요 웹 브라우저의 구버전을 포함한 다양한 웹 브라우저 대한 폭넓은 지원
        2. HTML DOM 조작 용이 + 간단한 CSS 적용 가능
        3. JS와 같은 동작을 하는 프로그램을 훨씬 간결한 코드로 작성 가능
    3. 단점
        1. 순수 JS 코드에 비해 현저히 느린 속도
3. **V8** 엔진에 대해서 알아오시오.
    1. V8은 웹 브라우저를 만드는 데 기반을 제공하는 오픈 소스 자바스크립트 엔진
        1. JS 엔진 : JS코드를 컴퓨터가 이해할 수 있도록 기계어로 변환하고 실행하는 프로그램 or 인터프리터
    2. 자바스크립트의 <span style="color:yellowgreen"> 수행 속도 개선</span>을 위해 개발
        1. 인터프린터 방식 대신 Just In Time 컴파일러 사용
        2. 코드 실행 시에 JS 코드를 머신 코드로 컴파일
    2. 사용처
        1. Google Chrome
        2. Node.js
        3. Android 브라우저
4. **Node.js**에 대해서 알아오시오.
    1. <div style="border:1px solid #c4c4c4; border-radius:5px; color:yellowgreen;padding:5px; background-color:#f5f5f5">Node.js 는 Chrome V8 Javascript 엔진으로 빌드된 Javascript 런타임입니다.</div>
    2. <span style="color:yellowgreen"></span>
    2. JS로 작성된 프로그램을 브라우저 이외의 환경에서 실행하기 위한 런타임(실행 환경)
    3. *단일 스레드, 이벤트 기반 비동기 방식, 논블로킹 I/O 등의 특징*
5. **SPA 프레임워크**의 뜻을 알아오시오.
    1. Single Page Application 프레임워크
    2. 최초 한 번만 웹 페이지를 로드하고 이후로는 *변경 사항이 일어나는 부분만*을 Ajax 등의 기술을 통해 바인딩


### 과제 2) V8 엔진에 대해서 정리해보시오
1. Javascript의 수행 속도를 개선하기 위해 C++을 통해 개발된 브라우저 엔진
2. JIT(Just In Time) 컴파일 사용
    1. 동적 컴파일이라고도 부름
    2. 원시 프로그램을 중간 코드 생성 단계까지는 컴파일 기법으로 동작, 중간 코드를 실행하는 과적은 인터프리터 기법으로 동작하는 **하이브리드 기법**
3. 참고 자료
    + [V8 엔진이 대체 뭐야](https://velog.io/@remon/V8-%EC%97%94%EC%A7%84%EC%9D%B4-%EB%8C%80%EC%B2%B4-%EB%AD%90%EC%95%BC)