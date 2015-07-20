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
    view: 'homepage'
  },

  //Our API Scheme
//------------------------------------------------------------------------------------------
// /countries                               GET    'return the list of countries'         DONE
// /countries                               POST   'add a new country'                    DONE
// /countries/:name/hotels                  GET    'get the hotels from the country'      DONE
// /countries/:name/hotels                  POST   'add a hotel to country'               DONE
// /countries/:name/hotels/:hotname         GET    'get the info about hotel'             DONE
// /countries/:name/hotels/:hotname         DELETE 'remove a certain hotel'               DONE
// /countries/:name/hotels/:hotname         PUT    'refresh info about hotel'             DONE
//------------------------------------------------------------------------------------------

  'get /countries': 'CountriesController.getAllCountries',
  'post /countries': 'CountriesController.addNewCountry',
  'get /countries/:name/hotels' :'CountriesController.getAllHotels',
  'post /countries/:name/hotels' : 'CountriesController.addNewHotel',
  'get /countries/:name/hotels/:hotname' : 'CountriesController.getInfo',
  'delete /countries/:name/hotels/:hotname' : 'CountriesController.removeHotel',
  'put /countries/:name/hotels/:hotname' : 'CountriesController.updateInfo',

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/
  'get /bad' : 'CountriesController.badrequest'

};
