import {ApiResponse} from './api-response';

export class Ciudad {
  ciudadId: number;
  paisId: number;
  codCiudad: string;
  nombreCiudad :string;
  rowId: string;


  constructor(ciudadId?: number, paisId?: number, codCiudad?: string, nombreCiudad?: string, rowId?: string ) {
    this.ciudadId = ciudadId || 0;
    this.paisId = paisId || 0;
    this.codCiudad = codCiudad || '';
    this.nombreCiudad = nombreCiudad || '';
    this.rowId = rowId ||  '';


  }
}
// responses
export class ResponseCiudad extends ApiResponse {
  data: Ciudad;

  constructor(data: Ciudad) {
    super(data);
  }
}
// responses
export class ResponseCiudades extends ApiResponse {
  data: Ciudad[];

  constructor(data: Ciudad) {
    super(data);
  }
}
