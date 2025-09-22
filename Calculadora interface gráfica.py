from tkinter import *

# Aparencia da janela:
root = Tk()
root.title("Calculadora Simples")
root.configure(background="#037F3B")
root.geometry("800x140")

# Criar nova janela:
def obrigado():
    root.destroy()
    obg = Tk()
    obg.title("Obrigado")
    obg.configure(background="#037F3B")
    obg.geometry("737x100")
    vazio = Label(obg, text="", bg="#037F3B")
    vazio.grid(column=0, row=0)
    eu = Label(obg, text="Feito por:Guilherme Cava Paiva do Nascimento", justify=CENTER, relief=FLAT, bg="#438DDB")
    eu.grid(column=0, row=3)
    nada = Label(obg, text="", bg="#037F3B")
    nada.grid(column=0, row=2)
    project = Label(obg, text="Obrigado por usar a calculadora simples, isso foi apenas um projeto simples que foi criado com o uso da biblioteca Tkinter no Python 3.12.", justify=CENTER, relief=FLAT, bg="#438DDB")
    project.grid(column=0, row=1)
    vazio2 = Label(obg, text="", bg="#037F3B")
    vazio2.grid(column=0, row=3)


    def fechar_obg():
     obg.destroy()
    obg.after(5000, fechar_obg)
    obg.mainloop()

  

# Função para cálculo:
def destroyer():
    sinal_invalido.destroy
def invalido():
    global sinal_invalido
    sinal_invalido = Label(root, text="Sinal Inválido!", font=("bold"), borderwidth=1, relief=FLAT, fg="#000000", bg="#438DDB", justify=CENTER)
    sinal_invalido.grid(column=3, row=3)
   

def dele():
    Num1.delete(0, END)
    Num2.delete(0, END)
    sinal.delete(0, END)
    Resul.delete(0, END)
    
def calculo():
    global total
    global sinal
    global Num1
    global Num2
    global Resul

    total = 0  

    sinal_value = sinal.get()  
    if sinal_value not in ['+', '-','*','/', 'x']:
        invalido()
    else:

        num1 = int(Num1.get())
        num2 = int(Num2.get())  

        if sinal_value == '+':
            total = num1 + num2
        elif sinal_value == '-':
            total = num1 - num2
        elif sinal_value == '*' or sinal_value == "x":
            total = num1 * num2
        elif sinal_value == '/':
            total = num1 / num2
        else:
            invalido()

        Resul.delete(0, END)  
        Resul.insert(0, str(total))  



#Labels:
vazio = Label(text="               ", background="#037F3B")
vazio.grid(column=0, row=1)
vazio2 = Label(text="      ", background="#037F3B")
vazio2.grid(column=2, row=1)
vazio3 = Label(text="      ", background="#037F3B")
vazio3.grid(column=4, row=1)
vazio3 = Label(text="      ", background="#037F3B")
vazio3.grid(column=6, row=1)
vazio4 = Label(text="      ", background="#037F3B")
vazio4.grid(column=8, row=1)
label_Resul = Label(root, width=8, borderwidth=4, relief=FLAT, fg="#000000", bg="#a7a28f", font=("futura", 25, "bold"), justify=CENTER )
label_Resul.grid(column=9, row=1)
label_MenResul = Label(root, width=9, text="Resultado:", borderwidth=1, relief=FLAT, fg="#000000", bg="#438DDB", font=("futura", 10, "bold"), justify=CENTER)
label_MenResul.grid(column=9, row=0)
igual = Label(root, width=3, text="=", borderwidth=4, relief=FLAT, fg="#000000", bg="#a7a28f", font=("futura", 25, "bold"), justify=CENTER )
igual.grid(column=7, row=1)
label_num1 = Label(root, width=8, text="Número:", borderwidth=1, relief=FLAT, fg="#000000", bg="#438DDB", font=("futura", 10, "bold"), justify=CENTER)
label_num1.grid(column=1, row=0)
label_num2 = Label(root, width=7, text="Número:", borderwidth=1, relief=FLAT, fg="#000000", bg="#438DDB", font=("futura", 10, "bold"), justify=CENTER)
label_num2.grid(column=5, row=0)
label_sinal = Label(root, width=5, text="Sinal:", borderwidth=1, relief=FLAT, fg="#000000", bg="#438DDB", font=("futura", 10, "bold"), justify=CENTER)
label_sinal.grid(column=3, row=0)

# Entradas:
Num1 = Entry(root, width=8, borderwidth=4, relief=FLAT, fg="#000000", bg="#a7a28f", font=("futura", 25, "bold"), justify=CENTER)
Num1.grid(column=1, row=1)

Num2 = Entry(root, width=8, borderwidth=4, relief=FLAT, fg="#000000", bg="#a7a28f", font=("futura", 25, "bold"), justify=CENTER)
Num2.grid(column=5, row=1)

sinal = Entry(root, width=3, borderwidth=4, relief=FLAT, fg="#000000", bg="#a7a28f", font=("futura", 25, "bold"), justify=CENTER)
sinal.grid(column=3, row=1)

Resul = Entry(root, width=8, borderwidth=4, relief=FLAT, fg="#000000", bg="#a7a28f", font=("futura", 25, "bold"), justify=CENTER)
Resul.grid(column=9, row=1)

# Botões:
calcular = Button(root, text="Calcular", relief=SUNKEN, command=calculo, background="#6BAFF0")
calcular.grid(column=5, row=2)

limpar = Button(root, text="Limpar", relief=SUNKEN, command=dele,background="#6BAFF0")
limpar.grid(column=3, row=2)

sair = Button(root, text="Sair", relief=SUNKEN, background="#6BAFF0", command=obrigado)
sair.grid(column=7, row=3)



root.mainloop()