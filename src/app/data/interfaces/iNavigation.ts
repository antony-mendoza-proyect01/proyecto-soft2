export interface Aplication {
  id: string;
  titulo: string;
  link: string;
  icono: string;
  navegacion: INavigation[];
}

export interface INavigation {
  id: string;
  titulo: string;
  link: string;
  tieneMenu: boolean;
  icono?: string;
  menuActivo: boolean;
  subMenu: INavigation[];
}
