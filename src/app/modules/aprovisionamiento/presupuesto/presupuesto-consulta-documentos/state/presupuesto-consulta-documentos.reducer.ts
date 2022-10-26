import {createReducer, on} from '@ngrx/store';
import {ConsultaDocumentosState} from './presupuesto-consulta-documentos.state';

import {compare, paginatorListado} from '../../../../../shared/directives/sort.directive';
import {Documentos} from '../../../../../data/models/documentos';
import {
  filterConsultaDocumentos,
  initConsultaDocumentos,
  paginatorConsultaDocumentos,
  postConsultaDocumentos, postConsultaDocumentosFailure,
  postConsultaDocumentosSuccess,
  sortConsultaDocumentos
} from './presupuesto-consulta-documentos.actions';
import {ConsultaTareasPresupuesto} from '../../../../../data/structures/consulta-tareas-presupuesto';

// Estado inicial de las variables
export const initialState: ConsultaDocumentosState = {
  loadingDocumentos: false,
  documentos: [],
  documentosFiltro: [],
  edit: new Documentos(),
  column: '',
  direction:  '',
  paginator:  1,
  consulta:new ConsultaTareasPresupuesto(),
};
// Inicializar el estado del reducer para el primer cambio
// ... crear un nuevo objeto.
export const ConsultaDocumentosReducer = createReducer(
  initialState,
  on(initConsultaDocumentos, (state) => {
    return {...state, loadingDocumentos: false, documentos: [], documentosFiltro: [], edit: new Documentos()}
  }),
  // // get all
  on(postConsultaDocumentos, (state,  {consulta}) => {
    return {...state, consulta, loadingDocumentos: true, documentos:  [], documentosFiltro: [], edit: new Documentos()}
  }),
  on(postConsultaDocumentosSuccess, (state, {documentos, documentosFiltro}) => {
    documentos = paginatorListado(documentos, 1);
    return {...state, loadingDocumentos: false, documentos, documentosFiltro}
  }),
  on(postConsultaDocumentosFailure, (state, { error}) => {
    return {...state, loadingDocumentos: false, error: error}
  }),

  // action
  on(sortConsultaDocumentos, (state, {column, direction }) => {
    let documentos = [...state.documentosFiltro];
    documentos.sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });

    documentos = paginatorListado(documentos, state.paginator);
    return {...state, column , direction, documentos}
  }),
  on(filterConsultaDocumentos, (state, {filtro}) => {
    let documentosFiltro = [...state.documentosFiltro];
    let documentos = [...state.documentosFiltro].filter(item => {
      const term = filtro.toLowerCase();
      return item.operador.toLocaleLowerCase().includes(term);
    });
    documentos = paginatorListado(documentos, 1);
    return {...state, filtro, documentos, documentosFiltro}
  }),
  on(paginatorConsultaDocumentos, (state, {paginator}) => {
    const documentos = paginatorListado(state.documentosFiltro, paginator);
    return {...state, loadingDocumentos: false, documentos, paginator}
  }),


);
