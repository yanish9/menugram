module.exports = function(sequelize, DataTypes) {
  var Rest_dish = sequelize.define("rest_dish", {
    rest_dish_id: {
      type:DataTypes.STRING,
      primaryKey:true
    },
    rest_id: {
      type:DataTypes.STRING
    },
    dish_id: {
      type:DataTypes.STRING
    }
  },
  // Here we'll pass a second "classMethods" object into the define method
  // This is for any additional configuration we want to give our models
    {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // Associating "Rest_dish" with "user"
          Rest_dish.hasOne(models.restaurant);
          // Associating "Rest_dish" with "restaurant_dish"
          Rest_dish.hasOne(models.dish);
        }
      }
    });
  return Rest_dish;
};