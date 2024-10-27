class Node {
    constructor(type, left = null, right = null, value = null) {
        this.type = type;
        this.left = left;
        this.right = right;
        this.value = value;
    }
}

function parseRule(rule) {
    if (rule.includes('AND') || rule.includes('OR')) {
        const [leftPart, operator, rightPart] = rule.split(' ');
        return new Node(operator.toLowerCase(), parseRule(leftPart), parseRule(rightPart));
    } else {
        const [attr, condition, value] = rule.match(/(\w+)\s*(>|<|=)\s*(\w+)/);
        return new Node('operand', null, null, { attr, condition, value });
    }
}

module.exports = { Node, parseRule };
