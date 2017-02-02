'use strict'

module.exports = function(sequelize, DataTypes) {

    var Rest_dish = sequelize.define("rest_dish", {
            dish_name: {
                type: DataTypes.STRING
            },
            dish_type: {
                type: DataTypes.STRING
            },
            dish_price: {
                type: DataTypes.STRING
            },
            rest_id: {
                type: DataTypes.STRING
            }
        },
        // Here we'll pass a second "classMethods" object into the define method
        // This is for any additional configuration we want to give our models
        {
            //We're saying that we want our Author to have Posts
            classMethods: {
                associate: function(models) {
                    // Associating "Rest_dish" with "user"
                    Rest_dish.belongsTo(models.restaurant);
                    // Rest_dish.hasMany(models.dish_img);
                    // Rest_dish.hasMany(models.comment);
                }
            }
        });
    return Rest_dish;

};