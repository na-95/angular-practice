'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize: any, DataTypes: any) => {
  class Table_1 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
    }
  }
  Table_1.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Table_1',
    tableName: 'table_1',
    underscored: true,
    freezeTableName: true
  });
  return Table_1;
};