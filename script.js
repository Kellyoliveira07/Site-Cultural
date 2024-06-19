const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual festa cultural você prefere?",
        alternativas: [
            "Festa junina",
            "Folia de Reis"
        ]
    },
    {
        enunciado: "Você gosta de dançar quadrilha ou reisado?",
        alternativas: [
            "Quadrilha",
            "Reisado"
        ]
    },
    {
        enunciado: "Que tal conhecer algumas comidas das festas?",
        alternativas: [
            "Junina",
            "Folia de Reis"
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    
}