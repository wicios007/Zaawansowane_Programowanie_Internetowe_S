export class Zad21 {
    constructor() {

        fetch('./dane.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
}