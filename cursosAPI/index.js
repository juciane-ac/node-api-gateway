const app = require('express')();
const cursosDB = require("./data/cursos.json");

app.get('/cursos', (req, res) => res.json(cursosDB));

app.listen(3001, () => console.log(`cursos API listening on port 3001!`));