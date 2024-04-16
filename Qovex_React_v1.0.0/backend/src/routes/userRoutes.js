// const express = require('express');
// const Router = express.Router();

// const UserController = require('../controllers/UserController')

// //User Routes

// Router.post('/api/add-user',UserController.addUser);

// module.exports = Router;


const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Define your route and attach the AddItem function
router.post('/api/add-item', UserController.AddItem);

module.exports = router;