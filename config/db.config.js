// db.config.js
import { Sequelize } from 'sequelize';

// Load environment variables from .env using dotenv
import 'dotenv/config';

// Create a new Sequelize instance with the database configuration
const sequelize = new Sequelize({
  dialect: 'mysql',           // Specify your database dialect (e.g., 'mysql', 'postgres', 'sqlite', etc.)
  host: process.env.DB_HOST,  // Use environment variables to access configuration
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default sequelize;