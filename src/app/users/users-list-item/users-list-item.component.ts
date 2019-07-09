import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'm-users-list-item',
  templateUrl: './users-list-item.component.html',
  styleUrls: ['./users-list-item.component.scss']
})
export class UsersListItemComponent implements OnInit {
  @Input() user;
  constructor() {}

  ngOnInit() {}
}
