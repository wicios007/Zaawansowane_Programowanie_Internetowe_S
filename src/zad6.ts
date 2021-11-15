export function base6(tablica_string:string[]) {
    var result = tablica_string.map(x => parseInt(x)).filter(x => !isNaN(x)).reduce((x,y) => x+y)
    console.log(result);
}