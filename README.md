# SkillMatch JS: Simulador de Compatibilidade com Vaga Front-End Júnior

Este projeto é um motor de análise e triagem automatizada de currículos para vagas de tecnologia Front-End Júnior, desenvolvido em JavaScript Puro.

#  Regras de Negócio e Critérios

# - Cálculo de Compatibilidade
A regra de cálculo é consistente para todas as vagas e baseia-se na proporção de habilidades dominadas pelo candidato em relação aos requisitos totais da vaga:
* **Fórmula:** `(Requisitos Correspondentes / Total de Requisitos da Vaga) * 100`
* O resultado gera um percentual de 0 a 100%.

# - Estratégia de Maior Aderência
A estratégia utilizada analisa o array de resultados através do método `.reduce()`. O sistema compara os percentuais obtidos e retorna o objeto da vaga que possuir o maior valor numérico de compatibilidade.

# - Critério de Recomendação de Estudo
O critério adota uma abordagem de **prioridade técnica**. Caso o candidato possua habilidades faltantes na vaga de maior aderência, o sistema filtra e exibe explicitamente quais tecnologias ele precisa estudar imediatamente para atingir 100% de alinhamento com aquela empresa.