import {ApiResponse} from './api-response';

export class EstadoContrato {
  id: number;
  nombre: string;


  constructor(id?: number, nombre?: string) {
    this.id = id || 0;
    this.nombre = nombre || '';
  }
}
// responses
export class ResponseEstadoContrato extends ApiResponse {
  data: EstadoContrato;

  constructor(data: EstadoContrato) {
    super(data);
  }
}
// responses
export class ResponseEstadoContratos extends ApiResponse {
  data: EstadoContrato[];

  constructor(data: EstadoContrato) {
    super(data);
  }
}
