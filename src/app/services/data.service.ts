import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class DataService {
  loggedIn$ = new BehaviorSubject(false);
  showAddBtn$ = new BehaviorSubject(true);

  apiUrl = "https://todo-backend-production-0288.up.railway.app/api/todo";

  constructor(private _http: HttpClient){

  }

  getAllTodos(): Observable<any> {
    return this._http.get<any>(this.apiUrl);
  }

  createTodo(todo: any): Observable<any>{
    const headers = new HttpHeaders({
      Authorization: `Bearer jdsklfjdlksjfklsjlkjdsjflksj`
    })
    return this._http.post<any>(this.apiUrl, todo, {headers: headers} );
  }
}
