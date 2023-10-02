export default function taskBlock(trueorFalse) {
  let task = false;
  let task2 = true;

  /*
 * modify the variables inside the function taskBlock so that
 * the variables arent overwritten inside the conditional block.
 */

  if (trueorFalse) {
    task = true;
    task2 = false;
  }
  return [task, task2];
}
