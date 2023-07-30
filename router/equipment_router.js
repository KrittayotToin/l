// routes/equipment.js
import express from 'express';
// import QueryController from '../controller/query_controller.js';
// import InsertController from '../controller/insert_controller.js'

const equipment_router = express.Router();

// // Get all equipment records



equipment_router.get('/', async (req, res) => {
    res.send('equipment')
})
// equipment_router.get('/', async (req, res) => {
//   try {
//   	console.log('/equipment/')
//     // Example usage
// const queryController =  new QueryController();
// const result = await queryController.getAllEquipmentRecords();
// // console.log(result)

//     // res.status(200).json(equipment);
//      res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// equipment_router.post('/insert', async (req, res) => {
//   try {
//   	console.log('/equipment/insert')
//     // Example usage
// const insertController =  new InsertController();
// // console.log(insertController)
// const result = await insertController.insertEquipment();

//     // res.status(200).json(equipment);
//      res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
// // Other routes...

export default equipment_router;

