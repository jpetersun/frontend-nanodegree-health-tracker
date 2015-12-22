var app = app || {};

app.FoodListView = Backbone.View.extend({

	initialize: function() {
		_.bindAll(this, 'render');

		this.collection = new FoodCollection({name: 'starbucks coffee'});

		var self = this;
		this.collection.fetch({
			success: function() {
				self.render();
			}
		});
	},

	template: _.template($('#foodTemplate').html()),

	render: function() {

		$(this.el).html(this.template({ food: this.collection.toJSON() }));
	}
});

var foodApp = new app.FoodListView ({
	el: $('body')
});