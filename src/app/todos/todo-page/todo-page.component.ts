import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppSate } from 'src/app/app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent {
  completeAll: boolean = false;

  constructor(
    private store: Store<AppSate>
  ){}

  toggleAll(){
    this.completeAll = !this.completeAll;
    console.log(this.completeAll)
    this.store.dispatch(actions.toggleAll({completed: this.completeAll}));
  }
}
