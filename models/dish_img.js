module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
  var Dish_img = sequelize.define("dish_img", {
    img_id: {
      type:DataTypes.STRING,
      primaryKey:true
    },
    user_id: {
      type:DataTypes.STRING 
    },
    rest_dish_id: {
      type:DataTypes.STRING
    },
    img_url: {
      type:DataTypes.STRING
    }
  },
  // Here we'll pass a second "classMethods" object into the define method
  // This is for any additional configuration we want to give our models
    {
      // We're saying that we want our Author to have Posts
      // classMethods: {
      //   associate: function(models) {
      //     // Associating "Dish_img" with "user"
      //     Dish_img.hasMany(models.user);
      //     // Associating "Dish_img" with "restaurant_dish"
      //     Dish_img.hasMany(models.rest_dish);
      //   }
      // }
    });
  return Dish_img;
=======
    var Dish_img = sequelize.define("Dish_img", {
            img_id: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            user_id: {
                type: DataTypes.STRING
            },
            rest_dish_id: {
                type: DataTypes.STRING
            },
            img_url: {
                type: DataTypes.STRING
            }
        },
        // Here we'll pass a second "classMethods" object into the define method
        // This is for any additional configuration we want to give our models
        {
            // We're saying that we want our Author to have Posts
            classMethods: {
                associate: function(models) {
                    // Associating "Dish_img" with "user"
                    //  Dish_img.hasMany(models.User);
                    // Associating "Dish_img" with "restaurant_dish"
                    Dish_img.hasMany(models.Restaurant_dish);
                }
            }
        });
    return Dish_img;
>>>>>>> 6691a829e1b2f5387550100a7d4990e50e31d843
};