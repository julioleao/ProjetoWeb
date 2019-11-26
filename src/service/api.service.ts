import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Task } from 'src/model/task';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:3000/api/task';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(apiUrl)
      .pipe(
        tap(tasks => console.log('leu as tarefas')),
        catchError(this.handleError('getTasks', []))
      );
  }

  getTask(id: number): Observable<Task> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Task>(url).pipe(
      tap(_ => console.log(`leu a tarefa id=${id}`)),
      catchError(this.handleError<Task>(`getTask id=${id}`))
    );
  }

  addTask(task): Observable<Task> {
    return this.http.post<Task>(apiUrl, task, httpOptions).pipe(
      tap((t: Task) => console.log(`adicionou tarefa com w/ id=${t.id}`)),
      catchError(this.handleError<Task>('addTask'))
    );
  }

  updateTask(id, task): Observable<Task> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, task, httpOptions).pipe(
      tap(_ => console.log(`atualiza a tarefa com id=${id}`)),
      catchError(this.handleError<any>('updateTask'))
    );
  }

  deleteTask(id): Observable<Task> {
    const url = `${apiUrl}/delete/${id}`;

    return this.http.delete<Task>(url, httpOptions).pipe(
      tap(_ => console.log(`remove a tarefa com id=${id}`)),
      catchError(this.handleError<Task>('deleteTask'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }

}
