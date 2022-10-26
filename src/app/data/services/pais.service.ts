import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Pais, ResponsePais, ResponsePaises} from '../models/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `pais`;
  }

  async getAll(): Promise<ResponsePaises> {
    const result$ = this.http.get<ResponsePaises>(`${this.prefix}${this.controller}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponsePais> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponsePais>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Pais): Promise<ResponsePais> {
    const result$ = this.http.post<ResponsePais>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Pais): Promise<ResponsePais> {
    const result$ = this.http.put<ResponsePais>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async delete(body: Pais): Promise<ResponsePais> {
    const action = `${this.action}/${body.paisId}`;
    const result$ = this.http.delete<ResponsePais>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}


