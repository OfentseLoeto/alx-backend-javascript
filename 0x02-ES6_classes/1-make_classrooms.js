import ClassRoom from './0-classroom';
/*
 * Import the ClassRoom class from 0-classroom.js.
 */
function initializeRooms() {
  // implementing a function that returns an array of
  // 3 ClassRooms objects with the size 19, 20, and 34
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);

  return [room1, room2, room3];
}

export default initializeRooms;
