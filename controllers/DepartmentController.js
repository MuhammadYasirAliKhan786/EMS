const Department = require('../models/department');
const Employee = require('../models/employee');


//Get Data
const getAllDepartments = async (req, res) =>{
    try {
        const data = await Department.find({})
        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({message: error})
    }
}


//create Data
const createNewDepartment = async (req, res) =>{
    try {
        const data = await Department.create(req.body);
        res.status(201).json({data})
    } catch (error) {
        res.status(500).json({message: error})
    }
}


//Single Item
const getOneDepartment = async (req, res) =>{
    try {
        const {itemID} = req.params;
        // const data = await Department.findById({_id:itemID}).populate({path:"departments", model:"Employee"})
        const data = await Department.findById(req.params.id, function (err, department) {
            // error checks
            if (err) { return res.status(500).json({ error: err }); }
            if (!department) { return res.sendStatus(404); }
            console.log(department);
        }).populate(department,  { path:"employees", model:"Employee" });
        if(data) console.log("data: ", data)
        if(!data){
            res.status(404).json({message: 'Ohh This Department does not exist'})
        }

        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//Delete
const updateOneDepartment = async (req, res) =>{
    try {
        const {itemID} = req.params;
        const data = await Department.findByIdAndUpdate({_id:itemID}, req.body, {
            new: true,
            runValidators: true
        })

        if(!data){
            res.status(404).json({message: 'Ohh This Department does not exist'})
        }

        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//Delete 1 Item
const deleteOneDepartment = async (req, res) =>{
    try {
        const {itemID} = req.params;
        const data = await Department.findByIdAndDelete({_id:itemID})

        if(!data){
            res.status(404).json({message: 'Ohh This Department does not exist'})
        }

        res.status(200).json({data})
    } catch (error) {
        res.status(500).json({message: error})
    }
}

//export functions
module.exports = {
    getAllDepartments, createNewDepartment, getOneDepartment, updateOneDepartment, deleteOneDepartment
}
