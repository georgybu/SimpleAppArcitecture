import {Component, Input} from '@angular/core';

@Component({
  selector: 'm-users-list-item',
  templateUrl: './users-list-item.component.html',
  styleUrls: ['./users-list-item.component.scss']
})
export class UsersListItemComponent {
  @Input() user;
}
