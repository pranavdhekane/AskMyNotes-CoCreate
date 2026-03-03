const multer = require('multer');
const path = require('path');

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (ext === '.pdf' || ext === '.txt') {
    cb(null, true);
  } else {
    cb(new Error('Only PDF and TXT allowed'));
  }
};

module.exports = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10485760 } // 10MB
});