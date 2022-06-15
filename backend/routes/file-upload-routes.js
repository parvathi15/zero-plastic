const express = require("express");
const { upload } = require("../helpers/filehelper.js");
const SingleFile = require("../models/app.model.js");
const {
  singleFileUpload,
  getallSingleFiles
} = require("../controllers/fileuploadcontroller.js");
const router = express.Router();

router.post("/singleFile", upload.single("file"), singleFileUpload);
// router.post('/multipleFiles', upload.array('files'), multipleFileUpload);
router.get("/getSingleFiles", getallSingleFiles);
// router.get('/getMultipleFiles', getallMultipleFiles);

router.route("/:id").get((req, res) => {
  SingleFile.findById(req.params.id)
    .then(todos => res.json(todos))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = {
  routes: router
};
