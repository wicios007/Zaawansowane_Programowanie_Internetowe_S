interface IPerson{
    first_name: string
    last_name: string,
    email?: string
}


export class Zad23 {
    constructor() {
        const bodyRef = document.body;
        bodyRef.innerHTML = 
            `<table id="personTable">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                <tr>
            </table>
            `;

        const tableRef: HTMLTableElement = <HTMLTableElement> document.getElementById('personTable');

        fetch('./dane.json')
            .then(res => res.json())
            .then(data => {
                const persons: IPerson[] = data.map(x =>x as IPerson)
                console.log([...persons]);
                persons.forEach(p => {
                    const row: HTMLTableRowElement = tableRef.insertRow();
                    Object.keys(p).forEach(key => {
                        const td:HTMLTableCellElement = document.createElement('td');
                        td.innerText = p[key];
                        row.appendChild(td);
                    });   
                })
            })
    }
}