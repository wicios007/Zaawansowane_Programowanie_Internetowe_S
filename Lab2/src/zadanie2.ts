const array1: number[] = [1,2,3,4,5,6,7,8,9];
var result1 = array1.filter(x => x%2 == 0)
            .reduce((x,y) => x+y)
console.log(result1)
