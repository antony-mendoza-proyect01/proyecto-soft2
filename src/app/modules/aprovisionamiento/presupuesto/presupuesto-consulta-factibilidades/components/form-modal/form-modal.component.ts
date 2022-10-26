import {Component, Input, OnInit} from '@angular/core';
import {TareasPresupuesto} from '../../../../../../data/models/tareas-presupuesto';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {
  getFormatosByCiudadPresupuestoConsultaFactibilidades
} from '../../state/presupuesto-consulta-factibilidades.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../../app.state';
import {Observable} from 'rxjs';
import {ConsultaTareasPresupuesto} from '../../../../../../data/structures/consulta-tareas-presupuesto';
import {
  selectConsultaConsultaFactibilidades, selectLoadingFormatosConsultaFactibilidades
} from '../../state/presupuesto-consulta-factibilidades.selectors';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {
  @Input() tareasPresupuesto: TareasPresupuesto;
  consulta$: Observable<ConsultaTareasPresupuesto> = new Observable();
  loading$: Observable<boolean> = new Observable();

  constructor(
    public activeModal: NgbActiveModal,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.consulta$ = this.store.select(selectConsultaConsultaFactibilidades);
    this.loading$ = this.store.select(selectLoadingFormatosConsultaFactibilidades);
  }

  onGenerarDocumentos(consulta: ConsultaTareasPresupuesto) {
    this.store.dispatch(getFormatosByCiudadPresupuestoConsultaFactibilidades({idCiudad: consulta.idCiudad}));

  }
}
