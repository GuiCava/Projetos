const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


const dbPath = path.resolve(__dirname, 'classflow.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco:', err.message);
  } else {
    console.log('Conectado ao banco classflow.db');
  }
});

// app.get('/2', (req, res) => {
//   res.send('Servidor funcionando e conectado ao banco!');
// });

// app.get('/alunos', (req, res) => {
//   db.all('SELECT * FROM alunos', [], (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//     } else {
//       res.json(rows);
//     }
//   });
// });

// app.get('/docentes', (req, res) => {
//   db.all('SELECT * FROM docentes', [], (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//     } else {
//       res.json(rows);
//     }
//   });
// });

// app.get('/movimento', (req, res) => {
//   db.all('SELECT * FROM movimento', [], (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//     } else {
//       res.json(rows);
//     }
//   });
// });

// app.post('/add', (req, res) => {
//   db.run('INSERT INTO Alunos (id, nome) VALUES (1221, "Marcos Alfred da Silva Gomes")', [id, nome], (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//     } else {
//       res.json(rows);
//     }
//   });
// });

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
