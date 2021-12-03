interface IPerson{
    id : number,
    first_name : string,
    last_name : string,
}

export class Zad22{
    
    constructor() {
        
        var body = document.body;
        body.innerHTML = `<table id='data-table'>
            <tr>
                <th>Id</th>
                <th>FirstName</th>
                <th>LastName</th>
            </tr>
        </table>`

        var table = document.getElementById('data-table') as HTMLTableElement


        fetch('./data.json')
            .then(response => response.json())
            .then(data => {
                var persons : IPerson[] = data.map(x => x as IPerson)
                console.log([...persons]);
                persons.forEach((person : IPerson) =>{
                    var row = table.insertRow()
                    Object.keys(person).forEach(key => {
                        var td = document.createElement('td')
                        td.innerText = person[key]
                        td.style.borderTop = "2px solid black" 
                        row.appendChild(td)
                    })
                })
            })
        
    }
}