const DATA = {"rows": 21, "cols": 18, "words": [{"word": "ULA", "row": 0, "col": 9, "dir": "V", "number": 1, "clue": "Parte responsável por cálculos e operações lógicas.", "mob": "Piglin"}, {"word": "MEMORIADEMASSA", "row": 1, "col": 12, "dir": "V", "number": 2, "clue": "Armazenamento não volátil usado para guardar grande volume de informações.", "mob": "Creeper"}, {"word": "CACHE", "row": 2, "col": 8, "dir": "H", "number": 3, "clue": "Armazenamento rápido que mantém cópias de dados frequentemente utilizados.", "mob": "Enderman"}, {"word": "CPU", "row": 2, "col": 8, "dir": "V", "number": 3, "clue": "Componente que interpreta e executa instruções de programas.", "mob": "Afogado"}, {"word": "RAM", "row": 7, "col": 11, "dir": "H", "number": 4, "clue": "Armazenamento volátil usado temporariamente por programas em execução.", "mob": "Cubo de magma"}, {"word": "ADDRESSBUS", "row": 9, "col": 8, "dir": "H", "number": 5, "clue": "Conjunto de linhas que indica a posição acessada na memória ou em dispositivos.", "mob": "Esqueleto"}, {"word": "EEPROM", "row": 10, "col": 6, "dir": "V", "number": 6, "clue": "Memória não volátil que permite apagar e regravar dados eletricamente.", "mob": "Slime"}, {"word": "REGISTRADORES", "row": 11, "col": 5, "dir": "H", "number": 7, "clue": "Pequenas áreas internas de armazenamento usadas durante a execução de instruções.", "mob": "Aranha"}, {"word": "DMA", "row": 13, "col": 0, "dir": "V", "number": 8, "clue": "Recurso que permite transferências entre memória e periféricos sem intervenção contínua do processador.", "mob": "Vingador"}, {"word": "MICROCONTROLADOR", "row": 14, "col": 0, "dir": "H", "number": 9, "clue": "Circuito integrado que reúne processamento, memória e periféricos em um único chip.", "mob": "Guardião de Redstone"}, {"word": "DATABUS", "row": 14, "col": 13, "dir": "V", "number": 10, "clue": "Caminho usado para transportar valores entre componentes do sistema.", "mob": "Zumbi"}, {"word": "FLASH", "row": 20, "col": 10, "dir": "H", "number": 11, "clue": "Tipo de memória não volátil apagada e gravada em blocos.", "mob": "Bruxa"}], "solution": {"0,9": "U", "1,9": "L", "2,9": "A", "1,12": "M", "2,12": "E", "3,12": "M", "4,12": "O", "5,12": "R", "6,12": "I", "7,12": "A", "8,12": "D", "9,12": "E", "10,12": "M", "11,12": "A", "12,12": "S", "13,12": "S", "14,12": "A", "2,8": "C", "2,10": "C", "2,11": "H", "3,8": "P", "4,8": "U", "7,11": "R", "7,13": "M", "9,8": "A", "9,9": "D", "9,10": "D", "9,11": "R", "9,13": "S", "9,14": "S", "9,15": "B", "9,16": "U", "9,17": "S", "10,6": "E", "11,6": "E", "12,6": "P", "13,6": "R", "14,6": "O", "15,6": "M", "11,5": "R", "11,7": "G", "11,8": "I", "11,9": "S", "11,10": "T", "11,11": "R", "11,13": "D", "11,14": "O", "11,15": "R", "11,16": "E", "11,17": "S", "13,0": "D", "14,0": "M", "15,0": "A", "14,1": "I", "14,2": "C", "14,3": "R", "14,4": "O", "14,5": "C", "14,7": "N", "14,8": "T", "14,9": "R", "14,10": "O", "14,11": "L", "14,13": "D", "14,14": "O", "14,15": "R", "15,13": "A", "16,13": "T", "17,13": "A", "18,13": "B", "19,13": "U", "20,13": "S", "20,10": "F", "20,11": "L", "20,12": "A", "20,14": "H"}, "starts": {"0,9": 1, "1,12": 2, "2,8": 3, "7,11": 4, "9,8": 5, "10,6": 6, "11,5": 7, "13,0": 8, "14,0": 9, "14,13": 10, "20,10": 11}};

const ADVENTURE_QUESTIONS = [
  { enemy: 'Zumbi', sprite: 'mc-zombie', question: 'Qual componente interpreta e executa as instruções dos programas?', options: ['CPU', 'RAM', 'CACHE', 'DMA'], answer: 'CPU', explanation: 'A CPU executa as instruções dos programas.' },
  { enemy: 'Creeper', sprite: 'mc-creeper', question: 'Qual memória mantém dados mesmo quando o computador é desligado?', options: ['RAM', 'Memória de massa', 'Registradores', 'Cache'], answer: 'Memória de massa', explanation: 'A memória de massa é não volátil.' },
  { enemy: 'Enderman', sprite: 'mc-enderman', question: 'Qual recurso guarda cópias de dados usados com frequência para acelerar o acesso?', options: ['Cache', 'DMA', 'EEPROM', 'Address bus'], answer: 'Cache', explanation: 'A cache reduz o tempo de acesso a dados frequentes.' },
  { enemy: 'Afogado', sprite: 'mc-drowned', question: 'Qual é a função principal da RAM durante a execução de um programa?', options: ['Armazenar temporariamente dados e instruções em uso', 'Controlar a tensão elétrica', 'Indicar endereços de memória', 'Gravar dados permanentemente'], answer: 'Armazenar temporariamente dados e instruções em uso', explanation: 'A RAM é uma memória volátil de trabalho.' },
  { enemy: 'Esqueleto', sprite: 'mc-skeleton', question: 'O que o address bus transporta?', options: ['A posição a ser acessada', 'O resultado de uma soma', 'A imagem do monitor', 'O som dos alto-falantes'], answer: 'A posição a ser acessada', explanation: 'O address bus indica endereços de memória ou dispositivos.' },
  { enemy: 'Slime', sprite: 'mc-slime', question: 'Qual característica define a EEPROM?', options: ['Pode ser apagada e regravada eletricamente', 'Perde tudo ao desligar', 'Serve apenas para transportar endereços', 'Executa instruções no lugar da CPU'], answer: 'Pode ser apagada e regravada eletricamente', explanation: 'A EEPROM é uma memória não volátil regravável.' },
  { enemy: 'Aranha', sprite: 'mc-spider', question: 'Para que servem os registradores?', options: ['Guardar pequenos valores durante a execução', 'Armazenar arquivos por anos', 'Resfriar o processador', 'Conectar o computador à internet'], answer: 'Guardar pequenos valores durante a execução', explanation: 'Registradores são áreas internas rápidas do processador.' },
  { enemy: 'Vingador', sprite: 'mc-vindicator', question: 'Qual vantagem o DMA oferece ao sistema?', options: ['Transferir dados entre memória e periféricos com pouca intervenção da CPU', 'Aumentar a capacidade da memória cache', 'Substituir todos os registradores', 'Apagar a memória de massa'], answer: 'Transferir dados entre memória e periféricos com pouca intervenção da CPU', explanation: 'O DMA reduz a intervenção contínua do processador.' },
  { enemy: 'Guardião de Redstone', sprite: 'mc-iron-golem', question: 'O que caracteriza um microcontrolador?', options: ['Reunir processamento, memória e periféricos em um chip', 'Ser apenas uma memória externa', 'Transportar somente endereços', 'Funcionar apenas como cabo de dados'], answer: 'Reunir processamento, memória e periféricos em um chip', explanation: 'Essa integração é a característica central do microcontrolador.' },
  { enemy: 'Piglin Zumbificado', sprite: 'mc-zombified-piglin', question: 'Qual é a função do data bus?', options: ['Transportar valores entre componentes', 'Indicar somente posições', 'Apagar blocos da memória', 'Interpretar instruções sozinho'], answer: 'Transportar valores entre componentes', explanation: 'O data bus leva os valores trocados pelo sistema.' },
  { enemy: 'Bruxa', sprite: 'mc-witch', question: 'Como a memória flash normalmente é apagada?', options: ['Em blocos', 'Bit a bit apenas por registradores', 'Somente ao desligar o computador', 'Pelo address bus'], answer: 'Em blocos', explanation: 'A memória flash é não volátil e opera com apagamento em blocos.' },
  { enemy: 'Piglin', sprite: 'mc-piglin', question: 'Qual unidade realiza cálculos e operações lógicas?', options: ['ULA', 'RAM', 'Data bus', 'EEPROM'], answer: 'ULA', explanation: 'A ULA realiza operações aritméticas e lógicas.' },
  { enemy: 'Ender Dragon', sprite: 'mc-ender-dragon', question: 'Qual combinação representa melhor um sistema em funcionamento?', options: ['CPU executa, RAM mantém dados em uso e buses transportam informações', 'RAM executa tudo sem processador', 'Cache substitui todos os buses', 'EEPROM apaga dados a cada instrução'], answer: 'CPU executa, RAM mantém dados em uso e buses transportam informações', explanation: 'Os componentes trabalham juntos com funções diferentes.', boss: true }
];
const board = document.getElementById('board');
const acrossEl = document.getElementById('acrossClues');
const downEl = document.getElementById('downClues');
const byWord = new Map(DATA.words.map(w => [w.word,w]));
const cellInputs = new Map();
let activeWord = DATA.words[0].word;
let defeated = new Set();
let hearts = 3;

function key(r,c){return `${r},${c}`;}
function renderBoard(){
  board.style.gridTemplateColumns = `repeat(${DATA.cols}, 30px)`;
  board.style.gridTemplateRows = `repeat(${DATA.rows}, 30px)`;
  const starts = DATA.starts;
  for(let r=0;r<DATA.rows;r++){
    for(let c=0;c<DATA.cols;c++){
      const k=key(r,c);
      if(!(k in DATA.solution)){const blank=document.createElement('div');blank.className='void';board.appendChild(blank);continue;}
      const cell=document.createElement('div');cell.className='cell';cell.dataset.cell=k;
      if(starts[k]){const n=document.createElement('span');n.className='cell-num';n.textContent=starts[k];cell.appendChild(n);}
      const input=document.createElement('input');input.maxLength=1;input.autocomplete='off';input.spellcheck=false;
      input.setAttribute('aria-label',`Linha ${r+1}, coluna ${c+1}`);
      input.dataset.row=r;input.dataset.col=c;
      input.addEventListener('input',()=>{
        input.value=input.value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z]/g,'').toUpperCase().slice(-1);
        cell.classList.remove('correct','wrong');
        moveToNextCell(input);
      });
      input.addEventListener('keydown',e=>{
        if(e.key==='Backspace' && !input.value) moveToPrevCell(input);
        if(e.key==='ArrowRight') focusNeighbor(input,0,1);
        if(e.key==='ArrowLeft') focusNeighbor(input,0,-1);
        if(e.key==='ArrowDown') focusNeighbor(input,1,0);
        if(e.key==='ArrowUp') focusNeighbor(input,-1,0);
      });
      cell.appendChild(input);board.appendChild(cell);cellInputs.set(k,input);
    }
  }
}
function wordCells(w){
  const p=byWord.get(w);
  return [...p.word].map((_,i)=>key(p.row+(p.dir==='V'?i:0),p.col+(p.dir==='H'?i:0)));
}
function moveToNextCell(input){
  const cells=wordCells(activeWord);const idx=cells.indexOf(key(+input.dataset.row,+input.dataset.col));
  for(let i=idx+1;i<cells.length;i++){const next=cellInputs.get(cells[i]);if(next && !next.value){next.focus();return;}}
}
function moveToPrevCell(input){
  const cells=wordCells(activeWord);const idx=cells.indexOf(key(+input.dataset.row,+input.dataset.col));
  if(idx>0)cellInputs.get(cells[idx-1]).focus();
}
function focusNeighbor(input,dr,dc){
  const k=key(+input.dataset.row+dr,+input.dataset.col+dc);if(cellInputs.has(k))cellInputs.get(k).focus();
}
function renderClues(){
  for(const p of DATA.words){
    const item=document.createElement('button');item.className='clue-item';item.dataset.word=p.word;
    item.innerHTML=`<span class="clue-no">${p.number}.</span><span>${p.clue}</span>`;
    item.addEventListener('click',()=>selectWord(p.word));
    (p.dir==='H'?acrossEl:downEl).appendChild(item);
  }
}
function selectWord(word){
  activeWord=word;const p=byWord.get(word);
  document.querySelectorAll('.clue-item').forEach(el=>el.classList.toggle('selected',el.dataset.word===word));
  document.querySelectorAll('.cell').forEach(el=>el.classList.remove('active-cell'));
  wordCells(word).forEach(k=>{const input=cellInputs.get(k);input.parentElement.classList.add('active-cell');});
  document.getElementById('activeNumber').textContent=`${p.number} · ${p.dir==='H'?'HORIZONTAL':'VERTICAL'}`;
  document.getElementById('activeClue').textContent=p.clue;
  document.getElementById('activeMob').textContent=p.mob;
  document.getElementById('mobName').textContent=p.mob;
  document.getElementById('mobStatus').textContent=defeated.has(word)?'Inimigo derrotado!':'Aguardando sua resposta...';
  document.getElementById('mobSprite').style.background=defeated.has(word)?'#a6c98b':'#63944d';
  document.getElementById('threatBar').style.width=defeated.has(word)?'0%':'100%';
  document.getElementById('feedback').textContent=defeated.has(word)?'Este mob já foi derrotado. Escolha outra pista.':'Preencha as casas desta palavra para atacar.';
  document.getElementById('feedback').className='feedback';
  const first=wordCells(word).map(k=>cellInputs.get(k)).find(i=>!i.value);
  (first||cellInputs.get(wordCells(word)[0])).focus();
}
function answerIsCorrect(word){
  const p=byWord.get(word);
  return wordCells(word).map(k=>cellInputs.get(k).value||'').join('')===p.word;
}
function markWord(word,correct){
  wordCells(word).forEach(k=>{
    const cell=cellInputs.get(k).parentElement;
    cell.classList.remove('correct','wrong');
    cell.classList.add(correct?'correct':'wrong');
  });
}
function updateScore(){
  const n=defeated.size;
  document.getElementById('score').textContent=`${n} / 12`;
  document.getElementById('counter').textContent=`${n} de 12 palavras derrotadas`;
  document.querySelectorAll('.clue-item').forEach(el=>el.classList.toggle('done',defeated.has(el.dataset.word)));
  if(n===12)document.getElementById('victory').classList.remove('hidden');
}
function attack(){
  if(defeated.has(activeWord)){say('Esse inimigo já foi derrotado. Selecione outro.',false);return;}
  if(answerIsCorrect(activeWord)){
    defeated.add(activeWord);markWord(activeWord,true);
    document.getElementById('mobStatus').textContent='DERROTADO! +1 ponto';
    document.getElementById('mobSprite').style.background='#a6c98b';
    document.getElementById('threatBar').style.width='0%';
    say(`Acertou! ${byWord.get(activeWord).mob} derrotado!`,true);updateScore();
    const next=DATA.words.find(p=>!defeated.has(p.word));
    if(next)selectWord(next.word);
  }else{
    markWord(activeWord,false);hearts=Math.max(0,hearts-1);
    document.getElementById('hearts').textContent='♥ '.repeat(hearts)+'♡ '.repeat(3-hearts);
    say('Resposta incorreta ou incompleta. Revise as letras e tente novamente.',false);
    if(hearts===0){hearts=3;document.getElementById('hearts').textContent='♥ ♥ ♥';say('Você perdeu uma vida! A vila lhe deu outra chance.',false);}
  }
}
function checkAll(){
  let right=0;
  for(const p of DATA.words){
    const ok=answerIsCorrect(p.word);markWord(p.word,ok);
    if(ok)right++;
  }
  document.getElementById('counter').textContent=`${right} de 12 palavras corretas`;
  say(`${right} de 12 palavras corretas. Use “Atacar mob” para derrotar cada inimigo.`,right===12);
}
function say(message,success){const el=document.getElementById('feedback');el.textContent=message;el.className='feedback '+(success?'success':'error');}

const adventureState={index:0,lives:3,selected:null,gameState:'start',transitioning:false};
const adventureStart=document.getElementById('adventureStart');
const adventureGame=document.getElementById('adventureGame');
const adventureResult=document.getElementById('adventureResult');
const adventureOptions=document.getElementById('adventureOptions');
const adventureSubmit=document.getElementById('submitAdventure');
const adventureFeedback=document.getElementById('adventureFeedback');

function updateAdventureLives(){
  const heartsText='♥ '.repeat(adventureState.lives)+'♡ '.repeat(3-adventureState.lives);
  const lives=document.getElementById('adventureLives');
  lives.textContent=heartsText.trim();
  lives.setAttribute('aria-label',`${adventureState.lives} vidas restantes`);
}
function setAdventureOptionsDisabled(disabled){
  adventureOptions.querySelectorAll('button').forEach(button=>{button.disabled=disabled;});
  adventureSubmit.disabled=disabled||adventureState.selected===null;
}
function renderAdventureQuestion(){
  const question=ADVENTURE_QUESTIONS[adventureState.index];
  document.getElementById('adventureProgress').textContent=`Encontro ${adventureState.index+1} de ${ADVENTURE_QUESTIONS.length}`;
  document.getElementById('adventureStage').textContent=question.boss?'CHEFÃO FINAL':'FASE '+(adventureState.index+1);
  document.getElementById('adventureEnemyStatus').textContent=question.boss?'ENDER DRAGON À FRENTE':'INIMIGO À FRENTE';
  document.getElementById('adventureEnemyName').textContent=question.boss?'ENDER DRAGON · '+question.enemy:question.enemy;
  document.getElementById('adventureQuestion').textContent=question.question;
  const enemy=document.getElementById('adventureEnemy');
  enemy.textContent='';
  enemy.className=`adventure-enemy mc-sprite ${question.sprite}${question.boss?' boss':''}`;
  enemy.classList.remove('defeated');
  document.getElementById('adventurePlayer').classList.remove('advance');
  adventureOptions.replaceChildren();
  adventureState.selected=null;
  question.options.forEach(option=>{
    const button=document.createElement('button');
    button.className='adventure-option';
    button.type='button';
    button.textContent=option;
    button.addEventListener('click',()=>selectAdventureOption(button,option));
    adventureOptions.appendChild(button);
  });
  adventureFeedback.textContent='';
  adventureFeedback.className='adventure-feedback';
  setAdventureOptionsDisabled(false);
  updateAdventureLives();
}
function selectAdventureOption(button,option){
  if(adventureState.transitioning||adventureState.gameState!=='playing')return;
  adventureOptions.querySelectorAll('button').forEach(item=>item.classList.remove('selected'));
  button.classList.add('selected');
  adventureState.selected=option;
  adventureSubmit.disabled=false;
}
function finishAdventure(title,text,icon,gameOver){
  adventureState.gameState=gameOver?'gameover':'victory';
  adventureState.transitioning=false;
  adventureGame.classList.add('hidden');
  adventureResult.classList.toggle('game-over',gameOver);
  const resultIcon=document.getElementById('adventureResultIcon');
  resultIcon.replaceChildren();
  const resultSprite=document.createElement('span');
  resultSprite.className=`mc-sprite ${gameOver?'mc-zombie':'mc-ender-dragon'}`;
  resultIcon.appendChild(resultSprite);
  document.getElementById('adventureResultTitle').textContent=title;
  document.getElementById('adventureResultText').textContent=text;
  adventureResult.classList.remove('hidden');
}
function submitAdventureAnswer(){
  if(adventureState.transitioning||adventureState.gameState!=='playing'||adventureState.selected===null)return;
  const question=ADVENTURE_QUESTIONS[adventureState.index];
  adventureState.transitioning=true;
  setAdventureOptionsDisabled(true);
  if(adventureState.selected===question.answer){
    adventureFeedback.textContent=`Acertou! ${question.explanation}`;
    adventureFeedback.className='adventure-feedback success';
    document.getElementById('adventureEnemy').classList.add('defeated');
    document.getElementById('adventurePlayer').classList.add('advance');
    window.setTimeout(()=>{
      if(question.boss){finishAdventure('Desafio concluído!', 'Você derrotou o Ender Dragon e concluiu o desafio complementar.', '', false);return;}
      adventureState.index++;
      adventureState.transitioning=false;
      renderAdventureQuestion();
    },500);
    return;
  }
  adventureState.lives-=1;
  updateAdventureLives();
  if(adventureState.lives===0){
    finishAdventure('A aventura terminou', 'Você ficou sem vidas. Tente novamente para percorrer a rota desde o início.', '☠', true);
    return;
  }
  adventureState.transitioning=false;
  adventureFeedback.textContent=`Resposta incorreta. ${question.explanation} Você ainda pode tentar esta fase.`;
  adventureFeedback.className='adventure-feedback';
  setAdventureOptionsDisabled(false);
}
function startAdventure(){
  adventureState.index=0;
  adventureState.lives=3;
  adventureState.selected=null;
  adventureState.gameState='playing';
  adventureState.transitioning=false;
  adventureStart.classList.add('hidden');
  adventureResult.classList.add('hidden');
  adventureGame.classList.remove('hidden');
  renderAdventureQuestion();
}
function restartAdventure(){startAdventure();}

function reset(){
  defeated.clear();hearts=3;
  cellInputs.forEach(input=>{input.value='';input.parentElement.classList.remove('correct','wrong','active-cell');});
  document.getElementById('hearts').textContent='♥ ♥ ♥';
  document.getElementById('victory').classList.add('hidden');
  document.getElementById('mobSprite').style.background='#63944d';
  updateScore();selectWord(DATA.words[0].word);say('A aventura recomeçou. Boa sorte, construtor!',true);
}
renderBoard();renderClues();selectWord(DATA.words[0].word);updateScore();
document.getElementById('attackBtn').addEventListener('click',attack);
document.getElementById('checkBtn').addEventListener('click',checkAll);
document.getElementById('resetBtn').addEventListener('click',reset);
document.getElementById('playAgain').addEventListener('click',reset);
document.getElementById('startAdventure').addEventListener('click',startAdventure);
adventureSubmit.addEventListener('click',submitAdventureAnswer);
document.getElementById('restartAdventure').addEventListener('click',restartAdventure);
