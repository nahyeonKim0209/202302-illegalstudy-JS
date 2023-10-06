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