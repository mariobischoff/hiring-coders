import { DataTypes, Model } from "sequelize";

class Files extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        path: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "files",
      }
    );
    return this;
  }
}

export default Files;
