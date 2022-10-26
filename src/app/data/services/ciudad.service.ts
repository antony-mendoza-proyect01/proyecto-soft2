import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Ciudad, ResponseCiudad, ResponseCiudades} from '../models/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApi;
    this.controller = `ciudad`;
    this.action = ``;
  }

  async getAll(): Promise<ResponseCiudades> {
    const result$ = this.http.get<ResponseCiudades>(`${this.prefix}${this.controller}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getByIdPais(idCiudad: string): Promise<ResponseCiudades> {
    const action = `/pais/${idCiudad}`;
    const result$ = this.http.get<ResponseCiudades>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseCiudad> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseCiudad>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Ciudad): Promise<ResponseCiudad> {
    const result$ = this.http.post<ResponseCiudad>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Ciudad): Promise<ResponseCiudad> {
    const result$ = this.http.put<ResponseCiudad>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async delete(body: Ciudad): Promise<ResponseCiudad> {
    const action = `${this.action}/${body.codCiudad}`;
    const result$ = this.http.delete<ResponseCiudad>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}


