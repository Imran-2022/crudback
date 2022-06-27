const { DATACOLLECTION } = require('../models/connect.database')
const ObjectId = require('mongodb').ObjectId;


// add data

const addData = async (req, res) => {
    const data = req.body;
    const result = await DATACOLLECTION.insertOne(data);
    console.log(result.insertedId);
    res.send(result.insertedId)
}

//   get data

const data = async (req, res) => {
    const result = await DATACOLLECTION.find({}).toArray();
    res.send(result)
}

// get single data

const singleData = async (req, res) => {
    const id = req.params.id;
    const query = { _id: ObjectId(id) }
    const data = await DATACOLLECTION.findOne(query)
    res.send(data)
}

// updateData

const updateData = async (req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;
    const filter = { _id: ObjectId(id) };
    const options = { upsert: true };
    const updateDoc = {
        $set: {
            name: updatedUser.name,
            img: updatedUser.img,
            descriptions: updatedUser.descriptions
        },
    };
    const result = await DATACOLLECTION.updateOne(filter, updateDoc, options);
    res.send(result)
}

// deleteData

const deleteData =async(req, res)=>{
            const id=req.params.id;
            const query={_id:ObjectId(id)}
            const result = await DATACOLLECTION.deleteOne(query);
            res.send(result);
        }



module.exports = {
    addData,
    data,
    singleData,
    updateData,
    deleteData

}