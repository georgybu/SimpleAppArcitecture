import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DataProviderService} from '../../services/data-provider.service';

@Component({
  selector: 'm-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss']
})
export class UsersContainerComponent implements OnInit {
  public users$: Observable<any>;

  constructor(private dataProvider: DataProviderService) {
    this.users$ = this.dataProvider.getUsers();
  }

  ngOnInit() {
    // you can fetch `users` onInit();
  }

  onLoadClick($event) {
    this.dataProvider.fetchUsers();
  }
}
