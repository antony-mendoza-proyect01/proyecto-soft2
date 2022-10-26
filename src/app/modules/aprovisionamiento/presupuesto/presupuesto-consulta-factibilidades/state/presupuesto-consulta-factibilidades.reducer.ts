import {createReducer, on} from '@ngrx/store';
import { ConsultaFactibilidadesState } from './presupuesto-consulta-factibilidades.state';
import {
  postTareasPresupuestoConsultaFactibilidades,
  postTareasPresupuestoConsultaFactibilidadesFailure,
  postTareasPresupuestoConsultaFactibilidadesSuccess,
  initConsultaFactibilidades,
  paginatorConsultaFactibilidades,
  sortConsultaFactibilidades,
  filterConsultaFactibilidades,
  getFormatosByCiudadPresupuestoConsultaFactibilidadesSuccess,
  getFormatosByCiudadPresupuestoConsultaFactibilidades,
  getFormatosByCiudadPresupuestoConsultaFactibilidadesFailure,
  verTareaPresupuestoConsultaFactibilidades,
  verTareaPresupuestoConsultaFactibilidadesFailure,
  generarDocumentosPresupuestoConsultaFactibilidadesSuccess,
  generarDocumentosPresupuestoConsultaFactibilidadesFailure, generarDocumentosPresupuestoConsultaFactibilidades
} from './presupuesto-consulta-factibilidades.actions';
import {compare, paginatorListado} from '../../../../../shared/directives/sort.directive';
import {TareasPresupuesto} from '../../../../../data/models/tareas-presupuesto';
import {ConsultaTareasPresupuesto} from '../../../../../data/structures/consulta-tareas-presupuesto';

// Estado inicial de las variables
export const initialState: ConsultaFactibilidadesState = {
  loadingTareasPresupuesto: false,
  tareasPresupuesto: [],
  tareasPresupuestoFiltro: [],
  edit: new TareasPresupuesto(),
  column: '',
  direction:  '',
  paginator:  1,
  consulta:new ConsultaTareasPresupuesto(),
  formatos: [],
  loadingFormatos: false,
  documentos: [],
  loadingDocumentos: false,
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const ConsultaFactibilidadesReducer = createReducer(
  initialState,
  on(initConsultaFactibilidades, (state) => {
    return {...state, loadingTareasPresupuesto: false, tareasPresupuesto: [], edit: new TareasPresupuesto()}
  }),
  // // get all
  on(postTareasPresupuestoConsultaFactibilidades, (state,  {consulta}) => {
    return {...state, consulta, loadingTareasPresupuesto: true,tareasPresupuesto:  [], edit: new TareasPresupuesto()}
  }),
  on(postTareasPresupuestoConsultaFactibilidadesSuccess, (state, {tareasPresupuesto, tareasPresupuestoFiltro}) => {
    tareasPresupuesto = paginatorListado(tareasPresupuesto, 1);
    return {...state, loadingTareasPresupuesto: false, tareasPresupuesto, tareasPresupuestoFiltro}
  }),
  on(postTareasPresupuestoConsultaFactibilidadesFailure, (state, { error}) => {
    return {...state, loadingTareasPresupuesto: false, error: error}
  }),

  // action
  on(sortConsultaFactibilidades, (state, {column, direction }) => {
    let tareasPresupuesto = [...state.tareasPresupuestoFiltro];
    tareasPresupuesto.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    tareasPresupuesto = paginatorListado(tareasPresupuesto, state.paginator);
    return {...state, column , direction, tareasPresupuesto}
  }),
  on(filterConsultaFactibilidades, (state, {filtro}) => {
    let tareasPresupuestoFiltro = [...state.tareasPresupuestoFiltro];
    let tareasPresupuesto = [...state.tareasPresupuestoFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.tarea.toLocaleLowerCase().includes(term);
    });
    tareasPresupuesto = paginatorListado(tareasPresupuesto, 1);
    return {...state, filtro, tareasPresupuesto, tareasPresupuestoFiltro}
  }),
  on(paginatorConsultaFactibilidades, (state, {paginator}) => {
    const tareasPresupuesto = paginatorListado(state.tareasPresupuestoFiltro, paginator);
    return {...state, loadingTareasPresupuesto: false, tareasPresupuesto, paginator}
  }),

  on(getFormatosByCiudadPresupuestoConsultaFactibilidades, (state) => {
    return {...state, formatos: [], loadingFormatos: true}
  }),
  on(getFormatosByCiudadPresupuestoConsultaFactibilidadesSuccess, (state, {formatos}) => {
    return {...state, formatos, loadingFormatos: false}
  }),
  on(getFormatosByCiudadPresupuestoConsultaFactibilidadesFailure, (state, {error}) => {
    return {...state, error, loadingFormatos: false}
  }),

  on(verTareaPresupuestoConsultaFactibilidades, (state, {edit}) => {
    return {...state, edit}
  }),
  on(verTareaPresupuestoConsultaFactibilidadesFailure, (state, {error}) => {
    return {...state, edit: new TareasPresupuesto(), error}
  }),

  on(generarDocumentosPresupuestoConsultaFactibilidades, (state) => {
    return {...state, loadingDocumentos: true, documentos: [] }
  }),
  on(generarDocumentosPresupuestoConsultaFactibilidadesSuccess, (state, {documentos}) => {
    return {...state, loadingDocumentos: false, documentos }
  }),
  on(generarDocumentosPresupuestoConsultaFactibilidadesFailure, (state, {error}) => {
    return {...state, loadingDocumentos: false, error}
  }),


);
