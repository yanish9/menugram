'use strict'

module.exports = function(sequelize, DataTypes) {
    var Restaurant = sequelize.define("restaurant", {

            rest_name: {
                type: DataTypes.STRING
            },
            rest_lat: {
                type: DataTypes.STRING
            },
            rest_long: {
                type: DataTypes.STRING
            },
            rest_city: {
                type: DataTypes.STRING
            },
            rest_type: {
                type: DataTypes.STRING
            }
        },
        // Here we'll pass a second "classMethods" object into the define method
        // This is for any additional configuration we want to give our models
        {
            //We're saying that we want our Author to have Posts
            classMethods: {
                associate: function(models) {
                    // Associating "Restaurant" with "rest_dish"
                    Restaurant.hasMany(models.rest_dish);
                }
            }
        });
    return Restaurant;

};