import {Component, Input} from '@angular/core';

@Component({
  selector: 'm-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent {
  @Input() todos;
}
