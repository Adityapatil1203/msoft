const express = require('express');
const router = express.Router();
// const {uploadAttachment }= require('../middlewares/upload.js')
const uploadAttachment = require('../middlewares/uploadAttachment.js')
const {
     addGunhaDetails ,addAksmatDetails,
     addMotorAccidentDetails ,addBnsDetails , 
     addVSNDetails ,addAgniUpdravNondDetails,
      addHaddaparDetails,addGahalMalachiNondDetails,
      addMissingDetails,addAchievementDetails,
      addCourtHearingDetails,
      addGunhaBhag6Details, addGunhaCourtCaseDetails,
      addGunhaDarubandiDetails,addVSNSthanicDetails,
      addBns128Details,addBns129Details,addBnssDetails,
      } = require('../controllers/allGunhaController.js');
const { getCaseStatusAndTotalCounts , getAchievementDetails , searchGunha , getCourtHearingDetails, getGunhaData, searchInGunha , getGunhaById , updateGunha }= require('../controllers/new.js')


router.post('/addGunha',uploadAttachment, (req, res) => {
    if (req.file) {
        console.log("File uploaded successfully", req.file.path);
        // Continue with your logic here, e.g., calling addGunhaDetails
        addGunhaDetails(req, res);
    } else if (req.fileValidationError) {
        console.log("File validation error:", req.fileValidationError);
        res.status(400).send(req.fileValidationError);
    } else {
        console.log("Unknown error occurred during file upload.");
        res.status(500).send("An error occurred during file upload");
    }
});
router.post('/addGunhaBhag6Details',uploadAttachment ,addGunhaBhag6Details)
router.post('/addGunhaCourtCaseDetails',uploadAttachment ,addGunhaCourtCaseDetails)
router.post('/addGunhaDarubandiDetails',uploadAttachment ,addGunhaDarubandiDetails)

router.post('/addAksmat', uploadAttachment, addAksmatDetails );
router.post('/addMotorAccident',uploadAttachment, addMotorAccidentDetails)

router.post('/addVSNDetails', uploadAttachment,addVSNDetails)
router.post('/addVSNSthanicDetails',uploadAttachment ,addVSNSthanicDetails)

router.post('/addHaddaparDetails',uploadAttachment,addHaddaparDetails)
router.post('/addGahalMalachiNondDetails',uploadAttachment,addGahalMalachiNondDetails)

router.post('/addBnsDetails',uploadAttachment,addBnsDetails)
router.post('/addBns128Details',uploadAttachment,addBns128Details)
router.post('/addBns129Details',uploadAttachment,addBns129Details)
router.post('/addBnssDetails',uploadAttachment,addBnssDetails)

router.post('/addMissingDetails',uploadAttachment,addMissingDetails)
router.post('/addAgniUpdravNondDetails',uploadAttachment,addAgniUpdravNondDetails)
router.post('/addAchievementDetails',uploadAttachment,addAchievementDetails)
router.post('/addCourtHearingDetails',uploadAttachment,addCourtHearingDetails)


router.get('/getCaseStatusAndTotalCounts', getCaseStatusAndTotalCounts);
router.get('/getAchievementDetails', getAchievementDetails);
router.get('/searchGunha', searchGunha);
router.get('/getCourtHearingDetails', getCourtHearingDetails);
router.get('/getGunhaData',getGunhaData)
router.get('/searchInGunha',searchInGunha)


router.get('/getGunhaById/:id', getGunhaById);

router.post('/updateGunha/:id',uploadAttachment, updateGunha);

module.exports = router;

