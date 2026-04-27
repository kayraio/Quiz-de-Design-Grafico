// 1. Configuração do Supabase
const SUPABASE_URL = 'https://oyzvubeeimcpccvhoyvx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95enZ1YmVlaW1jcGNjdmhveXZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ0ODE3ODEsImV4cCI6MjA5MDA1Nzc4MX0.4i9nIM-s39PtL5hJ37ReFHAF_P7yfoecnJF7dkl4-Sc';

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 2. O Array de Perguntas (Padronizado como 'questions')
const questions = [
  {
    q: "O que caracteriza o conceito de 'Logística Reversa' no contexto do lixo eletrônico?",
    opts: ["Fabricar peças biodegradáveis.", "Envio de novos para lojas.", "Retorno de descartados ao ciclo produtivo para descarte correto.", "Venda de usados em leilão."],
    answer: 2, tip: "Garante que o resíduo volte para quem sabe tratá-lo."
  },
  {
    q: "Qual é o principal objetivo da ONG Programando o Futuro ao gerir os CRCs?",
    opts: ["Venda de peças de luxo.", "Inclusão digital e preservação ambiental.", "Desenvolver IAs.", "Exportar lixo."],
    answer: 1, tip: "Foco em transformar lixo em cidadania."
  },
  {
    q: "No contexto dos CRCs, como podemos definir a 'Metarreciclagem'?",
    opts: ["Desintegração química.", "Uso de robôs.", "Apropriação tecnológica que transforma lixo em ferramenta social.", "Curso de design."],
    answer: 2, tip: "Reciclar a função do objeto para a comunidade."
  },
  {
    q: "O que acontece com os componentes eletrônicos que não podem mais ser consertados?",
    opts: ["Aterros comuns.", "Indústrias especializadas em reciclagem de matérias-primas.", "Queimados.", "Museus."],
    answer: 1, tip: "São separados para reciclagem industrial."
  },
  {
    q: "Por que o descarte de eletrônicos no lixo comum é perigoso?",
    opts: ["Explosão solar.", "Metais pesados tóxicos que contaminam solo e água.", "Insetos.", "Ocupa espaço."],
    answer: 1, tip: "Metais pesados contaminam a cadeia alimentar."
  },
  {
    q: "O que significa a sigla CRC?",
    opts: ["Recuperação de Componentes", "Centro de Recondicionamento de Computadores", "Conselho Regional", "Comitê de Reciclagem"],
    answer: 1, tip: "Recuperam máquinas para inclusão digital."
  },
  {
    q: "Além de recuperar máquinas, qual o impacto social de um CRC?",
    opts: ["Venda de peças.", "Novos modelos.", "Formação profissional e democratização do acesso à tecnologia.", "Games."],
    answer: 2, tip: "São escolas de tecnologia para a comunidade."
  },
  {
    q: "Qual é a primeira etapa quando um equipamento chega a um CRC?",
    opts: ["Trituração.", "Higienização e triagem.", "Venda direta.", "Tanque de água."],
    answer: 1, tip: "A triagem decide se o aparelho será consertado ou reciclado."
  },
  {
    q: "O trabalho da ONG faz parte da 'Economia Circular'. O que é isso?",
    opts: ["Troca de moedas.", "Lucro de empresas.", "Modelo de reduzir, reutilizar e reciclar materiais.", "Lojas redondas."],
    answer: 2, tip: "Foca no reaproveitamento constante."
  },
  {
    q: "Para onde vão os computadores recondicionados?",
    opts: ["Lixo da prefeitura.", "Escolas públicas, bibliotecas e telecentros.", "Venda externa.", "Brinquedos."],
    answer: 1, tip: "O destino é a inclusão digital."
  },
  {
    q: "Como o cidadão participa da logística reversa da ONG?",
    opts: ["Lixo na calçada.", "Guardar em casa.", "Levando os aparelhos a um PEV.", "Jogar no esgoto."],
    answer: 2, tip: "PEVs são os locais corretos para descarte."
  },
  {
    q: "Quais são os principais cursos gratuitos oferecidos pela Programando o Futuro?",
    opts: ["Manutenção de PCs, Informática, Design e IA.", "Moda.", "Engenharia.", "Bolsa de valores."],
    answer: 0, tip: "Cursos focados em tecnologia e trabalho."
  },
  {
    q: "O que é 'Obsolescência Programada'?",
    opts: ["Programar rápido.", "Produtos com vida curta para forçar nova compra.", "Curso de hardware.", "Antivírus."],
    answer: 1, tip: "A recondicionamento combate esse desperdício."
  }
];

let current = 0;
let score = 0;
let studentName = "";
let answers = new Array(questions.length).fill(null);
let selections = new Array(questions.length).fill(null);

// 3. Funções de Início
function checkName() {
    const v = document.getElementById('student-name').value.trim();
    document.getElementById('start-btn').disabled = v.length < 2;
}

function startQuiz() {
    studentName = document.getElementById('student-name').value.trim();
    document.getElementById('name-screen').style.display = 'none';
    document.getElementById('quiz-wrap').style.display = 'block';
    renderQ();
}

// 4. Renderização (Lógica de Navegação Corrigida)
function renderQ() {
    const q = questions[current];
    const confirmed = answers[current] !== null;

    document.getElementById('prog-frac').textContent = `${current + 1} / ${questions.length}`;
    document.getElementById('prog-fill').style.width = `${((current + 1) / questions.length) * 100}%`;

    let html = `<div class="q-block">
        <div class="q-num">0${current + 1}</div>
        <div class="q-text">${q.q}</div>
        <div class="options">`;

    q.opts.forEach((opt, i) => {
        let cls = '';
        if (confirmed) {
            if (i === q.answer) cls = 'correct';
            else if (i === answers[current]) cls = 'wrong';
            else cls = 'dimmed';
        } else if (selections[current] === i) {
            cls = 'selected';
        }
        html += `<button class="opt-btn ${cls}" ${confirmed ? 'disabled' : ''} onclick="pick(${i})">
            <span class="opt-text">${opt}</span>
        </button>`;
    });

    html += `</div></div>`;
    document.getElementById('q-container').innerHTML = html;

    // Lógica do Botão Principal
    const nextBtn = document.getElementById('btn-next');
    if (!confirmed) {
        nextBtn.textContent = "Confirmar Resposta";
        nextBtn.onclick = confirmCurrent;
        nextBtn.disabled = selections[current] === null;
    } else if (current === questions.length - 1) {
        nextBtn.textContent = "Ver Resultado";
        nextBtn.onclick = showResult; // AQUI ESTÁ O GATILHO DO RESULTADO
    } else {
        nextBtn.textContent = "Próxima Pergunta";
        nextBtn.onclick = () => { current++; renderQ(); };
    }
}

function pick(i) {
    if (answers[current] === null) {
        selections[current] = i;
        renderQ();
    }
}

function confirmCurrent() {
    answers[current] = selections[current];
    if (answers[current] === questions[current].answer) score++;
    renderQ();
}

// 5. Exibição do Resultado e Envio ao Banco
async function showResult() {
    const pct = Math.round((score / questions.length) * 100);
    
    // Esconde o Quiz e mostra o Resultado
    document.getElementById('quiz-wrap').style.display = 'none';
    document.getElementById('result-wrap').style.display = 'block';
    
    document.getElementById('r-score').textContent = `${pct}%`;
    document.getElementById('r-pct').textContent = `Você acertou ${score} de ${questions.length} questões.`;

    // Envio ao Supabase (Atenção aos nomes das colunas: nome e nota)
    try {
        const { error } = await supabaseClient.from('resultados').insert({
            nome: studentName,
            nota: pct
        });
        if (error) throw error;
        console.log("Salvo com sucesso!");
    } catch (err) {
        console.error("Erro ao salvar:", err.message);
    }
}

function restart() { window.location.reload(); }