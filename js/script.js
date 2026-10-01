// ===== Configuração =====
// Troque pelo seu número (DDI + DDD + número, só dígitos)
const WHATSAPP = '5500000000000';

const PLANOS = {
    'plano-1': {
        nome: 'Empresarial · Válido para todo o Brasil',
        velocidade: '1 GIGA',
        banda: ['1000 Mbps de download', '500 Mbps de upload'],
        destaques: [],
        inclusos: ['Audiobooks', 'Aya Ensinah', 'EXA Segurança'],
        preco: ['99', ',99'],
        fatura: 'R$ 109,99',
        mensagem: 'Olá! Quero assinar o plano empresarial TIM Ultrafibra 1 Giga - Oferta Foco (R$99,99/mês).'
    },
    'plano-2': {
        nome: 'Oferta foco',
        velocidade: '800 MEGA',
        banda: ['800 Mbps de download', '400 Mbps de upload'],
        destaques: ['YouTube Premium'],
        inclusos: ['EXA Segurança', 'Audiobooks', 'Aya Ensinah'],
        preco: ['129', ',99'],
        fatura: 'R$ 139,99',
        mensagem: 'Olá! Quero assinar o plano TIM Ultrafibra 800 Mega + YouTube Premium (R$129,99/mês).'
    },
    'plano-3': {
        nome: 'Internet Fibra',
        velocidade: '1 GIGA',
        banda: ['1000 Mbps de download', '500 Mbps de upload'],
        destaques: [],
        inclusos: ['Bancah', 'Audiobooks', 'EXA Segurança', 'Aya Ensinah', 'Aya Idiomas', 'GamesClub'],
        preco: ['129', ',99'],
        fatura: 'R$ 139,99',
        mensagem: 'Olá! Quero assinar o plano TIM Ultrafibra 1 Giga (R$129,99/mês).'
    },
    'plano-4': {
        nome: 'Internet Fibra',
        velocidade: '1 GIGA',
        banda: ['1000 Mbps de download', '500 Mbps de upload'],
        destaques: ['Paramount+'],
        inclusos: ['Bancah', 'Audiobooks', 'Aya Ensinah', 'Aya Idiomas', 'EXA Segurança'],
        preco: ['149', ',99'],
        fatura: 'R$ 159,99',
        mensagem: 'Olá! Quero assinar o plano TIM Ultrafibra 1 Giga + Paramount+ (R$149,99/mês).'
    },
    'plano-5': {
        nome: 'Internet Fibra',
        velocidade: '1 GIGA',
        banda: ['1000 Mbps de download', '500 Mbps de upload'],
        destaques: ['HBO Max'],
        inclusos: ['Bancah', 'Audiobooks', 'Aya Ensinah', 'Aya Idiomas', 'EXA Segurança'],
        preco: ['159', ',99'],
        fatura: 'R$ 169,99',
        mensagem: 'Olá! Quero assinar o plano TIM Ultrafibra 1 Giga + HBO Max (R$159,99/mês).'
    },
    'plano-6': {
        nome: 'Internet Fibra | Premium',
        velocidade: '2 GIGA',
        banda: ['2000 Mbps de download', '1000 Mbps de upload'],
        destaques: ['Paramount+', 'HBO Max', 'Globoplay'],
        inclusos: ['Bancah', 'Audiobooks', 'EXA Segurança', 'Aya Ensinah', 'Aya Idiomas', 'Looke', 'EXA Saúde', 'GamesClub'],
        preco: ['369', ',99'],
        fatura: 'R$ 379,99',
        mensagem: 'Olá! Quero assinar o plano TIM Ultrafibra 2 Giga + Paramount+, HBO Max e Globoplay (R$369,99/mês).'
    }
};

const CIDADES = {
    'Amazonas': { uf: 'AM', lista: ['Itacoatiara'] },
    'Goiás': { uf: 'GO', lista: ['Abadia de Goiás', 'Águas Lindas de Goiás', 'Anápolis', 'Aparecida de Goiânia', 'Catalão', 'Cidade Ocidental', 'Formosa', 'Goiânia', 'Inhumas', 'Jaraguá', 'Jataí', 'Luziânia', 'Morrinhos', 'Novo Gama', 'Planaltina', 'Rio Verde', 'Santo Antônio do Descoberto', 'Senador Canedo', 'Trindade', 'Valparaíso de Goiás'] },
    'Maranhão': { uf: 'MA', lista: ['Imperatriz', 'Paço do Lumiar', 'Santa Inês', 'São José de Ribamar', 'São Luís', 'Timon'] },
    'Mato Grosso': { uf: 'MT', lista: ['Barra do Garças', 'Cáceres', 'Cuiabá', 'Juína', 'Pontes e Lacerda', 'Primavera do Leste', 'Rondonópolis', 'Sinop', 'Tangará da Serra', 'Várzea Grande'] },
    'Mato Grosso do Sul': { uf: 'MS', lista: ['Campo Grande', 'Corumbá', 'Dourados', 'Inocência', 'Maracaju'] },
    'Pará': { uf: 'PA', lista: ['Ananindeua', 'Belém', 'Breves', 'Castanhal', 'Marabá', 'Porto de Moz', 'Tailândia'] },
    'Rondônia': { uf: 'RO', lista: ['Cacoal', 'Jaru', 'Ji-Paraná', 'Ouro Preto do Oeste', 'Pimenta Bueno', 'Porto Velho', 'Rolim de Moura', 'Vilhena'] },
    'Tocantins': { uf: 'TO', lista: ['Gurupi', 'Palmas', 'Paraíso do Tocantins', 'Porto Nacional'] }
};

// Faixa de CEP por cidade. Chave: 'Cidade|UF'. Valores obtidos de endereços reais
// do Correios (via ViaCEP): min–max dos CEPs amostrados de cada município. É uma
// faixa aproximada da cidade; para o CEP exato de um endereço, use a consulta de CEP.
const CEPS = {
    'Itacoatiara|AM': '69100-003 a 69112-970',
    'Abadia de Goiás|GO': '75320-590 a 75328-192',
    'Águas Lindas de Goiás|GO': '72910-016 a 72928-024',
    'Anápolis|GO': '75020-000 a 75145-280',
    'Aparecida de Goiânia|GO': '74905-112 a 74993-522',
    'Catalão|GO': '75701-055 a 75714-971',
    'Cidade Ocidental|GO': '72880-001 a 72897-902',
    'Formosa|GO': '73801-060 a 73818-971',
    'Goiânia|GO': '74025-045 a 74887-044',
    'Inhumas|GO': '75400-020 a 75408-320',
    'Jaraguá|GO': '76320-005 a 76330-000',
    'Jataí|GO': '75800-009 a 75809-003',
    'Luziânia|GO': '72800-025 a 72855-883',
    'Morrinhos|GO': '75650-006 a 75656-562',
    'Novo Gama|GO': '72860-001 a 72867-232',
    'Planaltina|GO': '73750-005 a 73756-509',
    'Rio Verde|GO': '75900-041 a 75914-972',
    'Santo Antônio do Descoberto|GO': '72900-015 a 72907-084',
    'Senador Canedo|GO': '75250-062 a 75264-754',
    'Trindade|GO': '75380-289 a 75394-162',
    'Valparaíso de Goiás|GO': '72870-014 a 72879-305',
    'Imperatriz|MA': '65900-315 a 65919-435',
    'Paço do Lumiar|MA': '65130-000 a 65130-992',
    'Santa Inês|MA': '65300-019 a 65307-188',
    'São José de Ribamar|MA': '65111-326 a 65125-661',
    'São Luís|MA': '65010-220 a 65095-670',
    'Timon|MA': '65630-030 a 65638-820',
    'Barra do Garças|MT': '78600-017 a 78608-971',
    'Cáceres|MT': '78200-003 a 78218-155',
    'Cuiabá|MT': '78005-070 a 78099-554',
    'Juína|MT': '78320-000 a 78322-970',
    'Pontes e Lacerda|MT': '78250-000 a 78250-970',
    'Primavera do Leste|MT': '78850-000 a 78850-972',
    'Rondonópolis|MT': '78700-002 a 78750-834',
    'Sinop|MT': '78549-702 a 78559-897',
    'Tangará da Serra|MT': '78300-011 a 78307-539',
    'Várzea Grande|MT': '78110-004 a 78168-970',
    'Campo Grande|MS': '79002-020 a 79118-680',
    'Corumbá|MS': '79300-060 a 79362-970',
    'Dourados|MS': '79800-003 a 79843-346',
    'Inocência|MS': '79580-001 a 79584-026',
    'Maracaju|MS': '79150-004 a 79158-046',
    'Ananindeua|PA': '67010-140 a 67146-610',
    'Belém|PA': '66010-030 a 66920-490',
    'Breves|PA': '68800-000 a 68801-244',
    'Castanhal|PA': '68740-181 a 68746-780',
    'Marabá|PA': '68498-001 a 68514-972',
    'Porto de Moz|PA': '68330-000 a 68330-970',
    'Tailândia|PA': '68695-000 a 68695-970',
    'Cacoal|RO': '76960-154 a 76969-088',
    'Jaru|RO': '76890-000 a 76897-970',
    'Ji-Paraná|RO': '76900-026 a 76914-842',
    'Ouro Preto do Oeste|RO': '76920-000 a 76920-971',
    'Pimenta Bueno|RO': '76970-000 a 76970-970',
    'Porto Velho|RO': '76801-022 a 76829-756',
    'Rolim de Moura|RO': '76940-000 a 76940-970',
    'Vilhena|RO': '76980-282 a 76988-096',
    'Gurupi|TO': '77402-011 a 77445-490',
    'Palmas|TO': '77001-002 a 77090-024',
    'Paraíso do Tocantins|TO': '77540-002 a 77547-574',
    'Porto Nacional|TO': '77500-060 a 77516-768'
};

const whatsUrl = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

// ===== Links de WhatsApp =====
document.querySelectorAll('[data-whats]').forEach((el) => {
    el.href = whatsUrl(el.dataset.whats);
});

// ===== Cabeçalho com sombra ao rolar =====
const header = document.querySelector('.header');
const atualizarHeader = () => header.classList.toggle('scrolled', window.scrollY > 10);
window.addEventListener('scroll', atualizarHeader, { passive: true });
atualizarHeader();

// ===== Abas casa / empresa =====
const tabsEl = document.querySelector('.tabs');

// indicador que desliza até a aba ativa
function moverIndicador() {
    const ativa = tabsEl.querySelector('.tab.active');
    tabsEl.style.setProperty('--x', `${ativa.offsetLeft}px`);
    tabsEl.style.setProperty('--w', `${ativa.offsetWidth}px`);
    tabsEl.classList.add('ready');
}

window.addEventListener('resize', moverIndicador);
window.addEventListener('load', moverIndicador);
document.fonts.ready.then(moverIndicador);
// recalcula se as abas mudarem de tamanho (fonte carregando, rotação da tela...)
if ('ResizeObserver' in window) new ResizeObserver(moverIndicador).observe(tabsEl);
moverIndicador();

document.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach((t) => {
            t.classList.toggle('active', t === tab);
            t.setAttribute('aria-selected', t === tab);
        });
        document.querySelectorAll('.tab-panel').forEach((panel) => {
            panel.classList.toggle('active', panel.id === `tab-${tab.dataset.tab}`);
        });
        moverIndicador();
    });
});

// ===== Luz que segue o mouse nos cards =====
document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
});

// ===== Modal "Mais detalhes" =====
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');

function abrirModal(id) {
    const p = PLANOS[id];
    if (!p) return;

    const lista = (itens) => itens.map((i) => `<li>${i}</li>`).join('');
    const streaming = p.destaques.length
        ? `<h4>Streaming incluso</h4><ul class="checks">${lista(p.destaques)}</ul>`
        : '';

    modalContent.innerHTML = `
        <div class="modal-head">
            <small>${p.nome}</small>
            <h3 id="modalTitle">${p.velocidade}</h3>
            <p>${p.banda.join(' · ')}</p>
        </div>
        <div class="modal-body">
            ${streaming}
            <h4>Também incluso</h4>
            <ul class="checks">${lista(p.inclusos)}</ul>
            <small>Por apenas</small>
            <div class="price">
                <span class="cur">R$</span><span class="int">${p.preco[0]}</span><span class="dec">${p.preco[1]}<em>/mês</em></span>
            </div>
            <p class="alt-price">com pagamento via DACC · Fatura ou Pix: <strong>${p.fatura}</strong></p>
            <p class="disclaimer">*A velocidade de conexão pode variar conforme fatores externos, condições do local, distância e número de dispositivos conectados. Oferta sujeita à viabilidade técnica.</p>
            <a class="btn btn-accent btn-lg" href="${whatsUrl(p.mensagem)}" target="_blank" rel="noopener">Aproveitar oferta</a>
        </div>
    `;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function fecharModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

document.querySelectorAll('[data-modal]').forEach((btn) => {
    btn.addEventListener('click', () => abrirModal(btn.dataset.modal));
});

document.getElementById('modalClose').addEventListener('click', fecharModal);
modal.addEventListener('click', (e) => { if (e.target === modal) fecharModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') fecharModal(); });

// ===== Título com efeito de digitação =====
const typing = document.getElementById('typing');
const palavras = typing.dataset.words.split('|');
let palavra = 0;
let letra = 0;
let apagando = false;

function digitar() {
    const atual = palavras[palavra];
    letra += apagando ? -1 : 1;
    typing.textContent = atual.slice(0, letra);

    let espera = apagando ? 50 : 100;

    if (!apagando && letra === atual.length) {
        apagando = true;
        espera = 1600;
    } else if (apagando && letra === 0) {
        apagando = false;
        palavra = (palavra + 1) % palavras.length;
        espera = 300;
    }

    setTimeout(digitar, espera);
}

digitar();

// ===== Contador de velocidade =====
function animarContador(el) {
    const alvo = Number(el.dataset.target);
    const duracao = 1800;
    const inicio = performance.now();

    function passo(agora) {
        const t = Math.min((agora - inicio) / duracao, 1);
        const suave = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(alvo * suave);
        if (t < 1) requestAnimationFrame(passo);
    }

    requestAnimationFrame(passo);
}

// ===== Animações ao rolar =====
const alvosReveal = '.tabs, .card, .app, .quick, .typing-title, .section-sub, .speed-text, .speed-counter, .business, .coverage-inner > *, .section-head, .cities-stats, .cities-toolbar, .footer-col';

document.querySelectorAll(alvosReveal).forEach((el) => {
    el.classList.add('reveal');
    // escalona irmãos que entram juntos (cards, apps, colunas)
    const irmaos = [...el.parentElement.children].filter((c) => c.matches(alvosReveal));
    el.style.setProperty('--d', `${(irmaos.indexOf(el) % 5) * 90}ms`);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        entry.target.querySelectorAll('.counter').forEach(animarContador);
        observer.unobserve(entry.target);
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// ===== Consulta de CEP =====
const cepInput = document.getElementById('cep');

cepInput.addEventListener('input', () => {
    const digitos = cepInput.value.replace(/\D/g, '').slice(0, 8);
    cepInput.value = digitos.length > 5 ? `${digitos.slice(0, 5)}-${digitos.slice(5)}` : digitos;
});

const cepResult = document.getElementById('cepResult');

const mostrarCep = (html, classe) => {
    cepResult.hidden = false;
    cepResult.className = `cep-result ${classe}`;
    cepResult.innerHTML = html;
};

// Faixas de cobertura derivadas do mapa CEPS (verificação offline, sem depender de API).
// Compara pelo prefixo de 5 dígitos do CEP, que identifica a região/cidade.
const faixasCobertura = Object.entries(CEPS).map(([chave, faixa]) => {
    const [cidade, uf] = chave.split('|');
    const prefixos = (faixa.match(/\d{5}/g) || []).map(Number);
    return { cidade, uf, min: Math.min(...prefixos), max: Math.max(...prefixos) };
});

const cidadeDoCep = (cep8) => {
    const prefixo = Number(cep8.slice(0, 5));
    return faixasCobertura.find((f) => prefixo >= f.min && prefixo <= f.max) || null;
};

document.getElementById('cepForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const cep = cepInput.value.replace(/\D/g, '');
    if (cep.length !== 8) {
        cepInput.focus();
        mostrarCep('Digite um CEP válido, com 8 dígitos.', 'no');
        return;
    }

    const cepFmt = `${cep.slice(0, 5)}-${cep.slice(5)}`;
    const cidade = cidadeDoCep(cep);

    if (cidade) {
        const wpp = whatsUrl(`Olá! Confirmei que o CEP ${cepFmt} (${cidade.cidade}/${cidade.uf}) está na área de cobertura. Quero contratar a TIM Ultrafibra.`);
        mostrarCep(`Boa notícia! A TIM Ultrafibra atende <strong>${cidade.cidade}/${cidade.uf}</strong>. <a href="${wpp}" target="_blank" rel="noopener">Contratar pelo WhatsApp</a>`, 'ok');
    } else {
        const wpp = whatsUrl(`Olá! Gostaria de verificar a disponibilidade da TIM Ultrafibra no CEP ${cepFmt}.`);
        mostrarCep(`Ainda não identificamos cobertura para o CEP <strong>${cepFmt}</strong>. Novas cidades entram com frequência — <a href="${wpp}" target="_blank" rel="noopener">confirme com um consultor</a>.`, 'no');
    }
});

// ===== Cidades atendidas =====
const citiesEl = document.getElementById('cities');
const citiesEmpty = document.getElementById('citiesEmpty');
const citySearch = document.getElementById('citySearch');
const ufFilter = document.getElementById('ufFilter');

const normalizar = (t) => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const ordenar = (a, b) => a.localeCompare(b, 'pt-BR');

// estados em ordem alfabética, cidades em ordem alfabética
const ESTADOS = Object.entries(CIDADES)
    .map(([estado, { uf, lista }]) => ({ estado, uf, lista: [...lista].sort(ordenar) }))
    .sort((a, b) => ordenar(a.estado, b.estado));

let ufAtivo = 'todos';

document.getElementById('statCidades').textContent = ESTADOS.reduce((t, e) => t + e.lista.length, 0);
document.getElementById('statEstados').textContent = ESTADOS.length;

function destacar(nome, termo) {
    if (!termo) return nome;
    const i = normalizar(nome).indexOf(termo);
    if (i < 0) return nome;
    return `${nome.slice(0, i)}<mark>${nome.slice(i, i + termo.length)}</mark>${nome.slice(i + termo.length)}`;
}

function renderFiltro() {
    const botoes = [{ uf: 'todos', estado: 'Todos', total: null }, ...ESTADOS.map((e) => ({ ...e, total: e.lista.length }))];
    ufFilter.innerHTML = botoes.map((b) => `
        <button class="uf-btn${b.uf === ufAtivo ? ' active' : ''}" data-uf="${b.uf}" role="tab" aria-selected="${b.uf === ufAtivo}" title="${b.estado}">
            ${b.uf === 'todos' ? 'Todos' : b.uf}${b.total ? `<small>${b.total}</small>` : ''}
        </button>
    `).join('');
}

function renderCidades() {
    const termo = normalizar(citySearch.value.trim().replace(/\s+/g, ' '));
    let total = 0;
    let ordem = 0;

    citiesEl.innerHTML = ESTADOS
        .filter((e) => ufAtivo === 'todos' || e.uf === ufAtivo)
        .map(({ estado, uf, lista }) => {
            const filtradas = lista.filter((c) => normalizar(c).includes(termo));
            if (!filtradas.length) return '';
            total += filtradas.length;
            const qtd = `${filtradas.length} ${filtradas.length === 1 ? 'cidade' : 'cidades'}`;

            return `
                <div class="uf" style="--i:${termo ? 0 : ordem++}">
                    <div class="uf-head"><b>${uf}</b><strong>${estado}</strong><small>${qtd}</small></div>
                    <ul>${filtradas.map((c) => `<li><span class="cidade-nome">${destacar(c, termo)}</span>${CEPS[`${c}|${uf}`] ? `<span class="cidade-cep">${CEPS[`${c}|${uf}`]}</span>` : ''}</li>`).join('')}</ul>
                </div>
            `;
        }).join('');

    citiesEmpty.hidden = total > 0;
}

ufFilter.addEventListener('click', (e) => {
    const btn = e.target.closest('.uf-btn');
    if (!btn) return;
    ufAtivo = btn.dataset.uf;
    renderFiltro();
    renderCidades();
});

citySearch.addEventListener('input', () => {
    // ao buscar, procura em todos os estados
    if (citySearch.value && ufAtivo !== 'todos') {
        ufAtivo = 'todos';
        renderFiltro();
    }
    renderCidades();
});

renderFiltro();
renderCidades();

// ===== Ano no rodapé =====
document.getElementById('year').textContent = new Date().getFullYear();


// ===== Checkout / Contratação =====
const checkout = document.getElementById('checkout');
const checkoutForm = document.getElementById('checkoutForm');
const checkoutPlan = document.getElementById('checkoutPlan');
let planoAtual = null;

// --- Máscaras ---
const soDigitos = (v) => v.replace(/\D/g, '');

function mascaraCPF(v) {
    v = soDigitos(v).slice(0, 11);
    return v
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function mascaraData(v) {
    v = soDigitos(v).slice(0, 8);
    return v.replace(/(\d{2})(\d)/, '$1/$2').replace(/(\d{2})\/(\d{2})(\d)/, '$1/$2/$3');
}

function mascaraCEP(v) {
    v = soDigitos(v).slice(0, 8);
    return v.length > 5 ? `${v.slice(0, 5)}-${v.slice(5)}` : v;
}

const campo = (id) => document.getElementById(id);

campo('ck-cpf').addEventListener('input', (e) => { e.target.value = mascaraCPF(e.target.value); });
campo('ck-nasc').addEventListener('input', (e) => { e.target.value = mascaraData(e.target.value); });
campo('ck-cep').addEventListener('input', (e) => { e.target.value = mascaraCEP(e.target.value); });
campo('ck-estado').addEventListener('input', (e) => { e.target.value = e.target.value.replace(/[^a-zA-Z]/g, '').toUpperCase().slice(0, 2); });

// --- Validações ---
function cpfValido(cpf) {
    cpf = soDigitos(cpf);
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    const digito = (fatia, pesoInicial) => {
        let soma = 0;
        for (let i = 0; i < fatia.length; i++) soma += Number(fatia[i]) * (pesoInicial - i);
        const resto = (soma * 10) % 11;
        return resto === 10 ? 0 : resto;
    };
    return digito(cpf.slice(0, 9), 10) === Number(cpf[9]) && digito(cpf.slice(0, 10), 11) === Number(cpf[10]);
}

function dataValida(v) {
    const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(v);
    if (!m) return false;
    const d = Number(m[1]), mes = Number(m[2]), ano = Number(m[3]);
    const dt = new Date(ano, mes - 1, d);
    if (dt.getFullYear() !== ano || dt.getMonth() !== mes - 1 || dt.getDate() !== d) return false;
    const idade = (Date.now() - dt) / (365.25 * 24 * 3600 * 1000);
    return idade >= 18 && idade <= 120;
}

function marcarErro(input, erro) {
    input.classList.toggle('invalid', erro);
    return !erro;
}

// Valida os campos obrigatórios de uma etapa; foca o primeiro inválido
function validarEtapa(n) {
    const campos = checkoutForm.querySelectorAll(`.checkout-step[data-step="${n}"] [required]`);
    let ok = true;
    let primeiro = null;
    campos.forEach((input) => {
        let erro = !input.value.trim();
        if (!erro && input.id === 'ck-cpf') erro = !cpfValido(input.value);
        if (!erro && input.id === 'ck-nasc') erro = !dataValida(input.value);
        if (!erro && input.id === 'ck-cep') erro = soDigitos(input.value).length !== 8;
        if (!marcarErro(input, erro) && !primeiro) primeiro = input;
        ok = ok && !erro;
    });
    if (primeiro) primeiro.focus();
    return ok;
}

// limpa o erro ao corrigir
checkoutForm.addEventListener('input', (e) => { if (e.target.matches('.invalid')) e.target.classList.remove('invalid'); });

// --- Busca de CEP (ViaCEP) preenche a etapa 2 ---
const cepHint = document.getElementById('cepHint');

function mostrarHint(texto, classe) {
    cepHint.hidden = !texto;
    cepHint.textContent = texto;
    cepHint.className = `field-hint ${classe || ''}`;
}

async function buscarCEP() {
    const cep = soDigitos(campo('ck-cep').value);
    if (cep.length !== 8) return;
    mostrarHint('Buscando endereço...', 'load');
    try {
        const resp = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const dados = await resp.json();
        if (dados.erro) { mostrarHint('CEP não encontrado. Preencha o endereço manualmente.', 'err'); return; }
        if (dados.uf) campo('ck-estado').value = dados.uf;
        if (dados.localidade) campo('ck-cidade').value = dados.localidade;
        if (dados.bairro) campo('ck-bairro').value = dados.bairro;
        if (dados.logradouro) campo('ck-rua').value = dados.logradouro;
        mostrarHint('Endereço localizado! Confira os dados na próxima etapa.', 'ok');
    } catch {
        mostrarHint('Não foi possível consultar o CEP agora. Preencha manualmente.', 'err');
    }
}

campo('ck-cep').addEventListener('blur', buscarCEP);
campo('ck-cep').addEventListener('input', (e) => {
    if (soDigitos(e.target.value).length === 8) buscarCEP(); else mostrarHint('', '');
});

// --- Navegação entre etapas ---
function irParaEtapa(n) {
    checkoutForm.querySelectorAll('.checkout-step').forEach((f) => {
        f.classList.toggle('active', f.dataset.step === String(n));
    });
    document.querySelectorAll('.step-dot').forEach((d) => {
        const num = Number(d.dataset.dot);
        d.classList.toggle('active', num === n);
        d.classList.toggle('done', num < n);
    });
    checkout.querySelector('.checkout-form-col').scrollTop = 0;
}

checkoutForm.querySelector('[data-next]').addEventListener('click', () => {
    if (validarEtapa(1)) irParaEtapa(2);
});
checkoutForm.querySelector('[data-prev]').addEventListener('click', () => irParaEtapa(1));

// --- Renderiza o plano escolhido na coluna da direita ---
function renderPlano(id) {
    const p = PLANOS[id];
    if (!p) return;
    const destaques = p.destaques.map((d) => `<li class="alt">${d}</li>`).join('');
    const inclusos = p.inclusos.map((i) => `<li>${i}</li>`).join('');
    checkoutPlan.innerHTML = `
        <span class="plan-tag">Plano escolhido</span>
        <h4>${p.nome}</h4>
        <div class="plan-speed">${p.velocidade}</div>
        <div class="plan-band">${p.banda.join(' · ')}</div>
        <div>
            <div class="plan-price">
                <span class="cur">R$</span><span class="int">${p.preco[0]}</span><span class="dec">${p.preco[1]}<em>/mês no DACC</em></span>
            </div>
            <p class="plan-alt">Fatura ou Pix: ${p.fatura}/mês</p>
        </div>
        <ul class="plan-list">${destaques}${inclusos}</ul>
        <p class="plan-disclaimer">Oferta sujeita à viabilidade técnica no endereço informado. Valores e condições podem mudar.</p>
    `;
}

// --- Abrir / fechar ---
function abrirCheckout(id) {
    if (!PLANOS[id]) return;
    planoAtual = id;
    renderPlano(id);
    checkoutForm.reset();
    checkoutForm.querySelectorAll('.invalid').forEach((el) => el.classList.remove('invalid'));
    mostrarHint('', '');
    irParaEtapa(1);
    checkout.classList.add('open');
    checkout.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => campo('ck-nome').focus(), 350);
}

function fecharCheckout() {
    checkout.classList.remove('open');
    checkout.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

document.querySelectorAll('[data-assinar]').forEach((btn) => {
    btn.addEventListener('click', () => abrirCheckout(btn.dataset.assinar));
});

document.getElementById('checkoutClose').addEventListener('click', fecharCheckout);
checkout.addEventListener('click', (e) => { if (e.target === checkout) fecharCheckout(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && checkout.classList.contains('open')) fecharCheckout(); });

// --- Envio: monta o resumo e encaminha para o WhatsApp ---
checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validarEtapa(1)) { irParaEtapa(1); return; }
    if (!validarEtapa(2)) return;

    const v = (id) => campo(id).value.trim();
    const p = PLANOS[planoAtual];
    const linhaEndereco = [
        v('ck-rua') && `Rua ${v('ck-rua')}`,
        v('ck-numero') && `nº ${v('ck-numero')}`,
        v('ck-quadra') && `Qd ${v('ck-quadra')}`,
        v('ck-lote') && `Lt ${v('ck-lote')}`,
        v('ck-complemento')
    ].filter(Boolean).join(', ');

    const msg = [
        `*Nova solicitação de contratação*`,
        ``,
        `*Plano:* ${p.velocidade} — ${p.nome}`,
        `*Valor:* R$ ${p.preco[0]}${p.preco[1]}/mês (DACC)`,
        ``,
        `*Nome:* ${v('ck-nome')}`,
        `*CPF:* ${v('ck-cpf')}`,
        `*Nascimento:* ${v('ck-nasc')}`,
        `*CEP:* ${v('ck-cep')}`,
        `*Estado/Cidade:* ${v('ck-estado')} / ${v('ck-cidade')}`,
        `*Bairro:* ${v('ck-bairro')}`,
        `*Endereço:* ${linhaEndereco}`
    ].join('\n');

    window.open(whatsUrl(msg), '_blank');
    fecharCheckout();
});



// ===== Consentimento de cookies =====
(() => {
    const KEY = 'cookieConsent';
    const banner = document.getElementById('cookieBanner');
    const prefs = document.getElementById('cookiePrefs');
    if (!banner || !prefs) return;

    const toggles = prefs.querySelectorAll('input[data-cat]');

    const ler = () => {
        try { return JSON.parse(localStorage.getItem(KEY)); } catch { return null; }
    };
    const salvar = (consent) => {
        try { localStorage.setItem(KEY, JSON.stringify({ ...consent, ts: Date.now() })); } catch {}
    };

    const abrir = (m) => {
        m.classList.add('open');
        m.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };
    const fechar = (m) => {
        m.classList.remove('open');
        m.setAttribute('aria-hidden', 'true');
        if (!document.querySelector('.cookie-modal.open')) document.body.style.overflow = '';
    };

    // Ponto de integração: carregue scripts de análise/publicidade conforme o consentimento.
    // Ex.: if (consent.ads) { /* Meta Pixel */ } if (consent.analytics) { /* Analytics */ }
    const aplicar = () => {};

    const sincronizarToggles = () => {
        const c = ler() || {};
        toggles.forEach((t) => { t.checked = !!c[t.dataset.cat]; });
    };

    const decidir = (consent) => {
        salvar(consent);
        aplicar(consent);
        banner.hidden = true;
        fechar(prefs);
    };

    // Mostra o banner apenas se ainda não houve decisão
    if (!ler()) banner.hidden = false;

    // Abre as preferências ao chegar de outra página pelo link "Gerenciar preferências" (#cookies)
    if (location.hash === '#cookies') { sincronizarToggles(); abrir(prefs); }

    document.addEventListener('click', (e) => {
        const t = e.target.closest('[data-cookie-accept],[data-cookie-reject],[data-cookie-prefs],[data-cookie-save],[data-cookie-close]');
        if (!t) return;

        if (t.hasAttribute('data-cookie-accept')) {
            decidir({ analytics: true, functional: true, ads: true });
        } else if (t.hasAttribute('data-cookie-reject')) {
            toggles.forEach((x) => { x.checked = false; });
            decidir({ analytics: false, functional: false, ads: false });
        } else if (t.hasAttribute('data-cookie-save')) {
            const consent = {};
            toggles.forEach((x) => { consent[x.dataset.cat] = x.checked; });
            decidir(consent);
        } else if (t.hasAttribute('data-cookie-prefs')) {
            sincronizarToggles();
            abrir(prefs);
        } else if (t.hasAttribute('data-cookie-close')) {
            fechar(prefs);
        }
    });

    // Fecha os modais ao clicar fora ou com ESC (o banner permanece até a decisão)
    document.querySelectorAll('.cookie-modal').forEach((m) => {
        m.addEventListener('click', (e) => { if (e.target === m) fechar(m); });
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') document.querySelectorAll('.cookie-modal.open').forEach(fechar);
    });
})();
