const { Node, parseRule } = require('../utils/astHelper');
const Rule = require('../models/ruleModel');

async function createRule(ruleString) {
    const ast = parseRule(ruleString);
    const rule = new Rule({ rule: ruleString, ast });
    await rule.save();
    return rule;
}

function combineRules(rules) {
    rules.forEach((rule, index) => {
        const ast = parseRule(rule);
        if (index === 0) {
            root = ast;
        } else {
            root = new Node('and', root, ast);
        }
    });
    return root;
}

function evaluateRule(ast, data) {
    if (ast.type === 'operand') {
        const { attr, condition, value } = ast.value;
        switch (condition) {
            case '>': return data[attr] > value;
            case '<': return data[attr] < value;
            case '=': return data[attr] == value;
        }
    } else if (ast.type === 'and') {
        return evaluateRule(ast.left, data) && evaluateRule(ast.right, data);
    } else if (ast.type === 'or') {
        return evaluateRule(ast.left, data) || evaluateRule(ast.right, data);
    }
    return false;
}

module.exports = { createRule, combineRules, evaluateRule };
