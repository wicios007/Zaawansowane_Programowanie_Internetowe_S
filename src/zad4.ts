export function base4(tablica:number[], num_upper:number){
function greaterThen(y){
    return x => x>y
}

var result3 = tablica.filter(greaterThen(num_upper))
              .reduce((x,y) => x+y)
console.log(result3)
  }
  