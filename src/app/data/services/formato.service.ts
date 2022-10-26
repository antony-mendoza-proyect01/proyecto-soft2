import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {ConsultaTareasPresupuesto} from '../structures/consulta-tareas-presupuesto';
import {ResponseTareasPresupuestos} from '../models/tareas-presupuesto';
import {ResponseFormatos} from '../models/formatos';

@Injectable({
  providedIn: 'root'
})
export class FormatoService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `formato`;
    this.action = ``;
  }

  async getByCiudad(idCiudad: number): Promise<ResponseFormatos> {
    this.action = `/ciudad/${idCiudad}`
    const result$ = this.http.get<ResponseFormatos>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

}

