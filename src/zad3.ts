export function base3(tablica:number[], num_upper:number){
  let func : (tab:number[], num_upper:number) => number;

  func = function (tab:number[], num_upper:number):number {
    let sum: number = 0;
    for(let i=0; i<9; i++){
      if(tab[i] > num_upper) sum = sum + tab[i];
    }
    return sum;
  };

  console.log(func(tablica, num_upper));
}
