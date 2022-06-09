import { DataTypes, Model } from "sequelize";

class Files extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        path: DataTypes.STRING,
        url: {
          type: DataTypes.VIRTUAL,
          get() {
            return `http://localhost:3000/files/${this.path}`;
          },
        },
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
