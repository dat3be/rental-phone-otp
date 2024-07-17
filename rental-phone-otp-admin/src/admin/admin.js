// src/admin/admin.js

const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroSequelize = require('@admin-bro/sequelize');
const sequelize = require('../config/dbConfig');
const User = require('../models/user');
const Service = require('../models/service');

// Register the Sequelize adapter
AdminBro.registerAdapter(AdminBroSequelize);

const adminBro = new AdminBro({
  databases: [sequelize],
  rootPath: '/admin',
  resources: [
    {
      resource: User,
      options: {
        properties: {
          password: { isVisible: false },
        },
        actions: {
          new: {
            before: async (request) => {
              if (request.payload.password) {
                request.payload = {
                  ...request.payload,
                  password: await bcrypt.hash(request.payload.password, 12),
                };
              }
              return request;
            },
          },
        },
      },
    },
    {
      resource: Service,
    },
  ],
});

const adminRouter = AdminBroExpress.buildRouter(adminBro);

module.exports = { adminBro, adminRouter };
