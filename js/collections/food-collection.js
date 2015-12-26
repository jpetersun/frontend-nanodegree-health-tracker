var app = app || {};

var FoodCollection = Backbone.Collection.extend({
	model: app.FoodItem,

	initialize: function(options) {
		console.log('makin collection of food');
		this.name = options.name;
	},

	url: function() {
		var appId = "3b3f2d32";
		var appKey = "53a3a37d31928d1cb223a9867554e6cd";

		return "https://api.nutritionix.com/v1_1/search/" + this.name + "?fields=item_name%2Cnf_calories" + "&appId=" + appId + "&appKey=" + appKey;
	},

	parse: function(response) {
		//console.log(response.hits[0]);
		return response.hits;
	}
});

var SelectedFoodCollection = Backbone.Collection.extend({
	model: app.FoodItem,

	initialize: function() {
		console.log('selected food collection initialized');
	},
});

app.selectedFoods = new SelectedFoodCollection();
//var Food = new FoodCollection({name: ''});
//var bread = new FoodCollection({query: 'bread'});
//Food.fetch()
//bread.fetch();

