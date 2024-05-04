const Utils = {
  calculateNumber(type, a, b) {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    if (roundedB === 0 && type === 'DIVIDE') {
      return 'Error';
    }

    switch (type) {
      case 'SUM':
	return roundedA + roundedB;

      case 'SUBTRACT':
	return roundedA - roundedB;

      case 'DIVIDE':
	return roundedA / roundedB;

      default:
	return 'Error: Invalid operation type';
    }
  }
};

module.exports = Utils;
