// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { adminBro, adminRouter } = require('./src/admin/admin');
const sequelize = require('./src/config/dbConfig'); // Ensure this path is correct
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Rental Phone OTP Service API',
      version: '1.0.0',
    },
  },
  apis: ['src/routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/api/auth', require('./src/routes/authRoutes'));
app.use('/api/users', require('./src/routes/userRoutes'));
app.use('/api/services', require('./src/routes/serviceRoutes'));

// AdminBro setup
app.use(adminBro.options.rootPath, adminRouter);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
