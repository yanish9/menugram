'use strict'

module.exports = function(sequelize, DataTypes) {

    var User = sequelize.define("User", {

            name: {
                type: DataTypes.STRING
            },

            user_email: {
                type: DataTypes.STRING
            },
            username: {
                type: DataTypes.STRING
            },
            user_role: {
                type: DataTypes.STRING,
                values: ['admin', 'user', 'in review']
            }
        },
        // Here we'll pass a second "classMethods" object into the define method
        // This is for any additional configuration we want to give our models
        {
            // We're saying that we want our Author to have Posts
            classMethods: {
                associate: function(models) {
                    // Associating "User" with "Comment"
                    //User.hasMany(models.Comments);
                    // Associating "User" with "Image"
                    User.hasMany(models.comment);
                }
            }
        });
    return User;
};