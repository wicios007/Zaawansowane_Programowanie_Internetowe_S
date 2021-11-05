import { from } from "rxjs";
const tab = [1,2,3,4,5,6,7,8,9,10];

for(var i=0; i<tab.length; i++)
{
    console.log("Tab ["+i+"]: "+tab[i]);
}

function z1(){
    let sum = tab.reduce((a,x)=>a+x,0);
    // for (var i=0; i<tab.length; i++)
    // {
    //     sum = sum + tab[i];
    // }
    console.log("Sum of Tab Z1: "+sum);
}

function z2(){

    let sum = tab.filter(x=>x%2 == 0).reduce((a,x)=>a+x);

    // for (var i=0; i<tab.length; i++)
    // {
    //     if (tab[i] % 2 == 0)
    //     {
    //         sum = sum + tab[i];
    //     }
        
    // }
    console.log("Sum of Tab Z2: "+sum);
}

function z3(){
    
    let greaterthan = 3;
    let sum = tab.filter(x=>x>greaterthan).reduce((a,x)=>a+x);
    // for (var i=0; i<tab.length; i++)
    // {
    //     if (tab[i] > greaterthan)
    //     {
    //         sum = sum + tab[i];
    //     }
    // }
    console.log("Sum of Tab Z3: "+sum);
}

function greaterthanz4(par:number){
    let sum = 0;
    tab.reduce(function(previousValue, currentValue, index, array) {
        return previousValue + currentValue;
      }, );

    for (var i=0; i<tab.length; i++)
    {
        if (tab[i] > par)
        {
            sum = sum + tab[i];
        }
    }
    console.log("Sum of Tab Z4: "+sum);
}

function z4(){
    greaterthanz4(5);   

}

function greaterthanv2(x,y){
    return x<y;
}

function curry2<T1, T2, T3>(fn:(arg1:T1, arg2:T2)=>T3){
    return (a1:T1)=>(a2:T2)=>fn(a1,a2);
}

function z5(){
    var result = tab.filter(curry2(greaterthanv2)(5))
    .reduce((a,x)=>a+x);
    console.log("Sum of Tab Z5: "+ result)
}

z1();
z2();
z3();
z4();
z5();