import {Ciudad} from '../../data/models/ciudad';

export interface CiudadState {
  loading: boolean,
  ciudad: Ciudad[],
}
