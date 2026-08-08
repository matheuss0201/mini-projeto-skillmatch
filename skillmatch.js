


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
// FUNÇÃO PRINCIPAL ASSÍNCRONA
async function executarSistema() {
    console.log("Carregando motor de análise de currículos.......");
    
    // Aguarda a simulação da Promise
    const candidato = await buscarDadosDoServidor();
    
    
    const listaVagas = [
        new VagaFrontEnd("Totvs", "Front-End Júnior", ["HTML", "CSS", "JavaScript", "React"], "Remoto"),
        new VagaFrontEnd("DevSoft", "Front-End Júnior", ["HTML", "CSS", "JavaScript", "TypeScript", "Vue"], "Híbrido"),
        new VagaFrontEnd("WebStyle", "Front-End Júnior", ["HTML", "CSS", "JavaScript", "Tailwind", "Next.js"], "Presencial")
    ];

    console.log(`\nIniciando análise para: ${candidato.nome}`);

    
    const resultados = listaVagas.map((vaga) => {
        
        
        const skillsFaltantes = vaga.requisitos.filter(
            skill => !candidato.skills.includes(skill)
        );

        
        const totalRequisitos = vaga.requisitos.length;
        const correspondidas = totalRequisitos - skillsFaltantes.length;
        const percentual = Math.round((correspondidas / totalRequisitos) * 100); 

        
        let classificacao = "";
        if (percentual >= 80) {
            classificacao = "Alta compatibilidade";
        } else if (percentual >= 50) {
            classificacao = "Média compatibilidade";
        } else {
            classificacao = "Baixa compatibilidade";
        }

        return {
            vaga: vaga,
            percentual: percentual,
            classificacao: classificacao,
            skillsFaltantes: skillsFaltantes
        };
    });

    
    resultados.forEach(res => {
        console.log(`\n--- ${res.vaga.exibirResumo()} ---`);
        console.log(`Compatibilidade: ${res.percentual}% (${res.classificacao})`);
        console.log(`Habilidades Faltantes: ${res.skillsFaltantes.join(", ") || "Nenhuma!"}`);
    });

 
    const melhorVaga = resultados.reduce((maior, atual) => {
        return atual.percentual > maior.percentual ? atual : maior;
    });

    console.log(`\n=================================`);
    console.log(`VAGA COM MAIOR COMPATIBILIDADE:`);
    console.log(`${melhorVaga.vaga.empresa} (${melhorVaga.percentual}%)`);
    console.log(`=================================`);

    //Gerar uma recomendação de estudo baseada na melhor vaga
    const recomendacao = processarRecomendacao(melhorVaga, (dados) => {
        if (dados.skillsFaltantes.length === 0) {
            return "Parabéns! Você cumpre todos os requisitos. Candidate-se imediatamente!";
        }
        
        return `Estude prioritariamente a tecnologia: [ ${dados.skillsFaltantes[0]} ] para se adequar à vaga da ${dados.vaga.empresa}.`;
    });

    console.log(`Recomendação: ${recomendacao}`);

//  (provando a Closure)
    console.log(`\nAnálise número: ${contarAnalise()}`);
}


executarSistema();


