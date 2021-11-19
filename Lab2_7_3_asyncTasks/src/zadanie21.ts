class Zad21{

        constructor(){
            fetch('data.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        }
}

function mainn(){
    let test = new Zad21();

}

mainn()