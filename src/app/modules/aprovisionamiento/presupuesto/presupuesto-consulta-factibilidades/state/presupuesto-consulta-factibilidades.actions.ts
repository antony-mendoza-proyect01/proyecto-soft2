import {createAction, props} from '@ngrx/store';
import {TareasPresupuesto} from '../../../../../data/models/tareas-presupuesto';
import {ConsultaTareasPresupuesto} from '../../../../../data/structures/consulta-tareas-presupuesto';
import {Formato} from '../../../../../data/models/formatos';
import {GenerarDocumentos} from '../../../../../data/structures/generarDocumentos';
import {Documentos} from '../../../../../data/models/documentos';

export enum ConsultaFactibilidadesActionsNames {
  Init = '[ConsultaFactibilidades] Init',

  PostTareasPresupuestoConsultaFactibilidades = '[ConsultaFactibilidades] [Api] Post Tareas Presupuesto',
  PostTareasPresupuestoConsultaFactibilidadesSuccess = '[ConsultaFactibilidades] [Api]  Post Tareas Presupuesto Success',
  PostTareasPresupuestoConsultaFactibilidadesFailure = '[ConsultaFactibilidades] [Api]  Post Tareas Presupuesto Failure',

  SortConsultaFactibilidades = '[ConsultaFactibilidades] [Action] Sort',
  FilterConsultaFactibilidades = '[ConsultaFactibilidades] [Action] Filter',
  PaginatorConsultaFactibilidades = '[ConsultaFactibilidades] [Action] Paginator',

  VerTareaPresupuestoConsultaFactibilidades = '[ConsultaFactibilidades] [Api] Ver Tarea  Presupuesto',
  VerTareaPresupuestoConsultaFactibilidadesSuccess = '[ConsultaFactibilidades] [Api]  Ver Tareas Presupuesto Success',
  VerTareaPresupuestoConsultaFactibilidadesFailure = '[ConsultaFactibilidades] [Api]  Ver Tareas Presupuesto Failure',

  GetFormatosByCiudadPresupuestoConsultaFactibilidades = '[ConsultaFactibilidades] [Api] Formatos By Ciudad  Presupuesto',
  GetFormatosByCiudadPresupuestoConsultaFactibilidadesSuccess = '[ConsultaFactibilidades] [Api] Formatos By Ciudad Presupuesto Success',
  GetFormatosByCiudadPresupuestoConsultaFactibilidadesFailure = '[ConsultaFactibilidades] [Api] Formatos By Ciudad Presupuesto Failure',

  FormatoPresupuestoModalPresupuestoConsultaFactibilidadesSuccess = '[ConsultaFactibilidades] [Action] Formato Presupuesto Modal Success',
  FormatoPresupuestoModalPresupuestoConsultaFactibilidadesFailure = '[ConsultaFactibilidades] [Action] Formato Presupuesto Modal Failure',

  GenerarDocumentosPresupuestoConsultaFactibilidades = '[ConsultaFactibilidades] [Api] Generar Documentos',
  GenerarDocumentosPresupuestoConsultaFactibilidadesSuccess = '[ConsultaFactibilidades] [Api] Generar Documentos Success',
  GenerarDocumentosPresupuestoConsultaFactibilidadesFailure = '[ConsultaFactibilidades] [Api] Generar Documentos Failure',

}

export const initConsultaFactibilidades = createAction( ConsultaFactibilidadesActionsNames.Init);

export const postTareasPresupuestoConsultaFactibilidades = createAction(
  ConsultaFactibilidadesActionsNames.PostTareasPresupuestoConsultaFactibilidades,
  props<{ consulta: ConsultaTareasPresupuesto }>()
);

export const postTareasPresupuestoConsultaFactibilidadesSuccess = createAction(
  ConsultaFactibilidadesActionsNames.PostTareasPresupuestoConsultaFactibilidadesSuccess,
  props<{ tareasPresupuesto: TareasPresupuesto[] , tareasPresupuestoFiltro: TareasPresupuesto[] }>()
);

export const postTareasPresupuestoConsultaFactibilidadesFailure = createAction(
  ConsultaFactibilidadesActionsNames.PostTareasPresupuestoConsultaFactibilidadesFailure,
  props<{  error: string   }>()
);

export const sortConsultaFactibilidades = createAction(
  ConsultaFactibilidadesActionsNames.SortConsultaFactibilidades,
  props<{ column: any, direction: any}>()
);

export const filterConsultaFactibilidades = createAction(
  ConsultaFactibilidadesActionsNames.FilterConsultaFactibilidades,
  props<{ filtro: string}>()
);

export const paginatorConsultaFactibilidades = createAction(
  ConsultaFactibilidadesActionsNames.PaginatorConsultaFactibilidades,
  props<{ paginator: number}>()
);

export const verTareaPresupuestoConsultaFactibilidades = createAction(
  ConsultaFactibilidadesActionsNames.VerTareaPresupuestoConsultaFactibilidades,
  props<{ edit: TareasPresupuesto }>()
);

export const verTareaPresupuestoConsultaFactibilidadesSuccess = createAction(
  ConsultaFactibilidadesActionsNames.VerTareaPresupuestoConsultaFactibilidadesSuccess,
  props<{ edit: TareasPresupuesto }>()
);

export const verTareaPresupuestoConsultaFactibilidadesFailure = createAction(
  ConsultaFactibilidadesActionsNames.VerTareaPresupuestoConsultaFactibilidadesFailure,
  props<{  error: string   }>()
);

export const getFormatosByCiudadPresupuestoConsultaFactibilidades = createAction(
  ConsultaFactibilidadesActionsNames.GetFormatosByCiudadPresupuestoConsultaFactibilidades,
  props<{ idCiudad: number }>()
);

export const getFormatosByCiudadPresupuestoConsultaFactibilidadesSuccess = createAction(
  ConsultaFactibilidadesActionsNames.GetFormatosByCiudadPresupuestoConsultaFactibilidadesSuccess,
  props<{ formatos: Formato[] }>()
);

export const getFormatosByCiudadPresupuestoConsultaFactibilidadesFailure = createAction(
  ConsultaFactibilidadesActionsNames.GetFormatosByCiudadPresupuestoConsultaFactibilidadesFailure,
  props<{  error: string   }>()
);

export const formatoPresupuestoModalPresupuestoConsultaFactibilidadesSuccess = createAction(
  ConsultaFactibilidadesActionsNames.FormatoPresupuestoModalPresupuestoConsultaFactibilidadesSuccess,
  props<{ body: GenerarDocumentos }>()
);

export const formatoPresupuestoModalPresupuestoConsultaFactibilidadesFailure = createAction(
  ConsultaFactibilidadesActionsNames.FormatoPresupuestoModalPresupuestoConsultaFactibilidadesFailure,
  props<{  error: string   }>()
);

export const generarDocumentosPresupuestoConsultaFactibilidades = createAction(
  ConsultaFactibilidadesActionsNames.GenerarDocumentosPresupuestoConsultaFactibilidades,
  props<{ body: GenerarDocumentos }>()
);

export const generarDocumentosPresupuestoConsultaFactibilidadesSuccess = createAction(
  ConsultaFactibilidadesActionsNames.GenerarDocumentosPresupuestoConsultaFactibilidadesSuccess,
  props<{ documentos: Documentos[]}>()
);

export const generarDocumentosPresupuestoConsultaFactibilidadesFailure = createAction(
  ConsultaFactibilidadesActionsNames.GenerarDocumentosPresupuestoConsultaFactibilidadesFailure,
  props<{  error: string   }>()
);
