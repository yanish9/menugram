module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
  var Comment = sequelize.define("comment", {
    comment_id: {
      type:DataTypes.STRING,
      primaryKey:true
    },
    user_id: {
      type:DataTypes.STRING
    },
    restaurant_disk_id: {
      type:DataTypes.STRING
    },
    comment: {
      type:DataTypes.STRING
    }
  },
  // Here we'll pass a second "classMethods" object into the define method
  // This is for any additional configuration we want to give our models
    {
      classMethods: {
        associate: function(models) {
          // Associating "Comment" with "Dish"
          Comment.hasOne(models.rest_dish);
          // Associating "Comment" with "User"
          // Comment.belongsTo(models.user);
        }
      }
    });
  return Comment;
};
=======
    var Comments = sequelize.define("Comments", {
            comment_id: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            user_id: {
                type: DataTypes.STRING
            },
            restaurant_disk_id: {
                type: DataTypes.STRING
            },
            comment: {
                type: DataTypes.STRING
            }
        },
        // Here we'll pass a second "classMethods" object into the define method
        // This is for any additional configuration we want to give our models
        {
            // We're saying that we want our Author to have Posts
            classMethods: {
                associate: function(models) {
                    // Associating "Comment" with "Dish"
                    Comments.hasOne(models.Restaurant_dish);
                    // Associating "Comment" with "User"
                    Comments.hasOne(models.User);
                }
            }
        });
    return Comments;
};
>>>>>>> 6691a829e1b2f5387550100a7d4990e50e31d843
