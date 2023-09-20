const multer = require("multer");
const path = require("path");

// mendefinisikan bagai mana cara menyimpan file
const storage = multer.memoryStorage();

// membuat upload middleware
module.exports = multer({storage})