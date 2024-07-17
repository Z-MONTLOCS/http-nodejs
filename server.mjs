import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello Worlde!');
  res.end();
}).listen(process.env.PORT);
