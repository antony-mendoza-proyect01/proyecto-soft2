import {Documentos} from '../../../../../data/models/documentos';
import {ConsultaTareasPresupuesto} from '../../../../../data/structures/consulta-tareas-presupuesto';


export interface ConsultaDocumentosState {
  loadingDocumentos: boolean;
  documentos: Documentos[];
  documentosFiltro: Documentos[];
  edit: Documentos;
  column: any;
  direction: any;
  paginator: number;
  consulta: ConsultaTareasPresupuesto;
}
