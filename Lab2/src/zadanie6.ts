const array6: string[] = ["Ala", "1", "Ewa", "12.4"]

var result6 = array6.map(x => parseInt(x)).filter(x => !isNaN(x)).reduce((x,y) => x+y)

console.log(result6)