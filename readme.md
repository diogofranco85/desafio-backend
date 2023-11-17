**Enunciado: Conversão de Dados**

Sua equipe foi escalada para desenvolver uma funcionalidade de conversão de dados. Vocês receberão dados de empreendimentos, torres, unidades e vagas de garagem em formato JSON com a estrutura utilizada pelo cliente.

Sua tarefa é desenvolver uma CLI capaz de receber o JSON de entrada, executar a conversão dos dados e realizar a persistência dessas informações. A saída esperada é um JSON contendo os dados convertidos e persistidos.

**Dados de Entrada (JSON):**
```json
{
  "realties": [
    {
      "id": 1,
      "title": "Burj Khalifa"
    },
    {
      "id": 2,
      "title": "Empire State Building"
    }
  ],
  "buildings": [
    {
      "id": 1,
      "realtyId": 1,
      "title": "Torre 1"
    },
    {
      "id": 2,
      "realtyId": 2,
      "title": "Torre Norte"
    },
    {
      "id": 3,
      "realtyId": 2,
      "title": "Torre Sul"
    },
    {
      "id": 4,
      "realtyId": 2,
      "title": "Torre de Vagas"
    }
  ],
  "units": [
    {
      "id": 1,
      "buildingId": 1,
      "number": "15",
      "floor": 100,
      "type": "apartment",
      "parkingSpaceIds": [2, 3]
    },
    {
      "id": 2,
      "buildingId": 1,
      "number": "1",
      "type": "parkingSpace",
      "floor": -1
    },
    {
      "id": 3,
      "buildingId": 1,
      "number": "2",
      "type": "parkingSpace",
      "floor": -1
    },
    {
      "id": 4,
      "buildingId": 1,
      "number": "13",
      "type": "apartment",
      "floor": 53,
    },
    {
      "id": 5,
      "buildingId": 2,
      "number": "135",
      "floor": 13,
      "type": "apartment",
      "parkingSpaceIds": [7]
    },
    {
      "id": 6,
      "buildingId": 4,
      "number": "A",
      "floor": 1,
      "type": "parkingSpace"
    },
    {
      "id": 7,
      "buildingId": 4,
      "number": "B",
      "floor": 1,
      "type": "parkingSpace"
    },
  ]
}
```

**Dados de Saída Esperados (JSON):**
```json
{
  "empreendimentos": [
    {
      "id": 1,
      "nome": "Burj Khalifa",
      "torres": [
        {
          "id": 1,
          "nome": "Torre 1",
          "unidades": [
            {
              "id": 1,
              "numero": "15",
              "andar": 100,
              "tipo": "apartamento",
              "vagasDeGaragemIds": [2,3]
            },
            {
              "id": 2,
              "number": "1",
              "andar": -1,
              "tipo": "vaga",
            },
            {
              "id": 3,
              "numero": "2",
              "andar": -1,
              "tipo": "vaga",
            },
            {
              "id": 4,
              "numero": "13",
              "andar": 53,
              "tipo": "apartamento",
              "vagasDeGaragemIds": []
            },
          ]
        }
      ]
    },
    {
      "id": 2,
      "nome": "Empire State Building",
      "torres": [
        {
          "id": 2,
          "nome": "Torre Norte",
          "unidades": [
            {
              "id": 5,
              "numero": "135",
              "andar": 13,
              "tipo": "apartamento",
              "vagasDeGaragemIds": [7],
            },
          ]
        },
        {
          "id": 3,
          "nome": "Torre Sul",
          "unidades": []
        },
        {
          "id": 4,
          "nome": "Torre de Vagas",
          "unidades": [
            {
              "id": 6,
              "numero": "A",
              "andar": 1,
              "tipo": "vaga",
            },
            {
              "id": 7,
              "numero": "B",
              "andar": 1,
              "tipo": "vaga",
            },
          ]
        }
      ]
    }
  ]
}
```

### Requisitos ###

1. #### Validação de Dados de Entrada ####
Implemente validações para verificar a integridade dos dados de entrada. As validações devem incluir, mas não se limitar a:
    * Dados faltando em objetos obrigatórios.
    * Tipos inválidos para propriedades específicas (por exemplo, esperando um número e recebendo uma string).
    * Propriedades faltando ou inválidas em objetos.
    * Em caso de dados inválidos ou incompletos, o programa deve fornecer mensagens de erro informativas e não prosseguir com a conversão e persistência.

2. #### Conversão de Dados ####
    - Converta os dados do formato de entrada para o formato de saída conforme especificado acima.
    - Certifique-se de que a estrutura de dados de saída seja idêntica à fornecida no exemplo esperado.

3. #### Persistência de Dados ####
   - Após a conversão dos dados e validação, persista-os na base de dados fornecida junto com este projeto.

4. #### Tecnologias ####
   - Utilize Node.js e TypeScript para a implementação do programa.
   - Você é livre para escolher qualquer biblioteca ou framework que achar necessário para completar a tarefa.

5. #### Rodando o projeto ####
    - Este projeto está configurado com o docker compose e já contém uma base postgres criada e configurada com as tabelas onde os dados devem ser persistido. Para executa-lo basta rodar o docker compose que tanto a base quanto a aplicação estarão em execução.

6. #### Avaliação ####

    1. **Conversão de Dados**
        - Precisão na conversão dos dados de entrada para o formato de saída especificado.

    1. **Validação de Dados de Entrada**
        - Implementação eficaz das validações para garantir a integridade e validade dos dados de entrada.

    1. **Persistência de Dados**
        - Eficiência na persistência dos dados na base de dados SQL.

    1. **Qualidade de Código**
        - Coesão: Avaliação da coesão dos módulos e componentes do código.
        - Separação de Responsabilidades.
        - Boas Práticas de Codificação: avaliação do código quanto ao uso de boas práticas de codificação, legibilidade e manutenibilidade.

    1. **Decisões Arquiteturais**
        - Avaliação das decisões arquiteturais tomadas para a estruturação do programa.

    1. **Padrões de Projeto**
        - Utilização de Padrões de Projeto: avaliação da aplicação de padrões de projeto apropriados para resolver problemas específicos no código.

    1. **Documentação**
        - Documentação do código para facilitar a compreensão. Não existe necessidade de ser nada extenso, mas documente as decisões que achar relevantes para podermos entender o seu raciocínio.

    1. **Eficiência e Otimização**
        - Avaliação da eficiência do código, incluindo o uso adequado de algoritmos e estruturas de dados.
    
    1. **Testes**
        - Cobertura de Testes: avaliação da cobertura de testes unitários para garantir a robustez e confiabilidade do código.


7. #### Observações ####
    1. O seu código deve ser bem organizado e seguir as melhores práticas de desenvolvimento.
    2. Documente o seu código conforme apropriado para facilitar a compreensão e forneça exemplos de como rodar a aplicação.

---

Esperamos que você demonstre suas habilidades na validação de dados de entrada, conversão de dados, manipulação de estruturas complexas em TypeScript, persistência de dados em uma base de dados SQL, além de mostrar sua compreensão em coesão, separação de responsabilidades, decisões arquiteturais e padrões de projeto.

Boa sorte!