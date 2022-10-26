import {TareasPresupuesto} from '../../../../../data/models/tareas-presupuesto';
import {ConsultaTareasPresupuesto} from '../../../../../data/structures/consulta-tareas-presupuesto';
import {Formato} from '../../../../../data/models/formatos';
import {Documentos} from '../../../../../data/models/documentos';


export interface ConsultaFactibilidadesState {
  loadingTareasPresupuesto: boolean;
  tareasPresupuesto: TareasPresupuesto[];
  tareasPresupuestoFiltro: TareasPresupuesto[];
  edit: TareasPresupuesto;
  column: any;
  direction: any;
  paginator: number;

  consulta: ConsultaTareasPresupuesto;
  loadingFormatos: boolean;
  formatos:  Formato[];

  loadingDocumentos: boolean;
  documentos: Documentos[];
}
