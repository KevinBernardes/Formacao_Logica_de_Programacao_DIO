let nome_heroi = "Kevin"
let xp_heroi = 5020
let resultado = ""

    switch (true){
        case xp_heroi < 1000:
            resultado = "Ferro"
            break

        case xp_heroi >= 1001 && xp_heroi < 2000:
            resultado = "Bronze"
            break

        case xp_heroi >= 2001 && xp_heroi < 5000:
            resultado = "Prata Ouro"          
            break

        case xp_heroi >= 5001 && xp_heroi < 8000:
            resultado = "Platina Diamante"
            break

        case xp_heroi >= 8001 && xp_heroi < 9000:
            resultado = "Ascendente"            
            break

        case xp_heroi >= 9001 && xp_heroi < 10000:
            resultado = "Imortal"           
            break

        case xp_heroi >= 10001:
            resultado = "Radiante"

        default:
            resultado = "Rank do herói não encontrado!"

    }



console.log("O héroi de nome " + nome_heroi + " está no nível de " + resultado + "!")