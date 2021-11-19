import {combineLatest, from, observable, throwError} from "rxjs"
import {retry, map, catchError, tap} from "rxjs/operators"

class Zad24{
    constructor(){
        function loadData(address: string){

        return new Promise<string>((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.open("GET",address);
        xhr.addEventListener("load", function() {
            if (xhr.status < 400)
            resolve(xhr.responseText);
            else if (xhr.status == 404){
              reject("Error 404: page not found asshole");
            }
            else
              throwError("Request failed: " + xhr.statusText);
          });
        xhr.onerror = () => reject("reject");
        xhr.send();
        });
    }
        let source = loadData("http://localhost:9000/error")

        combineLatest(source)
        .subscribe({
            next: v => console.log(v),
            error: () => console.error("Blad 404: strona nie zostala odnaleziona"),
            complete: () => console.log("Completed")
        })
    }

}
function main4(){
    var zad24 = new Zad24()

}
main4()