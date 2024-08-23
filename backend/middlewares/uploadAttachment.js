const multer = require('multer');
const path = require('path');

// Set up storage engine with dynamic naming for files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Check if the correct fieldname is being used
        console.log(file);
        if (file.fieldname === 'attachment') {
            console.log("Uploading file to attachments directory");
            cb(null, './public/uploads/attachments/');
        } else {
            console.log("Error: Unexpected fieldname used for file upload");
            cb(new Error('Unexpected fieldname. Expected "attachment"'), false);
        }
    },
    filename: (req, file, cb) => {
        // Log the process of creating a filename
        const filename = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        console.log(`Generating filename: ${filename}`);
        cb(null, filename);
    }
});

// File filter to check if the uploaded file is of the expected type
const fileFilter = (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|pdf|doc|docx|xls|xlsx/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
        console.log(`File type is valid: ${file.originalname}`);
        cb(null, true);
    } else {
        console.log(`File type is invalid: ${file.originalname}`);
        cb(new Error('Invalid file type. Only JPEG, PNG, PDF, DOCX, and XLSX files are allowed.'));
    }
};

const uploadAttachment = multer({
    storage,
    limits: { fileSize: 10000000 }, // 10MB
    fileFilter
}).single('attachment');

module.exports = uploadAttachment;
