import random

def jogar():
    print("********************************")
    print("Bem vindo ao jogo de Advinhação.")
    print("********************************")

    print("Qual o nível de dificuldade?")
    print("(1) Fácil (2) Médio (3) Difícil")

    nivel = int(input("Defina o nível: "))

    if (nivel == 1):
        total_de_tentativas = 20
    elif (nivel == 2):
        total_de_tentativas = 10
    else:
        total_de_tentativas = 5
    # numero_secreto = round(random.random() *100)
    numero_secreto = random.randrange(1, 101)

    print(numero_secreto)

    rodada = 1;
    # while(rodada <= total_de_tentativas):
    for rodada in range(1, total_de_tentativas + 1):
        print("Tentativa {} de {}".format(rodada, total_de_tentativas))
        valor = int(input("Digite o seu número: "))

        print("Você digitou ",valor)

        if (valor < 1 or valor > 100):
            print("O valor deve estar entre 1 e 100")
            continue

        acertou = numero_secreto == valor
        maior = valor > numero_secreto
        menor = valor < numero_secreto
        if (acertou):
            print("Você acertou")
            break
        else:
            if (maior):
                print("Valor é maior que o numero secreto")
            elif (menor):
                print("Valor é menor que o numero secreto")

        rodada = rodada + 1

    print("Fim do jogo")

if (__name__ == '__main__'):
    jogar()