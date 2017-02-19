'use strict'

module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define("comment", {
            comment: {
                type: DataTypes.STRING
            }

        },
        // Here we'll pass a second "classMethods" object into the define method
        // This is for any additional configuration we want to give our models
        {
            classMethods: {
                associate: function(models) {
                    // Associating "Comment" with "Dish"
                    Comment.belongsTo(models.dish_img);
                    //Comment.belongsTo(models.rest_dish);
                    // Associating "Comment" with "User"
                    // Comment.belongsTo(models.user);
                }
            }
        });
    return Comment;
};