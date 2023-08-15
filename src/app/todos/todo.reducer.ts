import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial:Todo[] = [
    new Todo('Salvar el mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar traje de Ironman')
];

const _todoReducer = createReducer(
    estadoInicial,
    on(actions.crear, (state, {texto}) => {
        return [...state, new Todo(texto)]
    }),
    on(actions.editar, (state, {id, texto,}) => {
        return state.map( todo => {
            if(todo.id === id){
                return {
                    ...todo,
                    texto: texto
                }
            }else{
                return todo
            }
        })
    }),
    on(actions.borrar, (state, {id}) =>  state.filter(todo => todo.id !== id) ),
    on(actions.borrarCompletados, state => state.filter(todo => !todo.completado) ),
    on(actions.toggle, (state, {id}) => {
        return state.map( todo => {
            if(todo.id === id){
                return {
                    ...todo,
                    completado: !todo.completado
                }
            }else{
                return todo
                
            }
        })
    }),
    on(actions.toggleAll, (state, {completed}) => {
        return state.map( todo => {
            return{
                ...todo,
                completado: completed
            }
        })
    }),
);

export function todoReducer(state: any, actions: any){
    return _todoReducer(state, actions)
}
 