const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("tugas_express_crud", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.biodata = require("./biodata.model.js")(sequelize, Sequelize);

module.exports = db;
