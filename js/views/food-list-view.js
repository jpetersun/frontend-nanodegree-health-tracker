// Create global namespace for object
var app = app || {};

app.FoodListView = Backbone.View.extend({

	// Each new view will be listed item.
	tagName: 'li',

	// Give each listed item the class name of 'search-results'.
	className: 'search-results',

	// Template
	template: _.template($('#item-template').html()),

	// Listen for click events on each model.
	events: {

		'click' : 'getModel',
	},

	// When model is destroyed, remove the item from the view.
	initialize: function(options) {

		this.model = options.model;

		this.listenTo(this.model, 'destroy', this.remove);
	},

	// Clicking on a model will appending it to the Firebase collection.
	getModel: function() {

		var selectedItem = this.model;

		// Store each model with attributes of title and calories.
		app.selectedFoods.add({
			title: this.model.attributes.fields.item_name,
			calories: this.model.attributes.fields.nf_calories
		});

		// Destroy the model after it has been added to the Firebase collection.
		// It is then removed from the view.
		this.model.destroy();
	},

	// Render each model in the unordered list with title and calorie amount.
	render: function() {

		// Render model with Underscore template
		this.$el.html(this.template(this.model.toJSON()));

		return this;
	}
});
