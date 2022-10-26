import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AprovisionamientoComponent} from './aprovisionamiento.component';
import {AprovisionamientoRoutingModule} from './aprovisionamiento-routing.module';
import { MainComponent } from './components/main/main.component';
import {SharedModule} from '../../../shared/shared.module';



@NgModule({
  declarations: [AprovisionamientoComponent, MainComponent],
    imports: [
        CommonModule,
        AprovisionamientoRoutingModule,
        SharedModule
    ]
})
export class AprovisionamientoModule { }
