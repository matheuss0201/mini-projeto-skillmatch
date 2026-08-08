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
    console.log("Carregando motor de análise de currículos...");
    
    // Aguarda a simulação da Promise
    const candidato = await buscarDadosDoServidor();
    
    
    const listaVagas = [
        new VagaFrontEnd("TechCorp", "Front-End Júnior", ["HTML", "CSS", "JavaScript", "React"], "Remoto"),
        new VagaFrontEnd("DevSoft", "Front-End Júnior", ["HTML", "CSS", "JavaScript", "TypeScript", "Vue"], "Híbrido"),
        new VagaFrontEnd("WebStyle", "Front-End Júnior", ["HTML", "CSS", "JavaScript", "Tailwind", "Next.js"], "Presencial")
    ];

    console.log(`\nIniciando análise para: ${candidato.nome}`);

    // MÉTODOS DE ARRAY (RF08: Utiliza map, filter e reduce) 
    const resultados = listaVagas.map((vaga) => {
        
        // RF05: Encontrar habilidades faltantes (usando filter)
        const skillsFaltantes = vaga.requisitos.filter(
            skill => !candidato.skills.includes(skill)
        );

        // RF03: Calcular percentual de compatibilidade (Regra: proporcional ao número de requisitos)
        const totalRequisitos = vaga.requisitos.length;
        const correspondidas = totalRequisitos - skillsFaltantes.length;
        const percentual = Math.round((correspondidas / totalRequisitos) * 100); 

        // RF04: Classificar compatibilidade usando Estrutura de Decisão (if-else)
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

    // Exibição dos resultados individuais no console
    resultados.forEach(res => {
        console.log(`\n--- ${res.vaga.exibirResumo()} ---`);
        console.log(`Compatibilidade: ${res.percentual}% (${res.classificacao})`);
        console.log(`Habilidades Faltantes: ${res.skillsFaltantes.join(", ") || "Nenhuma!"}`);
    });

}
