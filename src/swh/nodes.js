const util = require('util');

/** node representing a number */
class NumberNode {
  /**
   * instantiates a number node
   * @param {Token} tok token to use as the nodes value
   */
  constructor(tok) {
    this.tok = tok;

    this.posStart = this.tok.posStart;
    this.posEnd = this.tok.posEnd;
  }

  [util.inspect.custom](depth, options) {
    return this.toString();
  }

  /**
   * custom representation of the class
   * @returns {String}
   */
  toString() {
    return this.tok.toString();
  }
}

/** node representing a variable access result */
class VarAccessNode {
  /**
   * instantiates a variable access node
   * @param {Token} varNameTok token containing the variable's name
   */
  constructor(varNameTok) {
    this.varNameTok = varNameTok;

    this.posStart = this.varNameTok.posStart;
    this.posEnd = this.varNameTok.posEnd;
  }
}

/** node representing a variable assignment */
class VarAssignNode {
  /**
   * instantiates a variable declaration node
   * @param {Token} varNameTok token containing the variable's name
   * @param {Node} valueNode node containing the value to be assigned to the variable
   */
  constructor(varNameTok, valueNode) {
    this.varNameTok = varNameTok;
    this.valueNode = valueNode;

    this.posStart = this.varNameTok.posStart;
    this.posEnd = this.valueNode.posEnd;
  }
}

/** node representing a binary operation */
class BinOpNode {
  /**
   * instantiates a binary operation node
   * @param {Node} leftNode node on the left of the binary operation
   * @param {Token} opTok token containing the operator
   * @param {Node} rightNode node on the right of the binary operation
   */
  constructor(leftNode, opTok, rightNode) {
    this.leftNode = leftNode;
    this.opTok = opTok;
    this.rightNode = rightNode;

    this.posStart = this.leftNode.posStart;
    this.posEnd = this.rightNode.posEnd;
  }

  [util.inspect.custom](depth, options) {
    return this.toString();
  }

  /**
   * custom representation of the class
   * @returns {String}
   */
  toString() {
    return `(${this.leftNode}, ${this.opTok}, ${this.rightNode})`;
  }
}

/** node representing a unary operation */
class UnaryOpNode {
  /**
   * instantiates a unary operation node
   * @param {Token} opTok token containing the operator
   * @param {Node} node node containing value to be operated on
   */
  constructor(opTok, node) {
    this.opTok = opTok;
    this.node = node;

    this.posStart = this.opTok.posStart;
    this.posEnd = this.node.posEnd;
  }

  [util.inspect.custom](depth, options) {
    return this.toString();
  }

  /**
   * custom representation of the class
   * @returns {String}
   */
  toString() {
    return `(${this.opTok}, ${this.node})`;
  }
}

/** node representing an IF block */
class IfNode {
  /**
   * instantiates an if node
   * @param {[]} cases list of cases containing conditions and result expressions
   * @param {*} elseCase expression to use if all cases evaluate to false
   */
  constructor(cases, elseCase) {
    this.cases = cases;
    this.elseCase = elseCase;

    this.posStart = this.cases[0][0].posStart;
    this.posEnd = (
      this.elseCase || this.cases[this.cases.length - 1][0]
    ).posEnd;
  }
}

/** node representing a FOR loop */
class ForNode {
  /**
   * instantiates a for node
   * @param {Token} varNameTok token containing the iterator's name
   * @param {Node} startValueNode node containing the value to start the iterator at
   * @param {Node} endValueNode node containing the value to end iteration at
   * @param {Node} stepValueNode node containing the value used to step through
   * @param {Node} bodyNode node containing the expressions to be run each iteration
   */
  constructor(
    varNameTok,
    startValueNode,
    endValueNode,
    stepValueNode,
    bodyNode
  ) {
    this.varNameTok = varNameTok;
    this.startValueNode = startValueNode;
    this.endValueNode = endValueNode;
    this.stepValueNode = stepValueNode;
    this.bodyNode = bodyNode;

    this.posStart = this.varNameTok.posStart;
    this.posEnd = this.bodyNode.posEnd;
  }
}

/** node representing a WHILE loop */
class WhileNode {
  /**
   * instantiates a while node
   * @param {Node} conditionNode node containing the condition to be met
   * @param {Node} bodyNode node containing the epressions to run each iteration
   */
  constructor(conditionNode, bodyNode) {
    this.conditionNode = conditionNode;
    this.bodyNode = bodyNode;

    this.posStart = this.conditionNode.posStart;
    this.posEnd = this.bodyNode.posEnd;
  }
}

module.exports = {
  NumberNode,
  VarAccessNode,
  VarAssignNode,
  BinOpNode,
  UnaryOpNode,
  IfNode,
  ForNode,
  WhileNode,
};
