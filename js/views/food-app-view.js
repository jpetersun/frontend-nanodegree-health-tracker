var app = app || {};

app.FoodAppView = Backbone.View.extend({

    el: '#search-container',

    events: {
        'click #search-button': 'getFood'
    },

    initialize: function() {

        this.listenTo(app.selectedFoods, 'add remove', this.renderCalories);
        console.log('running app initialize');
    },

    getFood: function(e) {

        $("#food-list").html('');

        _.bindAll(this, 'render');
        console.log('getting food');
        var food_name = $('#searchFood').val();

        this.collection = new FoodCollection({
            name: food_name
        });

        var self = this;
        this.collection.fetch({
            success: function() {
                self.render();
            }
        });
    },

    renderCalories: function() {

        var total = 0;

        _.each(app.selectedFoods.models, function(item) {
            total += item.attributes.calories;
        });

        $('#total-calories span').text(total);

        return this;
    },

    render: function() {

        var listView;

        for (var x in this.collection.models) {
            listView = new app.FoodListView({
                model: this.collection.models[x]
            });

            this.$el.find('#food-list').append(listView.render().el);
        }
    }
});

var foodApp = new app.FoodAppView();