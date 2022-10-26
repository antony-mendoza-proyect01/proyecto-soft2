import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgbActiveModal, } from '@ng-bootstrap/ng-bootstrap';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../../app.state';
import { Observable} from 'rxjs';
import {
  selectEditConsultaFactibilidades,
  selectLoadingFormatosConsultaFactibilidades
} from '../../state/presupuesto-consulta-factibilidades.selectors';
import {Formato} from '../../../../../../data/models/formatos';
import {
  GenerarDocumentos,
  GenerarDocumentosFormatos,
  GenerarDocumentosTareas
} from '../../../../../../data/structures/generarDocumentos';
import {TareasPresupuesto} from '../../../../../../data/models/tareas-presupuesto';
import {Alert, AlertComponent} from '../../../../../../shared/components';

@Component({
  selector: 'app-form-modal-formatos',
  templateUrl: './form-modal-formatos.component.html',
  styleUrls: ['./form-modal-formatos.component.scss']
})
export class FormModalFormatosComponent implements OnInit {
  @Input() formatos: Formato[];
  loading$: Observable<boolean> = new Observable();
  editTarea$: TareasPresupuesto = new TareasPresupuesto();
  formatosCheckAll: boolean = false;

  @ViewChild('AlertComponent') alertComponent: AlertComponent;

  constructor(
    public activeModal: NgbActiveModal,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoadingFormatosConsultaFactibilidades);
    this.store.select(selectEditConsultaFactibilidades).subscribe(x => {this.editTarea$ = x;});
  }

  onSubmit() {
    const formatoscheck: GenerarDocumentosFormatos[] = [];
    this.formatos.forEach(item => {
      if(item.check) {
        formatoscheck.push(new GenerarDocumentosFormatos(item.id));
      }
    })

    if(!formatoscheck.length) {
      this.alertComponent.changeMessage(
        new Alert('danger', 'No ha seleccionado ningun formato de Presupuestos'));
      return;
    }

    const body = new GenerarDocumentos([new GenerarDocumentosTareas(this.editTarea$.tarea)],
      formatoscheck,null,null, 'MIDI397');

    this.activeModal.close(body);
  }

  onCheckAll() {
    this.formatosCheckAll = !this.formatosCheckAll;
    this.formatos.forEach(e=> e.check = this.formatosCheckAll);
  }


}
