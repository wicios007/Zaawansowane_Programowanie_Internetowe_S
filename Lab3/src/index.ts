import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';




const serwer$ = ajax('http://localhost:9000/data.json')
    .pipe(map(x => console.log(x.response)))


const subs = serwer$.subscribe(x => console.log(x))