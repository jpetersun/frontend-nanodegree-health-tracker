var app = app || {};

app.FoodSelectedItemView = Backbone.View.extend({

	tagName: 'li',

	className: 'selected-item',

	events: {

		'click' : 'clear',
	},

	initialize: function(options) {

		this.model = options.model;

		this.listenTo(this.model, 'destroy', this.remove);
	},

	render: function() {

		this.$el.html("<strong>" + this.model.attributes.title + "</strong>" + " | calories: " + this.model.attributes.calories);

		return this;
	},

	clear: function() {

		this.model.destroy();
	}
});

