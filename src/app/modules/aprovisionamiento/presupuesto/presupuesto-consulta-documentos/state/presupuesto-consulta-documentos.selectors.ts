
import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import {ConsultaDocumentosState} from "./presupuesto-consulta-documentos.state";

export const selectConsultaDocumentosFeature = (state: AppState) => state.ConsultaDocumentosState;// TODO: PADRE


export const selectPaginatorConsultaDocumentos = createSelector(
  selectConsultaDocumentosFeature,
  (state: ConsultaDocumentosState) => state.paginator //TODO: HIJO
);

export const selectEditConsultaDocumentos = createSelector(
  selectConsultaDocumentosFeature,
  (state: ConsultaDocumentosState) => state.edit //TODO: HIJO
);

export const selectDocumentosConsultaDocumentos = createSelector(
  selectConsultaDocumentosFeature,
  (state: ConsultaDocumentosState) => state.documentos //TODO: HIJO
);

export const selectDocumentosFiltroConsultaDocumentos = createSelector(
  selectConsultaDocumentosFeature,
  (state: ConsultaDocumentosState) => state.documentosFiltro //TODO: HIJO
);

export const selectLoadingDocumentosFormatosConsultaDocumentos = createSelector(
  selectConsultaDocumentosFeature,
  (state: ConsultaDocumentosState) => state.loadingDocumentos //TODO: HIJO
);
