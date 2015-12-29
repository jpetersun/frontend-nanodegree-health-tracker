var app = app || {};

app.FoodItem = Backbone.Model.extend({

	initialize: function() {
		console.log('makin food');
	},
});
// var milk = new app.FoodItem({ name: 'milk', calories: 100 });
// var cheese = new app.FoodItem({ name: 'cheese', calories: 200 });
// var bread = new app.FoodItem({ name: 'bread', calories: 150 });
