const express = require('express');
const router = express.Router();
const controller = require('../controller/announcement.js');

router.get('/',controller.getAnnouncement)
router.post('/add',controller.createAnnouncement)
router.put('/update/:id',controller.updateAnnouncement)
router.get('/:id',controller.getAnnouncementById)
router.delete('/delete/:id',controller.deleteAnnouncement)

module.exports = router;

