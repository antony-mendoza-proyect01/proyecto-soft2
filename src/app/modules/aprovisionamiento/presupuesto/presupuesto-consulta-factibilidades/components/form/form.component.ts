import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Pais} from '../../../../../../data/models/pais';
import {AppState} from '../../../../../../app.state';
import {Store} from '@ngrx/store';
import {selectListPais, selectLoadingPais} from '../../../../../../state/state-pais/state-pais.selectors';
import {FormControl, FormGroup} from '@angular/forms';
import {ConsultaTareasPresupuesto} from '../../../../../../data/structures/consulta-tareas-presupuesto';
import {Ciudad} from '../../../../../../data/models/ciudad';
import {selectListCiudad, selectLoadingCiudad} from '../../../../../../state/state-ciudad/state-ciudad.selectors';
import {
  selectListEstadoContrato,
  selectLoadingEstadoContrato
} from '../../../../../../state/state-estado-contrato/state-estado-contrato.selectors';
import {EstadoContrato} from '../../../../../../data/models/estado-contrato';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() searchCity = new EventEmitter<string>();
  @Output() searchTareasPresupuesto = new EventEmitter<ConsultaTareasPresupuesto>();

  paises$: Observable<Pais[]> = new Observable();
  loadingPaises$: Observable<boolean> = new Observable();

  ciudades$: Observable<Ciudad[]> = new Observable();
  loadingCiudades$: Observable<boolean> = new Observable();

  estadoContrato$: Observable<EstadoContrato[]> = new Observable();
  loadingEstadoContrato$: Observable<boolean> = new Observable();

  presupuestoConsultaForm: PresupuestoConsultaForm;
  submitted = false;

  constructor(
    private store: Store<AppState>,
    ) { }

  ngOnInit(): void {
    this.paises$ = this.store.select(selectListPais);
    this.loadingPaises$ = this.store.select(selectLoadingPais);

    this.ciudades$ = this.store.select(selectListCiudad);
    this.loadingCiudades$ = this.store.select(selectLoadingCiudad);

    this.estadoContrato$ = this.store.select(selectListEstadoContrato);
    this.loadingEstadoContrato$ = this.store.select(selectLoadingEstadoContrato);

    this.presupuestoConsultaForm = new PresupuestoConsultaForm(new ConsultaTareasPresupuesto());
  }

  get f() {return this.presupuestoConsultaForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.presupuestoConsultaForm.invalid) {
      return;
    }

    const value = this.presupuestoConsultaForm.getRawValue();
    const body = new ConsultaTareasPresupuesto(value.tarea, value.idCiudad, value.idCambio);

    this.searchTareasPresupuesto.emit(body);
  }

  changePais(event) {
    this.searchCity.emit(event.target.value);
  }

}
// TODO: class para implementacion del formulario
export class PresupuestoConsultaForm extends FormGroup {
  constructor(body: ConsultaTareasPresupuesto) {
    super({
      tarea: new FormControl(body.tarea),
      idPais: new FormControl(body.idCiudad),
      idCiudad: new FormControl(body.idCiudad),
      idCambio: new FormControl(body.idCambio),
      // idEstado: new FormControl(body.idEstado),
    });
  }
}
