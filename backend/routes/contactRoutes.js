const express = require('express');
const router = express.Router();
const { sendMessage, getMessages } = require('../controllers/contactController');

// POST /api/contact  — Submit a contact form message
router.post('/', sendMessage);

// GET  /api/contact  — Retrieve all messages (for personal admin use)
router.get('/', getMessages);

module.exports = router;
