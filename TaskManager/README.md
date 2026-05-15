# Gerenciador de Tarefas

Aplicação desktop simples para gerenciar tarefas com horários, construída com Python e CustomTkinter.

## Visão Geral

Interface gráfica no estilo dark mode que permite adicionar, remover e visualizar tarefas com seus respectivos horários.

## Funcionalidades

- **Adicionar tarefas** com nome e horário
- **Remover tarefas** pelo nome
- **Listar tarefas** cadastradas em tempo real
- Interface moderna com tema escuro (dark mode)

## Tecnologias

- [Python 3](https://www.python.org/)
- [CustomTkinter](https://github.com/TomSchimansky/CustomTkinter) — biblioteca de interface gráfica moderna para Python

## Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/gerenciador-de-tarefas.git
   cd gerenciador-de-tarefas
   ```

2. **Instale a dependência:**
   ```bash
   pip install customtkinter
   ```

3. **Execute a aplicação:**
   ```bash
   python gen2.py
   ```

## Como Usar

1. **Adicionar uma tarefa:**
   - Preencha o campo **Nome da tarefa**
   - Preencha o campo **Horário** (ex: `14:30`)
   - Clique em **Adicionar**

2. **Remover uma tarefa:**
   - Digite o nome exato da tarefa no campo **Remover Tarefa**
   - Clique em **Remover**

3. **Visualizar tarefas:**
   - A lista atualiza automaticamente após cada operação

## Estrutura do Projeto

```
gerenciador-de-tarefas/
└── gen2.py   # Código principal da aplicação
```

## Observações

- As tarefas são armazenadas **apenas em memória** — ao fechar o programa, os dados são perdidos.
- Não é permitido cadastrar duas tarefas com o mesmo nome.

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
