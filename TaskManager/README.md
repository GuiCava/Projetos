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

1. **Instale a dependência:**
   ```bash
   pip install customtkinter
   ```

2. **Execute a aplicação:**
   ```bash
   python TaskManager.py
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
TaskManager/
└── TaskManager.py   # Código principal da aplicação
```

## Observações

- As tarefas são armazenadas **apenas em memória** — ao fechar o programa, os dados são perdidos.
- Não é permitido cadastrar duas tarefas com o mesmo nome.

## Participantes:
- Guilherme Cava: https://github.com/GuiCava
- Luan do Carmo: https://github.com/carmoluan0
- Francisco Ericks: https://github.com/erickssilva-ctrl
- Gustavo L Oliveira: https://github.com/devgusta07
- Livia Pereira: https://github.com/Livia-codes
- João Paulo: https://github.com/jpioth23-ops

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
