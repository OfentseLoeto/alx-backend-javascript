// Defining taskFirst as function that instantiate a variable using const

export function taskFirst() {
	const task = 'I prefer const when I can';
	return task;
}

export function getLast() {
	return ' is ok';
}

// Defining taskNext as function that instantiate a variable using let

export function taskNext() {
	let combination = 'But sometimes let';
	combination += getLast();
	return combination;
}
