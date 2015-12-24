var app = app || {};

app.FoodTotalView = Backbone.View.extend({

	//el: '#foodContainer',
	tagName: 'li',

	// template: '<ul id="food-list"></ul>',


	events: {
		'click' : 'getModel'
	},

	initialize: function(options) {
		console.log('food total view initialized');
		this.model = options.model;

	},

	getModel: function() {
		console.log(this.model);
	},

	render: function() {

		this.$el.html(this.model.attributes.fields.item_name + " | calories: " + this.model.attributes.fields.nf_calories);
		return this;
	}

});

//var foodTotal = new app.FoodTotalView();