var app = app || {};

app.FoodTotalView = Backbone.View.extend({

	//el: '#total-list',

	tagName: 'li',
	// className: 'total-listed-item',

	events: {
		'click' : 'clear'
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
		this.model.destroy();
	}

});