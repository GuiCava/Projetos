def calcular_media(nota1, nota2):
    return (nota1 + nota2) / 2

print("Sistema de Notas do Aluno ===")
n1 = float(input("Digite a primeira nota: "))
n2 = float(input("Digite a segunda nota: "))
media = calcular_media(n1, n2)
print(f"A média final é: {media:.2f}")

if media >= 7.0:
    print("Status: APROVADO")
else:
    print("Status: REPROVADO")