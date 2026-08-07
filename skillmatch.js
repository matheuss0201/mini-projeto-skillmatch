
class Vaga {
    constructor(id, titulo, requisitos) {
        this.id = id;
        this.titulo = titulo;
        this.requisitos = requisitos; 
    }
}

class VagaFrontEnd extends Vaga {
    constructor(id, titulo, requisitos, nivel = "Júnior") {
        super(id, titulo, requisitos);
        this.nivel = nivel; 
    }
}


const vagasDisponiveis = [
    new VagaFrontEnd(1, "Vaga A (Foco em React)", ["HTML", "CSS", "JavaScript", "React", "Git"]),
    new VagaFrontEnd(2, "Vaga B (Foco em Design/UI)", ["HTML", "CSS", "JavaScript", "Tailwind", "Figma"]),
    new VagaFrontEnd(3, "Vaga C (Foco em Java)", ["HTML", "CSS", "JavaScript", "Node.js", "TypeScript"])
];

const listaCandidatos = [
    {
        nome: "matheus alves",
        mora: "joiville",
        habilidades: ["HTML", "CSS", "JavaScript", "Git"],
        estaAtivo: true,
        anosExperiencia: 0
    },
    {
        nome: "Ana Costa",
        mora: "são paulo",
        habilidades: ["HTML", "CSS", "JavaScript", "Tailwind", "React"],
        estaAtivo: true,
        anosExperiencia: 2
    }
];


//  USO DE CLOSURE E CALLBACK
function criarContadorAnalises() {
    let contagem = 0;
    return function() {
        contagem += 1; 
        return contagem;
    };
}
const incrementarContador = criarContadorAnalises();

function formatarMensagem(texto, callback) {
    return callback(texto);
}
const callbackCaixaAlta = (txt) => txt.toUpperCase();


//  PROMISE E ASYNC/AWAIT

function buscarDadosVagasPro() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (vagasDisponiveis.length > 0) {
                resolve(vagasDisponiveis);
            } else {
                reject("Nenhuma vaga encontrada no sistema.");
            }
        }, 1000);
    });
}