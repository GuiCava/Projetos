//Requerimentos do node

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
//

//Conexão com o servidor
const dbPath = path.resolve(__dirname, 'classflow.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco:', err.message);
  } else {
    console.log('Conectado ao banco classflow.db');
  }
});
//

//Teste do servidor
app.get('/', (req, res) => {
  res.send('Servidor funcionando e conectado ao banco!');
});
//

//Login:
app.get('/alunos', (req, res) => {
  const id = req.query.nome;


  db.all('SELECT * FROM alunos WHERE id='+id, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
      console.log(`Login com o id:${id}, logado`);
    }
  });
});
app.get('/docentes', (req, res) => {
  const id = req.query.nome;


  db.all('SELECT * FROM docentes WHERE id='+id, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
      console.log(`Login com o id:${id}, logado`)
    }
  });
});
//

//Aluno faz a solicitação para o professor
app.get('/solicitacao', (req, res) => {
  const idaluno = req.query.idaluno;
  const idalunox = parseInt(req.query.idaluno);
  const local = req.query.opcao;

  console.log(`Aluno com o id:${idaluno}, fez uma solicitação para ${local}`);

  db.run("INSERT INTO movimento (aluno_fk, local) VALUES(" + idalunox + ",'" + local + "')", [], (err, rows) => {

    if (err) {
      res.status(500).json({ error: err.message });
    }
  });
});
//

//Pega todos os alunos que fizeram uma solicitação
app.get('/movimento', (req, res) => {
  db.all('SELECT * FROM Alunos A INNER JOIN Movimento M ON M.aluno_fk = A.id', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});
//

//O docente aceita a solicitação do aluno
app.post('/aceitar', (req, res) => { 
  const data = req.body.str_hora; 
  const iddocente = req.body.iddocente 
  const idaluno = req.body.idaluno 
  console.log(`ALUNO:${idaluno}, DOCENTE:${iddocente}, DATA:${data}`)
  db.run("UPDATE Movimento SET horario=?, docente_fk=? WHERE aluno_fk=?", [data, iddocente, idaluno], (err, rows) => { 
    db.run("INSERT INTO fora (horario, aluno_fk, local, docente_fk) SELECT horario, aluno_fk, local, docente_fk FROM movimento;", []) 
    db.run(`DELETE FROM movimento WHERE aluno_fk=?`, [idaluno], (err, rows))
    if (err) { 
      res.status(500).json({ error: err.message }); 
    } else { 
      res.json("Resposta enviada"); 
      console.log(`O aluno com o id:${idaluno}, foi autorizado pelo docente com o id:${iddocente}. Horário de saída:${data}`);
    } 
  }); 
});
//

//O docente recusa a solicitação do aluno
app.post('/recusar', (req, res) => {
  const idaluno = req.body.idaluno

  console.log(`Aluno ${idaluno} recusado pelo docente`)
  db.all(`DELETE FROM movimento WHERE aluno_fk=?`, [idaluno], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json("Resposta enviada");
    }
  });
});
//

//Lista todos os alunos que o docente autorizou a sair e estão fora da sala
app.get('/listaFora', (req, res) => { 
  db.all('SELECT * FROM Alunos A INNER JOIN Fora M ON M.aluno_fk = A.id', [], (err, rows) => { 
    if (err) { 
      res.status(500).json({ error: err.message }); 
    } else { 
      res.json(rows); 
    } 
  }); 
});
//

//Após o aluno voltar, ele clica em um botão que exclui ele da tabela dos alunos fora da sala
app.post('/Voltei', (req, res) => {
  const idaluno = req.body.idaluno

  console.log(`Aluno ${idaluno} voltou para a sala`)
  db.all(`DELETE FROM fora WHERE aluno_fk=?`, [idaluno], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json("Resposta enviada");
      console.log(`O aluno com o id:${idaluno}, retornou a sala`)
    }
  });
});
//

//Definição da porta que o servidor vai rodar
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
//
