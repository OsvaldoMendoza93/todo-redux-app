import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppSate } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { validFilters } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  arrayTodos: Array<Todo> = [];
  actualFilter!: validFilters;

  constructor(
    private store: Store<AppSate>
  ){
  }
  
  ngOnInit(): void {
    this.store.subscribe(({todos, filter}) => {
      this.arrayTodos = todos;
      this.actualFilter = filter;
    })
  }

}
