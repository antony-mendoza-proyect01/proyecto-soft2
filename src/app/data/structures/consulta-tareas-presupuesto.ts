export class ConsultaTareasPresupuesto {
  tarea: string;
  idCiudad: number;
  idCambio: string;
  idEstado: number;

  constructor(tarea?: string, idCiudad?: number, idCambio?: string, idEstado?: number) {
    this.tarea = tarea || '362004';
    this.idCiudad = idCiudad || 906;
    this.idCambio = idCambio || '96920';
    if(idEstado) {
      this.idEstado = idEstado || 0;
    }
  }
}

