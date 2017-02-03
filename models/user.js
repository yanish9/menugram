'use strict'

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("user", {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
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
                User.hasMany({references:{ models:'comment', key: 'userId'}});
            }
        }
    });
    return User;
};