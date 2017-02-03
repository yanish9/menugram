'use strict'

module.exports = function (sequelize, DataTypes) {
    var Comment = sequelize.define("comment", {
        commentTxt: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            references:{ models:'user', key: 'userId'},
            onDelete: 'cascade'
        },
        rest_dishId: {
            type: DataTypes.INTEGER,
            references:{ models:'rest_dish', key: 'rest_dishId'},
            onDelete: 'cascade'
        }
    },
        // Here we'll pass a second "classMethods" object into the define method
        // This is for any additional configuration we want to give our models
        {
            classMethods: {
                associate: function (models) {
                    //Comment.belongsTo({references:{ models:'rest_dish', key: 'rest_dishId'}});
                    //Comment.belongsTo({references:{ models:'user', key: 'userId'}});
                }
            }
        });
    return Comment;
};