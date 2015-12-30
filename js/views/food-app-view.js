// Create global namespace for object
var app = app || {};

app.FoodAppView = Backbone.View.extend({

	// Binding to main container to have access to HTML elements.
    el: '#search-container',

    // When button is click AJAX request is sent.
    events: {

        'click #search-button': 'getFood'
    },

    // Listen for adding, or removing of items to selected list item and update calories.
    initialize: function() {

        this.listenTo(app.selectedFoods, 'add remove', this.renderCalories);
    },

   	// AJAX request for food items from input search field.
    getFood: function() {

    	// Empty food list each time before appending new search results.
        $("#food-list").html('');

        // Take value of input field and store it as variable
        var food_name = $('#searchFood').val();

        // Create new collection which has a URL for AJAX request.
        // Use value of input field for searching API
        this.collection = new FoodCollection({
            name: food_name
        });

        // Maintain context of collection
        var self = this;

        // Make request to Nutritionix API and render on sucess.
        this.collection.fetch({
            success: function() {
                self.render();
            },
            error: function() {
            	$('#food-list').append('<h2>Could not retrieve food search...</h2>');
            }
        });
    },

    // Calculate the total amount of calories of each food item selected.
    renderCalories: function() {

        var total = 0;

        // For each through each model of selected food items and sum
        // them together
        _.each(app.selectedFoods.models, function(item) {
            total += item.attributes.calories;
        });

        // Replace text of total-calories span with new total.
        $('#total-calories span').text(total);

        return this;
    },

    // Render the collection from AJAX request.
    render: function() {

        var listView;

        // Loop through collection and create a new view for each model.
        for (var x in this.collection.models) {
            listView = new app.FoodListView({
                model: this.collection.models[x]
            });

            // Append each model to unordered food-list and render them.
            this.$el.find('#food-list').append(listView.render().el);
        }
    }
});

// Start the application.
var foodApp = new app.FoodAppView();