var app = app || {};

app.FoodTotalView = Backbone.View.extend({

	el: '#total-list',

	tagName: 'li',

	initialize: function(options) {

		this.collection = options.collection;

		this.listenTo(this.collection, 'add', this.render);
	},

	render: function() {

		$('#total-list').html('');

		var selectedFoodItems;

		for (var x in this.collection.models) {

			selectedFoodItems = new app.FoodSelectedItemView({model: this.collection.models[x]});

			$('#total-list').append(selectedFoodItems.render().el);
		}

		return this;
	},
});

var totalView = new app.FoodTotalView({collection: app.selectedFoods});