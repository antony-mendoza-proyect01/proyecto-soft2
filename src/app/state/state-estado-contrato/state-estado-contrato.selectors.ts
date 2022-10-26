import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import {EstadoContratoState} from './state-estado-contrato.state';

export const selectEstadoContratoFeature = (state: AppState) => state.estadoContratoState;// TODO: PADRE

export const selectLoadingEstadoContrato = createSelector(
  selectEstadoContratoFeature,
  (state: EstadoContratoState) => state.loading //TODO: HIJO
);

export const selectListEstadoContrato = createSelector(
  selectEstadoContratoFeature,
  (state: EstadoContratoState) => state.estadoContrato //TODO: HIJO
);
