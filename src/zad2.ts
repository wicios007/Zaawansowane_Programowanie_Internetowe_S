var array = [1, 2, 3, 4, 5, 6, 7, 8];
var result = array.filter(x=>x%2 == 0)
                .reduce((a,x)=>a+x);
console.log(result);