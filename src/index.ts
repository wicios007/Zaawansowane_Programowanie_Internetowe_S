const table:number[] = [1,2,3,4,5,6,7,8,9]
//zad 1-2
function Table(): number[]
{
 const Values: number[] = [1,2,3,4,5,6,7,8,9]
 return Values;
}
function add(table: number[]): number {
    let sum = 0
    var result = table.filter(x=>x%2==0)
                      .reduce((a,x)=>a+x,0)
    return result
}
//zad 3-4
function greaterThan(y)
{
    return(x)=>x<y
}
//zad 5
function curry2<T1,T2,T3>(fn:(arg1:T1,arg2:T2)=>T3)
{
    return (arg1:T1)=>(arg2:T2)=>fn(arg1,arg2)
}
var result = table.filter(curry2(greaterThan)(3))
.reduce((a,x)=>a+x);
console.log(result)
//zad 6
const stringArray:string[] = ["Ala","1","Ewa","12.4"]
var numbersArray:number[] =[]
function notZero(element,index,array)
{
    return (element>0);
}
for (let entry of stringArray)
{
    var results=entry.replace(/[^\d\.]*/g,'');
    numbersArray.push(Number(results))
    var test =numbersArray.filter(notZero)
}
console.log(test);