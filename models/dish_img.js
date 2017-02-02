'use strict'

module.exports = function(sequelize, DataTypes) {

    var Dish_img = sequelize.define("dish_img", {

            user_id: {
                type: DataTypes.STRING
            },
            rest_dish_id: {
                type: DataTypes.STRING
            },
            img_url: {
                type: DataTypes.STRING
            }
        },
        // Here we'll pass a second "classMethods" object into the define method
        // This is for any additional configuration we want to give our models
        {
            // We're saying that we want our Author to have Posts
            // classMethods: {
            associate: function(models) {
                // Associating "Dish_img" with "restaurant_dish"
                Dish_img.belongsTo(models.rest_dish);
            }
        });
    return Dish_img;

};