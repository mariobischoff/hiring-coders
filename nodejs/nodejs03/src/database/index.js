import Sequelize from "sequelize";
import Files from "../app/models/Files";
import Users from "../app/models/Users";
import databaseConfig from "../config/database";

const models = [Users, Files];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
