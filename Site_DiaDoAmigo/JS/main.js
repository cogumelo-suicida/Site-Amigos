const json = {
    "comentario": {
        1: {      
            "p": "\"Uma sala bem mediana assim, nada demais, único que salva lá é o Paulo\"",
            "id": 1
        },
        2: {
            "p": "\"Não tenho nada a comentar\", diz um de nossos entrevistados.",
            "id": 1
        },
        3: {
            "p": "\"Porque vocês estão fazendo essa me### ein?\", argumenta indignado um entrevistado que se exautou com a nossa insistência",
            "id": 1
        },
        4: {
            "p": "\"Uma sala muito participativa, que faz as atividades, tudo para se dar bem. MAS ADOLESCENTE É TUDO IGUAL NESSA P%#@ E EU NÃO PARO DE CONFUNDIR AS ME#&!% DOS NOMES. Desculpe por me exautar\", retrata indignado um dos professores",
            "id": 1
        },
        5: {
            "p": "\"É TRUCO P%@#!, PEDE SEIS VAI, PEDE SEIS SEU MER*# PEDE!!!!!\", retrata um dos principais posicionamentos da sala",
            "id": 1
        },
        6: {
            "p": "\"Naquela sala lá só tem pato\", argumenta aluno do 3º após perder diversas partidas de truco",
            "id": 1
        },
        7: {
            "p": "\"Uma sala realmente muito boa e promissora... Mas eles ficam zoando a minha roupa\", posiciona-se triste um dos entrevistados antes de começar a chorar",
            "id": 1
        },
        8: {
            "p": "\"Eu sou bem macho\", Perpetua um de nossos colegas",
            "id": 1
        },   
        9: {
            "p": "\"Com a idade que ela deve ter, se ela espirrar Deus acha que é um chamado\", análisa um de nossos entrevistados",
            "id": 1
        },
        10: {
            "p": "\"Made in Kutchia\"",
            "id": 1
        },
        11: {
            "p": "\"Ai nois mamo\", retrata outro posicionamento da sala",
            "id": 1
        }
    }
}

const id = Math.floor(Math.random() * 12)


//console.log(json.comentario[id].p)
a = document.getElementById("text")
console.log(a)
//a.innerHTML = `${json.comentario[id].p}`
function oi() {
    a = document.getElementById("text")
    console.log(a)
    document.getElementById("number").innerHTML = `${json.comentario[id].p}`;
}
setTimeout(() => {
    a = document.getElementById("text")
    console.log(a)
    document.getElementById("text").innerHTML = `${json.comentario[id].p}`
  }, "10");

function NewComent() {
    const id = Math.floor(Math.random() * 12)
    a = document.getElementById("text")
    console.log(a)
    document.getElementById("text").innerHTML = `${json.comentario[id].p}`
}