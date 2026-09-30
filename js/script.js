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

const whatsUrl = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

// ===== Links de WhatsApp =====
document.querySelectorAll('[data-whats]').forEach((el) => {
    el.href = whatsUrl(el.dataset.whats);
});

// ===== Abas casa / empresa =====
document.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach((t) => {
            t.classList.toggle('active', t === tab);
            t.setAttribute('aria-selected', t === tab);
        });
        document.querySelectorAll('.tab-panel').forEach((panel) => {
            panel.classList.toggle('active', panel.id === `tab-${tab.dataset.tab}`);
        });
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
document.querySelectorAll('.card, .app, .quick, .speed-text, .speed-counter, .business').forEach((el) => {
    el.classList.add('reveal');
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

document.getElementById('cepForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if (cepInput.value.replace(/\D/g, '').length !== 8) {
        cepInput.focus();
        cepInput.placeholder = 'CEP inválido';
        cepInput.value = '';
        return;
    }
    window.open(whatsUrl(`Olá! Gostaria de verificar a cobertura da TIM Ultrafibra no CEP ${cepInput.value}.`), '_blank');
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
    const termo = normalizar(citySearch.value.trim());
    let total = 0;

    citiesEl.innerHTML = ESTADOS
        .filter((e) => ufAtivo === 'todos' || e.uf === ufAtivo)
        .map(({ estado, uf, lista }) => {
            const filtradas = lista.filter((c) => normalizar(c).includes(termo));
            if (!filtradas.length) return '';
            total += filtradas.length;
            const qtd = `${filtradas.length} ${filtradas.length === 1 ? 'cidade' : 'cidades'}`;

            return `
                <div class="uf">
                    <div class="uf-head"><b>${uf}</b><strong>${estado}</strong><small>${qtd}</small></div>
                    <ul>${filtradas.map((c) => `<li>${destacar(c, termo)}</li>`).join('')}</ul>
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
