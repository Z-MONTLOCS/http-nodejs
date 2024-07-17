import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello Worldddddd!');
  res.end();
}).listen(process.env.PORT);
