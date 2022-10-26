import {Aplication} from '../../data/interfaces/iNavigation';
import {MODULO} from './navigation.string.const';
import {INTERNAL_PATHS} from './routes.conts';
import {ROUTES_IMAGE} from './image.const';

export const URL_RAIZ = `/${INTERNAL_PATHS.RAIZ}`;
export const URL_APROVISIONAMIENTO = `${URL_RAIZ}/${INTERNAL_PATHS.APROVISIONAMIENTO}`;
export const URL_APROVISIONAMIENTO__PRESUPUESTO = `${URL_APROVISIONAMIENTO}/${INTERNAL_PATHS.APROVISIONAMIENTO__PRESUPUESTOS}`;
export const URL_ASEGURAMIENTO = `${URL_RAIZ}/${INTERNAL_PATHS.ASEGURAMIENTO}`;
export const URL_ALISTAMIENTO = `${URL_RAIZ}/${INTERNAL_PATHS.ALISTAMIENTO}`;

export const NAVIGATION_APLICATION: Aplication[] = [
  {
    id: MODULO.ALISTAMIENTO.id,
    titulo: MODULO.ALISTAMIENTO.titulo,
    link: URL_ALISTAMIENTO,
    icono: ROUTES_IMAGE.sar_alistamiento,
    navegacion: [
      {
        id: MODULO.ALISTAMIENTO.PRESUPUESTOS.id,
        titulo: MODULO.ALISTAMIENTO.PRESUPUESTOS.titulo,
        link: `${URL_ALISTAMIENTO}/${INTERNAL_PATHS.ALISTAMIENTO__PRESUPUESTOS}`,
        tieneMenu: false,
        icono: 'fa-font-awesome',
        menuActivo: false,
        subMenu: []
      },
      {
        id: MODULO.ALISTAMIENTO.SOLICITUDES.id,
        titulo: MODULO.ALISTAMIENTO.SOLICITUDES.titulo,
        link: `${URL_ALISTAMIENTO}/${INTERNAL_PATHS.ALISTAMIENTO__SOLICITUDES}`,
        tieneMenu: false,
        icono: 'fa-font-awesome',
        menuActivo: false,
        subMenu: []
      },
      {
        id: MODULO.ALISTAMIENTO.DOCUMENTOS_DE_LIQUIDACION.id,
        titulo: MODULO.ALISTAMIENTO.DOCUMENTOS_DE_LIQUIDACION.titulo,
        link: `${URL_ALISTAMIENTO}/${INTERNAL_PATHS.ALISTAMIENTO__DOCUMENTOS_DE_LIQUIDACION}`,
        tieneMenu: false,
        icono: 'fa-font-awesome',
        menuActivo: false,
        subMenu: []
      },
      {
        id: MODULO.ALISTAMIENTO.ADMINISTRACION_DE_TRONCALES.id,
        titulo: MODULO.ALISTAMIENTO.ADMINISTRACION_DE_TRONCALES.titulo,
        link: `${URL_ALISTAMIENTO}/${INTERNAL_PATHS.ALISTAMIENTO__ADMINISTRACION_DE_TRONCALES}`,
        tieneMenu: false,
        icono: 'fa-font-awesome',
        menuActivo: false,
        subMenu: []
      },
    ]
  },
  {
    id: MODULO.APROVISIONAMIENTO.id,
    titulo: MODULO.APROVISIONAMIENTO.titulo,
    link: URL_APROVISIONAMIENTO,
    icono: ROUTES_IMAGE.sar_aprovisionamiento,
    navegacion: [
      {
        id: MODULO.APROVISIONAMIENTO.PRESUPUESTOS.id,
        titulo: MODULO.APROVISIONAMIENTO.PRESUPUESTOS.titulo,
        link: `${URL_APROVISIONAMIENTO__PRESUPUESTO}`,
        tieneMenu: true,
        icono: 'fa-font-awesome',
        menuActivo: true,
        subMenu: [
          {
            id: MODULO.APROVISIONAMIENTO.PRESUPUESTOS.CREACION_DOCUMENTOS.id,
            titulo: MODULO.APROVISIONAMIENTO.PRESUPUESTOS.CREACION_DOCUMENTOS.titulo,
            link: `${URL_APROVISIONAMIENTO__PRESUPUESTO}/${INTERNAL_PATHS.APROVISIONAMIENTO__PRESUPUESTOS__CREACION_DOCUMENTOS}`,
            tieneMenu: false,
            icono: 'fa-font-awesome',
            menuActivo: false,
            subMenu: []
          },
          {
            id: MODULO.APROVISIONAMIENTO.PRESUPUESTOS.CONSULTA_DOCUMENTOS.id,
            titulo: MODULO.APROVISIONAMIENTO.PRESUPUESTOS.CONSULTA_DOCUMENTOS.titulo,
            link: `${URL_APROVISIONAMIENTO__PRESUPUESTO}/${INTERNAL_PATHS.APROVISIONAMIENTO__PRESUPUESTOS__CONSULTA_DOCUMENTOS}`,
            tieneMenu: false,
            icono: 'fa-font-awesome',
            menuActivo: false,
            subMenu: []
          },
          {
            id: MODULO.APROVISIONAMIENTO.PRESUPUESTOS.CONSULTA_FACTIBILIDADES.id,
            titulo: MODULO.APROVISIONAMIENTO.PRESUPUESTOS.CONSULTA_FACTIBILIDADES.titulo,
            link: `${URL_APROVISIONAMIENTO__PRESUPUESTO}/${INTERNAL_PATHS.APROVISIONAMIENTO__PRESUPUESTOS__CONSULTA_FACTIBILIDADES}`,
            tieneMenu: false,
            icono: 'fa-font-awesome',
            menuActivo: false,
            subMenu: []
          },
          {
            id: MODULO.APROVISIONAMIENTO.PRESUPUESTOS.INFORME_DOCUMENTOS.id,
            titulo: MODULO.APROVISIONAMIENTO.PRESUPUESTOS.INFORME_DOCUMENTOS.titulo,
            link: `${URL_APROVISIONAMIENTO__PRESUPUESTO}/${INTERNAL_PATHS.APROVISIONAMIENTO__PRESUPUESTOS__INFORME_DOCUMENTOS}`,
            tieneMenu: false,
            icono: 'fa-font-awesome',
            menuActivo: false,
            subMenu: []
          },
        ]
      },
      {
        id: MODULO.APROVISIONAMIENTO.SOLICITUDES.id,
        titulo: MODULO.APROVISIONAMIENTO.SOLICITUDES.titulo,
        link: `${URL_APROVISIONAMIENTO}/${INTERNAL_PATHS.APROVISIONAMIENTO__SOLICITUDES}`,
        tieneMenu: false,
        icono: 'fa-font-awesome',
        menuActivo: false,
        subMenu: []
      },
      {
        id: MODULO.APROVISIONAMIENTO.DOCUMENTOS_DE_LIQUIDACION.id,
        titulo: MODULO.APROVISIONAMIENTO.DOCUMENTOS_DE_LIQUIDACION.titulo,
        link: `${URL_APROVISIONAMIENTO}/${INTERNAL_PATHS.APROVISIONAMIENTO__DOCUMENTOS_DE_LIQUIDACION}`,
        tieneMenu: false,
        icono: 'fa-font-awesome',
        menuActivo: false,
        subMenu: []
      },
      {
        id: MODULO.APROVISIONAMIENTO.EQUIPOS.id,
        titulo: MODULO.APROVISIONAMIENTO.EQUIPOS.titulo,
        link: `${URL_APROVISIONAMIENTO}/${INTERNAL_PATHS.APROVISIONAMIENTO__EQUIPOS}`,
        tieneMenu: false,
        icono: 'fa-font-awesome',
        menuActivo: false,
        subMenu: []
      },
      {
        id: MODULO.APROVISIONAMIENTO.ENLACES.id,
        titulo: MODULO.APROVISIONAMIENTO.ENLACES.titulo,
        link: `${URL_APROVISIONAMIENTO}/${INTERNAL_PATHS.APROVISIONAMIENTO__ENLACES}`,
        tieneMenu: false,
        icono: 'fa-font-awesome',
        menuActivo: false,
        subMenu: []
      },
      {
        id: MODULO.APROVISIONAMIENTO.REGISTRAR_FACTURA_DE_LIQUIDACIONES.id,
        titulo: MODULO.APROVISIONAMIENTO.REGISTRAR_FACTURA_DE_LIQUIDACIONES.titulo,
        link: `${URL_APROVISIONAMIENTO}/${INTERNAL_PATHS.APROVISIONAMIENTO__REGISTRAR_FACTURA_DE_LIQUIDACIONES}`,
        tieneMenu: false,
        icono: 'fa-font-awesome',
        menuActivo: false,
        subMenu: []
      },
    ]
  },
  {
    id: MODULO.ASEGURAMIENTO.id,
    titulo: MODULO.ASEGURAMIENTO.titulo,
    link: URL_ASEGURAMIENTO,
    icono: ROUTES_IMAGE.sar_aseguramiento,
    navegacion: [
      {
        id: MODULO.ASEGURAMIENTO.SOLICITUDES_PREVENTIVAS.id,
        titulo: MODULO.ASEGURAMIENTO.SOLICITUDES_PREVENTIVAS.titulo,
        link: `${URL_ASEGURAMIENTO}/${INTERNAL_PATHS.ASEGURAMIENTO__SOLICITUDES_PREVENTIVAS}`,
        tieneMenu: false,
        icono: 'fa-font-awesome',
        menuActivo: false,
        subMenu: []
      },
      {
        id: MODULO.ASEGURAMIENTO.SOLICITUDES_DE_EMERGENCIA.id,
        titulo: MODULO.ASEGURAMIENTO.SOLICITUDES_DE_EMERGENCIA.titulo,
        link: `${URL_ASEGURAMIENTO}/${INTERNAL_PATHS.ASEGURAMIENTO__SOLICITUDES_DE_EMERGENCIA}`,
        tieneMenu: false,
        icono: 'fa-font-awesome',
        menuActivo: false,
        subMenu: []
      },
      {
        id: MODULO.ASEGURAMIENTO.ACTA_DE_REPORTE_DE_FALLA.id,
        titulo: MODULO.ASEGURAMIENTO.ACTA_DE_REPORTE_DE_FALLA.titulo,
        link: `${URL_ASEGURAMIENTO}/${INTERNAL_PATHS.ASEGURAMIENTO__ACTA_DE_REPORTE_DE_FALLA}`,
        tieneMenu: false,
        icono: 'fa-font-awesome',
        menuActivo: false,
        subMenu: []
      },
      {
        id: MODULO.ASEGURAMIENTO.DOCUMENTOS_DE_LIQUIDACION.id,
        titulo: MODULO.ASEGURAMIENTO.DOCUMENTOS_DE_LIQUIDACION.titulo,
        link: `${URL_ASEGURAMIENTO}/${INTERNAL_PATHS.ASEGURAMIENTO__DOCUMENTOS_DE_LIQUIDACION}`,
        tieneMenu: false,
        icono: 'fa-font-awesome',
        menuActivo: false,
        subMenu: []
      },
    ]
  },
];


