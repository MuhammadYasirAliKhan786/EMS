const express = require('express')
const router = express.Router();

//Destructuring
const {getAllEmployees, createNewEmployee, getOneEmployee, updateOneEmployee, deleteOneEmployee} = require('../controllers/EmployeeController')
const {getAllDepartments, createNewDepartment, getOneDepartment, updateOneDepartment, deleteOneDepartment} = require('../controllers/DepartmentController')

//Routing
router.route('/employees').get(getAllEmployees).post(createNewEmployee)
router.route('/departments').get(getAllDepartments).post(createNewDepartment)
router.route('/employees/:itemID').get(getOneEmployee).patch(updateOneEmployee).delete(deleteOneEmployee)
router.route('/departments/:itemID').get(getOneDepartment).patch(updateOneDepartment).delete(deleteOneDepartment)

module.exports = router;