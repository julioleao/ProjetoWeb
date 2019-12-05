import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Task } from 'src/model/task';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:3000/task';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(apiUrl);
  }

  getTask(id: number): Observable<Task> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Task>(url);
  }

  addTask(task): Observable<Task> {
    return this.http.post<Task>(apiUrl, task, httpOptions);
  }

  updateTask(id, task): Observable<Task> {
    const url = `${apiUrl}/${id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  deleteTask(id): Observable<Task> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Task>(url, httpOptions);
  }

}
