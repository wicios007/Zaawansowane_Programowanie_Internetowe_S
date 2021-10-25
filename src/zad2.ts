export function base2(){
  let tablica_liczb: number[] = [1,2,3,4,5,6,7,8,9];
  
  let func : (tab:number[]) => number;

  func = function (tab:number[]):number {
    let sum: number = 0;
    for(let i=0; i<9; i++){
      if(tab[i]%2==0) {
        sum = sum + tab[i];
      }
    }
    return sum;
  };

  console.log(func(tablica_liczb));
}
