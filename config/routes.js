/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'Session/index'
  },
  '/AdmiListadoPadre':{
    view: 'administrador/AdmiListadoPadre'
  },
  '/AdmiListadoPersonaAutorizada':{
    view: 'administrador/AdmiListadoPersonaAutorizada'
  },
  '/AdmiListadoDerechohabiente':{
    view: 'administrador/AdmiListadoDerechohabiente'
  },
  '/AdmiUsers':{
    view: 'administrador/AdminUsers'
  },
  '/AdminGraficas':{
    view: 'administrador/AdminGraficas'
  },
  '/AdminListadoNinos':{
    view: 'administrador/AdminListadoNinos'
  },
  
  '/Bienvenidadra':{
    view: 'servicioMedico/Bienvenidadra'
  },
  '/AgregarNuevaDosisMedico':{
    view: 'servicioMedico/AgregarNuevaDosisMedico'
  },
  '/FAC48':{
    view: 'servicioMedico/FAC48'
  },
  '/VFAC48':{
    view: 'servicioMedico/VFAC48'
  },
  '/FAC49':{
    view: 'servicioMedico/FAC49'
  },
  '/VFAC49':{
    view: 'servicioMedico/VFAC49'
  },
  '/FAC50':{
    view: 'servicioMedico/FAC50'
  },
  '/VFAC50':{
    view: 'servicioMedico/VFAC50'
  },
  '/FAC51':{
    view: 'servicioMedico/FAC51'
  },
  '/VFAC51':{
    view: 'servicioMedico/VFAC51'
  },
  '/FAC71':{
    view: 'servicioMedico/FAC71'
  },
  '/VFAC71':{
    view: 'servicioMedico/VFAC71'
  },
  '/FAC90':{
    view: 'servicioMedico/FAC90'
  },
  '/VFAC90':{
    view: 'servicioMedico/VFAC90'
  },
  '/FAC98':{
    view: 'servicioMedico/FAC98'
  },
  '/VFAC98':{
    view: 'servicioMedico/VFAC98'
  },
  '/FAC103':{
    view: 'servicioMedico/FAC103'
  },
  '/VFAC103':{
    view: 'servicioMedico/VFAC103'
  },
  '/Session/new':{
    view:'Session/new'
  },
  '/ss/BienvenidaTS':{
    view: 'ss/BienvenidaTS'
  },
  '/FAC11':{
    view: 'ss/FAC11'
  },
  '/VFAC11':{
    view: 'ss/VFAC11'
  },
  '/FAC13':{
    view: 'ss/FAC13'
  },
  '/VFAC13':{
    view: 'ss/VFAC13'
  },
  '/FAC14':{
    view: 'ss/FAC14'
  },
  '/VFAC14':{
    view: 'ss/VFAC14'
  },
  '/FAC144':{
    view: 'ss/FAC144'
  },
  '/VFAC144':{
    view: 'ss/VFAC144'
  },
  '/FAC130':{
    view: 'ss/FAC130'
  },
  '/VFAC130':{
    view: 'ss/VFAC130'
  },
  '/FAC131':{
    view: 'ss/FAC131'
  },
  '/VFAC131':{
    view: 'ss/VFAC131'
  },
  '/nuevoRepDiarioTS':{
    view: 'ss/nuevoRepDiarioTS'
  },
  '/nuevoRepMens':{
    view: 'ss/nuevoRepMens'
  },
  '/ss/paginaprincipal':{
    view: 'ss/paginaprincipal'
  },
  '/ss/pantallaInicial':{
    view: 'ss/pantallaInicial'
  },
  '/ReporteDiarioTS':{
    view: 'ss/ReporteDiarioTS'
  },
  '/ReporteMensualTS':{
    view: 'ss/ReporteMensualTS'
  },
  '/ss/ReportesDiarios':{
    view: 'ss/ReportesDiarios'
  },
  '/ss/ReportesMensuales':{
    view: 'ss/ReportesMensuales'
  },
  '/Trabajador/edit':{
    view: 'Trabajador/edit'
  },
  '/Trabajador/index':{
    view: 'Trabajador/index'
  },
  '/Trabajador/mostrar':{
    view: 'Trabajador/mostrar'
  },
  '/Trabajador/new':{
    view: 'Trabajador/new'
  },
  '/Trabajador/show':{
    view: 'Trabajador/show'
  },
  '/static/new':{
    view: 'static/new'
  },
  '/user/edit':{
    view: 'user/edit'
  },
  '/user/index':{
    view: 'user/index'
  },'/user/new':{
    view: 'user/new'
  },'/user/show':{
    view: 'user/show'
  },
  '/user-padreFam/autentication':{
    view: 'user-padreFam/autentication'
  },
  '/user-padreFam/HistorialMedico':{
    view: 'user-padreFam/HistorialMedico'
  },
  '/user-padreFam/menuSeleccionarHijo':{
    view: 'user-padreFam/menuSeleccionarHijo'
  },
  '/user-padreFam/pantallaInicial':{
    view: 'user-padreFam/pantallaInicial'
  },
  '/user-padreFam/ReportesDiarios':{
    view: 'user-padreFam/ReportesDiarios'
  },
  '/user-padreFam/ReportesMensuales':{
    view: 'user-padreFam/ReportesMensuales'
  },
  '/user-padreFam/VideoTR':{
    view: 'user-padreFam/VideoTR'
  }
  
  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
