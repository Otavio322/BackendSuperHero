const express = require('express');
const router = express.Router();
const heroController = require('../controllers/heroController');

router.get('/', heroController.listEntries);
router.get('/:id', heroController.getEntryById);
router.post('/', heroController.createEntry);
router.put('/:id', heroController.updateEntry);
router.delete('/:id', heroController.deleteEntry);

module.exports = router;
