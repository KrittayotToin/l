// const express = require('express');
// const mysql = require('mysql2');
import express from 'express'
import mysql from 'mysql2'
import sequelize from './config/db.config.js';
// import equipment_router from './router/equipment_router.js'
const app = express();

app.get('/', (req, res) => {
  res.send('hello')
})

// Synchronize the models with the database
sequelize.sync()
  .then(() => {
    console.log('sync database เรียบร้อยแล้ว');
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });

// รายละเอียดอื่นๆ เช่นการใช้ Express เพื่อสร้าง API หรือการติดตั้งเส้นทางในโปรเจคของคุณ

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



