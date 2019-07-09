import { Injectable } from '@angular/core';
import { SimpleStore } from './simple.store';
import { ApiService } from './api.service';
import { map, catchError } from 'rxjs/operators';
import { throwError, pipe, Observable } from 'rxjs';

/**
 * this interface is common and comes from mGrid
 */
export interface IAsyncResult<T> {
  loading: boolean;
  loaded?: boolean;
  data: T;
  error: any;
  meta?: any;
  status?: any;
}

interface IStore {
  users: IAsyncResult<any>;
  todos: IAsyncResult<any>;
}

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  private store = new SimpleStore<IStore>({
    users: { loading: false, data: null, error: null },
    todos: { loading: false, data: null, error: null }
  });

  constructor(private api: ApiService) {}

  getUsers(): Observable<any> {
    return this.store.select('users');
  }

  fetchUsers() {
    this.store.setState({ users: { loading: true, data: null, error: null } });
    const tranformData = resposne => {
      // you can tranform your like, like in @Effect. this is optional
      return resposne.map(({ id, name }) => ({ id, name }));
    };
    this.api
      .fetchUsers()
      .pipe(this.httpEffect('users', tranformData))
      .subscribe();
  }

  getTodos(): Observable<any> {
    return this.store.select('todos');
  }

  fetchTodos() {
    this.store.setState({ todos: { loading: true, data: null, error: null } });
    this.api
      .fetchTodos()
      .pipe(this.httpEffect('todos'))
      .subscribe();
  }

  private httpEffect(dataKey = 'unknown', effectFn: (r: any) => any = null) {
    return pipe(
      map(result => {
        const data = effectFn ? effectFn(result) : result;
        this.store.setState({
          [dataKey]: { loading: false, data, error: null }
        });
        return result;
      }),
      catchError(error => {
        this.store.setState({
          [dataKey]: { loading: false, data: null, error }
        });
        return throwError('Error thrown from catchError');
      })
    );
  }
}
