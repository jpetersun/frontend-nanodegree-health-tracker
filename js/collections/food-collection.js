var app = app || {};

var FoodCollection = Backbone.Collection.extend({

	model: app.FoodItem,

	initialize: function(options) {

		this.name = options.name;
	},

	url: function() {

		var appId = "3b3f2d32";
		var appKey = "53a3a37d31928d1cb223a9867554e6cd";

		return "https://api.nutritionix.com/v1_1/search/" + this.name + "?fields=item_name%2Cnf_calories" + "&appId=" + appId + "&appKey=" + appKey;
	},

	parse: function(response) {

		return response.hits;
	}
});

var SelectedFoodCollection = Backbone.Firebase.Collection.extend({

	model: app.FoodItem,

	url: "https://radiant-torch-7867.firebaseio.com"
});

app.selectedFoods = new SelectedFoodCollection();

