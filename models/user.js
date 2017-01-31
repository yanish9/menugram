module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    user_id: {
      type:DataTypes.STRING,
      primaryKey:true
    },
    user_email: {
      type:DataTypes.STRING
    },
    user_pwd: {
      type: DataTypes.STRING
    }
  },
  // Here we'll pass a second "classMethods" object into the define method
  // This is for any additional configuration we want to give our models
    {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // Associating "User" with "Comment"
          User.hasMany(models.Comment);
          // Associating "User" with "Image"
          User.hasMany(models.Image);
        }
      }
    });
  return User;
};
