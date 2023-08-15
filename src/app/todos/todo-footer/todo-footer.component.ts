import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppSate } from 'src/app/app.reducer';
import * as actionsFilters from '../../filter/filter.actions';
import * as actionsTodos from '../../todos/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {
  actualFilter: actionsFilters.validFilters = 'todos';
  filters: actionsFilters.validFilters[] = [ 'todos', 'completados', 'pendientes', ];
  pendientes!: number;

  constructor(private store: Store<AppSate>){}

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.actualFilter = state.filter
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    });
  }

  changeFilter(selectedFilter: actionsFilters.validFilters){
    this.store.dispatch(actionsFilters.setFilter({filter: selectedFilter}))
  }

  deleteCompletes(){
    this.store.dispatch(actionsTodos.borrarCompletados());
  }

}
