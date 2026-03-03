const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Go one level up from /config to project root
const uploadDir = path.join(__dirname, '..', 'uploads');

// Create uploads folder if it doesn't exist
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

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