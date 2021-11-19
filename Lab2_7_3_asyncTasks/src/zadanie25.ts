import {combineLatest, of, throwError} from "rxjs"
import {retry, catchError, tap,map} from "rxjs/operators"
import {ajax} from 'rxjs/ajax'

class Zad25{
    constructor(){
    //     function loadData(address: string){

    //     var promise = new Promise<string>((resolve, reject) => {

    //     const xhr = new XMLHttpRequest();

    //     xhr.open("GET",address);
    //     xhr.addEventListener("load", function() {
    //         if (xhr.status < 400)
    //         resolve(xhr.responseText);
    //         else if (xhr.status == 500){
    //           reject(promise.then(x => x));
    //         }
    //         else
    //           throwError("Request failed: " + xhr.statusText);
    //       });
    //     xhr.onerror = () => reject("rejected");
    //     xhr.send();
    //     });
    //     return promise
    // }
    //     let source = loadData("http://localhost:9000/error1")

    //     combineLatest(source).pipe(
    //     catchError(error => {
    //         console.warn("error w catchu");
    //         return throwError(error);
    //     }),
    //     retry(3)
    //     )
    //     .subscribe({
    //         next: v => console.log("next", v),
    //         error: () => console.error("error! Internal Server Error "),
    //         complete: () => console.log("Completed")
    //     })

    ajax({
        url: "http://localhost:9000/error1",
        method: "GET"
    }).pipe(
        map(response => console.log("server responsed")),
        catchError(error => {
            return throwError(error)
        }),
        retry(3)
    ).subscribe({
        error: (e) => console.warn("BŁĄD", e),
    })

    }

}
function main4(){
    var zad25 = new Zad25()

}
main4()