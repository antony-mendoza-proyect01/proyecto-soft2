import {createAction, props} from '@ngrx/store';
import {TareasPresupuesto} from '../../../../../data/models/tareas-presupuesto';
import {ConsultaTareasPresupuesto} from '../../../../../data/structures/consulta-tareas-presupuesto';
import {Formato} from '../../../../../data/models/formatos';
import {GenerarDocumentos} from '../../../../../data/structures/generarDocumentos';
import {Documentos} from '../../../../../data/models/documentos';

export enum ConsultaDocumentosActionsNames {
  Init = '[ConsultaDocumentos] Init',

  PostConsultaDocumentos = '[ConsultaDocumentos] [Api] Post Consulta Documentos ',
  PostConsultaDocumentosSuccess = '[ConsultaDocumentos] [Api] Post Consulta Documentos  Success',
  PostConsultaDocumentosFailure = '[ConsultaDocumentos] [Api] Post Consulta Documentos  Failure',

  SortConsultaDocumentos = '[ConsultaDocumentos] [Action] Sort',
  FilterConsultaDocumentos = '[ConsultaDocumentos] [Action] Filter',
  PaginatorConsultaDocumentos = '[ConsultaDocumentos] [Action] Paginator',

}

export const initConsultaDocumentos = createAction( ConsultaDocumentosActionsNames.Init);

export const postConsultaDocumentos = createAction(
  ConsultaDocumentosActionsNames.PostConsultaDocumentos,
  props<{ consulta: ConsultaTareasPresupuesto }>()
);

export const postConsultaDocumentosSuccess = createAction(
  ConsultaDocumentosActionsNames.PostConsultaDocumentosSuccess,
  props<{ documentos: Documentos[] , documentosFiltro: Documentos[] }>()
);

export const postConsultaDocumentosFailure = createAction(
  ConsultaDocumentosActionsNames.PostConsultaDocumentosFailure,
  props<{  error: string   }>()
);

export const sortConsultaDocumentos = createAction(
  ConsultaDocumentosActionsNames.SortConsultaDocumentos,
  props<{ column: any, direction: any}>()
);

export const filterConsultaDocumentos = createAction(
  ConsultaDocumentosActionsNames.FilterConsultaDocumentos,
  props<{ filtro: string}>()
);

export const paginatorConsultaDocumentos = createAction(
  ConsultaDocumentosActionsNames.PaginatorConsultaDocumentos,
  props<{ paginator: number}>()
);
