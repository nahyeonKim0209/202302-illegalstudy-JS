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