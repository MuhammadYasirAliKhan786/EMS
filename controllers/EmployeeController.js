const Employee = require('../models/Employee');


//Get Data
const getAllEmployees = async (req, res) =>{
    try {
        const data = await Employee.find({})
        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({message: error})
    }
}


//create Data
const createNewEmployee = async (req, res) =>{
    try {
        const data = await Employee.create(req.body);
        res.status(201).json({data})
    } catch (error) {
        res.status(500).json({message: error})
    }
}


//Single Item
const getOneEmployee = async (req, res) =>{
    try {
        const {itemID} = req.params;
        const data = await Employee.find({_id:itemID})

        if(!data){
            res.status(404).json({message: 'Ohh This Employee does not exist'})
        }

        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//Delete
const updateOneEmployee = async (req, res) =>{
    try {
        const {itemID} = req.params;
        const data = await Employee.findByIdAndUpdate({_id:itemID}, req.body, {
            new: true,
            runValidators: true
        })

        if(!data){
            res.status(404).json({message: 'Ohh This Employee does not exist'})
        }

        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//Delete 1 Item
const deleteOneEmployee = async (req, res) =>{
    try {
        const {itemID} = req.params;
        const data = await Employee.findByIdAndDelete({_id:itemID})

        if(!data){
            res.status(404).json({message: 'Ohh This Employee does not exist'})
        }

        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//export functions
module.exports = {
    getAllEmployees, createNewEmployee, getOneEmployee, updateOneEmployee, deleteOneEmployee
}
