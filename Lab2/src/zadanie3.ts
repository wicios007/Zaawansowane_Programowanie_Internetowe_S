const array2: number[] = [1,2,3,4,5,6,7,8,9]
var result2 = array2.filter(x => x>5)
              .reduce((x,y) => x+y)
console.log(result2)

