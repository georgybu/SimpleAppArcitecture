import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timeout, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  fetchUsers() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(delay(2000));
  }

  fetchTodos() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/todos')
      .pipe(delay(2000));
  }
}
