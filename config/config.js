config = require('config');

module.exports = {
  "development": {
    "username": config.get('mysql.master.id'),
    "password": config.get('mysql.master.password'),
    "database": config.get('mysql.master.scheme'),
    "host": config.get('mysql.master.host'),
    "dialect": 'mysql',
    "migrationStorage": "sequelize",
    "migrationStorageTableName": "_migration"
  },
  "test-ci": {
    "username": config.get('mysql.master.id'),
    "password": config.get('mysql.master.password'),
    "database": config.get('mysql.master.scheme'),
    "host": config.get('mysql.master.host'),
    "dialect": 'mysql',
    "dialectOptions": {
      "multitpleStatements": true
    },
    "migrationStorage": "sequelize",
    "migrationStorageTableName": "_migration"
  },
  "production": {
    "username": config.get('mysql.master.id'),
    "password": config.get('mysql.master.password'),
    "database": config.get('mysql.master.scheme'),
    "host": config.get('mysql.master.host'),
    "dialect": 'mysql',
    "migrationStorage": "sequelize",
    "migrationStorageTableName": "_migration"
  }
}