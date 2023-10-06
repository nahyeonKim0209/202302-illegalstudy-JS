/*function add1(x,y){
    console.log(x,y);
    return x+y;
}

add1(2,5);
console.log(x,y);*/

function add2(x,y){
    console.log(x);
    console.log(y);
    console.log(x+y);
    return x+y;
}
console.log(add2(2));

function add3(x,y){
    console.log(x);
    console.log(y);
    console.log(arguments);
    return x+y;
}
console.log(add3(2,5,10));