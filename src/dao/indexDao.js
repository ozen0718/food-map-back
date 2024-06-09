const { pool } = require("../../config/database");

exports.exampleDao = async function (connection, params) {
  const Query = ``;
  const Params = [];

  const rows = await connection.query(Query, Params);

  return rows;
};

exports.selectRestaurants = async function (connection, category) {
  const selectAllRestaurantsQuery = `SELECT title, address, category, videoUrl FROM FoodMap.Restaurants where status = 'A';`;
  const selectCategorizedRestaurantsQuery = `SELECT title, address, category, videoUrl FROM FoodMap.Restaurants where status = 'A' and category = ?;`;
  const Params = [category];

  const Query = category
    ? selectCategorizedRestaurantsQuery
    : selectAllRestaurantsQuery;

  const rows = await connection.query(Query, Params);

  return rows;
};
