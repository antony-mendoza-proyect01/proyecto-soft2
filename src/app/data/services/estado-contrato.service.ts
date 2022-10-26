import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {EstadoContrato, ResponseEstadoContrato, ResponseEstadoContratos} from '../models/estado-contrato';

@Injectable({
  providedIn: 'root'
})
export class EstadoContratoService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `estado-contrato`;
  }

  async getAll(): Promise<ResponseEstadoContratos> {
    const result$ = this.http.get<ResponseEstadoContratos>(`${this.prefix}${this.controller}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseEstadoContrato> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseEstadoContrato>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: EstadoContrato): Promise<ResponseEstadoContrato> {
    const result$ = this.http.post<ResponseEstadoContrato>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: EstadoContrato): Promise<ResponseEstadoContrato> {
    const result$ = this.http.put<ResponseEstadoContrato>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async delete(body: EstadoContrato): Promise<ResponseEstadoContrato> {
    const action = `${this.action}/${body.id}`;
    const result$ = this.http.delete<ResponseEstadoContrato>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}


