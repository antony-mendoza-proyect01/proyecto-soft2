import {createReducer, on} from '@ngrx/store';
import { PaisState} from './state-pais.state';
import {getAllPais, getAllPaisFailure, getAllPaisSuccess, initPais} from './state-pais.actions';

// Estado inicial de las variables
export const initialState: PaisState = {
  loading: true,
  pais: [],
};

// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const PaisReducer = createReducer(
  initialState,
  on(initPais, (state) => {
    return {...state, loading: false, pais: []}
  }),
  // get all
  on(getAllPais, (state) => {
    return {...state, loading: true, pais: []}
  }),
  on(getAllPaisSuccess, (state, {pais}) => {
    return {...state, loading: false, pais}
  }),
  on(getAllPaisFailure, (state, { error}) => {
    return {...state, loading: false, error: error}
  }),



);
