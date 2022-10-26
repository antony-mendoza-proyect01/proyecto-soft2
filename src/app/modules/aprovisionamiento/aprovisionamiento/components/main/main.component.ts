import { Component, OnInit } from '@angular/core';
import {MODULO} from '../../../../../core/const/navigation.string.const';
import {NAVIGATION_APLICATION} from '../../../../../core/const/navigation.const';
import {Aplication} from '../../../../../data/interfaces/iNavigation';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  aplication: Aplication = NAVIGATION_APLICATION.find(e => e.id === MODULO.APROVISIONAMIENTO.id);

  constructor() { }

  ngOnInit(): void {
  }

}
