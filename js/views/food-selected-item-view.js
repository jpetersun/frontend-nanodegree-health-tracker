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

		this.$el.html(this.model.attributes.fields.item_name + " | calories: " + this.model.attributes.fields.nf_calories);
		return this;
	},

	clear: function() {
		console.log('destroying model');
		this.model.destroy();
		console.log('Total selected items: ' + app.selectedFoods.length);
	}

});

