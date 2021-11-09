const array4: number[] = [1,2,3,4,5,6,7,8,9]

function greaterThan2(y){
    return x => x>y
}

function curry2<T1,T2,T3,T4>(func:(arg1:T1, arg2:T2) => T3){
    return (a1:T1) => (a2:T2) => func(a1,a2);
}

var result4 = array4.filter(curry2(greaterThan2)(5)).reduce((x,y) => x+y)
console.log(result4)

