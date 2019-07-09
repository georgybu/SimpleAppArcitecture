/**
 * Based on
 * https://github.com/bennadel/JavaScript-Demos/tree/master/demos/simple-store-set-state-angular6
 */
import {BehaviorSubject, Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

export class SimpleStore<StateType = any> {
  private stateSubject: BehaviorSubject<StateType>;

  constructor(initialState: StateType) {
    this.stateSubject = new BehaviorSubject(initialState);
  }

  public getState(): Observable<StateType> {
    return this.stateSubject.pipe(distinctUntilChanged());
  }

  public getStateSnapshot(): StateType {
    return this.stateSubject.getValue();
  }

  public select<K extends keyof StateType>(key: K): Observable<StateType[K]> {
    var selectStream = this.stateSubject.pipe(
      map((state: StateType) => {
        return state[key];
      }),
      distinctUntilChanged()
    );

    return selectStream;
  }

  public setState(partialState: Partial<StateType>): void {
    var currentState = this.getStateSnapshot();
    var nextState = Object.assign({}, currentState, partialState);

    this.stateSubject.next(nextState);
  }
}
