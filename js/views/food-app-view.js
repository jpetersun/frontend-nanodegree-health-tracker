var app = app || {};

app.FoodAppView = Backbone.View.extend({

	el: '#searchContainer',

	events: {
		'keypress #searchFood' : 'getFood'
	},

	initialize: function() {

		//this.collection.on("add", this.render, this);

		console.log('running initialize');
		// this.listenTo(this.collection, 'change', this.render);
		// this.listenTo(this.collection, 'destroy', this.remove);

		// var title = this.$el.find('input').val();

		// _.bindAll(this, 'render');

		// this.collection = new FoodCollection({name: 'grill'});

		// var self = this;
		// this.collection.fetch({
		// 	success: function() {
		// 		self.render();
		// 	}
		// });
	},

	getFood: function(e) {


		_.bindAll(this, 'render');
		if (e.which === ENTER_KEY && $('#searchFood').val().trim()) {
			console.log('getting food');
			var food_name = $('#searchFood').val();

			this.collection = new FoodCollection({name: food_name});

			var self = this;
			this.collection.fetch({
				success: function() {
					self.render();
				}
			});
		};


	},

	// template: _.template($('#foodTemplate').html()),
	// template: '<ul id="food-list"></ul>',

	render: function() {

		console.log(this.collection.models);

		var listView;

		for (var x in this.collection.models) {
			listView = new app.FoodListView({model: this.collection.models[x]});

			this.$el.find('#food-list').append(listView.render().el);
		}
		//$('#foodContainer').html(this.template({ food: this.collection.toJSON() }));
	}
});

// var foodApp = new app.FoodListView ({
// 	el: $('#searchContainer')
// });

var ENTER_KEY = 13;
var foodApp = new app.FoodAppView();