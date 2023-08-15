import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[TODO] Create Todo',
    props<{texto:string}>()
);

export const borrar = createAction(
    '[TODO] Delete Todo',
    props<{id:number}>()
);

export const borrarCompletados = createAction(
    '[TODO] Delete Todo Complete',
);

export const editar = createAction(
    '[TODO] Edit Todo',
    props<{id:number, texto: string}>()
);

export const toggle = createAction(
    '[TODO] Complete Todo',
    props<{id:number}>()
);

export const toggleAll = createAction(
    '[TODO] Complete all  Todo',
    props<{completed:boolean}>()
);



