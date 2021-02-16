const express = require('express');
const router = express.Router();
const paths = require('./paths/videoPaths');

const VideoController = require('../controllers/video');

router.post(paths.uploadAVideo, VideoController.upload);
router.get(paths.getSingleVideo, VideoController.getById);
router.get(paths.getAllVideos, VideoController.getAll);
router.put(paths.updateAVideo, VideoController.update);
router.delete(paths.deleteAVideo, VideoController.deleteVideo);

module.exports = router;