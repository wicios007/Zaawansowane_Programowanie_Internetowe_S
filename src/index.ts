function hello() {
    console.log("Witaj w swiecie Typescript");

    

}
hello();
function zad1() {
    var tab = [1,2,3,4,5,6]
    var sum = tab.reduce(function(a:number, b:number){return a + b})
    console.log(sum)
}
zad1()
function Parzyste(tab:number[])
{
    for(let i=0; i<tab.length;i++)
    {
        if(tab[i]%2==1)
        {
            tab[i]
        }
    }
}
function zad() {
    var tab = [1,2,3,4,5,6]
    var sum = tab.filter(function(a:number, i:number, tab:number[]){return a>7})
    
    console.log(sum)
}

