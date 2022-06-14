const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
  title: String,
  // title: {
  //   type: String,
  //   unique: true
  // },
  description: String,
  // image: String,
  alternative: String,
  fileName: String,
  filePath: String,
  fileType: String,
  fileSize: String
  // fileTitle: String,
  // fileDesc: String
});

module.exports = mongoose.model("projects", AppSchema);