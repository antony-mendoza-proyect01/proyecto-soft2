export class GenerarDocumentos {
  tareas: GenerarDocumentosTareas[];
  formatos: GenerarDocumentosFormatos[];
  ciudad?: any;
  contratista?: any;
  usuario: string;

  constructor(tareas: GenerarDocumentosTareas[], formatos: GenerarDocumentosFormatos[], ciudad: any, contratista: any, usuario: string) {
    this.tareas = tareas;
    this.formatos = formatos;
    this.ciudad = ciudad;
    this.contratista = contratista;
    this.usuario = usuario;
  }
}
export class GenerarDocumentosTareas {
  tarea: string;


  constructor(tarea: string) {
    this.tarea = tarea;
  }
}
export class GenerarDocumentosFormatos {
  id: number;


  constructor(id: number) {
    this.id = id;
  }
}
