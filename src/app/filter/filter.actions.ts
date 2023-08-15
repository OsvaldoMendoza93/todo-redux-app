import { createAction, props } from '@ngrx/store';

export type validFilters = 'completados' | 'todos' | 'pendientes';

export const setFilter = createAction(
    '[FILTER] Set Filter',
    props<{filter: validFilters}>()
);