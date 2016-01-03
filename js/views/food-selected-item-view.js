// Create global namespace for object
var app = app || {};

app.FoodSelectedItemView = Backbone.View.extend({

	// Each view will be a listed item.
	tagName: 'li',

	// Give each listed item a class name of 'selected-item'.
	className: 'selected-item',

	// Template
	template: _.template($('#selected-item-template').html()),

	// Listen for click events on each model.
	events: {

		'click' : 'clear',
	},

	// When model is destroyed remove it from the view.
	initialize: function(options) {

		this.model = options.model;

		this.listenTo(this.model, 'destroy', this.remove);
	},

	// Render each model with it's title and calorie amount attributes.
	render: function() {

		// Render model with Underscore template
		this.$el.html(this.template(this.model.toJSON()));

		return this;
	},

	// When model is clicked it is destroyed from Firebase collection.
	// It is then removed from the view.
	clear: function() {

		this.model.destroy();
	}
});

