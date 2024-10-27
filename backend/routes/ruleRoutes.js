const express = require('express');
const { createRuleHandler, evaluateRuleHandler } = require('../controllers/ruleController');
const router = express.Router();

router.post('/create', createRuleHandler);
router.post('/evaluate', evaluateRuleHandler);

module.exports = router;
