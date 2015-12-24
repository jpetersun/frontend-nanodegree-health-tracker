var app = app || {};

app.FoodListView = Backbone.View.extend({

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
		var totalView;
		totalView = new app.FoodTotalView({model: this.model});
		// this.$el.find('#total-list').append(totalView.render().el);
		$('#total-list').append(totalView.render().el);

	},

	render: function() {

		this.$el.html(this.model.attributes.fields.item_name + " | calories: " + this.model.attributes.fields.nf_calories);
		return this;
	}

});

//var foodTotal = new app.FoodTotalView();