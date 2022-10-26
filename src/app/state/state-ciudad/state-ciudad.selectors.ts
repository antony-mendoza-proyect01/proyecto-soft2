import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import {CiudadState} from './state-ciudad.state';

export const selectCiudadFeature = (state: AppState) => state.ciudadState;// TODO: PADRE

export const selectLoadingCiudad = createSelector(
  selectCiudadFeature,
  (state: CiudadState) => state.loading //TODO: HIJO
);

export const selectListCiudad = createSelector(
  selectCiudadFeature,
  (state: CiudadState) => state.ciudad //TODO: HIJO
);
