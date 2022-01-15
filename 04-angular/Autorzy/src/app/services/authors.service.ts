import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { IAuthor } from '../interfaces/IAuthor';
@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  ApiURL : string
  
  authors : IAuthor[]

  constructor(private http: HttpClient) {
    this.ApiURL = "https://localhost:5001/"
    this.authors = []
    this.getAll().subscribe(data => this.authors = data).unsubscribe()
    // this.getAll().subscribe(data => this.authors = data)

   }



  getAll(){
    return this.http.get<IAuthor[]>(`${this.ApiURL}Authors`)
    //  {headers: this.headers}
  }

  delete(id : number){
    // return this.http.delete(`${this.ApiURL}Authors/${id}`)
    return this.http.delete(`https://localhost:5001/Authors/${id}`)
  }
  getById(id : number){
    return this.http.get<IAuthor>(`${this.ApiURL}Authors/${id}`)
  }

  create(author : IAuthor){
    return this.http.post(`${this.ApiURL}Authors`, author)
  }

  edit(id : number, author : IAuthor){
    return this.http.put(`${this.ApiURL}Authors/${id}`, author)
  }

}
