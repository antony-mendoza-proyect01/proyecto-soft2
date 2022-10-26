import {ApiResponse} from './api-response';

export class Monedas {
  id: number;
  abreviatura: string;
  descripcion: string;


  constructor(id?: number, abreviatura?: string, descripcion?: string) {
    this.id = id || 0;
    this.abreviatura = abreviatura || '';
    this.descripcion = descripcion || '';

  }
}
// responses
export class ResponseMoneda extends ApiResponse {
  data: Monedas;

  constructor(data: Monedas) {
    super(data);
  }
}
// responses
export class ResponseMonedas extends ApiResponse {
  data: Monedas[];

  constructor(data: Monedas) {
    super(data);
  }
}
