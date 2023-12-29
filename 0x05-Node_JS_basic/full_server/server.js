import express from 'express';
import routes from './routes';

const app = express();
const PORT = 1245;

app.use(routes);

// Set database file path
app.set('dbPath', process.argv[2]);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export default app;
