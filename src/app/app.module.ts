import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {UsersContainerComponent} from './users/users-container/users-container.component';
import {UsersListComponent} from './users/users-list/users-list.component';
import {UsersListItemComponent} from './users/users-list-item/users-list-item.component';
import {TodosContainerComponent} from './todos/todos-container/todos-container.component';
import {TodosListComponent} from './todos/todos-list/todos-list.component';
import {TodosListItemComponent} from './todos/todos-list-item/todos-list-item.component';
import {LoaderComponent} from './shared/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersContainerComponent,
    UsersListComponent,
    UsersListItemComponent,
    TodosContainerComponent,
    TodosListComponent,
    TodosListItemComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
