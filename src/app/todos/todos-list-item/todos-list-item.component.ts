import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'm-todos-list-item',
  templateUrl: './todos-list-item.component.html',
  styleUrls: ['./todos-list-item.component.scss']
})
export class TodosListItemComponent implements OnInit {
  @Input() todo;
  constructor() {}

  ngOnInit() {}
}
