module.exports = function(sequelize, DataTypes) {
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
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // Associating "Comment" with "Dish"
          Comment.hasOne(models.restaurant_dish);
          // Associating "Comment" with "User"
          Comment.hasOne(models.User);
        }
      }
    });
  return Comment;
};
