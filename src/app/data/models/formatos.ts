import {ApiResponse} from './api-response';

export class Formato {
  id: number;
  fechaCracion: string;
  codigo: string;
  nombre: string;
  alias: string;
  version: number;
  fechaVigencia: string;
  tipoId: number;
  ciudadId: number;
  creador: string;
  proceso: string;
  estadoId: number;
  listaPrecioId: number;
  fechaFinVigencia?: any;
  listaMaterialesId: number;
  listaRecursosId: number;
  monedaId: number;

  check?: boolean;
}
// responses
export class ResponseFormato extends ApiResponse {
  data: Formato;

  constructor(data: Formato) {
    super(data);
  }
}
// responses
export class ResponseFormatos extends ApiResponse {
  data: Formato[];

  constructor(data: Formato) {
    super(data);
  }
}
