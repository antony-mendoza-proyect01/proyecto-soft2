
import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { PaisState } from './state-pais.state';

export const selectPaisFeature = (state: AppState) => state.paisState;// TODO: PADRE

export const selectLoadingPais = createSelector(
  selectPaisFeature,
  (state: PaisState) => state.loading //TODO: HIJO
);

export const selectListPais = createSelector(
  selectPaisFeature,
  (state: PaisState) => state.pais //TODO: HIJO
);
