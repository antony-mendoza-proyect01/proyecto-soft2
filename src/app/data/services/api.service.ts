import { Injectable } from '@angular/core';
import {UserService} from './user.service';
import {PaisService} from './pais.service';
import {CiudadService} from './ciudad.service';
import {EstadoContratoService} from './estado-contrato.service';
import {TareasPresupuestosService} from './tareas-presupuestos.service';
import {FormatoService} from './formato.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public userService: UserService,

    public paisService: PaisService,
    public ciudadService: CiudadService,
    public estadoContratoService: EstadoContratoService,

    public tareasPresupuestosService: TareasPresupuestosService,
    public formatoService: FormatoService,
  ) { }
}
