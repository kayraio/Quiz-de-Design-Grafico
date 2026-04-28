const LETTERS = ["A", "B", "C", "D"];

function getProfessorFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const professor = params.get("professor");
  return professor && professor.trim() ? professor.trim() : "Geral";
}

const professorAtual = getProfessorFromUrl();
console.log("Professor detectado na URL:", professorAtual);

const perguntas = [
  {
    q: "O que caracteriza o conceito de 'Logistica Reversa' no contexto do lixo eletronico?",
    opts: [
      "O processo de fabricar computadores com pecas biodegradaveis.",
      "O envio de equipamentos novos da fabrica para as lojas de varejo.",
      "O retorno de produtos descartados ao ciclo produtivo para reaproveitamento ou descarte correto.",
      "A venda de computadores usados em sites de leilao internacional."
    ],
    answer: 2,
    selected_option: null,
    confirmed: false,
    tip: "A logistica reversa garante que o residuo volte para quem sabe trata-lo, evitando a poluicao."
  },
  {
    q: "Qual e o principal objetivo da ONG Programando o Futuro ao gerir os CRCs?",
    opts: [
      "Vender pecas de luxo para colecionadores de tecnologia antiga.",
      "Promover a inclusao digital e a preservacao ambiental atraves da metarreciclagem.",
      "Desenvolver novos softwares de inteligencia artificial para empresas privadas.",
      "Exportar lixo eletronico para outros paises da America Latina."
    ],
    answer: 1,
    selected_option: null,
    confirmed: false,
    tip: "O foco e transformar lixo em ferramentas de cidadania e educacao."
  },
  {
    q: "No contexto dos CRCs, como podemos definir a 'Metarreciclagem'?",
    opts: [
      "A desintegracao total de metais preciosos usando acidos quimicos.",
      "O uso de robos avancados para criar novos microchips do zero.",
      "A apropriacao tecnologica que transforma lixo eletronico em ferramentas de transformacao social.",
      "Um curso de programacao focado exclusivamente em design de hardware."
    ],
    answer: 2,
    selected_option: null,
    confirmed: false,
    tip: "Metarreciclagem e reciclar a funcao do objeto para que ele sirva a comunidade."
  },
  {
    q: "O que acontece com os componentes eletronicos que nao podem mais ser consertados nos CRCs?",
    opts: [
      "Sao enterrados em aterros sanitarios comuns junto com o lixo domestico.",
      "Sao enviados para industrias especializadas em reciclagem de materias-primas.",
      "Sao queimados para gerar energia eletrica para a cidade.",
      "Sao doados para museus de tecnologia como pecas de exposicao."
    ],
    answer: 1,
    selected_option: null,
    confirmed: false,
    tip: "O material e separado e enviado para reciclagem industrial de metais e plasticos."
  },
  {
    q: "Por que o descarte de eletronicos no lixo comum e perigoso para a natureza?",
    opts: [
      "Porque os computadores podem explodir com o calor do sol.",
      "Devido a presenca de metais pesados (chumbo, mercurio) que contaminam solo e agua.",
      "Porque o plastico dos monitores atrai insectos transmissores de doencas.",
      "Pois os componentes eletronicos nunca se decompoem."
    ],
    answer: 1,
    selected_option: null,
    confirmed: false,
    tip: "Metais pesados sao toxicos e entram na cadeia alimentar pela agua."
  },
  {
    q: "O que significa a sigla CRC?",
    opts: [
      "Centro de Recuperacao de Componentes",
      "Centro de Recondicionamento de Computadores",
      "Conselho Regional de Computacao",
      "Comite de Reciclagem de Comunicacao"
    ],
    answer: 1,
    selected_option: null,
    confirmed: false,
    tip: "CRCs recuperam equipamentos usados para pontos de inclusao digital."
  },
  {
    q: "Alem de recuperar maquinas, qual o impacto social de um CRC?",
    opts: [
      "Apenas a venda de pecas baratas para empresas de TI.",
      "A criacao de novos modelos de smartphones para o governo.",
      "A formacao profissional de jovens e a democratizacao do acesso a tecnologia.",
      "O desenvolvimento de jogos eletronicos para competicoes."
    ],
    answer: 2,
    selected_option: null,
    confirmed: false,
    tip: "Os CRCs funcionam como escolas de tecnologia para a comunidade."
  },
  {
    q: "Qual e a primeira etapa quando um equipamento chega a um CRC?",
    opts: [
      "E enviado imediatamente para a trituracao de metais.",
      "E higienizado e passa por uma triagem para avaliar conserto ou reciclagem.",
      "E colocado a venda em uma loja fisica da ONG.",
      "E desmontado e jogado em um tanque de agua."
    ],
    answer: 1,
    selected_option: null,
    confirmed: false,
    tip: "A triagem decide se o aparelho sera recondicionado ou reciclado."
  },
  {
    q: "O trabalho da Programando o Futuro faz parte da 'Economia Circular'. O que isso significa?",
    opts: [
      "Uma economia baseada apenas na troca de moedas digitais.",
      "Um sistema onde o lucro circula apenas entre grandes empresas.",
      "Um modelo que foca em reduzir, reutilizar e reciclar materiais o maior tempo possivel.",
      "A venda de produtos em lojas de formato arredondado."
    ],
    answer: 2,
    selected_option: null,
    confirmed: false,
    tip: "A economia circular evita o descarte e foca no reaproveitamento constante."
  },
  {
    q: "Para onde vao os computadores recondicionados pela Programando o Futuro?",
    opts: [
      "Para o lixo reciclavel da prefeitura.",
      "Para pontos de inclusao digital, escolas publicas, bibliotecas e telecentros.",
      "Sao vendidos para outros paises como equipamentos novos.",
      "Sao transformados em brinquedos de plastico."
    ],
    answer: 1,
    selected_option: null,
    confirmed: false,
    tip: "O objetivo e levar tecnologia a quem nao tem acesso."
  },
  {
    q: "Como o cidadao pode participar da logistica reversa da Programando o Futuro?",
    opts: [
      "Deixando o lixo eletronico na calcada comum.",
      "Guardando aparelhos velhos em casa para sempre.",
      "Levando os aparelhos a um Ponto de Entrega Voluntaria (PEV).",
      "Desmontando os aparelhos e jogando as pecas no esgoto."
    ],
    answer: 2,
    selected_option: null,
    confirmed: false,
    tip: "PEVs sao locais corretos para descarte de eletronicos."
  },
  {
    q: "Quais sao os principais cursos gratuitos oferecidos pela Programando o Futuro?",
    opts: [
      "Manutencao de PCs e celulares, Informatica, Design, Marketing, Excel e IA.",
      "Design de moda, gastronomia e gestao hoteleira.",
      "Engenharia civil pesada e operacao de maquinas de mineracao.",
      "Marketing politico e investimentos na bolsa."
    ],
    answer: 0,
    selected_option: null,
    confirmed: false,
    tip: "Os cursos capacitam para o mercado de trabalho e para a sustentabilidade."
  }
];

const TOTAL_PERGUNTAS = perguntas.length;
const SUPABASE_URL = "https://oyzvubeeimcpccvhoyvx.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95enZ1YmVlaW1jcGNjdmhveXZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0ODE3ODEsImV4cCI6MjA5MDA1Nzc4MX0.4i9nIM-s39PtL5hJ37ReFHAF_P7yfoecnJF7dkl4-Sc";
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let studentName = "";
let current = 0;
let answers = new Array(TOTAL_PERGUNTAS).fill(null);
let selections = new Array(TOTAL_PERGUNTAS).fill(null);

function checkName() {
  const value = document.getElementById("student-name").value.trim();
  document.getElementById("start-btn").disabled = value.length < 2;
}

function startQuiz() {
  studentName = document.getElementById("student-name").value.trim();
  if (studentName.length < 2) return;
  document.getElementById("name-screen").style.display = "none";
  document.getElementById("quiz-wrap").style.display = "block";
  renderQ();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQ() {
  const q = perguntas[current];
  const selected = selections[current];
  const confirmed = answers[current] !== null;
  const userAnswer = answers[current];

  document.getElementById("prog-frac").textContent = `${current + 1} / ${TOTAL_PERGUNTAS}`;
  document.getElementById("prog-fill").style.width = `${((current + 1) / TOTAL_PERGUNTAS) * 100}%`;

  let html = `<div class="q-block">
    <div class="q-num">${String(current + 1).padStart(2, "0")}</div>
    <div class="q-text">${q.q}</div>
    <div class="options">`;

  q.opts.forEach((opt, i) => {
    let cls = "";
    if (confirmed) {
      if (i === q.answer) cls = "correct";
      else if (i === userAnswer) cls = "wrong";
    } else if (selected === i) {
      cls = "selected";
    }
    html += `<button class="opt-btn ${cls}" ${confirmed ? "disabled" : ""} onclick="pick(${i})">
      <span class="opt-letter">${LETTERS[i]}</span>
      <span class="opt-text">${opt}</span>
    </button>`;
  });

  html += `</div>`;
  if (confirmed) {
    const ok = userAnswer === q.answer;
    html += `<div class="feedback ${ok ? "" : "wrong-fb"}" style="display:block">
      <strong>${ok ? "✓ Correto!" : "✗ Incorreto."}</strong> ${q.tip}
    </div>`;
  }
  html += `</div>`;

  document.getElementById("q-container").innerHTML = html;
  document.getElementById("btn-prev").disabled = current === 0;

  const nextBtn = document.getElementById("btn-next");
  if (!confirmed) {
    nextBtn.textContent = "Confirmar Resposta";
    nextBtn.onclick = confirmCurrent;
    nextBtn.disabled = selected === null;
  } else if (current === TOTAL_PERGUNTAS - 1) {
    nextBtn.textContent = "Ver resultado";
    nextBtn.onclick = showResult;
    nextBtn.disabled = false;
  } else {
    nextBtn.textContent = "Proxima Pergunta";
    nextBtn.onclick = () => navigate(1);
    nextBtn.disabled = false;
  }

  let dotsHtml = "";
  perguntas.forEach((_, i) => {
    const answeredCls = answers[i] !== null ? "answered" : "";
    const activeCls = i === current ? " active" : "";
    dotsHtml += `<div class="dot ${answeredCls}${activeCls}" onclick="jumpTo(${i})"></div>`;
  });
  document.getElementById("dots").innerHTML = dotsHtml;
}

function pick(i) {
  if (answers[current] !== null) return;
  selections[current] = i;
  renderQ();
}

function confirmCurrent() {
  if (answers[current] !== null) return;
  if (selections[current] === null) return;
  answers[current] = selections[current];
  renderQ();
}

function jumpTo(i) {
  current = i;
  renderQ();
}

function navigate(d) {
  const next = current + d;
  if (next < 0 || next >= TOTAL_PERGUNTAS) return;
  current = next;
  renderQ();
}

async function showResult() {
  const correct = answers.filter((a, i) => a === perguntas[i].answer).length;
  const wrong = TOTAL_PERGUNTAS - correct;
  const percent = Math.round((correct / TOTAL_PERGUNTAS) * 100);
  const nota = Number(((correct / TOTAL_PERGUNTAS) * 10).toFixed(1));

  const { error } = await supabaseClient.from("resultados").insert([{
    nome: studentName.trim(),
    acertos: correct,
    erros: wrong,
    nota,
    respostas: [...answers],
    turma: professorAtual
  }]);
  if (error) {
    console.error(error);
    const detail = [error.message, error.details, error.hint].filter(Boolean).join(" | ");
    alert(`Nao foi possivel salvar no banco de dados.\n\n${detail}\n\nO resultado sera exibido localmente.`);
  }

  document.getElementById("quiz-wrap").style.display = "none";
  document.getElementById("result-wrap").style.display = "block";
  document.getElementById("result-score").textContent = `${percent}%`;
  document.getElementById("result-text").textContent =
    `${studentName}, voce acertou ${correct} de ${TOTAL_PERGUNTAS} perguntas (nota ${nota.toFixed(1)}).`;
}