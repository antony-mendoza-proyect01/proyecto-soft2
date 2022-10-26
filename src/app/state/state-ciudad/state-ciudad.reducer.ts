import {createReducer, on} from '@ngrx/store';
import {CiudadState} from './state-ciudad.state';
import {
  getAllCiudadByPais,
  getAllCiudadByPaisFailure,
  getAllCiudadByPaisSuccess,
  initCiudad
} from './state-ciudad.actions';

// Estado inicial de las variables
export const initialState: CiudadState = {
  loading: true,
  ciudad: [],
};

// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const CiudadReducer = createReducer(
  initialState,
  on(initCiudad, (state) => {
    return {...state, loading: false, ciudad: []}
  }),
  // get all
  on(getAllCiudadByPais, (state) => {
    return {...state, loading: true, ciudad: []}
  }),
  on(getAllCiudadByPaisSuccess, (state, {ciudad}) => {
    return {...state, loading: false, ciudad}
  }),
  on(getAllCiudadByPaisFailure, (state, { error}) => {
    return {...state, loading: false, error: error}
  }),



);
