import {EventEmitter, Injectable, Output} from '@angular/core';
import {INavigation} from '../../data/interfaces/iNavigation';

@Injectable({
  providedIn: 'root'
})
export class EmitService {
  @Output() navigation = new EventEmitter<INavigation[]>();
  constructor() { }
}
