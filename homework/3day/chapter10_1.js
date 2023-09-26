//1번
var person = {
    firstName : 'turtle',
    'last-name' : 'park' 
}

console.log("1번: ", person);

//2번
var word1 = {
    var: '',
    function: ''
};

console.log("2번: ", typeof word1);

//3번
var objES5={}
var keyES5='ES5'
objES5[keyES5] = 'world';

console.log("3번: ",objES5);

//4번
var keyES6 = 'HELL';
var objES6 = {[keyES6]: 'o'};

console.log("4번: ", objES6);

//5번
var emptyObj = {
    '': ''
};

console.log("5번: ",emptyObj);

//6번
var numObj = {
    1: 0,
    2: 1, 
    3: 2
};

console.log("6번: ", numObj);

//7번
var duplicateObj = {
    name: 'park',
    name: 'kim'
};

console.log("7번: ",duplicateObj);