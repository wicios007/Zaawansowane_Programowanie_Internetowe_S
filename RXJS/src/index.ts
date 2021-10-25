
import {from,filter,map} from 'rxjs'




    let array:Array<number>=[3,4,5,6,7,8];
    let array2:Array<number>=[5,4,7,6,9,8];
    let suma=0;
    let suma2=0;
    let suma5=0;
    array.map(e=>{
        suma+=e;
        return suma;
    })

    array.map(e=>{
        if(e%2==0){
        suma5+=e;
        return suma5;
    }
    })
        console.log(`Sumpa pierwsz array.map() :${suma}`);
        console.log(`Suma5 pierwsz array.map() tylko parzyste :${suma5}`);

    from(array2)
        .pipe(
            filter(v=> v%2==0),
        )
        .subscribe(v=>(suma2+=v));
        
    console.log(`Suma 2 from(array): ${suma2}`);

    let suma4 =0;
    
from(array2)
    .pipe(
        filter(v=> v > 3),
    )
    .subscribe(v=>(suma4+=v));
    
console.log(`Suma 4 from(array) Wieksze od danej liczby(3): ${suma4}`);


function wiekszaOd(liczba:number):(dane:Array<number>)=>number{
    return (dane)=>{
        return 3;
    }
}



