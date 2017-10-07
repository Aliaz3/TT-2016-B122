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
    view: 'static/index'
  },
  '/admini/AdmiListadoPadre':{
    view: 'admini/AdmiListadoPadre'
  },
  '/admini/AdmiListadoPersonaAutorizada':{
    view: 'admini/AdmiListadoPersonaAutorizada'
  },
  '/admini/AdmiListadoDerechohabiente':{
    view: 'admini/AdmiListadoDerechohabiente'
  },
  '/admini/AdminGraficas':{
    view: 'admini/AdminGraficas'
  },
  '/admini/AdminListadoNiños':{
    view: 'admini/AdminListadoNiños'
  },
  '/admini/BienvenidaAdmin':{
    view: 'admini/BienvenidaAdmin'
  },
  '/servicioMedico/Bienvenidadra':{
    view: 'servicioMedico/Bienvenidadra'
  },
  '/servicioMedico/AgregarNuevaDosisMedico':{
    view: 'servicioMedico/AgregarNuevaDosisMedico'
  },
  '/servicioMedico/FAC48':{
    view: 'servicioMedico/FAC48'
  },
  '/servicioMedico/FAC49':{
    view: 'servicioMedico/FAC49'
  },
  '/servicioMedico/FAC50':{
    view: 'servicioMedico/FAC50'
  },
  '/servicioMedico/FAC51':{
    view: 'servicioMedico/FAC51'
  },
  '/servicioMedico/FAC71':{
    view: 'servicioMedico/FAC71'
  },
  '/servicioMedico/FAC90':{
    view: 'servicioMedico/FAC90'
  },
  '/servicioMedico/FAC98':{
    view: 'servicioMedico/FAC98'
  },
  '/Session/new':{
    view:'Session/new'
  },
  '/ss/BienvenidaTS':{
    view: 'ss/BienvenidaTS'
  },
  '/ss/FAC11':{
    view: 'ss/FAC11'
  },
  '/ss/FAC13':{
    view: 'ss/FAC13'
  },
  '/ss/FAC14':{
    view: 'ss/FAC14'
  },
  '/ss/FAC144':{
    view: 'ss/FAC144'
  },
  '/ss/FAC130':{
    view: 'ss/FAC130'
  },
  '/ss/FAC131':{
    view: 'ss/FAC131'
  },
  '/ss/nuevoRepDiarioTS':{
    view: 'ss/nuevoRepDiarioTS'
  },
  '/ss/nuevoRepMens':{
    view: 'ss/nuevoRepMens'
  },
  '/ss/paginaprincipal':{
    view: 'ss/paginaprincipal'
  },
  '/ss/pantallaInicial':{
    view: 'ss/pantallaInicial'
  },
  '/ss/ReporteDiarioTS':{
    view: 'ss/ReporteDiarioTS'
  },
  '/ss/ReporteMensualTS':{
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
