const CrudSchema = require('../models/crudModel');


//Get Data
const getAllData = async (req, res) =>{
    try {
        const data = await CrudSchema.find({})
        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({message: error})
    }
}


//create Data
const createData = async (req, res) =>{
    try {
        const data = await CrudSchema.create(req.body);
        res.status(201).json({data})
    } catch (error) {
        res.status(500).json({message: error})
    }
}


//Single Item
const getOneItem = async (req, res) =>{
    try {
        const {itemID} = req.params;
        const data = await CrudSchema.find({_id:itemID})

        if(!data){
            res.status(404).json({message: 'Ohh This Item does not exist'})
        }

        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//Delete
const updateData = async (req, res) =>{
    try {
        const {itemID} = req.params;
        const data = await CrudSchema.findByIdAndUpdate({_id:itemID}, req.body, {
            new: true,
            runValidators: true
        })

        if(!data){
            res.status(404).json({message: 'Ohh This Item does not exist'})
        }

        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//Delete 1 Item
const deleteData = async (req, res) =>{
    try {
        const {itemID} = req.params;
        const data = await CrudSchema.findByIdAndDelete({_id:itemID})

        if(!data){
            res.status(404).json({message: 'Ohh This Item does not exist'})
        }

        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//export functions
module.exports = {
    getAllData, createData, getOneItem, updateData, deleteData
}
