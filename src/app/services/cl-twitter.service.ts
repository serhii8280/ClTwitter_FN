import { Injectable } from '@angular/core';
import { Observable, of, throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const baseurl = "http://localhost:3000";

@Injectable({
  providedIn: 'root'
})
export class ClTwitterService {
  
  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  post(params) {
    const url = baseurl + '/post';
    return this.http.post<any>(url, params, httpOptions).pipe(
      tap(heroes => console.log(`fetched login`)),
      catchError(this.handleError('', []))
    );
  }
}
