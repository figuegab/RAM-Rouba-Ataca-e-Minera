# BlocoCraft — Defesa da Arquitetura

Jogo de cruzadinha com ambientação inspirada em jogos de construção em blocos. O jogador seleciona pistas, preenche as casas e derrota um mob ao acertar a palavra.

## Como jogar
1. Selecione uma pista horizontal ou vertical.
2. Digite uma letra em cada casa correspondente.
3. Clique em **Atacar mob** para verificar a palavra selecionada e derrotar o inimigo.
4. Use **Conferir todas** para marcar palavras corretas/incorretas e ver o total.
5. Clique em **Reiniciar aventura** para limpar o tabuleiro.

## Palavras e pistas
As respostas são escritas em maiúsculas, sem acentos e sem espaços.

| Palavra no tabuleiro | Pista |
|---|---|
| MICROCONTROLADOR | Circuito integrado que reúne processamento, memória e periféricos em um único chip. |
| ADDRESSBUS | Conjunto de linhas que indica a posição acessada na memória ou em dispositivos. |
| DATABUS | Caminho usado para transportar valores entre componentes do sistema. |
| REGISTRADORES | Pequenas áreas internas de armazenamento usadas durante a execução de instruções. |
| MEMORIADEMASSA | Armazenamento não volátil usado para guardar grande volume de informações. |
| EEPROM | Memória não volátil que permite apagar e regravar dados eletricamente. |
| FLASH | Tipo de memória não volátil apagada e gravada em blocos. |
| CACHE | Armazenamento rápido que mantém cópias de dados frequentemente utilizados. |
| CPU | Componente que interpreta e executa instruções de programas. |
| ULA | Parte responsável por cálculos e operações lógicas. |
| RAM | Armazenamento volátil usado temporariamente por programas em execução. |
| DMA | Recurso que permite transferências entre memória e periféricos sem intervenção contínua do processador. |

## Estrutura
- `index.html` — estrutura da página.
- `style.css` — visual e responsividade.
- `script.js` — tabuleiro, pistas, validação e lógica do jogo.

## Publicação
Crie um repositório público chamado `arqcomp-cruzadinha`, coloque estes arquivos na raiz e publique pela opção GitHub Pages (branch `main`, pasta `/root`). Depois de publicado, adicione o endereço real do site nesta seção:

**Link do site:** a preencher após publicar no GitHub Pages.

## Versionamento exigido na atividade
Faça pelo menos 6 commits em pelo menos 2 dias diferentes. Sugestões de mensagens:
- `feat: cria estrutura inicial do jogo`
- `feat: adiciona tabuleiro com 12 palavras cruzadas`
- `feat: implementa seleção de pistas e ataques`
- `feat: adiciona conferência e contador de acertos`
- `fix: ajusta navegação entre casas`
- `style: aplica tema de aventura em blocos`
- `docs: cria README com regras e pistas`

> Observação: o PDF da atividade contém a lista de termos e as regras, mas não inclui o e-book com as definições. Portanto, confira as pistas com o material didático da disciplina antes da entrega final.
