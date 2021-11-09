function greaterThan1(y){
    return x => x>y
}
const array3: number[] = [1,2,3,4,5,6,7,8,9]

var result3 = array3.filter(greaterThan1(5))
              .reduce((x,y) => x+y)
console.log(result3)