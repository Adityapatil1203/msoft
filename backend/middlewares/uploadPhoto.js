
const multer = require('multer');
const path = require('path');
// const fs = require('fs');

const photoStorage = multer.diskStorage({
    destination: './public/uploads/photos/',
    filename: (req, file, cb) => {
        cb(null, `photo-${Date.now()}${path.extname(file.originalname)}`);
    }
});

const uploadPhoto = multer({
    storage: photoStorage,
    limits: { fileSize: 5000000 }, // 5MB for photos
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);

        if (extname && mimetype) {
            cb(null, true);
        } else {
            cb(new Error('Only JPEG, PNG files are allowed!'));
        }
    }
}).single('photo');

module.exports = uploadPhoto
