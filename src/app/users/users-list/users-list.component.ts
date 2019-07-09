import {Component, Input} from '@angular/core';

@Component({
  selector: 'm-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Input() users;
}
