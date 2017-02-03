'use strict'

module.exports = function (sequelize, DataTypes) {
    var Dish_img = sequelize.define("dish_img", {
        user_id: {
            type: DataTypes.INTEGER,
            references: { models: 'user', key: 'userId' },
            onDelete: 'cascade'
        },
        rest_dish_id: {
            type: DataTypes.INTEGER,
            references: { models: 'rest_dish', key: 'rest_dishId' },
            onDelete: 'cascade'
        },
        img_description: {
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
            classMethods: {
                associate: function (models) {
                    Dish_img.belongsTo(models.rest_dish, { foreignKey: 'rest_dishId' });
                    Dish_img.belongsTo(models.user, { foreignKey: 'userId' });
                }
            }
        }
    );
    return Dish_img;

};