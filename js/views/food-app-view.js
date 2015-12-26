var app = app || {};

app.FoodAppView = Backbone.View.extend({

	el: '#searchContainer',

	events: {
		'keypress #searchFood' : 'getFood'
	},

	initialize: function() {

		//this.collection.on("add", this.render, this);
		this.listenTo(app.selectedFoods, 'add destroy', this.renderCalories);
		console.log('running app initialize');
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

		$("#food-list").html('');

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

	renderCalories: function() {
		var total = 0;


		_.each(app.selectedFoods.models, function (item) {
			total += item.attributes.fields.nf_calories;
		});

		$('#total-calories span').text(total);

		return this;
	},

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