class Zad23{

    form: HTMLFormElement;
    button: HTMLButtonElement;

    constructor(){
        const bodyRef = document.body;

        bodyRef.style.backgroundColor = "khaki"

        bodyRef.innerHTML =
        `
        <form class="form" id="myForm">

        <label for="id">Input1
        <input type="number" name="id" id="inp1"><br />
        </label>

        <label for="firstName" >Input2</label>
        <input type="text" name="firstName" id="inp2"><br />

        <label for="lastName">Input3</label>
        <input type="text" name="lastName" id="inp3"><br />

        <button type="submit" id="btn" class="btn"> Przeslij </button>
        </form>
        <style>
        .btn{margin-left:60px; margin-top:20px; width:100px;height:45px;}
        </style>
        `;

        this.form = (<HTMLFormElement>document.getElementById("myForm"));
        this.button = (<HTMLButtonElement>document.getElementById('btn'));
        
    }

    public getDataForm(){

        this.button.addEventListener("click", async function(e){  
        e.preventDefault();
        var formData = new FormData(this.form);
        const formDataSerial = Object.fromEntries(formData);
        const url = "http://localhost:9000/proceed"
        
        //AJAX solution
        const xhr = new XMLHttpRequest();

        xhr.onload = function () {
            console.log("server responsed")
        };
        xhr.open("POST",url);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(formDataSerial))

        //fetch api solution
        // try{
        //     const response = await fetch(url, {
        //         method: "POST",
        //         body: JSON.stringify(formDataSerial),
        //         headers: {
        //             "Content-Type" : "application/json",
        //         },
        //     });
        //     console.log(response);
        //     const json = await response.json();
        //     console.log(json);
        // } catch(e){
        //     console.error("errorrr",e)
        // }

        })
    }

}

function main23(){
    let zad23 = new Zad23()
    zad23.getDataForm();
}
main23();
