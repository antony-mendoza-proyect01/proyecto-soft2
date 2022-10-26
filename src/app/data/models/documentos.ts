import {ApiResponse} from './api-response';

export class Documentos {
  idDocumento: number;
  idFormato: number;
  nombreFormato: any;
  tarea: string;
  clienteFinal: string;
  direccion: string;
  servicio: string;
  operador: string;
  idEstado: number;
  estado: string;
  categoriaCambio: string;


  constructor(idDocumento?: number, idFormato?: number, nombreFormato?: any, tarea?: string,
              clienteFinal?: string, direccion?: string, servicio?: string, operador?: string,
              idEstado?: number, estado?: string, categoriaCambio?: string) {
    this.idDocumento = idDocumento || 0;
    this.idFormato = idFormato || 0;
    this.nombreFormato = nombreFormato || '';
    this.tarea = tarea || '';
    this.clienteFinal = clienteFinal || '';
    this.direccion = direccion || '';
    this.servicio = servicio || '';
    this.operador = operador || '';
    this.idEstado = idEstado || 0;
    this.estado = estado || '';
    this.categoriaCambio = categoriaCambio || '';
  }
}
// responses
export class ResponseDocumento extends ApiResponse {
  data: Documentos;

  constructor(data: Documentos) {
    super(data);
  }
}
// responses
export class ResponseDocumentos extends ApiResponse {
  data: {
    documentos: Documentos[]
  };

  constructor(data: Documentos) {
    super(data);
  }
}
