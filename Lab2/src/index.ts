// zad 1 - 6
function createTable(): number[] {
    const tableofValues: number[] = [1,2,3,4,5,6,7,8,9]
    return tableofValues;
}
function showResult(result : number) : void {
    console.log(result)
}
function addElements(table: number[]): number {
    let sum = 0
    table.forEach(function(item) {
        //if(item%2 == 0) zad2
        //if(item>val) 
        sum+=item
    })
    return sum
}
function greaterThan(table: number[], val: number): number[] {
    let newTab: number[] = []
    table.forEach(function(item){
        if(item > val) {newTab.push(item) }
    })
    return newTab
}

// let zad1 = showResult(addElements(createTable()))
// let action = () => zad1
//let zad3 = showResult(addElements(createTable(), 6))
let zad4 = showResult(addElements(greaterThan(createTable(),5)))
//console.log(zad4)


