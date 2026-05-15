import customtkinter as ctk
from tkinter import messagebox

# Confi cor
ctk.set_appearance_mode("dark")

# Dicionário
tarefas = {}

# ── Funções ──
def adicionar_tarefa():
    nome = entry_nome.get().strip()
    horario = entry_horario.get().strip()

    if not nome or not horario:
        messagebox.showwarning("Atenção", "Preencha nome e horário.")
        return

    tarefas[nome] = horario
    entry_nome.delete(0, "end")
    entry_horario.delete(0, "end")
    atualizar_lista()
    messagebox.showinfo("Sucesso", f"Tarefa '{nome}' adicionada!")

def remover_tarefa():
    nome = entry_remover.get().strip()
    if not nome:
        messagebox.showwarning("Atenção", "Digite o nome da tarefa a remover.")
        return

    if nome in tarefas:
        del tarefas[nome]
        entry_remover.delete(0, "end")
        atualizar_lista()
        messagebox.showinfo("Sucesso", f"Tarefa '{nome}' removida!")
    else:
        messagebox.showerror("Erro", f"Tarefa '{nome}' não encontrada.")

def atualizar_lista():
    lista_texto.configure(state="normal")
    lista_texto.delete("1.0", "end")

    if not tarefas:
        lista_texto.insert("end", "Nenhuma tarefa cadastrada.")
    else:
        for i, (nome, horario) in enumerate(tarefas.items(), 1):
            lista_texto.insert("end", f"{i}. {nome} → {horario}\n")

    lista_texto.configure(state="disabled")

# ── Janela principal ──
app = ctk.CTk()
app.title("Gerenciador de Tarefas")
app.geometry("400x500")

# Entradas e botões
ctk.CTkLabel(app, text="Adicionar Tarefa").pack(pady=(10, 0))
entry_nome = ctk.CTkEntry(app, placeholder_text="Nome da tarefa")
entry_nome.pack(pady=5, fill="x", padx=20)
entry_horario = ctk.CTkEntry(app, placeholder_text="Horário (ex: 14:30)")
entry_horario.pack(pady=5, fill="x", padx=20)
ctk.CTkButton(app, text="Adicionar", command=adicionar_tarefa).pack(pady=5)

ctk.CTkLabel(app, text="Remover Tarefa").pack(pady=(10, 0))
entry_remover = ctk.CTkEntry(app, placeholder_text="Nome da tarefa")
entry_remover.pack(pady=5, fill="x", padx=20)
ctk.CTkButton(app, text="Remover", command=remover_tarefa).pack(pady=5)

ctk.CTkLabel(app, text="Lista de Tarefas").pack(pady=(10, 0))
lista_texto = ctk.CTkTextbox(app, height=200)
lista_texto.pack(pady=5, fill="both", padx=20, expand=True)
lista_texto.configure(state="disabled")

ctk.CTkButton(app, text="Sair", command=app.destroy).pack(pady=10)

atualizar_lista()
app.mainloop()