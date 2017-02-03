module.exports = function(db) {
    db.rest_dish.bulkCreate([
        {
            dish_name: "Dish Name 1",
            dish_type: "Dish Type 1",
            dish_price: 28
        },
        {
            dish_name: "Dish Name 2",
            dish_type: "Dish Type 2",
            dish_price: 29
        },
        {
            dish_name: "Dish Name 3",
            dish_type: "Dish Type 3",
            dish_price: 30
        },
        {
            dish_name: "Dish Name 4",
            dish_type: "Dish Type 4",
            dish_price: 31
        },
        {
            dish_name: "Dish Name 5",
            dish_type: "Dish Type 5",
            dish_price: 32
        }
    ]);
};