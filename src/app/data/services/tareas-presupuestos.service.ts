import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {ConsultaTareasPresupuesto} from '../structures/consulta-tareas-presupuesto';
import {ResponseTareasPresupuestos} from '../models/tareas-presupuesto';
import {GenerarDocumentos} from '../structures/generarDocumentos';
import {ResponseDocumentos} from '../models/documentos';

@Injectable({
  providedIn: 'root'
})
export class TareasPresupuestosService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `tareas-presupuesto`;
    this.action = ``;
  }

  async consultar(body: ConsultaTareasPresupuesto): Promise<ResponseTareasPresupuestos> {
    const result$ = this.http.post<ResponseTareasPresupuestos>(`${this.prefix}${this.controller}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async generarDocumentos(body: GenerarDocumentos): Promise<ResponseDocumentos> {
    this.action = `/generarDocumentos`;
    const result$ = this.http.post<ResponseDocumentos>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async consultarDocumentos(body: ConsultaTareasPresupuesto): Promise<ResponseDocumentos> {
    this.action = `/consultarDocumentos`;
    const result$ = this.http.post<ResponseDocumentos>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

