module.exports = function (db) {
    db.comment.bulkCreate([
        {
            comment: "comment 1",
            //restDishId:1,
            //userId:1
        },
        {
            comment: "comment 2",
            //restDishId:2,
            //userId:2
        },
        {
            comment: "comment 3",
            //restDishId:3,
            //userId:3
        },
        {
            comment: "comment 4",
            //restDishId:4,
            //userId:4
        },
        {
            comment: "comment 5",
            //restDishId:5,
            //userId:5
        },
    ]);

    db.rest_dish.bulkCreate([
        {
            dish_name: "Dish Name 1",
            dish_type: "Dish Type 1",
            dish_price: 28,
            //restaurantId:1
        }, {
            dish_name: "Dish Name 2",
            dish_type: "Dish Type 2",
            dish_price: 29,
            //restaurantId:2
        },
        {
            dish_name: "Dish Name 3",
            dish_type: "Dish Type 3",
            dish_price: 30,
            //restaurantId:3
        },
        {
            dish_name: "Dish Name 4",
            dish_type: "Dish Type 4",
            dish_price: 31,
            //restaurantId:4
        },
        {
            dish_name: "Dish Name 5",
            dish_type: "Dish Type 5",
            dish_price: 32,
            //restaurantId:5
        }
    ]);


    db.dish_img.bulkCreate([
        {
            user_id: 1,
            rest_dish_id: 1,
            img_description: "Good Dish 1",
            img_url: "photo1"
        },
        {
            user_id: 2,
            rest_dish_id: 2,
            img_description: "Good Dish 2",
            img_url: "photo 2"
        },
        {
            user_id: 3,
            rest_dish_id: 3,
            img_description: "Good Dish 3",
            img_url: "photo 3"
        },
        {
            user_id: 4,
            rest_dish_id: 4,
            img_description: "Good Dish 4",
            img_url: "photo 4"
        },
        {
            user_id: 5,
            rest_dish_id: 5,
            img_description: "Good Dish 5",
            img_url: "photo 5"
        }
    ]);

    db.user.bulkCreate([
        {
            name: "User Name 1",
            user_email: "User email 1"
            //user_role: "user"
        },
        {
            name: "User Name 2",
            user_email: "User email 2"
            //user_role: "user"
        },
        {
            name: "User Name 3",
            user_email: "User email 3"
            //user_role: "user"
        },
        {
            name: "User Name 4",
            user_email: "User email 4"
            //user_role: "user"
        },
        {
            name: "User Name 5",
            user_email: "User email 5"
            //user_role: "user"
        }
    ]);


    db.restaurant.bulkCreate([
        {
            rest_name: "Hawkers Asian Street Fare",
            rest_long: -81.364201,
            rest_lat: 28.5606620,
            rest_city: "Orlando",
            rest_type: ""
        },
        {
            rest_name: "Black Bean Deli",
            rest_long: -81.357469,
            rest_lat: 28.553427,
            rest_city: "Orlando",
            rest_type: ""
        },
        {
            rest_name: "Mellow Mushroom",
            rest_long: -81.209889,
            rest_lat: 28.566529,
            rest_city: "Orlando",
            rest_type: ""
        },
        {
            rest_name: "Hubbly Bubbly Falafel Shop",
            rest_long: -81.39014,
            rest_lat: 28.582772,
            rest_city: "Orlando",
            rest_type: ""
        },
        {
            rest_name: "Dandelion Communitea Cafe",
            rest_long: -81.365709,
            rest_lat: 28.552025,
            rest_city: "Orlando",
            rest_type: ""
        },
        {
            rest_name: "Santiago's Bodega",
            rest_long: -81.367146,
            rest_lat: 28.5639,
            rest_city: "Orlando",
            rest_type: ""
        }
    ]);
};