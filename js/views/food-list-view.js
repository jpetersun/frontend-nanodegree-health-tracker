var app = app || {};

app.FoodListView = Backbone.View.extend({

	//el: '#foodContainer',
	tagName: 'li',

	className: 'search-results',

	// template: '<ul id="food-list"></ul>',


	events: {
		'click' : 'getModel',
		// 'click .selected-items'
	},

	initialize: function(options) {
		console.log('food view initialized');
		this.model = options.model;
	},

	// newItem: function() {
	// 	return {
	// 		title: this.model.attributes.fields.item_name,
	// 		calories: this.model.attributes.fields.nf_calories
	// 	}
	// },

	getModel: function() {
		//var totalView;
		var selectedItem = this.model;
		//totalView = new app.FoodTotalView({model: this.model});
		// this.$el.find('#total-list').append(totalView.render().el);
		//$('#total-list').append(totalView.render().el);
		app.selectedFoods.add({
			title: this.model.attributes.fields.item_name,
			calories: this.model.attributes.fields.nf_calories
		});
	},

	render: function() {

		this.$el.html(this.model.attributes.fields.item_name + " | calories: " + this.model.attributes.fields.nf_calories);
		return this;
	}

});

//var foodTotal = new app.FoodTotalView();