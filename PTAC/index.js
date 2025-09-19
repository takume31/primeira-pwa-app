/* esse const era um console.log porque porque não estava criando uma variavel chamada nota que ta puxando a media para juntas os resultados 
e em media tava clc oque não era uma variavel muito explicido para que serve */
const nota = media(6, 6, 6, 6, 6, 5.99);
/* A function tava com um c na frento oq estava dando erro porque não se você colocar cfunction */
function media(n1, n2, n3, p1, p2, p3) {
    // calcular media
    /* A media estaca com c como variavel não esplicando muito bem qual era a função dele */
    const media = (n1 * p1 + n2 * p2 + n3 * p3) / (p1 + p2 + p3);
    /* estava com t de variavel para falar se vc foi aprovado ou reprovado então não era um codigo limpo e
    o if tava dando a media para ser aprovado era 7 sendo que seria 6 */
    if (media >= 6) {
        se_passo = "Aprovado";
    } else {
        se_passo = "Reprovado";
    }
    /* Esse retun não estava puxando as variaveis corretamente 
    para que o consele.log enviar no terminal o resultado */
    return { se_passo, media };
}

/* o console.log tava sem o $ e as chaves para puxar as variaveis 
e esse conssole.log não tinha então coloquei para entregar a resposta no terminal*/
console.log(`O aluno está: ${se_passo}, sua média foi ${nota.media}`);

