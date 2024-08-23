// // middlewares/upload.js
// const multer = require('multer');
// const path = require('path');

// // Set storage engine
// const storage = multer.diskStorage({
//   destination: './public/uploads/',
//   filename: (req, file, cb) => {
//     cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
//   },
// });

// // Initialize upload
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 5000000 }, // 5MB limit
//   fileFilter: (req, file, cb) => {
//     checkFileType(file, cb);
//   },
// }).single('photo');

// // Check file type
// function checkFileType(file, cb) {
//   const filetypes = /jpeg|jpg|png/;
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = filetypes.test(file.mimetype);

//   if (extname && mimetype) {
//     return cb(null, true);
//   } else {
//     cb('Error: Images Only!');
//   }
// }

// module.exports = upload;

// // middlewares/upload.js
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure upload directories exist or create them
const directories = ['./public/uploads/', './public/uploads/photos/', './public/uploads/attachments/'];
directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === 'photo') {
      cb(null, './public/uploads/photos/');
    } else if (file.fieldname === 'attachment') {
      cb(null, './public/uploads/attachments/');
    } else {
      cb(new Error('Wrong fieldname'), false);
    }
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

const uploadPhoto = multer({
  storage,
  limits: { fileSize: 5000000 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    checkFileType(file, filetypes, cb);
  },
}).single('photo');

const uploadAttachment = multer({
  storage,
  limits: { fileSize: 10000000 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|pdf|doc|docx|xls|xlsx/;
    checkFileType(file, filetypes, cb);
  },
}).single('attachment');

function checkFileType(file, filetypes, cb) {
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error(`Error: Only ${filetypes.toString().replace(/\|/g, ', ')} files are allowed!`));
  }
}

module.exports = { uploadPhoto, uploadAttachment };
