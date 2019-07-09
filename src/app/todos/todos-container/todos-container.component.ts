import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DataProviderService} from '../../services/data-provider.service';

@Component({
  selector: 'm-todos-container',
  templateUrl: './todos-container.component.html',
  styleUrls: ['./todos-container.component.scss']
})
export class TodosContainerComponent implements OnInit {
  public todos$: Observable<any>;

  constructor(private dataProvider: DataProviderService) {
    this.todos$ = this.dataProvider.getTodos();
  }

  ngOnInit() {
    // you can fetch `todos` onInit();
  }

  onLoadClick($event) {
    this.dataProvider.fetchTodos();
  }
}
