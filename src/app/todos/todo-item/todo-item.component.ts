import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppSate } from '../../app.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  todoForm!: FormGroup;
  editando: boolean = false;
  @ViewChild('input') inputText!: ElementRef;

  constructor(
    private formbuilder: FormBuilder,
    private store: Store<AppSate>
  ){
  }

  ngOnInit(): void {
    this.todoForm = this.formbuilder.group({
      completado: new FormControl(this.todo.completado),
      texto: new FormControl(this.todo.texto, Validators.required)
    })

    this.todoForm.get('completado')?.valueChanges.subscribe( valor =>{
      this.store.dispatch(actions.toggle({id: this.todo.id}))
    });
  }

  editar(){
    this.editando = true;
    this.todoForm.get('texto')?.setValue(this.todo.texto)
    setTimeout(() => {
      this.inputText.nativeElement.select();
    }, 2);
  }

  terminarEdicion(){
    this.editando = false;
    if(this.todoForm.get('texto')?.invalid){ return; }
    if(this.todoForm.get('texto')?.value === this.todo.texto){ return; }
    this.store.dispatch(
      actions.editar({
        id: this.todo.id,
        texto: this.todoForm.get('texto')?.value
      })
    );
  }

  borrar(){
    this.store.dispatch(actions.borrar({
      id: this.todo.id
    }))
  }
}