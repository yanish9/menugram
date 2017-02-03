module.exports = function(db) {
    db.rest_dishes.bulkCreate([
        {
            dish_name: "Dish Name 1",
            dish_type: "Dish Type 1",
            dish_price: 28,
            rest_city: "Orlando",
            rest_type:""
        },
        {
            rest_name: "Black Bean Deli",
            rest_long: -81.357469,
            rest_lat: 28.553427,
            rest_city: "Orlando",
            rest_type:""
        },
        {
            rest_name: "Mellow Mushroom",
            rest_long: -81.209889,
            rest_lat: 28.566529,
            rest_city: "Orlando",
            rest_type:""
        },
        {
            rest_name: "Hubbly Bubbly Falafel Shop",
            rest_long: -81.39014,
            rest_lat: 28.582772,
            rest_city: "Orlando",
            rest_type:""
        },
        {
            rest_name: "Dandelion Communitea Cafe",
            rest_long: -81.365709,
            rest_lat: 28.552025,
            rest_city: "Orlando",
            rest_type:""
        },
        {
            rest_name: "Santiago's Bodega",
            rest_long: -81.367146,
            rest_lat: 28.5639,
            rest_city: "Orlando",
            rest_type:""
        }
    ]);
};