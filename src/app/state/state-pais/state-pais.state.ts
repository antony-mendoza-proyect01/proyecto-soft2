import {Pais} from '../../data/models/pais';

export interface PaisState {
  loading: boolean,
  pais: Pais[],
}
