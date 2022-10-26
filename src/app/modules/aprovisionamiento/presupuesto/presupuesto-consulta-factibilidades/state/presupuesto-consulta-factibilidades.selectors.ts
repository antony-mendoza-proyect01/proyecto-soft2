
import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import {ConsultaFactibilidadesState} from "./presupuesto-consulta-factibilidades.state";

export const selectConsultaFactibilidadesFeature = (state: AppState) => state.ConsultaFactibilidadesState;// TODO: PADRE

export const selectListConsultaFactibilidades = createSelector(
  selectConsultaFactibilidadesFeature,
  (state: ConsultaFactibilidadesState) => state.tareasPresupuesto //TODO: HIJO
);

export const selectConsultaFactibilidadesFiltro = createSelector(
  selectConsultaFactibilidadesFeature,
  (state: ConsultaFactibilidadesState) => state.tareasPresupuestoFiltro //TODO: HIJO
);

export const selectLoadingConsultaFactibilidades = createSelector(
  selectConsultaFactibilidadesFeature,
  (state: ConsultaFactibilidadesState) => state.loadingTareasPresupuesto //TODO: HIJO
);

export const selectPaginatorConsultaFactibilidades = createSelector(
  selectConsultaFactibilidadesFeature,
  (state: ConsultaFactibilidadesState) => state.paginator //TODO: HIJO
);

export const selectEditConsultaFactibilidades = createSelector(
  selectConsultaFactibilidadesFeature,
  (state: ConsultaFactibilidadesState) => state.edit //TODO: HIJO
);

export const selectConsultaConsultaFactibilidades = createSelector(
  selectConsultaFactibilidadesFeature,
  (state: ConsultaFactibilidadesState) => state.consulta //TODO: HIJO
);

export const selectFormatosConsultaFactibilidades = createSelector(
  selectConsultaFactibilidadesFeature,
  (state: ConsultaFactibilidadesState) => state.formatos //TODO: HIJO
);

export const selectLoadingFormatosConsultaFactibilidades = createSelector(
  selectConsultaFactibilidadesFeature,
  (state: ConsultaFactibilidadesState) => state.loadingFormatos //TODO: HIJO
);

export const selectDocumentosConsultaFactibilidades = createSelector(
  selectConsultaFactibilidadesFeature,
  (state: ConsultaFactibilidadesState) => state.documentos //TODO: HIJO
);

export const selectLoadingDocumentosFormatosConsultaFactibilidades = createSelector(
  selectConsultaFactibilidadesFeature,
  (state: ConsultaFactibilidadesState) => state.loadingDocumentos //TODO: HIJO
);
