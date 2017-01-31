module.exports = function(sequelize, DataTypes) {
  var Dish = sequelize.define("dish", {
    dish_id: {
      type:DataTypes.STRING,
      primaryKey:true
    },
    dish_name: {
      type:DataTypes.STRING
    },
    dish_type: {
      type:DataTypes.STRING
    },
    rest_dish_id: {
      type:DataTypes.STRING
    },
    description: {
      type:DataTypes.STRING
    }
  },
  // Here we'll pass a second "classMethods" object into the define method
  // This is for any additional configuration we want to give our models
    {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // Associating "Dish" with "rest_dish"
          Dish.hasMany(models.rest_dish);
        }
      }
    });
  return Dish;
};
