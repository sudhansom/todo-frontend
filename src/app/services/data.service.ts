import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, of } from "rxjs";

import { ITodo, IResponse, IDataResponse } from "../types/types";


@Injectable({
  providedIn: 'root',
})

export class DataService {

  loggedIn$ = new BehaviorSubject(!!(localStorage.getItem('loggedIn')));
  showAddBtn$ = new BehaviorSubject(true);
  token$ = new BehaviorSubject('');
  userId$ = new BehaviorSubject(localStorage.getItem('id'));

  apiUrl = "https://todo-backend-production-0288.up.railway.app/api/todo";
  userUrl ="https://todo-backend-production-0288.up.railway.app/api/users/login";// ** login only

  constructor(private _http: HttpClient){

  }

  getAllTodos(): Observable<IDataResponse> {
    return this._http.get<IDataResponse>(this.apiUrl);
  }

  createTodo(todo: ITodo): Observable<IResponse>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token$.value}`
    })
    return this._http.post<IResponse>(this.apiUrl, {...todo, user: this.userId$.value}, {headers: headers} );
  }
  editTodo(id: string, todo: ITodo): Observable<{success: boolean, message: string}>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token$.value}`
    })
    return this._http.put<IResponse>(`${this.apiUrl}/${id}`, {...todo, user: this.userId$.value}, {headers: headers} );
  }

  deleteTodo(id: string): Observable<IResponse>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token$.value}`
    })
    return this._http.delete<IResponse>(`${this.apiUrl}/${id}`, {headers: headers} );
  }

  loginUser(user: any): Observable<any> {
    return this._http.post<any>(this.userUrl, user)
  }
}
