import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase(req.app.get('dbPath'));
      // Process data and send response
      // ...
      res.status(200).send(/* Processed data */);
    } catch (error) {
      res.status(500).send(`Cannot load the database: ${error.message}`);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    try {
      if (major !== 'CS' && major !== 'SWE') {
        throw new Error('Major parameter must be CS or SWE');
      }
      const data = await readDatabase(req.app.get('dbPath'));
      // Process data and send response
      // ...
      res.status(200).send(/* Processed data */);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

export default StudentsController;
