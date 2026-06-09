const questions=[
  {
    q:"Descrivi la tua organizzazione in modo brutalmente onesto:",
    opts:[
      "Facciamo cose bellissime che quasi nessuno conosce",
      "Abbiamo un sito degli anni 2000 e nessun piano social",
      "Comunichiamo tanto ma senza una voce riconoscibile",
      "Ho un festival/evento specifico da lanciare, il resto può aspettare"
    ]
  },
  {
    q:"Quanto tempo hai davvero da dedicare alla comunicazione ogni settimana?",
    opts:[
      "Zero. È per questo che sto leggendo questa pagina",
      "Un po', ma non so cosa farne",
      "Abbastanza, ma ho bisogno di una strategia",
      "È un progetto temporaneo, non ho bisogno di una struttura fissa"
    ]
  },
  {
    q:"Cosa ti spaventa di più nella comunicazione?",
    opts:[
      "Non avere una voce riconoscibile",
      "Sembrare uguali a tutti gli altri",
      "Fare tanto senza risultati concreti",
      "Non arrivare alle persone giuste al momento giusto"
    ]
  }
];

const results=[
  {
    title:"Ti serve La Voce",
    desc:"Hai bisogno di costruire una presenza costante da zero. Il pacchetto base è pensato per chi vuole iniziare a comunicare in modo serio senza travolgere tutto."
  },
  {
    title:"Ti serve La Presenza",
    desc:"Hai già qualcosa, ma manca la strategia. Il pacchetto completo ti dà una voce riconoscibile su tutti i canali — e qualcuno che ci pensi al posto tuo."
  },
  {
    title:"Ti serve un progetto Su misura",
    desc:"Hai una visione specifica e un obiettivo preciso. Non hai bisogno di un abbonamento mensile: hai bisogno di qualcuno che entri, capisca, e costruisca."
  }
];

let step=0, answers=[], selected=null;

function renderQ(){
  const qEl=document.getElementById('q-text');
  const stepEl=document.getElementById('q-step');
  const opts=document.getElementById('q-opts');
  if(!qEl) return;
  qEl.textContent=questions[step].q;
  stepEl.textContent=(step+1)+' / '+questions.length;
  opts.innerHTML='';
  questions[step].opts.forEach((o,i)=>{
    const b=document.createElement('button');
    b.className='quiz-opt';
    b.textContent=o;
    b.onclick=()=>selectOpt(b,i);
    opts.appendChild(b);
  });
}

function selectOpt(el,idx){
  document.querySelectorAll('.quiz-opt').forEach(o=>o.classList.remove('selected'));
  el.classList.add('selected');
  selected=idx;
}

function nextQ(){
  if(selected===null) return;
  answers.push(selected);
  selected=null;
  step++;
  if(step>=questions.length){ showResult(); return; }
  renderQ();
}

function showResult(){
  let r=1;
  if(answers.includes(3)) r=2;
  else if(answers[0]===0||answers[0]===1) r=0;
  document.getElementById('quiz-content').style.display='none';
  const res=document.getElementById('quiz-result');
  res.classList.add('show');
  document.getElementById('r-title').textContent=results[r].title;
  document.getElementById('r-desc').textContent=results[r].desc;
}

document.addEventListener('DOMContentLoaded', renderQ);
