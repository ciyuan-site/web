'use strict';

module.exports = appInfo => {
  const config = {};

  config.keys = appInfo.name + '_1533449579600_6240';

  config.session = {
    domain: 'ciyuan.net',
  };

  config.sequelize = {
    datasources: [
      {
        dialect: 'mysql',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: '87351984',
        delegate: 'model.passport',
        baseDir: 'model/passport',
        database: 'passport',
        define: {
          freezeTableName: true,
          underscored: true,
          timestamps: false,
          charset: 'utf8mb4',
          dialectOptions: {
            collate: 'utf8mb4_unicode_ci',
          },
        },
      },
      {
        dialect: 'mysql',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: '87351984',
        delegate: 'model.user',
        baseDir: 'model/user',
        database: 'user',
        define: {
          freezeTableName: true,
          underscored: true,
          timestamps: false,
          charset: 'utf8mb4',
          dialectOptions: {
            collate: 'utf8mb4_unicode_ci',
          },
        },
      },
      {
        dialect: 'mysql',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: '87351984',
        delegate: 'model.audio',
        baseDir: 'model/audio',
        database: 'audio',
        define: {
          freezeTableName: true,
          underscored: true,
          timestamps: false,
          charset: 'utf8mb4',
          dialectOptions: {
            collate: 'utf8mb4_unicode_ci',
          },
        },
      },
      {
        dialect: 'mysql',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: '87351984',
        delegate: 'model.video',
        baseDir: 'model/video',
        database: 'video',
        define: {
          freezeTableName: true,
          underscored: true,
          timestamps: false,
          charset: 'utf8mb4',
          dialectOptions: {
            collate: 'utf8mb4_unicode_ci',
          },
        },
      },
      {
        dialect: 'mysql',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: '87351984',
        delegate: 'model.work',
        baseDir: 'model/work',
        database: 'work',
        define: {
          freezeTableName: true,
          underscored: true,
          timestamps: false,
          charset: 'utf8mb4',
          dialectOptions: {
            collate: 'utf8mb4_unicode_ci',
          },
        },
      },
    ],
  };

  config.hotDeploy = true;

  config.host = 'http://ciyuan.net';
  config.hostPassport = 'http://passport.ciyuan.net';

  return config;
};
