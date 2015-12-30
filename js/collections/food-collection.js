// Create global namespace for object
var app = app || {};

var FoodCollection = Backbone.Collection.extend({

	// Model for each item in the collection.
	model: app.FoodItem,

	initialize: function(options) {

		this.name = options.name;
	},

	// AJAX request url to the Nutritionix API.
	url: function() {

		// AppID and appKey required for requests.
		// Normally not visible to users.
		var appId = "3b3f2d32";
		var appKey = "53a3a37d31928d1cb223a9867554e6cd";

		// Search Nutritionix API with value from input field.
		return "https://api.nutritionix.com/v1_1/search/" + this.name + "?fields=item_name%2Cnf_calories" + "&appId=" + appId + "&appKey=" + appKey;
	},

	// Parse the results from the AJAX request.
	parse: function(response) {

		return response.hits;
	}
});

// FireBase collection to store selected food items.
var SelectedFoodCollection = Backbone.Firebase.Collection.extend({

	// Model for each selected food item.
	model: app.FoodItem,

	// URL to Firebase backend.
	url: "https://radiant-torch-7867.firebaseio.com"
});

// Global collection to add selected food items to.
app.selectedFoods = new SelectedFoodCollection();

