# Meu-zoo
Projeto com objetivo de ver conceitos basicos de javascript: Criar funções com hofs

# Requisitos do Projeto "Zoo HOF Master"

### 1 - Implemente `mapearEspeciesPopulares` (MAP):
- Use .map() para criar array de objetos com:

```js
{ 
  especie: 'leões', 
  popularidade: 4, 
  status: popularidade > 3 ? 'Alta' : 'Baixa' 
}  
```

### 2 - Implemente `filtrarAnimaisPorSexo` (FILTER):
- Recebe sexo ('m'/'f')
- Retorna array com todas as espécies que possuem pelo menos 1 animal do sexo especificado
```js
filtrarAnimaisPorSexo('f') → ['leões', 'tigres', ...]  
```

### 3 - Implemente `calcularIdadeTotal` (REDUCE):
- Retorna soma total da idade de todos os animais do zoo
- Formatar como: "Idade total combinada: X anos"
```js
"Idade total combinada: 127 anos"  
```

### 4 - Implemente `buscarAnimalPorNome` (FIND):
- Recebe parte do nome
- Retorna primeiro animal encontrado (case insensitive)
```js
buscarAnimalPorNome('zen') → { nome: 'Zena', ... }  
```

### 5 - Implemente `verificarSupervisores` (SOME):
- Para um ID de funcionário, verifica se ele supervisiona alguém
- Use .some() na lista de funcionários
```js
verificarSupervisores('b0dc644a...') → true  
```

### 6 - Implemente `validarIdadeMinima` (EVERY):
- Recebe espécie e idade
- Retorna true se TODOS os animais da espécie tiverem ≥ idade mínima
```js
validarIdadeMinima('elefantes', 10) → false  
```

### 7 - Implemente `ordenarFuncionarios` (SORT):
- Ordene funcionários por:  
1. Quantidade de animais gerenciados (DESC)  
2. Sobrenome (ASC)  
```js
[{...}, {...}] // Ordenado  
```

### 8 - Implemente `mapearEstruturaComplexa` (MAP + REDUCE):
- Crie array de objetos com:  
```js
{
  especie: 'leões',
  residentes: [
    { nome: 'Zena', idade: 12 },
    ...
  ],
  idadeMedia: 12.5
}  
```

### 9 - Implemente `filtrarEspeciesCriticas` (FILTER + SOME):
- Retorna espécies onde pelo menos 50% dos residentes têm >10 anos
- Use .some() combinado com .filter()
```js
['tigres', 'elefantes']  
```

### 10 - Implemente `gerarRelatorioFinanceiro` (REDUCE + MAP):
- Calcule por região:  
```js
{
  NE: { 
    especies: 2, 
    custoManutencao: 15000 // (animais * 2500) 
  },
  ...
}  
```

### 11 - Implemente `buscarPorGeracao` (FIND + FILTER):
- Encontre primeiro animal nascido em década específica  
(idade ≥ 20 → anos 2000, idade ≥10 → 2010, etc)
```js
{ nome: 'Shu', idade: 19, decada: 2000 }  
```

### 12 - Implemente `verificarBalanceamento` (EVERY + REDUCE):
- Para uma espécie, verifique se há equilíbrio de gêneros  
(quantidade machos = quantidade fêmeas ±1)
```js
verificarBalanceamento('leões') → true  
```

### 13 - Implemente `ordenarResidentes` (SORT + MAP):
- Para uma espécie, retorne residentes ordenados por:  
1. Sexo (fêmeas primeiro)  
2. Idade (DESC)  
```js
[{ nome: 'Dee', sexo: 'f', idade:14 }, ...]  
```

# Requisitos Adicionais "Zoo HOF Master"

### 14 - Implemente `calcularDiversidadeGenero` (REDUCE + MAP):
- Para cada espécie, calcule a porcentagem de machos/fêmeas
- Retorne array de objetos:  
```js
{
  especie: 'leões',
  porcentagemMachos: 50,
  porcentagemFemeas: 50
}
```

### 15 - Implemente `gerarDietaEspecial` (FILTER + MAP):
- Identifique animais com mais de 10 anos
- Crie cardápio individualizado:  
```js
{
  nome: 'Shu',
  dieta: 'Alimento Senior',
  horario: '09:00'
}
```

### 16 - Implemente `verificarCompatibilidadeHabitat` (EVERY + SOME):
- Receba 2 espécies e verifique se podem dividir habitat:
1. Mesma região
2. Diferença de popularidade ≤ 1
3. Não ter predador/presa
```js
verificarCompatibilidade('leões', 'girafas') → false
```

### 17 - Implemente `calcularRotacaoFuncionarios` (REDUCE + SORT):
- Para cada região, liste funcionários ordenados por:
1. Menos animais gerenciados
2. Mais tempo no zoo (ID mais antigo)
```js
{
  NE: ['Burl Bethea', 'Ola Orloff'],
  NW: [...]
}
```

### 18 - Implemente `preverAposentadoria` (FILTER + MAP):
- Identifique animais com idade ≥ expectativa de vida da espécie:
```js
{
  especie: 'tigres',
  candidatos: ['Shu (19 anos)'],
  total: 1
}
```

### 19 - Implemente `otimizarAlocacao` (REDUCE + EVERY):
- Redistribua animais para balancear:
1. Quantidade por região (±1 animal)
2. Popularidade total por habitat
```js
{
  NW: ['leões', 'tigres'],
  SE: [...],
  mudanças: 3
}
```

### 20 - Implemente `gerarRelatorioMensal` (MAP + REDUCE):
- Consolide dados mensais:  
```js
{
  visitantes: 1500,
  receita: 75400.50,
  especiesMaisPopulares: ['tigres', 'elefantes']
}
```

### 21 - Implemente `verificarSaudePopulacional` (EVERY + SOME):
- Alerta vermelho se qualquer espécie tiver:
1. Todos os membros acima de 15 anos OU
2. Menos de 3 indivíduos
```js
['elefantes', 'ursos'] → alerta: true
```

### 22 - Implemente `simularReproducao` (MAP + FILTER):
- Para espécies com machos e fêmeas:
1. Gere filhotes (1-3 por casal)
2. Atualize população
3. Retorne novos residentes:  
```js
[{
  nome: 'Filhote01',
  sexo: 'f',
  idade: 0
}]
```

### 23 - Implemente `calcularCustosOperacionais` (REDUCE + MAP):
- Custo por região = (animais * 200) + (funcionários * 1500)
- Retorne:  
```js
{
  NE: 4200,
  total: 15800
}
```

### 24 - Implemente `gerarCertificadoAnimal` (FIND + MAP):
- Para nome de animal, retorne:  
```js
{
  nome: 'Zena',
  especie: 'leões',
  cuidador: 'Nigel Nelson',
  anosNoZoo: 12
}
```

### 25 - Implemente `planejarExpansao` (SORT + REDUCE):
- Liste espécies por prioridade de expansão:
1. Popularidade > 4
2. Densidade populacional (residentes/área)
```js
['elefantes', 'tigres', 'leões']
```

### 26 - Implemente `monitorarBemEstar` (EVERY + FILTER):
- Indicadores por espécie:  
```js
{
  leões: {
    espacoPorAnimal: 45m², // (área total / residentes)
    enriquecimento: true // se tiver brinquedos
  }
}
```

## Regras Avançadas: 
1. Implementar tratamentos de erro específicos:  
```
- Espécies inexistentes  
- IDs inválidos  
- Parâmetros fora do formato  
```
2. Cada função deve usar pelo menos 1 HOFs diferentes  
3. Proibido usar:  
- Loops (for, while)  
- forEach (não é HOF pura)  
4. Imutabilidade: Nunca modificar arrays originais  

## Exemplo de Combinação Complexa:
```javascript
    const exemplo = animais
      .map(animal => ({
        ...animal,
        residentes: animal.residents.filter(r => r.age > 10)
      }))
      .reduce((acc, curr) => {
        if(curr.residents.length > 0) acc.push(curr);
        return acc;
      }, []);
```
