host: 'gruposn1.mysql.uhserver.com',
user: 'gruposn1',
password: 'lyca@20132019',


COMANDOS SQL:

Mostrar toda uma tabela: SELECT * from Alunos

Adicionar informação: INSERT INTO Alunos (id,nome) VALUES (10050,"Erika")

Remover informação: DELETE FROM Alunos WHERE id = 10050; ou DELETE FROM Alunos WHERE nome = Erika;

Atualizar informações: UPDATE Alunos SET nome = "Karol" WHERE id = 9592;

COMO RODAR O PROJETO BAIXADO
Instalar todas as dependencias indicadas pelo package.json
### npm install

Rodar o projeto
## node app.js

SEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package
### npm init

Instalar o MySQL
### npm install --save mysql2