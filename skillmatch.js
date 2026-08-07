function criarContadorAnalises() {
    let totalAnalises = 0; 
    return function() {
        totalAnalises++;
        return totalAnalises;
    };
}
const contarAnalise = criarContadorAnalises();

//CLASSE PRINCIPAL E USO DO 'THIS'
class Vaga {
    constructor(empresa, cargo, requisitos) {
        this.empresa = empresa;
        this.cargo = cargo;
        this.requisitos = requisitos; 
    }


    exibirResumo() {
        return `Vaga para ${this.cargo} na empresa ${this.empresa}.`;
    }
}


class VagaFrontEnd extends Vaga {
    constructor(empresa, cargo, requisitos, regimeTrabalho) {
        super(empresa, cargo, requisitos); 
        this.regimeTrabalho = regimeTrabalho; 
    }
}


function processarRecomendacao(candidato, callback) {
    return callback(candidato);
}


const buscarDadosDoServidor = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            
            const candidato = {
                nome: "Matheus alves ",
                areaDeInteresse: "Front-End",
                skills: ["HTML", "CSS", "JavaScript", "React"],
                tempoExperiencia: "6 meses"
            };
            resolve(candidato);
        }, 3000); 
    });
};
