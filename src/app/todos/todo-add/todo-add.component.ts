import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppSate } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  todoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppSate>
  ){
    this.todoForm = this.formBuilder.group({
      texto: new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  agregar(){
    if (this.todoForm.get('texto')?.invalid){
     return;
    }
    this.store.dispatch(actions.crear({texto: this.todoForm.get('texto')?.value}));
    this.todoForm.reset();
  }

}
