/**
* Countries.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection: 'someMongodbServer',
  attributes: {
  	name : {
  		type: 'string'
  	},
  	description : {
  		type: 'string'
  	},
  	hotels : {
  		type: 'array'
  	},
  	getHotels: function() {
  		return this.hotels;
  	},
  	getIndex: function(hotname) {
		return this.hotels
			.map(function(item) { 
					return item.name;
				})
			.indexOf(hotname);
	}
  }
};

