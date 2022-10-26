import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {lastValueFrom, map} from 'rxjs';
import {ApiCustomer} from '../models/api-customer';
import {Monedas, ResponseMoneda, ResponseMonedas} from "../models/moneda";

@Injectable({
  providedIn: 'root'
})
export class MonedasService extends ApiCustomer {

  constructor(private http: HttpClient) {
    super();
    this.prefix = environment.urlApiGeo;
    this.controller = `moneda`;
  }

  async getAll(): Promise<ResponseMonedas> {
    const result$ = this.http.get<ResponseMonedas>(`${this.prefix}${this.controller}${this.action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async getById(Id: string): Promise<ResponseMoneda> {
    const action = `${this.action}/${Id}`;
    const result$ = this.http.get<ResponseMoneda>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async post(body: Monedas): Promise<ResponseMoneda> {
    const result$ = this.http.post<ResponseMoneda>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }

  async put(body: Monedas): Promise<ResponseMoneda> {
    const result$ = this.http.put<ResponseMoneda>(`${this.prefix}${this.controller}${this.action}`, body).pipe(map( r => r));
    return await lastValueFrom(result$);
  }


  async delete(body: Monedas): Promise<ResponseMoneda> {
    const action = `${this.action}/${body.id}`;
    const result$ = this.http.delete<ResponseMoneda>(`${this.prefix}${this.controller}${action}`).pipe(map( r => r));
    return await lastValueFrom(result$);
  }
}

