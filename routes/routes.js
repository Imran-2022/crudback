const router = require('express').Router();
const {  addData,data,singleData,updateData,deleteData } = require('../controllers/controllers');

router.route("/data")
    .get(data)
    .post(addData)

    
router.route("/data/:id")
    .get(singleData)
    .put(updateData)
    .delete(deleteData)

    
module.exports = router;