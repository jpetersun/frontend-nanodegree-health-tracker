// Create global namespace for object
var app = app || {};

app.FoodTotalView = Backbone.View.extend({

	// Binding for allowing access to each listed item.
	el: '#total-list',

	// Each model rendered with be a listed item.
	tagName: 'li',

	// Each time a model is added to the collection render is executed.
	initialize: function(options) {

		this.collection = options.collection;

		this.listenTo(this.collection, 'add', this.render);
	},

	// Render each model in Firebase collection.
	render: function() {

		// Empty list to avoid duplicate views of the same model.
		$('#total-list').html('');

		var selectedFoodItems;

		// Loop through Firebase collection and create a view for each model.
		for (var i = 0; i < this.collection.models.length; i++) {
			selectedFoodItems = new app.FoodSelectedItemView({model: this.collection.models[i]});

			// Append each model to the view and render them.
			$('#total-list').append(selectedFoodItems.render().el);
		}

		return this;
	},
});

// Kick off of unordered list of selected food
// items from Firebase collection.
var totalView = new app.FoodTotalView({collection: app.selectedFoods});