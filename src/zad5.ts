export function base5(tablica:number[], num_upper:number){
    function greaterThen(y){
        return x => x>y
    }

    function curry2<T1,T2,T3,T4>(func:(arg1:T1, arg2:T2) => T3){
        return (a1:T1) => (a2:T2) => func(a1,a2);
    }
    
    var result = tablica.filter(curry2(greaterThen)(num_upper)).reduce((x,y) => x+y)
    console.log(result)
      }
      