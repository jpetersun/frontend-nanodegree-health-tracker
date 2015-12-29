var app = app || {};

app.FoodListView = Backbone.View.extend({

	//el: '#foodContainer',
	tagName: 'li',

	className: 'search-results',

	events: {
		'click' : 'getModel',
		// 'click .selected-items'
	},

	initialize: function(options) {
		console.log('food view initialized');
		this.model = options.model;
		this.listenTo(this.model, 'destroy', this.remove);
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
		this.model.destroy();
	},

	render: function() {

		this.$el.html("<strong>" + this.model.attributes.fields.item_name + "</strong>" + " | calories: " + this.model.attributes.fields.nf_calories);
		return this;
	}

});

//var foodTotal = new app.FoodTotalView();