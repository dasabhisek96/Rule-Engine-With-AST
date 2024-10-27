const { createRule, combineRules, evaluateRule } = require('../services/ruleService');

async function createRuleHandler(req, res) {
    const { rule } = req.body;
    const newRule = await createRule(rule);
    res.json(newRule);
}

async function evaluateRuleHandler(req, res) {
    const { ast, data } = req.body;
    const result = evaluateRule(ast, data);
    res.json({ result });
}

module.exports = { createRuleHandler, evaluateRuleHandler };
