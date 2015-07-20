/**
 * CountriesController
 *
 * @description :: Server-side logic for managing countries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getAllCountries: function(req, res) {
		Countries.find().exec(function(err, result) {
			return res.send(result);
		});
	},
	addNewCountry: function(req, res) {
		Countries.create({name: req.body.name, description: req.body.description})
			.exec(function(err, country) {
				return res.send(country);
			});
	},
	getAllHotels: function(req, res) {

		var query = req.param('name');
		console.log('We are looking for ' + query);
		Countries.findOne({name: query})
			.exec(function(err, country) {
				res.send(country.getHotels());
			});
	},

	addNewHotel: function(req, res) {
		var query = req.param('name');
		Countries.findOne({name: query})
			.exec(function(err, country) {
				var hotel = {
					name: req.body.name,
					description: req.body.description,
					price: req.body.price
				};
				country.getHotels().push(hotel);

				country.save(function(err) {
					res.send(country.getHotels());
				})
			});
	},

	getInfo: function(req, res) {
		var query = req.param('name');
		Countries.findOne({name: query})
			.exec(function(err, country) {
				var description = country.getHotels().filter(function(item) {
					return item['name'] === req.params.hotname;
				})[0]['description'];

				res.send({ description: description });
			});
	},

	removeHotel: function(req, res) {
		var query = req.param('name');
		Countries.findOne({name: query})
			.exec(function(err, country) {
	
				var index = country.getIndex(req.param('hotname'));

				country.getHotels().splice(index, 1);

				country.save(function(err) {
					res.send(country.getHotels());
				});
			});
	},

	updateInfo: function(req, res) {
		var query = req.param('name');
		Countries.findOne({name: query})
			.exec(function(err, country) {
	
				var index = country.getIndex(req.param('hotname'));

				var selectedhotel = country.getHotels()[index];

				if (req.body.name) selectedhotel['name'] = req.body.name;
				if (req.body.description) selectedhotel['description'] = req.body.description;
				if (req.body.price) selectedhotel['price'] = req.body.price;

				country.save(function(err) {
					res.send(country.getHotels());
				});
			});
	},

	badrequest: function(req, res) {
		res.notSoBadRequest('Sorry - bad request!', true);
	}
};

