var app = app || {};

app.FoodListView = Backbone.View.extend({

	tagName: 'li',

	className: 'search-results',

	events: {

		'click' : 'getModel',
	},

	initialize: function(options) {

		this.model = options.model;

		this.listenTo(this.model, 'destroy', this.remove);
	},

	getModel: function() {

		var selectedItem = this.model;

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
