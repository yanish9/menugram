'use strict'

module.exports = function (sequelize, DataTypes) {
    var Rest_dish = sequelize.define("rest_dish", {
        dish_name: {
            type: DataTypes.STRING
        },
        dish_type: {
            type: DataTypes.STRING
        },
        dish_price: {
            type: DataTypes.INTEGER
        },
        restaurant_Id: {
            type: DataTypes.INTEGER,
            references:{ models:'restaurant', key: 'restaurantId'},
            onDelete: 'cascade'
        },
    },
    // Here we'll pass a second "classMethods" object into the define method
    // This is for any additional configuration we want to give our models
    {
        //We're saying that we want our Author to have Posts
        classMethods: {
            associate: function (models) {
               // Rest_dish.belongsTo({references:{ models:'restaurant', key: 'restaurantId'}});
                //Rest_dish.hasMany({references:{ models:'comment', key: 'rest_dishId'}});
            }
        }
    });
    return Rest_dish;

};