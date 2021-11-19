class Zad22{
    table: HTMLTableElement
    constructor(){
        this.table = (<HTMLTableElement>document.getElementById("person"));

        fetch("data.json")
        .then(res => res.json())
        .then(data => {
            let personsT: [] = data.map(x => x)
            console.log([...personsT])
            personsT.forEach(x => {
                let row :HTMLTableRowElement = this.table.insertRow();
                console.log("row",row)
                console.log(Object.keys(x))
                Object.keys(x).forEach(key => {
                    let td:HTMLTableCellElement = document.createElement("td");
                    console.log("td",td)
                    //console.log("xkey",x[key])
                    td.innerHTML = x[key]
                    console.log("xkey",x[key], "x", x)
                    row.appendChild(td);
                })
            })
        })
    }
}

function main(){

let test = new Zad22();

}

main()