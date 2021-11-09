//zad 1 - 4
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

let zad4_compose = <T2, T3, T4, T5>(
                    f1:() => T2,
                    f2:(arg: T2, arg2:number) => T3,
                    f3:(arg: T3) => T4,
                    f4:(arg: T4) => T5) => f4(f3(f2(f1(), 6)))

let zad4_compose_action = zad4_compose(createTable,greaterThan,addElements, showResult);


// zad 5

// function createTable(): number[] {
//     const tableofValues: number[] = [1,2,3,4,5,6,7,8,9]
//     return tableofValues;
// }
// function showResult(result : number) : void {
//     console.log(result)
// }
// function addElements(table: number[]): number {
//     let sum = 0
//     table.forEach(function(item) {
//         sum+=item
//     })
//     return sum
// }

// function greaterThan(val: number) : (table: number[]) => number[] {
//     return (table: number[]) => {
//         table.forEach(function(item){
//             if(item > val) {
//                 table.push(item)}
//             else{
//                 table.shift()}
//         })
//      return table
//     }
// }

// function curry2<T1, T2, T3> (fn:(arg1:T1, arg2:T2) => T3) {
//             return (a1:T1) => (a2:T2)  => fn(a1,a2)
// }

// let curring = curry2(greaterThan)


