export default function getNeighborhoodsList() {

	this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

// use ES6’s arrow syntax of the function add

	this.addNeighborhood = (newNeighborhood) => {
		self.sanFranciscoNeighborhoods.push(newNeighborhood);
		return self.sanFranciscoNeighborhoods;
	};
}
