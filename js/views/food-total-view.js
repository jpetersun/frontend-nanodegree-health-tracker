var app = app || {};

app.FoodTotalView = Backbone.View.extend({

	el: '#total-list',

	tagName: 'li',

	// events: {
	// 	'click' : 'clear'
	// },


	initialize: function(options) {


		console.log('total view initialized');

		this.collection = options.collection;
		// this.model = options.collection.models;

		this.listenTo(this.collection, 'add', this.render);
		// this.model = options.model;
		// this.listenTo(this.collection, 'reset', this.addAll);
	},

	render: function() {
		console.log('adding selected items to screen');
		// console.log(this.collection);

		// var listView;

		// for (var x in this.collection.models) {
		// 	listView = new app.FoodListView({model: this.collection.models[x]});

		// 	this.$el.find('#food-list').append(listView.render().el);
		// }
		$('#total-list').html('');

		var selectedFoodItems;
		for (var x in this.collection.models) {
			selectedFoodItems = new app.FoodSelectedItemView({model: this.collection.models[x]});

			$('#total-list').append(selectedFoodItems.render().el);
		}
		// $('#total-list').html(this.collection.models.attributes.fields.item_name + " | calories: " + this.collection.models.attributes.fields.nf_calories);

		return this;
	},

	// addOne: function() {

	// },

	// addAll: function() {

	// },


	// remove: function() {
	// 	this.render();
	// },

	// clear: function() {
	// 	this.collection.remove(this.model);
	// }

});

var totalView = new app.FoodTotalView({collection: app.selectedFoods});