import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { validFilters } from '../filter/filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: validFilters): Todo[] {
   switch (filtro) {
    case 'completados':
      return todos.filter(todo => todo.completado);
    case 'pendientes':
      return todos.filter(todo => !todo.completado);
    default:
      return todos;
   }
  }

}
