const app = require('express')();
const alunosDB = require("./data/alunos.json");

app.get('/alunos', (req, res) => res.json(alunosDB));

app.listen(3002, () => console.log(`Alunos API listening on port 3002!`));