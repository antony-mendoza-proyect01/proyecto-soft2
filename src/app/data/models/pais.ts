import {ApiResponse} from './api-response';

export class Pais {
  paisId: number;
  codPais: string;
  nombrePais: string;
  monedaId :number;
  dirOficCentral: null;
  rowId: string;


  constructor(paisId?: number, codPais?: string, nombrePais?: string, monedaId?: number,dirOficCentral?: null, rowId?: string ) {
    this.paisId = paisId || 0;
    this.codPais = codPais || '';
    this.nombrePais = nombrePais || '';
    this.monedaId = monedaId || 0;
    this.dirOficCentral = dirOficCentral || null;
    this.rowId = rowId ||  '';


  }
}
// responses
export class ResponsePais extends ApiResponse {
  data: Pais;

  constructor(data: Pais) {
    super(data);
  }
}
// responses
export class ResponsePaises extends ApiResponse {
  data: Pais[];

  constructor(data: Pais) {
    super(data);
  }
}
