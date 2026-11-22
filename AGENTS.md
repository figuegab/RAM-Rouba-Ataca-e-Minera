# AGENTS.md — Contexto e instruções do projeto

## 1. Visão geral

Este projeto é um jogo educacional de Arquitetura Computacional, feito para rodar diretamente no navegador com **HTML, CSS e JavaScript puros**. A ambientação é inspirada em Minecraft e o objetivo pedagógico é revisar 12 termos da atividade de Arquitetura Computacional.

O projeto atual tem como identidade:
- Nome exibido: **RAM — Roube (os villagers), Ataque, Minere**.
- Tema visual: mundo de blocos, mobs e sobrevivência.
- Contexto: Sprint 3 / Arquitetura Computacional.
- Idioma da interface: português brasileiro.

## 2. Arquivos e responsabilidades

A estrutura esperada na raiz do projeto é:

- `index.html`: estrutura e elementos da interface.
- `style.css`: aparência, layout, responsividade e efeitos visuais.
- `script.js`: dados das perguntas, estado do jogo, movimentação, combate e regras.
- `AGENTS.md`: este documento, que explica o projeto e orienta agentes de IA.
- `README.md`: documentação para pessoas que forem jogar ou avaliar o projeto.

O `index.html` atual carrega `style.css` e `script.js`. Não transforme o projeto em React, Vue, TypeScript, Canvas framework ou outra stack. A implementação deve continuar usando HTML, CSS e JavaScript nativos, sem dependências obrigatórias.

## 3. Como o jogo funciona atualmente

A versão atual é uma **cruzadinha**:
- O HTML contém uma área de cenário com um inimigo atual, nome do mob, status e barra de ameaça.
- O tabuleiro é criado dinamicamente pelo JavaScript a partir de `DATA.rows`, `DATA.cols`, `DATA.solution` e `DATA.words`.
- Cada palavra tem resposta, posição, direção, número, pista e nome de mob.
- As pistas são separadas em horizontais e verticais.
- O jogador seleciona uma pista e digita letras diretamente nas casas.
- O botão `Atacar mob` verifica a palavra selecionada.
- `Conferir todas` marca as respostas preenchidas como corretas ou incorretas.
- `Reiniciar aventura` limpa o tabuleiro.
- Há um contador de palavras derrotadas e uma tela de vitória após completar os 12 desafios.

### Elementos e IDs atuais importantes

O `index.html` atual contém, entre outros, estes IDs:
- `hearts`, `score`, `mobSprite`, `mobName`, `mobStatus`, `threatBar`
- `counter`, `board`, `acrossClues`, `downClues`
- `activeNumber`, `activeClue`, `activeMob`
- `attackBtn`, `checkBtn`, `resetBtn`, `feedback`
- `victory`, `playAgain`

O JavaScript atual usa esses elementos diretamente. Ao alterar a interface, atualize também as referências no JavaScript e evite deixar IDs antigos sendo acessados depois de removidos.

## 4. Dados pedagógicos atuais

O jogo usa estas 12 respostas e pistas. Preserve os conceitos e as pistas, salvo se o responsável pelo projeto fornecer material didático novo:

| Resposta | Pista |
|---|---|
| ULA | Parte responsável por cálculos e operações lógicas. |
| MEMORIADEMASSA | Armazenamento não volátil usado para guardar grande volume de informações. |
| CACHE | Armazenamento rápido que mantém cópias de dados frequentemente utilizados. |
| CPU | Componente que interpreta e executa instruções de programas. |
| RAM | Armazenamento volátil usado temporariamente por programas em execução. |
| ADDRESSBUS | Conjunto de linhas que indica a posição acessada na memória ou em dispositivos. |
| EEPROM | Memória não volátil que permite apagar e regravar dados eletricamente. |
| REGISTRADORES | Pequenas áreas internas de armazenamento usadas durante a execução de instruções. |
| DMA | Recurso que permite transferências entre memória e periféricos sem intervenção contínua do processador. |
| MICROCONTROLADOR | Circuito integrado que reúne processamento, memória e periféricos em um único chip. |
| DATABUS | Caminho usado para transportar valores entre componentes do sistema. |
| FLASH | Tipo de memória não volátil apagada e gravada em blocos. |

As respostas são normalizadas em letras maiúsculas, sem acentos e sem espaços. O projeto foi pensado para manter pelo menos estes termos obrigatórios: **MICROCONTROLADOR, ADDRESSBUS e DATABUS**.

Observação: as pistas existentes devem ser conferidas com o e-book/material oficial da disciplina antes da entrega. Não invente afirmações dizendo que foram validadas pelo e-book se esse material não estiver disponível.

## 5. Nova funcionalidade solicitada: aventura 2D de Minecraft com perguntas e chefão

### Objetivo

Adicionar uma **aventura 2D complementar, inspirada em Minecraft**, sem substituir ou remover a cruzadinha existente. A cruzadinha continua sendo uma atividade do projeto, e o jogador também poderá acessar uma sequência de encontros em que cada inimigo representa uma pergunta de Arquitetura Computacional. Responder corretamente derrota o inimigo e permite avançar. A jornada termina no **Ender Dragon**, que funciona como chefão final.

A nova experiência deve parecer um pequeno jogo 2D, e não apenas uma página com perguntas e uma imagem decorativa. As duas atividades devem permanecer disponíveis e claramente identificadas.

### Fluxo geral

1. Ao abrir o site, mostrar uma tela inicial com o título do jogo, uma breve explicação e um botão **Jogar**.
2. Ao iniciar, mostrar o personagem do jogador em um cenário 2D de blocos.
3. Apresentar um inimigo por vez, em uma sequência de fases/encontros.
4. Cada inimigo deve exibir uma pergunta sobre um dos 12 termos de Arquitetura Computacional.
5. O jogador escolhe uma resposta entre alternativas (múltipla escolha). A pergunta deve ter uma única alternativa correta.
6. Se acertar:
   - Mostrar feedback positivo.
   - Reproduzir uma animação/efeito visual de derrota do inimigo.
   - Atualizar o progresso.
   - Avançar para o próximo inimigo/pergunta.
7. Se errar:
   - Mostrar feedback de erro sem revelar a resposta imediatamente, ou revelar uma explicação curta após a tentativa, conforme a experiência definida.
   - Remover exatamente uma vida.
   - Manter o jogador no encontro atual para que possa tentar novamente, desde que ainda tenha vidas.
8. O jogador começa com **3 vidas**.
9. Ao errar pela terceira vez (vidas chegam a zero), encerrar a tentativa com uma tela de derrota e oferecer o botão **Tentar novamente**.
10. Ao derrotar todos os inimigos anteriores, iniciar o confronto final com o **Ender Dragon**.
11. O Ender Dragon deve ter uma pergunta final/desafio final relacionado ao conteúdo. Ao acertá-la, mostrar uma tela de vitória/conclusão.
12. A tela final deve oferecer opção para jogar novamente.

### Regras de vida e reinício

- Estado inicial: `3` vidas.
- Cada resposta incorreta desconta `1` vida.
- Resposta correta não recupera vida.
- Quando as vidas chegarem a `0`, a partida termina imediatamente.
- No game over, bloquear novas respostas e impedir avanço.
- O botão de reinício deve restaurar:
  - 3 vidas;
  - progresso para o primeiro inimigo;
  - pontuação/progresso;
  - estado visual dos inimigos;
  - pergunta atual;
  - estado de vitória/derrota.
- Não restaurar vidas automaticamente depois de um erro. O reinício só acontece quando o jogador clicar em **Tentar novamente** (ou em uma opção explícita de reiniciar).

### Progressão e inimigos

- Criar uma lista ordenada de inimigos/perguntas em um único local no JavaScript, para facilitar manutenção.
- Cada entrada deve ter pelo menos:
  - `enemyName` ou nome do mob;
  - `question`;
  - `options` (alternativas);
  - `correctAnswer` ou índice da alternativa correta;
  - `explanation` curta opcional;
  - identificador/índice da fase.
- Usar os mobs como adversários visuais. A sequência pode usar mobs conhecidos do universo Minecraft, por exemplo zumbi, esqueleto, aranha, Creeper, Enderman, bruxa e outros. O **Ender Dragon deve ser sempre o último**.
- O Ender Dragon precisa ser claramente apresentado como chefe final: maior destaque visual, barra de vida ou indicador de chefão e mensagem de confronto final.
- Tratar a aventura 2D como uma atividade adicional, sem alterar a cruzadinha. A mecânica da nova atividade passa a ser caminhar/avançar, enfrentar um mob, responder e avançar.

### Cenário e movimentação 2D

- Criar uma área de jogo com aparência de plataforma 2D em pixel art/blocos.
- Mostrar o personagem do jogador e o inimigo atual no cenário.
- Implementar uma sensação de progressão lateral: após cada resposta correta, o personagem avança para a direita ou a câmera/cenário muda para indicar que chegou à próxima área.
- Pode usar CSS com elementos HTML, sprites em CSS, SVG próprio ou imagens locais. Priorizar uma solução leve, sem bibliotecas externas obrigatórias.
- A movimentação pode ser automática por etapa (animação curta de caminhada após acertar), sem exigir controles complexos.
- Não sacrificar a legibilidade da pergunta em nome da animação.
- A interface deve funcionar em desktop e celular; em telas estreitas, adaptar o cenário e as alternativas sem rolagem horizontal da página.

### Interface necessária

A tela de jogo deve exibir claramente:
- personagem do jogador;
- cenário 2D de blocos;
- inimigo atual;
- número/nome da fase ou progresso (por exemplo, `4 de 12`);
- vidas restantes (três corações ou ícones equivalentes);
- pergunta atual;
- alternativas clicáveis e acessíveis;
- botão para confirmar, se a seleção não for confirmada imediatamente;
- feedback de acerto/erro;
- indicação de avanço;
- tela de derrota;
- tela de vitória após derrotar o Ender Dragon.

Evitar mostrar a resposta correta antes de o jogador responder. Desabilitar alternativas/botões enquanto a transição de fase estiver acontecendo, para impedir cliques repetidos e avanço duplicado.

### Conteúdo das perguntas

- Criar perguntas conceituais baseadas nos 12 termos já usados pelo projeto.
- Cada pergunta deve avaliar o significado ou a função do conceito, não apenas pedir a expansão da sigla.
- As alternativas incorretas devem ser plausíveis, mas não ambíguas.
- Deve existir exatamente uma resposta correta por pergunta.
- Não incluir a resposta dentro do enunciado.
- Evitar pistas que entreguem literalmente a palavra-resposta.
- Distribuir os 12 conceitos ao longo dos encontros. Se forem necessários 12 inimigos comuns mais o Ender Dragon, criar uma pergunta final de revisão que combine conceitos sem substituir os 12 termos.
- Manter obrigatoriamente `MICROCONTROLADOR`, `ADDRESSBUS` e `DATABUS` entre os conceitos avaliados.
- As perguntas devem estar em português brasileiro.

### Organização sugerida do JavaScript

Separar os dados e a lógica de forma clara. Uma estrutura possível:

```js
const QUESTIONS = [
  {
    enemyName: "Zumbi",
    question: "Qual componente interpreta e executa as instruções dos programas?",
    options: ["CPU", "RAM", "CACHE", "DMA"],
    correctAnswer: "CPU",
    explanation: "Esse componente coordena a execução das instruções."
  }
  // Demais encontros...
];
```

A lógica deve manter estado explícito, por exemplo:
- `currentQuestionIndex`;
- `lives`;
- `correctAnswers`;
- `gameState` (`start`, `playing`, `transition`, `gameover`, `victory`);
- `selectedOption`.

Criar funções pequenas e claras, por exemplo:
- `startGame()`;
- `renderQuestion()`;
- `selectAnswer()`;
- `submitAnswer()`;
- `handleCorrectAnswer()`;
- `handleWrongAnswer()`;
- `advanceToNextEnemy()`;
- `showGameOver()`;
- `showVictory()`;
- `restartGame()`.

Os nomes podem mudar, mas as responsabilidades devem continuar separadas. Evitar duplicar a lista de perguntas em diferentes partes do código.

## 6. Diretrizes de implementação

- Antes de alterar, ler `index.html`, `style.css` e `script.js` completos.
- Preservar a identidade visual já existente quando possível: paleta natural/verde, blocos, pixel art, tipografia e tema Minecraft.
- Integrar a nova mecânica sem remover nem desativar a cruzadinha. As duas atividades devem ser apresentadas em áreas ou modos claramente identificados, sem que uma interfira na outra.
- Preservar o código, os eventos e os elementos funcionais da cruzadinha. Não deixar referências duplicadas ou alterações na aventura 2D quebrarem o jogo existente.
- Atualizar os arquivos existentes, mantendo `index.html` na raiz.
- Usar HTML semântico e botões reais para as alternativas.
- Adicionar `aria-live` para mensagens de feedback e estados importantes.
- Não depender de backend, login, banco de dados ou APIs.
- Não adicionar bibliotecas/frameworks sem necessidade.
- Não alterar o conteúdo pedagógico para conceitos diferentes dos 12 definidos neste documento sem autorização.

## 7. Critérios de aceitação / testes manuais

A implementação só deve ser considerada concluída depois de testar:

1. Abrir `index.html` localmente e iniciar uma partida.
2. A partida começa com exatamente 3 vidas.
3. Uma resposta correta derrota apenas o inimigo atual e avança exatamente uma fase.
4. Uma resposta errada desconta exatamente uma vida e não avança a fase.
5. Após o primeiro erro, restam 2 vidas; após o segundo, 1 vida; após o terceiro, game over.
6. Depois do game over, não é possível continuar respondendo nem avançar.
7. Clicar em **Tentar novamente** restaura 3 vidas e volta ao primeiro inimigo.
8. Os 12 conceitos aparecem ao longo da aventura.
9. O Ender Dragon aparece somente no final, como chefão.
10. Acertar a pergunta do Ender Dragon mostra a vitória.
11. O botão de jogar novamente funciona tanto após vitória quanto após derrota.
12. Não há avanço duplicado ao clicar rapidamente.
13. O layout funciona em desktop e celular.
14. Não há erros no console do navegador.
15. A cruzadinha continua disponível e funcionando.
16. A aventura 2D está disponível como atividade adicional e não interfere na cruzadinha.

## 8. Entrega e GitHub

A atividade original pede:
- HTML, CSS e JavaScript puros;
- `index.html` na raiz;
- repositório público chamado `arqcomp-cruzadinha`;
- no mínimo 6 commits distribuídos em pelo menos 2 dias diferentes;
- mensagens de commit com prefixos como `feat`, `fix`, `style` e `docs`;
- `README.md` com nome do jogo, instruções, palavras/pistas e link publicado;
- publicação via GitHub Pages usando branch `main` e pasta `/root`.

Não inventar que o projeto foi publicado ou que os commits foram feitos. Apenas orientar e preparar os arquivos; a publicação e o versionamento precisam ser realizados no GitHub.

## 9. Instrução principal para o agente

Implemente a aventura 2D descrita na seção 5 como uma atividade adicional, preservando integralmente a cruzadinha atual. Primeiro inspecione o código existente; depois planeje a mudança; em seguida implemente HTML, CSS e JavaScript; por fim execute os testes da seção 7. Priorize duas experiências jogáveis, claras, responsivas e independentes, sem remover a cruzadinha nem alterar seu funcionamento. Ao terminar, informe quais arquivos foram alterados, como testar localmente e qualquer pendência real.
