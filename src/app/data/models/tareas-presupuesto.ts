import {ApiResponse} from './api-response';

export class TareasPresupuesto {
  tarea: string;
  ciCliente: string;
  servicio: string;
  ciudad: string;
  clienteFinal: string;
  direccion: string;
  operador: string;
  usuario: string;
  categoriaCambio: string;
  categoriaTarea: string;
  estado: string;


}
// responses
export class ResponseTareasPresupuesto extends ApiResponse {
  data: TareasPresupuesto;

  constructor(data: TareasPresupuesto) {
    super(data);
  }
}
// responses
export class ResponseTareasPresupuestos extends ApiResponse {
  data: {
    tareasPresupuesto: TareasPresupuesto[]
  };

  constructor(data: TareasPresupuesto) {
    super(data);
  }
}
