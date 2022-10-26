import {createReducer, on} from '@ngrx/store';
import { EstadoContratoState} from './state-estado-contrato.state';
import {
  getAllEstadoContrato,
  getAllEstadoContratoFailure,
  getAllEstadoContratoSuccess,
  initEstadoContrato
} from './state-estado-contrato.actions';


// Estado inicial de las variables
export const initialState: EstadoContratoState = {
  loading: true,
  estadoContrato: [],
};

// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const EstadoContratoReducer = createReducer(
  initialState,
  on(initEstadoContrato, (state) => {
    return {...state, loading: false, estadoContrato: []}
  }),
  // get all
  on(getAllEstadoContrato, (state) => {
    return {...state, loading: true, estadoContrato: []}
  }),
  on(getAllEstadoContratoSuccess, (state, {estadoContrato}) => {
    return {...state, loading: false, estadoContrato}
  }),
  on(getAllEstadoContratoFailure, (state, { error}) => {
    return {...state, loading: false, error: error}
  }),



);
