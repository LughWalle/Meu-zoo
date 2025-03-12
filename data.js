const zooData = {
  animais: [
    {
      id: '0938aa23-f153-4937-9f88-4858b24d6bce',
      nome: 'Leões Africanos',
      nomeCientifico: 'Panthera leo',
      popularidade: 9,
      localizacao: 'SAVANA',
      dieta: 'Carnívoro',
      habitat: 'Savana aberta',
      statusConservacao: 'Vulnerável',
      caracteristicas: {
        Alimentação: 'Carnívoro',
        pesoMedio: "190000g",
        expectativaVida: 14,
        periodoGestacao: 110,
        velocidadeMaxima: 80
      },
      residentes: [
        {
          id: 'L1',
          nome: 'Zena',
          sexo: 'Fêmea',
          idade: 12,
          caracteristicas: {
            marcaDistintiva: 'Cicatriz na pata direita',
            parentesco: {
              paterno: null,
              materno: 'L3'
            },
            comportamento: ['territorialista'],
            habilidade: ['Caça em grupo', 'Comunicação vocal']
          }
        },
        {
          id: 'L2',
          nome: 'Maxwell',
          sexo: 'Macho',
          idade: 15,
          caracteristicas: {
            marcaDistintiva: 'Juba negra',
            parentesco: {
              paterno: null,
              materno: null
            },
            comportamento: ['raivoso'],
            habilidade: ['Defesa do território']
          }
        },
        {
          id: 'L3',
          nome: 'Nala',
          sexo: 'Fêmea',
          idade: 9,
          caracteristicas: {
            marcaDistintiva: 'Olho esquerdo azul',
            parentesco: {
              paterno: 'L2',
              materno: null
            },
            comportamento: ['docil'],
            habilidade: ['Rastreamento', 'Cuidado parental']
          }
        }
      ]
    },
    {
      id: 'ef3778eb-2844-4c7c-b66c-f432073e1c6b',
      nome: 'Pinguins Imperadores',
      nomeCientifico: 'Aptenodytes forsteri',
      popularidade: 8,
      localizacao: 'POLAR',
      dieta: 'Peixes e crustáceos',
      habitat: 'Colônia gelada',
      statusConservacao: 'Quase ameaçado',
      caracteristicas: {
        Alimentação: 'Peixes e crustáceos',
        pesoMedio: "23000g",
        expectativaVida: 20,
        periodoGestacao: 64, // Período de incubação em dias
        velocidadeMaxima: 8 // km/h na água
      },
      residentes: [
        {
          id: 'P1',
          nome: 'Frost',
          sexo: 'Macho',
          idade: 5,
          caracteristicas: {
            marcaDistintiva: 'Mancha branca no peito',
            parentesco: {
              paterno: null,
              materno: 'P2'
            },
            comportamento: ['docil'],
            habilidade: ['Natação rápida', 'Resistência ao frio']
          }
        },
        {
          id: 'P2',
          nome: 'Aurora',
          sexo: 'Fêmea',
          idade: 7,
          caracteristicas: {
            marcaDistintiva: 'Cauda com listras negras',
            parentesco: {
              paterno: null,
              materno: null
            },
            comportamento: ['brincalhão'],
            habilidade: ['Salto em altura', 'Cuidado parental']
          }
        },
        {
          id: 'P3',
          nome: 'Glacier',
          sexo: 'Macho',
          idade: 4,
          caracteristicas: {
            marcaDistintiva: 'Bico curvado',
            parentesco: {
              paterno: 'P1',
              materno: 'P2'
            },
            comportamento: ['medroso'],
            habilidade: ['Equilíbrio em gelo', 'Regulação térmica']
          }
        }
      ]
    },
    {
      id: 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
      nome: 'Elefantes Asiáticos',
      nomeCientifico: 'Elephas maximus',
      popularidade: 9,
      localizacao: 'JUNGLE',
      dieta: 'Herbívoro',
      habitat: 'Floresta tropical',
      statusConservacao: 'Em perigo',
      caracteristicas: {
        Alimentação: 'Herbívoro',
        pesoMedio: "4000000g", // 4000 kg convertido para gramas
        expectativaVida: 60,
        periodoGestacao: 660, // 22 meses em dias
        velocidadeMaxima: 25 // km/h
      },
      residentes: [
        {
          id: 'E1',
          nome: 'Ganesha',
          sexo: 'Fêmea',
          idade: 45,
          caracteristicas: {
            marcaDistintiva: 'Presas de 3.2m curvadas',
            parentesco: {
              paterno: null,
              materno: null
            },
            comportamento: ['docil'],
            habilidade: ['Memória espacial avançada', 'Uso de ferramentas']
          }
        },
        {
          id: 'E2',
          nome: 'Babar',
          sexo: 'Macho',
          idade: 32,
          caracteristicas: {
            marcaDistintiva: 'Presas assimétricas',
            parentesco: {
              paterno: null,
              materno: 'E1'
            },
            comportamento: ['territorialista'],
            habilidade: ['Comunicação infra-sônica', 'Defesa de grupo']
          }
        },
        {
          id: 'E3',
          nome: 'Lakshmi',
          sexo: 'Fêmea',
          idade: 28,
          caracteristicas: {
            marcaDistintiva: 'Marcas de argila na testa',
            parentesco: {
              paterno: null,
              materno: 'E1'
            },
            comportamento: ['territorialista'],
            habilidade: ['Liderança de grupo', 'Resolução de conflitos']
          }
        }
      ]
    },
    {
      id: '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
      nome: 'Lêmures de Cauda Anelada',
      nomeCientifico: 'Lemur catta',
      popularidade: 7,
      localizacao: 'MADAGASCAR',
      dieta: 'Frutas e folhas',
      habitat: 'Floresta espinhosa',
      statusConservacao: 'Em perigo',
      caracteristicas: {
        Alimentação: 'Herbívoro',
        pesoMedio: "2800g", // 2.8 kg
        expectativaVida: 18,
        periodoGestacao: 135, // Dias
        velocidadeMaxima: 19 // km/h
      },
      residentes: [
        {
          id: 'LEM1',
          nome: 'Zoboomafoo',
          sexo: 'Macho',
          idade: 8,
          caracteristicas: {
            marcaDistintiva: 'Cauda com anéis incompletos',
            parentesco: {
              paterno: null,
              materno: null
            },
            comportamento: ['territorialista'],
            habilidade: ['Locomoção arbórea', 'Vigilância']
          }
        },
        {
          id: 'LEM2',
          nome: 'Sifaka',
          sexo: 'Fêmea',
          idade: 6,
          caracteristicas: {
            marcaDistintiva: 'Mancha ocular triangular',
            parentesco: {
              paterno: 'LEM1',
              materno: null
            },
            comportamento: ['docil'],
            habilidade: ['Salto em distância', 'Forrageamento']
          }
        },
        {
          id: 'LEM3',
          nome: 'Ringtail',
          sexo: 'Macho',
          idade: 5,
          caracteristicas: {
            marcaDistintiva: 'Cicatriz na orelha direita',
            parentesco: {
              paterno: null,
              materno: 'LEM2'
            },
            comportamento: ['brincalhão'],
            habilidade: ['Comunicação vocal', 'Defesa do território']
          }
        }
      ]
    },
    {
      id: '89be95b3-47e4-4c5b-b687-1fabf2afa274',
      nome: 'Tigres de Bengala',
      nomeCientifico: 'Panthera tigris tigris',
      popularidade: 10,
      localizacao: 'JUNGLE',
      dieta: 'Carnívoro',
      habitat: 'Floresta de mangue',
      statusConservacao: 'Em perigo',
      caracteristicas: {
        Alimentação: 'Carnívoro',
        pesoMedio: "220000g", // 220 kg convertido
        expectativaVida: 15,
        periodoGestacao: 103, // Período gestacional real em dias
        velocidadeMaxima: 65 // km/h
      },
      residentes: [
        {
          id: 'T1',
          nome: 'Rajah',
          sexo: 'Macho',
          idade: 9,
          caracteristicas: {
            marcaDistintiva: 'Listras assimétricas no flanco direito',
            parentesco: {
              paterno: null,
              materno: null
            },
            comportamento: ['territorialista'],
            habilidade: ['Natação em manguezais', 'Caça noturna']
          }
        },
        {
          id: 'T2',
          nome: 'Sita',
          sexo: 'Fêmea',
          idade: 7,
          caracteristicas: {
            marcaDistintiva: 'Olho âmbar com mancha preta',
            parentesco: {
              paterno: 'T3',
              materno: null
            },
            comportamento: ['raivoso'],
            habilidade: ['Estratégia de emboscada', 'Rastreamento']
          }
        },
        {
          id: 'T3',
          nome: 'Khan',
          sexo: 'Macho',
          idade: 11,
          caracteristicas: {
            marcaDistintiva: 'Cicatriz em forma de crescente',
            parentesco: {
              paterno: null,
              materno: null
            },
            comportamento: ['imprevisivel'],
            habilidade: ['Marcação territorial', 'Defesa de presas']
          }
        }
      ]
    },
    {
      id: '01422318-ca2d-46b8-b66c-3e9e188244ed',
      nome: 'Gorilas das Montanhas',
      nomeCientifico: 'Gorilla beringei beringei',
      popularidade: 9,
      localizacao: 'MONTANHA',
      dieta: 'Herbívoro',
      habitat: 'Floresta nebulosa',
      statusConservacao: 'Criticamente em perigo',
      caracteristicas: {
        Alimentação: 'Herbívoro',
        pesoMedio: "160000g", // 160 kg para machos adultos
        expectativaVida: 40,
        periodoGestacao: 257, // 8.5 meses em dias
        velocidadeMaxima: 40 // km/h
      },
      residentes: [
        {
          id: 'G1',
          nome: 'Koko',
          sexo: 'Macho',
          idade: 35,
          caracteristicas: {
            marcaDistintiva: 'Sela prateada pronunciada',
            parentesco: {
              paterno: null,
              materno: null
            },
            comportamento: ['territorialista'],
            habilidade: ['Liderança de grupo', 'Comunicação gestual complexa']
          }
        },
        {
          id: 'G2',
          nome: 'Mbeli',
          sexo: 'Fêmea',
          idade: 18,
          caracteristicas: {
            marcaDistintiva: 'Padrão de nariz único',
            parentesco: {
              paterno: 'G1',
              materno: null
            },
            comportamento: ['docil'],
            habilidade: ['Cuidado parental avançado', 'Forrageamento eficiente']
          }
        },
        {
          id: 'G3',
          nome: 'Ndume',
          sexo: 'Macho',
          idade: 8,
          caracteristicas: {
            marcaDistintiva: 'Costelas faciais pronunciadas',
            parentesco: {
              paterno: 'G1',
              materno: 'G2'
            },
            comportamento: ['brincalhão'],
            habilidade: ['Proteção de filhotes', 'Escalada vertical']
          }
        }
      ]
    },
    {
      id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
      nome: 'Ornitorrincos',
      nomeCientifico: 'Ornithorhynchus anatinus',
      popularidade: 7,
      localizacao: 'RIPARIO',
      dieta: 'Carnívoro',
      habitat: 'Riachos de água doce',
      statusConservacao: 'Quase ameaçado',
      caracteristicas: {
        Alimentação: 'Carnívoro',
        pesoMedio: "1500g", // 1.5 kg convertido
        expectativaVida: 17,
        periodoGestacao: 21, // Dias de desenvolvimento + incubação
        velocidadeMaxima: 8 // km/h na água
      },
      residentes: [
        {
          id: 'O1',
          nome: 'Perry',
          sexo: 'Macho',
          idade: 4,
          caracteristicas: {
            marcaDistintiva: 'Sensores eletrorreceptores no bico',
            parentesco: {
              paterno: null,
              materno: null
            },
            comportamento: ['curioso'],
            habilidade: ['Eletrolocalização subaquática', 'Natação rápida']
          }
        },
        {
          id: 'O2',
          nome: 'Platty',
          sexo: 'Fêmea',
          idade: 3,
          caracteristicas: {
            marcaDistintiva: 'Túnel de nidificação de 6m',
            parentesco: {
              paterno: null,
              materno: 'O3'
            },
            comportamento: ['docil'],
            habilidade: ['Construção de tocas complexas', 'Incubação de ovos']
          }
        },
        {
          id: 'O3',
          nome: 'Electro',
          sexo: 'Macho',
          idade: 2,
          caracteristicas: {
            marcaDistintiva: 'Padrão único de descarga elétrica',
            parentesco: {
              paterno: 'O1',
              materno: 'O2'
            },
            comportamento: ['brincalhão'],
            habilidade: ['Detecção de campos elétricos', 'Camuflagem fluvial']
          }
        }
      ]
    },
    {
      id: 'a3d60f91-4bda-4de5-ae87-3d1b960fdc0a',
      nome: 'Dragões de Komodo',
      nomeCientifico: 'Varanus komodoensis',
      popularidade: 8,
      localizacao: 'SAVANA',
      dieta: 'Carnívoro',
      habitat: 'Floresta tropical seca',
      statusConservacao: 'Vulnerável',
      caracteristicas: {
        Alimentação: 'Carnívoro',
        pesoMedio: "70000g", // 70 kg convertido
        expectativaVida: 30,
        periodoGestacao: 240, // 8 meses em dias
        velocidadeMaxima: 20 // km/h
      },
      residentes: [
        {
          id: 'D1',
          nome: 'Varan',
          sexo: 'Macho',
          idade: 12,
          caracteristicas: {
            marcaDistintiva: '2.6m de comprimento com 58 presas registradas',
            parentesco: {
              paterno: null,
              materno: null
            },
            comportamento: ['territorialista'],
            habilidade: ['Caça em emboscada', 'Marcação territorial']
          }
        },
        {
          id: 'D2',
          nome: 'Komodo',
          sexo: 'Fêmea',
          idade: 8,
          caracteristicas: {
            marcaDistintiva: 'Glândulas de veneno hipertrofiadas',
            parentesco: {
              paterno: 'D1',
              materno: null
            },
            comportamento: ['imprevisivel'],
            habilidade: ['Produção de veneno', 'Estratégia de caça cooperativa']
          }
        },
        {
          id: 'D3',
          nome: 'Scales',
          sexo: 'Macho',
          idade: 5,
          caracteristicas: {
            marcaDistintiva: 'Marca de queimadura na cauda',
            parentesco: {
              paterno: 'D1',
              materno: 'D2'
            },
            comportamento: ['brincalhão'],
            habilidade: ['Perseguição rápida', 'Camuflagem no solo']
          }
        }
      ]
    },
    {
      id: 'b2c2543b-5662-46a7-badc-93d960fdc0a8',
      nome: 'Pandas Vermelhos',
      nomeCientifico: 'Ailurus fulgens',
      popularidade: 8,
      localizacao: 'MONTANHA',
      dieta: 'Onívoro',
      habitat: 'Floresta temperada',
      statusConservacao: 'Em perigo',
      caracteristicas: {
        Alimentação: 'Onívoro',
        pesoMedio: "5000g", // 5 kg convertido
        expectativaVida: 12,
        periodoGestacao: 130, // Período real em dias
        velocidadeMaxima: 38 // km/h
      },
      residentes: [
        {
          id: 'PV1',
          nome: 'Rusty',
          sexo: 'Macho',
          idade: 6,
          caracteristicas: {
            marcaDistintiva: 'Mancha ocular assimétrica',
            parentesco: {
              paterno: null,
              materno: null
            },
            comportamento: ['territorialista'],
            habilidade: ['Equilíbrio em galhos finos', 'Forrageamento noturno']
          }
        },
        {
          id: 'PV2',
          nome: 'Amber',
          sexo: 'Fêmea',
          idade: 4,
          caracteristicas: {
            marcaDistintiva: 'Cauda com anéis incompletos',
            parentesco: {
              paterno: null,
              materno: 'PV3'
            },
            comportamento: ['docil'],
            habilidade: ['Cuidado parental avançado', 'Seleção de alimentos']
          }
        },
        {
          id: 'PV3',
          nome: 'Ember',
          sexo: 'Macho',
          idade: 2,
          caracteristicas: {
            marcaDistintiva: 'Patas dianteiras ruivas',
            parentesco: {
              paterno: null,
              materno: 'PV2'
            },
            comportamento: ['brincalhão'],
            habilidade: ['Vocalizações complexas', 'Escalada vertical']
          }
        }
      ]
    },
    {
      id: 'd4b40a13-9d4d-4f09-822d-ec25e819a5ad',
      nome: 'Peixe-Boi Marinho',
      nomeCientifico: 'Trichechus manatus',
      popularidade: 9,
      localizacao: 'AQUARIO',
      dieta: 'Herbívoro',
      habitat: 'Águas costeiras e estuários',
      statusConservacao: 'Vulnerável',
      caracteristicas: {
        Alimentação: 'Herbívoro',
        pesoMedio: "500000g", // 500 kg
        expectativaVida: 60,
        periodoGestacao: 365, // 12 meses
        velocidadeMaxima: 8 // km/h
      },
      residentes: [
        {
          id: 'PB1',
          nome: 'Mana',
          sexo: 'Fêmea',
          idade: 25,
          caracteristicas: {
            marcaDistintiva: 'Cicatriz de hélice no dorso',
            parentesco: {
              paterno: null,
              materno: null
            },
            comportamento: ['docil'],
            habilidade: ['Navegação costeira', 'Comunicação por assobios']
          }
        },
        {
          id: 'PB2',
          nome: 'Tuchi',
          sexo: 'Macho',
          idade: 15,
          caracteristicas: {
            marcaDistintiva: 'Padrão único de algas na cauda',
            parentesco: {
              paterno: null,
              materno: 'PB1'
            },
            comportamento: ['sociável'],
            habilidade: ['Mergulho profundo (10m)', 'Regulação térmica']
          }
        },
        {
          id: 'PB3',
          nome: 'Lua',
          sexo: 'Fêmea',
          idade: 3,
          caracteristicas: {
            marcaDistintiva: 'Mancha branca no peitoral',
            parentesco: {
              paterno: 'PB2',
              materno: 'PB1'
            },
            comportamento: ['curioso'],
            habilidade: ['Acrobacias aquáticas', 'Interação com humanos']
          }
        }
      ]
    },
    {
      id: '78460a91-f4da-4dea-a469-86fd2b8ccc84',
      nome: 'Iguana Verde',
      nomeCientifico: 'Iguana iguana',
      popularidade: 6,
      localizacao: 'TROPICAL',
      dieta: 'Herbívoro',
      habitat: 'Floresta úmida',
      statusConservacao: 'Quase ameaçado',
      caracteristicas: {
        Alimentação: 'Herbívoro',
        pesoMedio: "5000g", // 5 kg
        expectativaVida: 15,
        periodoGestacao: 65, // Dias até postura dos ovos
        velocidadeMaxima: 35 // km/h
      },
      residentes: [
        {
          id: 'IG1',
          nome: 'Verde',
          sexo: 'Macho',
          idade: 8,
          caracteristicas: {
            marcaDistintiva: 'Papo (dewlap) alaranjado',
            parentesco: {
              paterno: null,
              materno: null
            },
            comportamento: ['territorialista'],
            habilidade: ['Regulação térmica', 'Exibição territorial']
          }
        },
        {
          id: 'IG2',
          nome: 'Esmeralda',
          sexo: 'Fêmea',
          idade: 5,
          caracteristicas: {
            marcaDistintiva: 'Crista dorsal desfiada',
            parentesco: {
              paterno: 'IG1',
              materno: null
            },
            comportamento: ['docil'],
            habilidade: ['Escalada vertical', 'Banho de sol eficiente']
          }
        },
        {
          id: 'IG3',
          nome: 'Jade',
          sexo: 'Macho',
          idade: 2,
          caracteristicas: {
            marcaDistintiva: 'Olho direito parcialmente branco',
            parentesco: {
              paterno: 'IG1',
              materno: 'IG2'
            },
            comportamento: ['curioso'],
            habilidade: ['Mimetismo foliar', 'Fuga rápida']
          }
        }
      ]
    },
    {
      id: 'h8fa2543b-5662-46a7-badc-93d960fdc0a9',
      nome: 'Arara-Azul-Grande',
      nomeCientifico: 'Anodorhynchus hyacinthinus',
      popularidade: 9,
      localizacao: 'TROPICAL',
      dieta: 'Herbívoro',
      habitat: 'Florestas de palmeiras',
      statusConservacao: 'Vulnerável',
      caracteristicas: {
        Alimentação: 'Herbívoro',
        pesoMedio: "1500g", // 1.5 kg
        expectativaVida: 50,
        periodoGestacao: 28, // Dias de incubação dos ovos
        velocidadeMaxima: 56 // km/h em voo
      },
      residentes: [
        {
          id: 'HM1',
          nome: 'Azul',
          sexo: 'Macho',
          idade: 25,
          caracteristicas: {
            marcaDistintiva: 'Pena quebrada na asa direita',
            parentesco: {
              paterno: null,
              materno: null
            },
            comportamento: ['territorialista'],
            habilidade: ['Quebra de cocos com bico', 'Voo de longa distância']
          }
        },
        {
          id: 'HM2',
          nome: 'Índigo',
          sexo: 'Fêmea',
          idade: 20,
          caracteristicas: {
            marcaDistintiva: 'Anel ocular amarelo intenso',
            parentesco: {
              paterno: 'HM1',
              materno: null
            },
            comportamento: ['sociável'],
            habilidade: ['Imitação de sons', 'Cuidado com ninho']
          }
        },
        {
          id: 'HM3',
          nome: 'Cobalto',
          sexo: 'Macho',
          idade: 3,
          caracteristicas: {
            marcaDistintiva: 'Mancha negra no bico',
            parentesco: {
              paterno: 'HM1',
              materno: 'HM2'
            },
            comportamento: ['curioso'],
            habilidade: ['Acrobacias aéreas', 'Interação com grupo']
          }
        }
      ]
    },
    {
      id: 'i9be95b3-47e4-4c5b-b687-1fabf2afa276',
      nome: 'Vaquita',
      nomeCientifico: 'Phocoena sinus',
      popularidade: 10,
      localizacao: 'AQUARIO',
      dieta: 'Carnívoro',
      habitat: 'Golfo da Califórnia',
      statusConservacao: 'Criticamente em perigo',
      caracteristicas: {
        Alimentação: 'Carnívoro',
        pesoMedio: "48000g", // 48 kg
        expectativaVida: 20,
        periodoGestacao: 300, // ~10 meses
        velocidadeMaxima: 22 // km/h
      },
      residentes: [
        {
          id: 'VQ1',
          nome: 'Esperanza',
          sexo: 'Fêmea',
          idade: 3,
          caracteristicas: {
            marcaDistintiva: 'Anéis oculares distintos',
            parentesco: {
              paterno: null,
              materno: null
            },
            comportamento: ['curioso'],
            habilidade: ['Ecolocalização precisa', 'Nado rápido em águas rasas']
          }
        },
        {
          id: 'VQ2',
          nome: 'Destino',
          sexo: 'Macho',
          idade: 5,
          caracteristicas: {
            marcaDistintiva: 'Nadadeira dorsal recortada',
            parentesco: {
              paterno: null,
              materno: null
            },
            comportamento: ['solitario'],
            habilidade: ['Fuga de redes de pesca', 'Camuflagem em águas turvas']
          }
        },
        {
          id: 'VQ3',
          nome: 'Último',
          sexo: 'Macho',
          idade: 2,
          caracteristicas: {
            marcaDistintiva: 'Mancha branca no flanco',
            parentesco: {
              paterno: 'VQ2',
              materno: 'VQ1'
            },
            comportamento: ['medroso'],
            habilidade: ['Nado sincronizado', 'Detecção de predadores']
          }
        }
      ]
    },
    {
      id: 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d',
      nome: 'Urso Pardo',
      nomeCientifico: 'Ursus arctos',
      popularidade: 8,
      localizacao: 'MONTANHA',
      dieta: 'Onívoro',
      habitat: 'Floresta Temperada',
      statusConservacao: 'Pouco preocupante',
      caracteristicas: {
        Alimentação: 'Onívoro',
        pesoMedio: "300000g", // 300 kg
        expectativaVida: 25,
        periodoGestacao: 220, // Dias (7 meses)
        velocidadeMaxima: 56 // km/h
      },
      residentes: [
        {
          id: 'UR1',
          nome: 'Thor',
          sexo: 'Macho',
          idade: 15,
          caracteristicas: {
            marcaDistintiva: 'Cicatriz no ombro direito',
            parentesco: {
              paterno: null,
              materno: null
            },
            comportamento: ['territorialista'],
            habilidade: ['Caça de salmão', 'Marcação territorial']
          }
        },
        {
          id: 'UR2',
          nome: 'Freya',
          sexo: 'Fêmea',
          idade: 12,
          caracteristicas: {
            marcaDistintiva: 'Mancha branca no peito',
            parentesco: {
              paterno: null,
              materno: null
            },
            comportamento: ['protetora'],
            habilidade: ['Cuidado com filhotes', 'Forrageamento noturno']
          }
        },
        {
          id: 'UR3',
          nome: 'Loki',
          sexo: 'Macho',
          idade: 3,
          caracteristicas: {
            marcaDistintiva: 'Orelha direita dobrada',
            parentesco: {
              paterno: 'UR1',
              materno: 'UR2'
            },
            comportamento: ['brincalhão'],
            habilidade: ['Escalada em árvores', 'Exploração de cavernas']
          }
        }
      ]
    }
  ],

  funcionarios: [
    {
      id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
      nomeCompleto: 'Dra. Maria Silva',
      cargo: 'Veterinária Chefe',
      especializacao: 'Felinos Grandes',
      contato: {
        email: 'maria.silva@meuzoo.com',
        telefone: '+55 11 98765-4321'
      },
      certificacoes: ['Medicina de Animais Selvagens', 'Cirurgia de Emergência'],
      equipamentos: ['Kit cirúrgico portátil', 'Ultrassom'],
      animaisResponsaveis: ['0938aa23-f153-4937-9f88-4858b24d6bce']
    },
    {
      id: 'd6c94dc4-b562-45f8-9e73-cba9cfd048b6',
      nomeCompleto: 'Dr. Carlos Mendes',
      cargo: 'Biólogo Chefe',
      especializacao: 'Primatologia',
      contato: {
        email: 'carlos.mendes@meuzoo.com',
        telefone: '+55 11 97654-3210'
      },
      certificacoes: ['Comportamento Animal Avançado', 'Ecologia de Primatas'],
      equipamentos: ['Coleiras GPS', 'Câmeras de monitoramento'],
      animaisResponsaveis: ['533bebf3-6bbe-41d8-9cdf-46f7d13b62ae']
    },
    {
      id: 'e7d85ed5-c673-56g9-8f84-dcb0dge159c7',
      nomeCompleto: 'Ana Lúcia Oliveira',
      cargo: 'Tratadora Sênior',
      especializacao: 'Ursídeos',
      contato: {
        email: 'ana.oliveira@meuzoo.com',
        telefone: '+55 11 96543-2109'
      },
      certificacoes: ['Manejo de Grandes Carnívoros'],
      equipamentos: ['Alimentador especial', 'Proteção anti-ursídeos'],
      animaisResponsaveis: ['baa6e93a-f295-44e7-8f70-2bcdc6f6948d']
    },
    {
      id: 'f8e96fe6-d784-67h0-9g95-edc1ehf260d8',
      nomeCompleto: 'Ricardo Almeida',
      cargo: 'Especialista em Aves',
      especializacao: 'Ornitologia',
      contato: {
        email: 'ricardo.almeida@meuzoo.com',
        telefone: '+55 11 95432-1098'
      },
      certificacoes: ['Reabilitação de Aves de Rapina'],
      equipamentos: ['Anilhamento científico', 'Equipamento de voo controlado'],
      animaisResponsaveis: ['01422318-ca2d-46b8-b66c-3e9e188244ed']
    },
    {
      id: '09f7a0g7-e895-78i1-0h06-fed2fig371e9',
      nomeCompleto: 'Fernanda Costa',
      cargo: 'Veterinária de Répteis',
      especializacao: 'Herpetologia',
      contato: {
        email: 'fernanda.costa@meuzoo.com',
        telefone: '+55 11 94321-0987'
      },
      certificacoes: ['Manejo de Répteis Venenosos'],
      equipamentos: ['Soro antiofídico', 'Termorreguladores'],
      animaisResponsaveis: ['a3d60f91-4bda-4de5-ae87-3d1b960fdc0a']
    },
    {
      id: 'j1k2l3m4-n5o6-p7q8-r8s9-t0u1v2w3x4y5',
      nomeCompleto: 'Juliana Pereira',
      cargo: 'Nutricionista Animal',
      especializacao: 'Dietas Especializadas',
      contato: {
        email: 'juliana.pereira@meuzoo.com',
        telefone: '+55 11 93210-9876'
      },
      certificacoes: ['Nutrição de Grandes Herbívoros'],
      equipamentos: ['Balança de precisão', 'Analisador de alimentos'],
      animaisResponsaveis: [
        'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
        '89be95b3-47e4-4c5b-b687-1fabf2afa274'
      ]
    },
    {
      id: 'z1y2x3w4-v5u6-t7s8-r9q0-p1o2n3m4l5k6',
      nomeCompleto: 'Pedro Henrique Santos',
      cargo: 'Especialista em Enriquecimento Ambiental',
      especializacao: 'Bem-Estar Animal',
      contato: {
        email: 'pedro.santos@meuzoo.com',
        telefone: '+55 11 92109-8765'
      },
      certificacoes: ['Design de Habitats Naturais'],
      equipamentos: ['Sensores de comportamento', 'Câmeras térmicas'],
      animaisResponsaveis: [
        'ef3778eb-2844-4c7c-b66c-f432073e1c6b',
        '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
        'b2c2543b-5662-46a7-badc-93d960fdc0a8'
      ]
    },
    {
      id: 'a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6',
      nomeCompleto: 'Camila Rodrigues',
      cargo: 'Tratadora de Aquáticos',
      especializacao: 'Fauna Aquática',
      contato: {
        email: 'camila.rodrigues@meuzoo.com',
        telefone: '+55 11 91098-7654'
      },
      certificacoes: ['Manejo de Mamíferos Aquáticos'],
      equipamentos: ['Trajes de mergulho', 'Sistemas de filtragem'],
      animaisResponsaveis: ['d4b40a13-9d4d-4f09-822d-ec25e819a5ad']
    },
    {
      id: 'q1w2e3r4-t5y6-u7i8-o9p0-a1s2d3f4g5h6',
      nomeCompleto: 'Lucas Oliveira',
      cargo: 'Veterinário de Animais Exóticos',
      especializacao: 'Animais Exóticos',
      contato: {
        email: 'lucas.oliveira@meuzoo.com',
        telefone: '+55 11 90123-4567'
      },
      certificacoes: ['Medicina de Animais Exóticos'],
      equipamentos: ['Microchip de identificação', 'Kit de emergência exótico'],
      animaisResponsaveis: ['c1f50212-35a6-4ecd-8223-f835538526c2']
    },
    {
      id: 'j7k8l9m0-n1o2-p3q4-r5s6-t7u8v9w0x1y2',
      nomeCompleto: 'Amanda Costa',
      cargo: 'Especialista em Comportamento',
      especializacao: 'Etologia',
      contato: {
        email: 'amanda.costa@meuzoo.com',
        telefone: '+55 11 89012-3456'
      },
      certificacoes: ['Análise Comportamental Avançada'],
      equipamentos: ['Gravadores de áudio', 'Software de análise'],
      animaisResponsaveis: [
        '0938aa23-f153-4937-9f88-4858b24d6bce',
        '01422318-ca2d-46b8-b66c-3e9e188244ed'
      ]
    },
    {
      id: 'z3x4c5v6-b7n8-m9l0-k1j2-h3g4f5d6s7a8',
      nomeCompleto: 'Roberto Alves',
      cargo: 'Coordenador de Conservação',
      especializacao: 'Conservação Ambiental',
      contato: {
        email: 'roberto.alves@meuzoo.com',
        telefone: '+55 11 88091-2345'
      },
      certificacoes: ['Gestão de Programas de Conservação'],
      equipamentos: ['Sistema de monitoramento remoto', 'GPS ambiental'],
      animaisResponsaveis: [
        '89be95b3-47e4-4c5b-b687-1fabf2afa274',
        'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'
      ]
    },
    {
      id: 'p9o8i7u6-y5t4-r3e2-w1q0-a9s8d7f6g5h4',
      nomeCompleto: 'Fernando Gomes',
      cargo: 'Tratador de Répteis',
      especializacao: 'Herpetocultura',
      contato: {
        email: 'fernando.gomes@meuzoo.com',
        telefone: '+55 11 87012-3456'
      },
      certificacoes: ['Manejo de Crocodilianos'],
      equipamentos: ['Ganchos de contenção', 'Termômetros especializados'],
      animaisResponsaveis: ['78460a91-f4da-4dea-a469-86fd2b8ccc84']
    },
    {
      id: 'l3k4j5h6-g7f8-d9s0-a1q2-w3e4r5t6y7u8',
      nomeCompleto: 'Isabela Santos',
      cargo: 'Veterinária de Aves',
      especializacao: 'Ornitopatologia',
      contato: {
        email: 'isabela.santos@meuzoo.com',
        telefone: '+55 11 86012-3456'
      },
      certificacoes: ['Cirurgia em Aves de Grande Porte'],
      equipamentos: ['Mochila de resgate aviário', 'Incubadoras portáteis'],
      animaisResponsaveis: ['h8fa2543b-5662-46a7-badc-93d960fdc0a9']
    },
    {
      id: 'm2n3b4v5-c6x7-z8l9-p0o1-i9u8y7t6r5e4',
      nomeCompleto: 'Rafael Lima',
      cargo: 'Especialista em Primatas',
      especializacao: 'Primatologia Aplicada',
      contato: {
        email: 'rafael.lima@meuzoo.com',
        telefone: '+55 11 85012-3456'
      },
      certificacoes: ['Enriquecimento Cognitivo para Primatas'],
      equipamentos: ['Jogos de inteligência', 'Sistemas de alimentação interativa'],
      animaisResponsaveis: ['01422318-ca2d-46b8-b66c-3e9e188244ed']
    },
    {
      id: 'q1w2e3r4t5-y6u7i8o9-p0a1s2d3f4g5h6',
      nomeCompleto: 'Beatriz Oliveira',
      cargo: 'Tratadora de Filhotes',
      especializacao: 'Neonatologia Animal',
      contato: {
        email: 'beatriz.oliveira@meuzoo.com',
        telefone: '+55 11 84012-3456'
      },
      certificacoes: ['Cuidados Neonatais Intensivos'],
      equipamentos: ['Incubadoras neonatais', 'Kits de alimentação especial'],
      animaisResponsaveis: [
        '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae',
        'b2c2543b-5662-46a7-badc-93d960fdc0a8'
      ]
    },
    {
      id: 'k3j4h5g6-f7d8-s9a0-q1w2-e3r4t5y6u7i8',
      nomeCompleto: 'Marcos Vinícius',
      cargo: 'Especialista em Grandes Felinos',
      especializacao: 'Pantherinae',
      contato: {
        email: 'marcos.vinicius@meuzoo.com',
        telefone: '+55 11 83012-3456'
      },
      certificacoes: ['Manejo de Grandes Predadores'],
      equipamentos: ['Drones de monitoramento', 'Sistemas de segurança'],
      animaisResponsaveis: [
        '0938aa23-f153-4937-9f88-4858b24d6bce',
        '89be95b3-47e4-4c5b-b687-1fabf2afa274'
      ]
    },
    {
      id: 'o9i8u7y6-t5r4e3w2-q1w2e3r4t5y6u7i8',
      nomeCompleto: 'Carolina Mendonça',
      cargo: 'Bióloga Marinha',
      especializacao: 'Ecossistemas Aquáticos',
      contato: {
        email: 'carolina.mendonca@meuzoo.com',
        telefone: '+55 11 82012-3456'
      },
      certificacoes: ['Preservação de Ecossistemas Aquáticos'],
      equipamentos: ['Equipamento de mergulho profissional', 'Sonda marinha'],
      animaisResponsaveis: ['i9be95b3-47e4-4c5b-b687-1fabf2afa276']
    },
    {
      id: 'v1c2x3z4-b5n6m7l8-k9j0h1g2f3d4s5a6',
      nomeCompleto: 'Thiago Rocha',
      cargo: 'Coordenador de Alimentação',
      especializacao: 'Nutrição Animal',
      contato: {
        email: 'thiago.rocha@meuzoo.com',
        telefone: '+55 11 81012-3456'
      },
      certificacoes: ['Dietética Animal Avançada'],
      equipamentos: ['Software de planejamento nutricional', 'Estoque controlado'],
      animaisResponsaveis: [
        'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5',
        'baa6e93a-f295-44e7-8f70-2bcdc6f6948d'
      ]
    },
    {
      id: 'p0o9i8u7-y6t5r4e3w2q1-w2e3r4t5y6u7',
      nomeCompleto: 'Patrícia Nascimento',
      cargo: 'Veterinária de Animais Selvagens',
      especializacao: 'Fauna Silvestre',
      contato: {
        email: 'patricia.nascimento@meuzoo.com',
        telefone: '+55 11 80012-3456'
      },
      certificacoes: ['Emergências em Vida Selvagem'],
      equipamentos: ['Kit de resgate móvel', 'Equipamento de imobilização'],
      animaisResponsaveis: [
        'ef3778eb-2844-4c7c-b66c-f432073e1c6b',
        'a3d60f91-4bda-4de5-ae87-3d1b960fdc0a'
      ]
    },
    {
      id: 's8d7f6g5-h4j3k2l1-q0w9e8r7t6y5u4i3',
      nomeCompleto: 'Gabriel Torres',
      cargo: 'Especialista em Educação Ambiental',
      especializacao: 'Educação Zoológica',
      contato: {
        email: 'gabriel.torres@meuzoo.com',
        telefone: '+55 11 79012-3456'
      },
      certificacoes: ['Comunicação Científica'],
      equipamentos: ['Materiais educativos interativos', 'Equipamento audiovisual'],
      animaisResponsaveis: ['c1f50212-35a6-4ecd-8223-f835538526c2']
    },
    {
      id: 'm4n5b6v7-c8x9z0l1-p2o3i4u5y6t7r8e9',
      nomeCompleto: 'Luana Pereira',
      cargo: 'Tratadora de Pequenos Mamíferos',
      especializacao: 'Microfauna',
      contato: {
        email: 'luana.pereira@meuzoo.com',
        telefone: '+55 11 78012-3456'
      },
      certificacoes: ['Manejo de Espécies Sensíveis'],
      equipamentos: ['Alojamentos especiais', 'Sistemas de controle climático'],
      animaisResponsaveis: ['89be95b3-47e4-4c5b-b687-1fabf2afa274']
    }
  ],

  infraestrutura: {
    habitats: [
      {
        id: 'h1',
        nome: 'Savana Africana',
        tipo: 'TERRA',
        area: 15000, // m²
        temperatura: 28,
        umidade: 35,
        vegetacao: ['Acácias', 'Baobás', 'Gramíneas altas'],
        recursos: ['Sistema de chuva artificial', 'Termômetros monitorados', 'Abrigos de sombra'],
        especies: [
          '0938aa23-f153-4937-9f88-4858b24d6bce', // Leões Africanos
          '89be95b3-47e4-4c5b-b687-1fabf2afa274'   // Tigres de Bengala
        ]
      },
      {
        id: 'h2',
        nome: 'Polo Ártico',
        tipo: 'GELO',
        area: 8000,
        temperatura: -5,
        umidade: 70,
        vegetacao: ['Líquens artificiais', 'Neve sintética'],
        recursos: ['Sistema de refrigeração industrial', 'Piscina de água salgada gelada'],
        especies: [
          'ef3778eb-2844-4c7c-b66c-f432073e1c6b'  // Pinguins Imperadores
        ]
      },
      {
        id: 'h3',
        nome: 'Floresta Tropical Úmida',
        tipo: 'FLORESTA',
        area: 20000,
        temperatura: 32,
        umidade: 85,
        vegetacao: ['Palmeiras', 'Lianas', 'Samambaias gigantes'],
        recursos: ['Sistema de nebulização', 'Ponte de dossel'],
        especies: [
          'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5', // Elefantes Asiáticos
          '01422318-ca2d-46b8-b66c-3e9e188244ed'   // Gorilas das Montanhas
        ]
      },
      {
        id: 'h4',
        nome: 'Pantanal Artificial',
        tipo: 'ÁGUA DOCE',
        area: 12000,
        temperatura: 26,
        umidade: 75,
        vegetacao: ['Aguapés', 'Buritis', 'Ervas aquáticas'],
        recursos: ['Sistema de controle de marés', 'Ilhas flutuantes'],
        especies: [
          'd4b40a13-9d4d-4f09-822d-ec25e819a5ad', // Peixe-Boi Marinho
          '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'   // Lêmures de Cauda Anelada
        ]
      },
      {
        id: 'h5',
        nome: 'Deserto de Komodo',
        tipo: 'ARIDO',
        area: 10000,
        temperatura: 40,
        umidade: 20,
        vegetacao: ['Cactos colunares', 'Suculentas'],
        recursos: ['Sistema de aquecimento radiante', 'Túneis subterrâneos'],
        especies: [
          'a3d60f91-4bda-4de5-ae87-3d1b960fdc0a'  // Dragões de Komodo
        ]
      },
      {
        id: 'h6',
        nome: 'Aquário Oceânico',
        tipo: 'ÁGUA SALGADA',
        area: 30000,
        temperatura: 18,
        umidade: 90,
        vegetacao: ['Algas marinhas sintéticas', 'Recifes de coral artificial'],
        recursos: ['Túnel subaquático', 'Sistema de ondas'],
        especies: [
          'i9be95b3-47e4-4c5b-b687-1fabf2afa276'  // Vaquita
        ]
      },
      {
        id: 'h7',
        nome: 'Montanha dos Ursos',
        tipo: 'MONTANHA',
        area: 15000,
        temperatura: 15,
        umidade: 60,
        vegetacao: ['Pinheiros', 'Arbustos silvestres'],
        recursos: ['Cavernas artificiais', 'Rio para pesca'],
        especies: [
          'baa6e93a-f295-44e7-8f70-2bcdc6f6948d'  // Urso Pardo
        ]
      },
      {
        id: 'h8',
        nome: 'Floresta Temperada',
        tipo: 'MISTO',
        area: 18000,
        temperatura: 20,
        umidade: 65,
        vegetacao: ['Bambus', 'Carvalhos', 'Arbustos frutíferos'],
        recursos: ['Sistema de controle climático', 'Plataformas elevadas'],
        especies: [
          'b2c2543b-5662-46a7-badc-93d960fdc0a8'  // Pandas Vermelhos
        ]
      },
      {
        id: 'h9',
        nome: 'Viveiro Tropical',
        tipo: 'VIVEIRO',
        area: 5000,
        temperatura: 28,
        umidade: 80,
        vegetacao: ['Palmeiras', 'Orquídeas', 'Bromélias'],
        recursos: ['Sistema de chuva controlada', 'Túneis de observação'],
        especies: [
          'h8fa2543b-5662-46a7-badc-93d960fdc0a9', // Arara-Azul-Grande
          '78460a91-f4da-4dea-a469-86fd2b8ccc84'    // Iguana Verde
        ]
      },
      {
        id: 'h10',
        nome: 'Riacho Australiano',
        tipo: 'RIPÁRIO',
        area: 7000,
        temperatura: 24,
        umidade: 70,
        vegetacao: ['Eucaliptos', 'Samambaias aquáticas'],
        recursos: ['Sistema de correnteza artificial', 'Túneis subaquáticos'],
        especies: [
          'c1f50212-35a6-4ecd-8223-f835538526c2'  // Ornitorrincos
        ]
      }
    ],
    instalacoes: [
      {
        id: 'i1',
        nome: 'Hospital Veterinário Integrado',
        tipo: 'SAÚDE',
        equipamentos: [
          'Tomógrafo 3D',
          'Sala de cirurgia robótica',
          'Unidade de cuidados intensivos aquáticos'
        ],
        capacidade: 20,
        habitatsRelacionados: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10']
      },
      {
        id: 'i2',
        nome: 'Centro de Nutrição Especializada',
        tipo: 'ALIMENTAÇÃO',
        equipamentos: [
          'Misturador de carne para carnívoros',
          'Secador de bambu para herbívoros',
          'Preparador de dieta líquida'
        ],
        capacidade: 15,
        habitatsRelacionados: ['h1', 'h3', 'h4', 'h7', 'h8']
      },
      {
        id: 'i3',
        nome: 'Estação de Pesquisa Comportamental',
        tipo: 'PESQUISA',
        equipamentos: [
          'Câmeras termográficas',
          'Sensores de movimento laser',
          'Analisador de vocalizações'
        ],
        capacidade: 10,
        habitatsRelacionados: ['h2', 'h5', 'h6', 'h9', 'h10']
      },
      {
        id: 'i4',
        nome: 'Centro de Reprodução Assistida',
        tipo: 'REPRODUÇÃO',
        equipamentos: [
          'Incubadoras automatizadas',
          'Sistema de monitoramento fetal',
          'Banco genético criogênico'
        ],
        capacidade: 5,
        habitatsRelacionados: ['h4', 'h6', 'h9', 'h10']
      },
      {
        id: 'i5',
        nome: 'Complexo de Visitantes',
        tipo: 'INTERAÇÃO',
        equipamentos: [
          'Túneis de observação subaquáticos',
          'Plataformas elevadas panorâmicas',
          'Estúdio de realidade virtual'
        ],
        capacidade: 200,
        habitatsRelacionados: ['h1', 'h3', 'h4', 'h6', 'h8', 'h9']
      }
    ]
  },

  programacao: {
    horarioFuncionamento: {
      padrao: {
        diasUteis: { 
          diurno: { abertura: 9, fechamento: 18 },
          noturno: { // Novo horário especial
            ativo: true,
            dias: ['quarta'], // Toda quarta-feira
            horario: { abertura: 18, fechamento: 22 }
          }
        },
        fimDeSemana: { 
          diurno: { abertura: 8, fechamento: 20 },
          noturno: { ativo: false }
        }
      },
      especial: {
        noturno: { // Horário fixo para eventos noturnos
          abertura: 19,
          fechamento: 23,
          dias: ['quarta'],
          requisitos: ['Reserva prévia', 'Guia especializado']
        }
      },
      feriados: {
        natal: { abertura: 10, fechamento: 16 },
        anoNovo: 'Fechado'
      }
    },
    eventos: [
      {
        nome: 'Noite dos Predadores',
        descricao: 'Visita noturna guiada com alimentação dos animais',
        datas: ['2024-07-15', '2024-08-19'],
        horarioRelacionado: 'noturno', // Link com horário especial
        regras: [
          'Acesso apenas para maiores de 12 anos',
          'Grupos máximos de 10 pessoas',
          'Uso obrigatório de lanternas especiais'
        ]
      },
      {
        nome: 'Safari Noturno Semanal',
        descricao: 'Tour noturno todas as quartas-feiras',
        recorrencia: 'semanal',
        dias: ['quarta'],
        horario: { abertura: 18, fechamento: 22 },
        areas: ['h1', 'h7'] // IDs dos habitats da Savana e Montanha
      }
    ]
  },

  conservacao: {
      projetos: [
        {
          "id": "CP-090",
          "nome": "Projeto Corredor Ecológico da Onça-pintada",
          "especieId": "TJ-2024",
          "parceiros": [
            {
              "id": "P047",
              "nome": "Wildlife Conservation Society",
              "tipo": ["ONG Internacional"],
              "papel": "Mapeamento genético",
              "investimento": 420000
            },
            {
              "id": "P048",
              "nome": "Secretaria de Biodiversidade",
              "tipo": ["Governamental"],
              "papel": "Proteção de habitat",
              "investimento": 180000
            }
          ],
          "periodo": {
            "inicio": "2024-03-15",
            "termino": "2027-05-30",
            "faseAtual": 2
          },
          "recursos": {
            "financeiro": {
              "total": 800000,
              "utilizado": 310000,
              "alocacao": {
                "pesquisa": 35,
                "campo": 50,
                "educacao": 15
              }
            },
            "humanos": {
              "pesquisadores": 9,
              "tecnicos": 14,
              "voluntarios": 28
            }
          },
          "metricas": {
            "reabilitados": 18,
            "filhotesNascidos": 8,
            "areaReabilitada": 1500,
            "taxaSobrevivencia": 88.5
          },
          "metodologia": {
            "coletaDados": ["armadilhas fotográficas", "análise de DNA"],
            "tecnicas": ["corredores de vegetação", "controle de caça"],
            "monitoramento": "Sistema de câmeras inteligentes e drones"
          }
        },
        {
          "id": "CP-091",
          "nome": "Projeto Conservação de Peixes-boi Amazônicos",
          "especieId": "MA-2022",
          "parceiros": [
            {
              "id": "P049",
              "nome": "Fundação Amazônia Viva",
              "tipo": ["ONG Nacional"],
              "papel": "Resgate e reabilitação",
              "investimento": 150000
            },
            {
              "id": "P050",
              "nome": "Universidade Federal do Amazonas",
              "tipo": ["Acadêmico"],
              "papel": "Estudos comportamentais",
              "investimento": 75000
            }
          ],
          "periodo": {
            "inicio": "2022-08-01",
            "termino": "2025-11-20",
            "faseAtual": 3
          },
          "recursos": {
            "financeiro": {
              "total": 300000,
              "utilizado": 275000,
              "alocacao": {
                "pesquisa": 30,
                "campo": 60,
                "educacao": 10
              }
            },
            "humanos": {
              "pesquisadores": 6,
              "tecnicos": 10,
              "voluntarios": 45
            }
          },
          "metricas": {
            "reabilitados": 32,
            "filhotesNascidos": 12,
            "areaReabilitada": 800,
            "taxaSobrevivencia": 95.0
          },
          "metodologia": {
            "coletaDados": ["satélite", "entrevistas com comunidades"],
            "tecnicas": ["sinalização aquática", "educação comunitária"],
            "monitoramento": "Marcação por rádio-colares e relatórios mensais"
          }
        }
      ],
  },

  visitantes: {
    estatisticas: {
      mediaMensal: 15000,
      picoTemporal: {
        feriasJulho: 25000,
        baixaTemporada: 8000
      },
      satisfacao: 4.8
    },
    servicos: {
      guiasAudio: ['PT', 'EN', 'ES'],
      acessibilidade: ['Cadeiras de rodas', 'Mapas táteis']
    }
  },

  educacao: {
    programas: [
      {
        nome: 'ZooEduca',
        publicoAlvo: 'Escolas',
        temas: ['Conservação', 'Ecossistemas'],
        recursos: ['Kits educativos', 'Visitas virtuais']
      }
    ]
  },

  tecnologia: {
    sistemas: [
      {
        nome: 'Monitoramento Animal',
        recursos: ['Câmeras térmicas', 'Sensores de movimento'],
        cobertura: '95% dos habitats'
      }
    ]
  },

  financiamento: {
    orcamentoAnual: 2500000,
    fontes: {
      ingressos: 65,
      patrocinios: 25,
      doacoes: 10
    },
    alocacao: {
      cuidadosAnimais: 40,
      conservacao: 30,
      infraestrutura: 20,
      pesquisa: 10
    }
  },

  curiosidades: [
    {
      titulo: "Camuflagem Polvo",
      conteudo: "Polvos possuem células de pigmento (cromatóforos) que permitem mudar de cor e textura em menos de 1 segundo"
    },
    {
      titulo: "Dança das Abelhas",
      conteudo: "Abelhas realizam uma 'dança em zigue-zague' para indicar a localização exata de fontes de alimento às companheiras"
    },
    {
      titulo: "Memória dos Corvos",
      conteudo: "Corvos reconhecem rostos humanos e podem guardar rancor por anos de quem os ameaçou"
    },
    {
      titulo: "Sangue Verde",
      conteudo: "O dragão-de-komodo tem sangue verde devido a altos níveis de biliverdina, um pigmento tóxico que ajuda a combater infecções"
    },
    {
      titulo: "Preguiça Metabólica",
      conteudo: "Preguiças descem das árvores apenas uma vez por semana para defecar, economizando energia"
    },
    {
      titulo: "Fábrica de Veneno",
      conteudo: "O ornitorrinco macho possui esporas venenosas nas patas traseiras, uma das poucas características de mamíferos venenosos"
    },
    {
      titulo: "GPS das Tartarugas",
      conteudo: "Tartarugas-marinhas navegam milhares de quilômetros usando o campo magnético da Terra para retornar à praia onde nasceram"
    },
    {
      titulo: "Colaboração Inusitada",
      conteudo: "Morcegos-vampiros compartilham sangue regurgitado com membros da colônia que não encontraram alimento"
    }
  ],

  patrocinadores: [
    {
      nome: 'EcoEnergy',
      nivel: 'Ouro',
      beneficios: ['Logo em placas', 'Menção em eventos']
    }
  ],

  parametrosAmbientais: {
    qualidadeAr: 98,
    qualidadeAgua: 99,
    nivelRuido: 35
  }
};


export default zooData;
