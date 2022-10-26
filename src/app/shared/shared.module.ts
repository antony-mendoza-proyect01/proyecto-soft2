import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as formComponents from './components';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbdSortableHeader} from './directives/sort.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    ...formComponents.COMPONENTS,
    NgbdSortableHeader,
    ],
    imports: [
        CommonModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
    ],
    exports: [// para exportar a los demas modulos
        ...formComponents.COMPONENTS,// declaracion de los componentes en una sola parte
        NgbModule,
        NgbdSortableHeader
    ]
})
export class SharedModule { }
