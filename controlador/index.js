const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();
const port = 3000;
const {
  ALUNOS_API_URL,
  CURSOS_API_URL,
} = require('./services');

const alunosServiceProxy = httpProxy(ALUNOS_API_URL);
const cursosServiceProxy = httpProxy(CURSOS_API_URL);

app.get('/', (req, res) => res.send('Hello Gateway API'));

app.get('/alunos', (req, res, next) => alunosServiceProxy(req, res, next));
app.get('/cursos', (req, res, next) => cursosServiceProxy(req, res, next));

app.listen(port, () => console.log(`Run API in port ${port}!`));