export class Zad21{
    
    constructor() {
        
        fetch('./data.json')
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
        
    }
}