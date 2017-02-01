module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
  var Rest_dish = sequelize.define("rest_dish", {
    rest_dish_id: {
      type:DataTypes.STRING,
      primaryKey:true
    },
    dish_name: {
      type:DataTypes.STRING
    },
    dish_type: {
      type:DataTypes.STRING
    },
    dish_price: {
      type:DataTypes.STRING
    },
    rest_id: {
      type:DataTypes.STRING
    }
  },
  // Here we'll pass a second "classMethods" object into the define method
  // This is for any additional configuration we want to give our models
    {
      //We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // Associating "Rest_dish" with "user"
          Rest_dish.belongsTo(models.restaurant);
        }
      }
    });
  return Rest_dish;
=======
    var Rest_dish = sequelize.define("Restaurant_dish", {
            rest_dish_id: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            rest_id: {
                type: DataTypes.STRING
            },
            dish_id: {
                type: DataTypes.STRING
            }
        },
        // Here we'll pass a second "classMethods" object into the define method
        // This is for any additional configuration we want to give our models
        {
            // We're saying that we want our Author to have Posts
            classMethods: {
                associate: function(models) {
                    // Associating "Rest_dish" with "user"
                    Rest_dish.hasOne(models.Restaurant);
                    // Associating "Rest_dish" with "restaurant_dish"
                    //Rest_dish.hasOne(models.Dish);
                }
            }
        });
    return Rest_dish;
>>>>>>> 6691a829e1b2f5387550100a7d4990e50e31d843
};