import { from } from "rxjs";
const tab = [1,2,3,4,5,6,7,8,9,10];

for(var i=0; i<tab.length; i++)
{
    console.log("Tab ["+i+"]: "+tab[i]);
}

function z1(){
    let sum = 0;
    for (var i=0; i<tab.length; i++)
    {
        sum = sum + tab[i];
    }
    console.log("Sum of Tab Z1: "+sum);
}

function z2(){

    let sum = 0;
    for (var i=0; i<tab.length; i++)
    {
        if (tab[i] % 2 == 0)
        {
            sum = sum + tab[i];
        }
        
    }
    console.log("Sum of Tab Z2: "+sum);
}

function z3(){
    let sum = 0;
    let greaterthan = 3;
    for (var i=0; i<tab.length; i++)
    {
        if (tab[i] > greaterthan)
        {
            sum = sum + tab[i];
        }
    }
    console.log("Sum of Tab Z3: "+sum);
}

function greaterthanz4(par:number){
    let sum = 0;
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

z1();
z2();
z3();
z4();