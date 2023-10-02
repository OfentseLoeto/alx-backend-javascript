export default function taskBlock(trueorFalse) {
	var task = false;
	var task2 = true;

/*
 * modify the variables inside the function taskBlock so that 
 * the variables aren’t overwritten inside the conditional block.
 */

	if (trueorFalse) {
		const task = true;
		const task2 = false;
	}

	return [task, task2];
}
