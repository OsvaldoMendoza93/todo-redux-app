import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './filter.actions';
import { validFilters } from './filter.actions';

export const initialState: validFilters = 'todos';

const _filterReducer = createReducer<validFilters, Action>(
    initialState,
    on(actions.setFilter, (state, {filter}) => filter),
);

export function filterReducer(state: any, actions: any){
    return _filterReducer(state, actions)
}