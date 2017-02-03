'use strict'

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("user", {
        user_name: {
            type: DataTypes.STRING
        },

        user_email: {
            type: DataTypes.STRING
        }
    },
    // Here we'll pass a second "classMethods" object into the define method
    // This is for any additional configuration we want to give our models
    {
        classMethods: {
            associate: function (models) {
                User.hasMany(models.comment, { foreignKey: 'userId'});
            }
        }
    });
    return User;
};