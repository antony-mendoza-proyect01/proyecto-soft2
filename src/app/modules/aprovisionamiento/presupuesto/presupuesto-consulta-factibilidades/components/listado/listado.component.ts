import {Component, EventEmitter, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../../app.state';
import {
  selectConsultaFactibilidadesFiltro,
  selectEditConsultaFactibilidades,
  selectListConsultaFactibilidades,
  selectLoadingConsultaFactibilidades
} from '../../state/presupuesto-consulta-factibilidades.selectors';
import {TareasPresupuesto} from '../../../../../../data/models/tareas-presupuesto';
import {NgbdSortableHeader, SortEvent} from '../../../../../../shared/directives/sort.directive';
import {
  paginatorConsultaFactibilidades,
  sortConsultaFactibilidades
} from '../../state/presupuesto-consulta-factibilidades.actions';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @Output() verTarea = new EventEmitter<TareasPresupuesto>();
  tareasPresupuesto$: Observable<TareasPresupuesto[]> = new Observable();
  tareasPresupuestoAux$: Observable<TareasPresupuesto[]> = new Observable();
  loading$: Observable<boolean> = new Observable();
  tareasPresupuestoEdit$: TareasPresupuesto = new TareasPresupuesto();


  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    private store: Store<AppState>,
    ) { }

  ngOnInit(): void {
    this.tareasPresupuesto$ = this.store.select(selectListConsultaFactibilidades);
    this.tareasPresupuestoAux$ = this.store.select(selectConsultaFactibilidadesFiltro);
    this.loading$ = this.store.select(selectLoadingConsultaFactibilidades);

    this.store.select(selectEditConsultaFactibilidades).subscribe(x => {this.tareasPresupuestoEdit$ = x;});
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction !== '') {
      this.store.dispatch(sortConsultaFactibilidades({column, direction}));
    }
  }

  onItemsPaginado(paginator) {
    this.store.dispatch(paginatorConsultaFactibilidades({paginator}));
  }

  onVerTarea(tarea: TareasPresupuesto) {
    this.verTarea.emit(tarea);
  }
}
