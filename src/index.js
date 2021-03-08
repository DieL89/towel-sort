module.exports = function towelSort (matrix) {
	if (!matrix || matrix.length == 0) return [];
	
	let sortedMatrix = [];

	for (let i = 0; i < matrix.length; i++) {
		if (i % 2 != 0) matrix[i].reverse();
		
		sortedMatrix = sortedMatrix.concat(matrix[i]);
	}
	
	return sortedMatrix;
}
