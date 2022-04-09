import express from 'express';
import path from 'node:path';

const app = express();
const port = 8_080;

app.get('/', (_, response) => {
  response.sendFile(path.resolve(process.cwd(), './src/index.html'));
});

app.listen(port);
