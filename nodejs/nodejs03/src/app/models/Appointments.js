import { DataTypes, Model } from "sequelize";
class Appointments extends Model {
  static init(sequelize) {
    super.init(
      {
        date: DataTypes.DATE,
        canceled_at: DataTypes.DATE,
      },
      { sequelize, tableName: "appointments" }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Users, { foreignKey: "user_id", as: "user" });
    this.belongsTo(models.Users, {
      foreignKey: "collaborator_id",
      as: "collaborator",
    });
  }
}

export default Appointments;
