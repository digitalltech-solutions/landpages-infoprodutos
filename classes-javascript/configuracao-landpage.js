function tamanhoBody(){
    if(window.innerWidth > 595){
        window.document.getElementById('container-select-opcoes').style.display = 'none'
        window.document.getElementById('menu-mobile').style.display = 'none'
        window.document.querySelectorAll('.sub-menu-padrao').forEach((elementos) => {
            elementos.style.display = 'none'
        })
    }else{
        window.document.getElementById('menu-mobile').style.display = 'none'
    }
}

// Configuração do Modo Dark

function eventoModoDark() {
    let caixa1 = document.getElementById('caixa-dark');
    let caixa2 = document.getElementById('caixa-dark-dois');

    caixa2.checked = caixa1.checked;

    if(caixa1.checked == true){

        window.document.getElementById('icone-ecommerce-dois-mobile').src = '../recursos/imagens/icone-ecommerce-claro.png'
        window.document.getElementById('estilo-weight').style.color = '#ffffff'

        window.document.querySelectorAll('.configurar-fundo-dark').forEach((elementosDark) => {
            elementosDark.style.backgroundColor = '#303030'
        })

        window.document.querySelectorAll('.configurar-fundo-dark-dois').forEach((elementosDark) => {
            elementosDark.style.backgroundColor = '#242424'
        })

        window.document.querySelectorAll('.configurar-icone-dark').forEach((elementosDark) => {
            elementosDark.style.color = '#303030'
            elementosDark.style.display = 'block'
        })

        window.document.querySelectorAll('.configurar-icone-light').forEach((elementosDark) => {
            elementosDark.style.display = 'none'
        })

        // Configuração Dark

        // Site Modo Escuro (Desktop):
        window.document.getElementById('icone-empresa').src = "../recursos/imagens/icone-empresa-dark.jpg"
        window.document.getElementsByTagName('body')[0].style.backgroundColor = 'black'
        window.document.getElementById('configurar-header-mobile').style.backgroundColor = 'black'
        window.document.querySelectorAll('.estilo-texto-modo-dark').forEach((elementosDark) => {
            elementosDark.style.color = '#7F7F7F'
        })
        window.document.querySelectorAll('.estilo-fundo-modo-dark-um').forEach((elementosDark) => {
            elementosDark.style.backgroundColor = '#303030'
        })

        window.document.querySelectorAll('.estilo-fundo-modo-dark-dois').forEach((elementosDark) => {
            elementosDark.style.backgroundColor = 'black'
        })

        window.document.getElementById('estilo-borda-dark-um').style.borderColor = '#7F7F7F'
        window.document.getElementById('estilo-borda-dark-dois').style.borderColor = '#7F7F7F'

        window.document.querySelectorAll('.estilo-borda-dark').forEach((elementos) =>{
            elementos.style.borderColor = '#303030'
        })

        window.document.querySelectorAll('.destaque-padrao').forEach((elementos) =>{
            elementos.style.color = '#004aad'
        })

        window.document.querySelectorAll('.texto-padrao-dois').forEach((elementos) =>{
            elementos.style.color = '#ffffff'
        })

        window.document.querySelectorAll('.configurar-fundo-branco').forEach((elementos) =>{
            elementos.style.backgroundColor = '#000000ffff'
        })

        window.document.querySelectorAll('.estilo-botao-dark-um').forEach((botoes) =>{
            botoes.style.backgroundColor = '#303030'
            botoes.style.color = '#ffffff'
        })

        window.document.querySelectorAll('.estilo-botao-dark-dois').forEach((botoes) =>{
            botoes.style.backgroundColor = 'transparent'
            botoes.style.borderColor = '#ffffff'
            botoes.style.color = '#ffffff'
        })

        window.document.getElementById('icone-mobile').src = '../recursos/imagens/icone-digitalltech-mobile-dark.jpg'
        window.document.getElementById('imagem-carrossel-um').src = '../recursos/imagens/card-mensagem-um-dark.jpg'
        window.document.getElementById('imagem-carrossel-dois').src = '../recursos/imagens/card-mensagem-dois-dark.jpg'
        window.document.getElementById('imagem-carrossel-tres').src = '../recursos/imagens/card-mensagem-tres-dark.jpg'
        window.document.getElementById('icone-ecommerce').src = '../recursos/imagens/icone-ecommerce-claro.png'
        window.document.getElementById('icone-empresa-acessibilidade').src = '../recursos/imagens/icone-ecommerce-claro.png'
        window.document.getElementById('icone-empresa-compartilhar').src = '../recursos/imagens/icone-ecommerce-claro.png'
        window.document.getElementById('input-comentario').style.backgroundColor = 'black'
        window.document.getElementById('nome-usuario').style.backgroundColor = 'black'

        window.document.querySelectorAll('.elementos-fundo-borda').forEach((elementos) => {
            elementos.style.backgroundColor = 'black'
            elementos.style.borderColor = '#7F7F7F'
            elementos.style.color = '#ffffff'
        })

    }else{
        window.location = window.location.href.split('#')[0];
    }
}

function eventoModoDarkDois() {
    let caixa1 = document.getElementById('caixa-dark');
    let caixa2 = document.getElementById('caixa-dark-dois');

    caixa1.checked = caixa2.checked;

    
    if(caixa1.checked == true){

        window.document.getElementById('icone-ecommerce-dois-mobile').src = '../recursos/imagens/icone-ecommerce-claro.png'
        window.document.getElementById('estilo-weight').style.color = '#ffffff'

        window.document.querySelectorAll('.configurar-fundo-dark').forEach((elementosDark) => {
            elementosDark.style.backgroundColor = '#303030'
        })

        window.document.querySelectorAll('.configurar-fundo-dark-dois').forEach((elementosDark) => {
            elementosDark.style.backgroundColor = '#242424'
        })
        
        window.document.querySelectorAll('.configurar-icone-dark').forEach((elementosDark) => {
            elementosDark.style.color = '#303030'
            elementosDark.style.display = 'block'
        })

        window.document.querySelectorAll('.configurar-icone-light').forEach((elementosDark) => {
            elementosDark.style.display = 'none'
        })

        // Configuração Dark

        // Site Modo Escuro (Desktop):
        window.document.getElementById('icone-empresa').src = "../recursos/imagens/icone-empresa-dark.jpg"
        window.document.getElementsByTagName('body')[0].style.backgroundColor = 'black'
        window.document.getElementById('configurar-header-mobile').style.backgroundColor = 'black'
        window.document.querySelectorAll('.estilo-texto-modo-dark').forEach((elementosDark) => {
            elementosDark.style.color = '#7F7F7F'
        })
        window.document.querySelectorAll('.estilo-fundo-modo-dark-um').forEach((elementosDark) => {
            elementosDark.style.backgroundColor = '#303030'
        })

        window.document.querySelectorAll('.estilo-fundo-modo-dark-dois').forEach((elementosDark) => {
            elementosDark.style.backgroundColor = 'black'
        })

        window.document.getElementById('estilo-borda-dark-um').style.borderColor = '#7F7F7F'
        window.document.getElementById('estilo-borda-dark-dois').style.borderColor = '#7F7F7F'

        window.document.querySelectorAll('.estilo-borda-dark').forEach((elementos) =>{
            elementos.style.borderColor = '#303030'
        })

        window.document.querySelectorAll('.destaque-padrao').forEach((elementos) =>{
            elementos.style.color = '#004aad'
        })

        window.document.querySelectorAll('.texto-padrao-dois').forEach((elementos) =>{
            elementos.style.color = '#ffffff'
        })

        window.document.querySelectorAll('.configurar-fundo-branco').forEach((elementos) =>{
            elementos.style.backgroundColor = '#000000ffff'
        })

        window.document.querySelectorAll('.estilo-botao-dark-um').forEach((botoes) =>{
            botoes.style.backgroundColor = '#303030'
            botoes.style.color = '#ffffff'
        })

        window.document.querySelectorAll('.estilo-botao-dark-dois').forEach((botoes) =>{
            botoes.style.backgroundColor = 'transparent'
            botoes.style.borderColor = '#ffffff'
            botoes.style.color = '#ffffff'
        })

        window.document.getElementById('imagem-carrossel-um').src = '../recursos/imagens/card-mensagem-um-dark.jpg'
        window.document.getElementById('imagem-carrossel-dois').src = '../recursos/imagens/card-mensagem-dois-dark.jpg'
        window.document.getElementById('icone-empresa-acessibilidade').src = '../recursos/imagens/icone-ecommerce-claro.png'
        window.document.getElementById('imagem-carrossel-tres').src = '../recursos/imagens/card-mensagem-tres-dark.jpg'
        window.document.getElementById('icone-mobile').src = '../recursos/imagens/icone-digitalltech-mobile-dark.jpg'
        window.document.getElementById('icone-empresa-compartilhar').src = '../recursos/imagens/icone-ecommerce-claro.png'
        window.document.getElementById('icone-ecommerce').src = '../recursos/imagens/icone-ecommerce-claro.png'
        window.document.getElementById('input-comentario').style.backgroundColor = 'black'
        window.document.getElementById('nome-usuario').style.backgroundColor = 'black'

        window.document.querySelectorAll('.elementos-fundo-borda').forEach((elementos) => {
            elementos.style.backgroundColor = 'black'
            elementos.style.borderColor = '#7F7F7F'
            elementos.style.color = '#ffffff'
        })
    }else{
        window.location = window.location.href.split('#')[0];
    }
}

function eventoSubmenuGrupos(){
    if(document.getElementById('config-submenu-grupos').style.display == 'flex'){
        window.document.getElementById('config-submenu-grupos').style.display = 'none'
        window.document.getElementById('config-icone-arrow-drop-down').innerHTML = "&#x25BE;"
    }else{
        window.document.getElementById('config-submenu-grupos').style.display = 'flex'
        window.document.getElementById('config-icone-arrow-drop-down').innerHTML = "&#x25B4;"
    }
}

function eventoCategoria(){
    if(document.getElementById('configuracao-categoria-infoprodutos').style.display == 'flex'){
        window.document.getElementById('configuracao-categoria-infoprodutos').style.display = 'none'
        window.document.getElementById('config-icone-arrow-drop-down-zero').innerHTML = "&#x25BE;"
    }else{
        window.document.getElementById('configuracao-categoria-infoprodutos').style.display = 'flex'
        window.document.getElementById('config-icone-arrow-drop-down-zero').innerHTML = "&#x25B4;"
    }
}

// Configuração de menu sobre

function eventoSobre(){
    if(document.getElementById('configuracao-menu-sobre').style.display == 'flex'){
        window.document.getElementById('configuracao-menu-sobre').style.display = 'none'
        window.document.getElementById('configuracao-menu-blog').style.display = 'none'
        window.document.getElementById('config-icone-arrow-drop-down-dois').innerHTML = "&#x25BE;"
        window.document.getElementById('config-icone-arrow-drop-down-tres').innerHTML = "&#x25BE;"

    }else{
        window.document.getElementById('configuracao-menu-sobre').style.display = 'flex'
        window.document.getElementById('config-icone-arrow-drop-down-dois').innerHTML = "&#x25B4;"
        window.document.getElementById('configuracao-menu-blog').style.display = 'none'
        window.document.getElementById('config-icone-arrow-drop-down-tres').innerHTML = "&#x25BE;"
    }
}

// Configuração de menu blog

function eventoBlog(){
    if(document.getElementById('configuracao-menu-blog').style.display == 'flex'){
        window.document.getElementById('configuracao-menu-blog').style.display = 'none'
        window.document.getElementById('configuracao-menu-sobre').style.display = 'none'
        window.document.getElementById('config-icone-arrow-drop-down-dois').innerHTML = "&#x25BE;"
        window.document.getElementById('config-icone-arrow-drop-down-tres').innerHTML = "&#x25BE;"
    }else{
        window.document.getElementById('configuracao-menu-blog').style.display = 'flex'
        window.document.getElementById('configuracao-menu-sobre').style.display = 'none'
        window.document.getElementById('config-icone-arrow-drop-down-dois').innerHTML = "&#x25BE;"
        window.document.getElementById('config-icone-arrow-drop-down-dois').innerHTML = "&#x25BE;"
        window.document.getElementById('config-icone-arrow-drop-down-tres').innerHTML = "&#x25B4;"
    }
}

// Carrossel de cards

let container = window.document.getElementById('container-imagem-dois')
let imagensCard = window.document.querySelectorAll('.imagens-mensagem-card')
let xCard = 0

function carrosselSecundario(){
    xCard ++
    if(xCard > imagensCard.length - 1){
        xCard = 0
    }
    container.style.transform = `translateX(${-xCard * 100}%)`
    container.style.transition = '1s'
}

setInterval(carrosselSecundario, 6000)

let indice = 1

function elementosSpan(){
    indice++

    if(indice == 1){
        window.document.getElementById('config-espan-um').style.background = '#00F39F'
        window.document.getElementById('config-espan-tres').style.background = '#ffffff'
    }else if(indice == 2){
        window.document.getElementById('config-espan-dois').style.background = '#00F39F'
        window.document.getElementById('config-espan-um').style.background = '#ffffff'
    }else if(indice == 3){
        window.document.getElementById('config-espan-tres').style.background = '#00F39F'
        window.document.getElementById('config-espan-dois').style.background = '#ffffff'
        indice = 0
    }
}

setInterval(elementosSpan, 6000)

//CONFIGURAÇÃO MODAL DE FUNÇÃO INDISPONÍVEL:
// Configuracão do modal indisponível transparente

function eventoModalAparente(){
    window.document.getElementById('configurar-display-modal-indisponivel').style.display = 'flex'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
}

// Configuracão do modal indisponível oculto

function eventoModalOculto(){
    window.document.getElementById('configurar-display-modal-indisponivel').style.display = 'none'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'auto'
}

// Evento open menu mobile

function eventoOpenMenu(){
    window.document.getElementById('menu-mobile').style.animationName = 'animacaoMenu'
    window.document.getElementById('menu-mobile').style.display = 'flex'
}

// Evento close menu mobile

function eventoClose(){
    window.document.getElementById('menu-mobile').style.animationName = 'animacaoMenuDois'
    window.document.querySelectorAll('.sub-menu-padrao').forEach((elementos) => {
            elementos.style.display = 'none'
    })
}

// Eventos subsubmenus

function eventoSubmenuSobre(){
    if(document.getElementById('submenu-sobre').style.display == 'block'){
        window.document.getElementById('submenu-sobre').style.display = 'none'
    }else{
        window.document.getElementById('submenu-sobre').style.display = 'block'
    }
}

// function eventoSubmenuResultados(){
//     window.location = '#'
// }

function eventoSubmenuServiços(){
    if(document.getElementById('submenu-serviços').style.display == 'block'){
        window.document.getElementById('submenu-serviços').style.display = 'none'
    }else{
        window.document.getElementById('submenu-serviços').style.display = 'block'
    }
}

function eventoSubmenuBlogs(){
    if(document.getElementById('submenu-blogs').style.display == 'block'){
        window.document.getElementById('submenu-blogs').style.display = 'none'
    }else{
        window.document.getElementById('submenu-blogs').style.display = 'block'
    }
}

function eventoSubmenuTermos(){
    if(document.getElementById('submenu-termos').style.display == 'block'){
        window.document.getElementById('submenu-termos').style.display = 'none'
    }else{
        window.document.getElementById('submenu-termos').style.display = 'block'
    }
}

function eventoSubmenuGruposDois(){
    if(document.getElementById('submenu-grupos').style.display == 'block'){
        window.document.getElementById('submenu-grupos').style.display = 'none'
    }else{
        window.document.getElementById('submenu-grupos').style.display = 'block'
    }
}

// Botões MOBILE Inferiores

function eventoLoja(){
    window.location = 'https://digitalltech.netlify.app'
}

function eventoDuvidas(){
    window.location = 'https://digitalltech.netlify.app/classehtml/duvidas'
}

//CONFIGURAÇÃO MODAL DE FUNÇÃO INDISPONÍVEL:
// Configuracão do modal indisponível transparente

function eventoModalAparente(){
    window.document.getElementById('configurar-display-modal-indisponivel').style.display = 'flex'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
}

// Configuracão do modal indisponível oculto

function eventoModalOculto(){
    window.document.getElementById('configurar-display-modal-indisponivel').style.display = 'none'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'auto'
}

function eventoCloseMenuDesktop(){
    window.document.getElementById('configuracao-menu-sobre').style.display = 'none'
}

// Configuracão do modal indisponível oculto

function eventoModalOcultoDois(){
    window.document.getElementById('configurar-display-modal-agradecimento').style.display = 'none'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'auto'
}

// Configuração da Apresentação de Imagem

var imageCapa = window.document.getElementById('capa-infoproduto')

var idImagemUm = window.document.getElementById('imagem-um').src
var idImagemDois = window.document.getElementById('imagem-dois').src
var idImagemTres = window.document.getElementById('imagem-tres').src
var idImagemQuatro = window.document.getElementById('imagem-quatro').src
var idImagemCinco = window.document.getElementById('imagem-sinco').src
var idImagemSeis = window.document.getElementById('imagem-seis').src

function eventoImagemUm(){
    imageCapa.src = idImagemUm
}

function eventoImagemDois(){
    imageCapa.src = idImagemDois
}

function eventoImagemTres(){
    imageCapa.src = idImagemTres
}

function eventoImagemQuatro(){
    imageCapa.src = idImagemQuatro
}

function eventoImagemCinco(){
    imageCapa.src = idImagemCinco
}

function eventoImagemSeis(){
    imageCapa.src = idImagemSeis
}

// Animação de Aparecimento

window.document.addEventListener('DOMContentLoaded', function(){
    var elementosPrimarios = window.document.querySelectorAll('.hidden-um')
    var observadorPrimario = new IntersectionObserver((observar) => {
        observar.forEach((cadaElemento) => {
            if(cadaElemento.isIntersecting){
                cadaElemento.target.classList.add('show-um')
            }
        })
    })
    
    elementosPrimarios.forEach((elementosPrimarios) => {observadorPrimario.observe(elementosPrimarios)})

    var elementosSecundarios = window.document.querySelectorAll('.hidden-dois')
    var observadorSecundario = new IntersectionObserver((observar) => {
        observar.forEach((cadaElemento) => {
            if(cadaElemento.isIntersecting){
                cadaElemento.target.classList.add('show-dois')
            }
        })
    })

    elementosSecundarios.forEach((elementosSecundarios) => {observadorSecundario.observe(elementosSecundarios)})
})

// Condição de Dispositivo Móvel

function dispositivoMovel(){
    return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent)
}

function eventoMovel(){
    if(dispositivoMovel() == true){
        window.location = 'mailto:digitalltech100@gmail.com'
    }else{
        window.location = 'https://mail.google.com/mail/?view=cm&fs=1&to=digitalltech100@gmail.com&su=Interesse%20em%20Produto%20ou%20Servi%C3%A7o%20-%20DigitallTech'
    }
}

// Evento Icone Empresa

function eventoEmpresa(){
    window.location = 'https://digitalltech.netlify.app'
}

// Configuração de Avaliação de 5 Estrelas

const stars = document.querySelectorAll('.stars input');
const ratingValue = document.getElementById('rating-value');

stars.forEach(star => {
  star.addEventListener('change', () => {
    alert("Você avaliou com " + star.value + " estrela" + (star.value > 1 ? "s" : ""));
  });
});

function eventoLimpar() {
  document.getElementById('input-comentario').value = '';
  document.getElementById('nome-usuario').value = '';
  
  stars.forEach(star => star.checked = false);
}

// Função de Comentário:

function eventoComentario(){
       // Atualiza o hash da URL sem concatenar
    window.location.hash = "comentarios";

    // Faz o scroll suave até a seção
    const alvo = document.getElementById("comentarios");
    if (alvo) {
        alvo.scrollIntoView({ behavior: "smooth" });
    }
}

// Configuração de Acessibilidades:

function eventoAfiliar(){
    window.location = "https://digitalltech.netlify.app/classehtml/saiba-vender-conosco"
}

function eventoResultados(){
    window.location = "https://digitalltech.netlify.app/classehtml/nossos-resultados"
}

function eventoGratis(){
    window.location = "https://digitalltech.netlify.app/classehtml/gratis"
}

function eventoServicos(){
    window.location = "https://digitalltech.netlify.app/classehtml/serviços"
}

function eventoYoutube(){
    window.location = "youtube.com"
}

function eventoAcessibilidadeOpen(){
    window.document.getElementById('configurar-display-acessivilidade').style.display = 'flex'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
}

function eventoCloseAcessibilidade(){
    window.document.getElementById('configurar-display-acessivilidade').style.display = 'none'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'auto'
}

function eventoModoDislexia(){
    if(window.document.getElementById('dislexia').checked == true){
        // Aplicação da Fonte Tipográfica em Todas as Tags
        
        window.document.querySelectorAll('p, h1, h2, h3, li, a, input, button, sub, sup, textarea, del, .estilo-acessibilidade-dislexia').forEach((elementosDislexia) => {
            elementosDislexia.style.fontFamily = 'fonte-dislexia'
        })

        window.document.getElementById('avaliacao').style.fontFamily = 'fonte-dislexia'
        window.document.getElementById('preco-atual').style.fontFamily = 'fonte-dislexia'
        window.document.getElementById('preco-antigo').style.fontFamily = 'fonte-dislexia'
    }else{
        window.document.querySelectorAll('p, h1, h2, h3, li, a, input, button, sub, sup, textarea, del, .estilo-acessibilidade-dislexia').forEach((elementos) => {
            elementos.style.removeProperty('font-family');
        });

        window.document.getElementById('avaliacao').style.removeProperty('font-family')
        window.document.getElementById('preco-atual').style.removeProperty('font-family')
        window.document.getElementById('preco-antigo').style.removeProperty('font-family')
    }
}

const coresOriginaisDeuteranopia = new Map(); // Armazena cores originais

function eventoModoDeuteranopia() {
  const isChecked = document.getElementById("deuteranopia")?.checked;

  function temVerde(cor) {
    if (!cor) return false;
    let rgb;

    if (cor.startsWith("rgb")) {
      rgb = cor.match(/\d+/g).map(Number);
      rgb = rgb.slice(0, 3);
    } else if (cor.startsWith("#")) {
      const bigint = parseInt(cor.slice(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      rgb = [r, g, b];
    } else {
      return false;
    }

    if (Array.isArray(rgb)) {
      const [r, g, b] = rgb;
      return g > 80 && g > r * 1.1 && g > b * 1.1; // verde predominante
    }
    return false;
  }

  const todosElementos = document.querySelectorAll("*");

  todosElementos.forEach((el) => {
    const style = window.getComputedStyle(el);

    // Salva estilos originais inline
    if (!coresOriginaisDeuteranopia.has(el)) {
      coresOriginaisDeuteranopia.set(el, {
        color: el.style.color,
        backgroundColor: el.style.backgroundColor,
        borderColor: el.style.borderColor,
        boxShadow: el.style.boxShadow,
        filter: el.style.filter, // salva filtro original (importante p/ imagens)
      });
    }

    if (isChecked) {
      if (temVerde(style.color)) el.style.color = "#000";
      if (temVerde(style.backgroundColor)) el.style.backgroundColor = "#000";
      if (temVerde(style.borderColor)) el.style.borderColor = "#000";

      if (style.boxShadow && style.boxShadow.includes("rgb")) {
        const sombras = style.boxShadow.match(/rgb[a]?\([^)]+\)/g);
        if (sombras && sombras.some(temVerde)) {
          el.style.boxShadow = "none";
        }
      }

      // Se for imagem, aplica filtro de cinza parcial
      if (el.tagName === "IMG") {
        el.style.filter = "grayscale(70%) brightness(95%)";
      }

    } else {
      // Restaurar estilos originais
      const orig = coresOriginaisDeuteranopia.get(el);
      el.style.color = orig.color;
      el.style.backgroundColor = orig.backgroundColor;
      el.style.borderColor = orig.borderColor;
      el.style.boxShadow = orig.boxShadow;
      el.style.filter = orig.filter;
    }
  });
}

const coresOriginaisTritanopia = new Map();

function eventoModoTritanopia() {
    const isChecked = document.getElementById('tritanopia')?.checked;

    // ---- helpers
    const BLUE_MIN = 70, DOMINANCE = 1.08;
    const isBlue = ([r, g, b]) => b >= BLUE_MIN && b > r * DOMINANCE && b > g * DOMINANCE;

    const hexToRgb = (hex) => {
        if (!hex) return null;
        let h = hex.replace('#', '').trim();
        if (h.length === 3) {
            return [
                parseInt(h[0] + h[0], 16),
                parseInt(h[1] + h[1], 16),
                parseInt(h[2] + h[2], 16),
            ];
        }
        if (h.length >= 6) {
            return [
                parseInt(h.slice(0, 2), 16),
                parseInt(h.slice(2, 4), 16),
                parseInt(h.slice(4, 6), 16),
            ];
        }
        return null;
    };

    const anyBlueIn = (value) => {
        if (!value) return false;
        if (Array.isArray(value)) return isBlue(value);
        if (typeof value !== 'string') return false;

        if (value.startsWith('#')) {
            const rgb = hexToRgb(value);
            return rgb ? isBlue(rgb) : false;
        }

        const re = /rgba?\(\s*(\d+)[^,\d]+(\d+)[^,\d]+(\d+)/g;
        let m;
        while ((m = re.exec(value))) {
            const r = +m[1], g = +m[2], b = +m[3];
            if (isBlue([r, g, b])) return true;
        }
        return false;
    };

    const setImp = (el, prop, val) => el.style.setProperty(prop, val, 'important');

    const nodes = document.querySelectorAll('*');
    let changed = 0;

    nodes.forEach((el) => {
        const cs = getComputedStyle(el);

        // ignora <img>
        if (el.tagName === 'IMG') return;

        if (!coresOriginaisTritanopia.has(el)) {
            coresOriginaisTritanopia.set(el, {
                color: el.style.color,
                backgroundColor: el.style.backgroundColor,
                borderTopColor: el.style.borderTopColor,
                borderRightColor: el.style.borderRightColor,
                borderBottomColor: el.style.borderBottomColor,
                borderLeftColor: el.style.borderLeftColor,
                outlineColor: el.style.outlineColor,
                boxShadow: el.style.boxShadow,
                textShadow: el.style.textShadow,
                fill: el.style.fill,
                stroke: el.style.stroke,
            });
        }

        if (isChecked) {
            if (anyBlueIn(cs.color))                { setImp(el, 'color', '#000'); changed++; }
            if (anyBlueIn(cs.backgroundColor))      { setImp(el, 'background-color', '#000'); changed++; }
            if (anyBlueIn(cs.borderTopColor))       { setImp(el, 'border-top-color', '#000'); changed++; }
            if (anyBlueIn(cs.borderRightColor))     { setImp(el, 'border-right-color', '#000'); changed++; }
            if (anyBlueIn(cs.borderBottomColor))    { setImp(el, 'border-bottom-color', '#000'); changed++; }
            if (anyBlueIn(cs.borderLeftColor))      { setImp(el, 'border-left-color', '#000'); changed++; }
            if (anyBlueIn(cs.outlineColor))         { setImp(el, 'outline-color', '#000'); changed++; }

            // SVG
            if (anyBlueIn(cs.fill))   { setImp(el, 'fill', '#000'); changed++; }
            if (anyBlueIn(cs.stroke)) { setImp(el, 'stroke', '#000'); changed++; }

            // sombras
            const bs = cs.boxShadow && cs.boxShadow.match(/rgb[a]?\([^)]+\)/g);
            if (bs && bs.some(anyBlueIn)) { setImp(el, 'box-shadow', 'none'); changed++; }

            const ts = cs.textShadow && cs.textShadow.match(/rgb[a]?\([^)]+\)/g);
            if (ts && ts.some(anyBlueIn)) { setImp(el, 'text-shadow', 'none'); changed++; }

        } else {
            const o = coresOriginaisTritanopia.get(el);
            if (!o) return;
            el.style.color = o.color;
            el.style.backgroundColor = o.backgroundColor;
            el.style.borderTopColor = o.borderTopColor;
            el.style.borderRightColor = o.borderRightColor;
            el.style.borderBottomColor = o.borderBottomColor;
            el.style.borderLeftColor = o.borderLeftColor;
            el.style.outlineColor = o.outlineColor;
            el.style.boxShadow = o.boxShadow;
            el.style.textShadow = o.textShadow;
            el.style.fill = o.fill;
            el.style.stroke = o.stroke;
        }
    });

    if (isChecked) {
        console.info(`[Tritanopia] Alterados: ${changed} elementos azuis neutralizados.`);
    } else {
        console.info('[Tritanopia] Estilos restaurados.');
    }
}

// listeners
document.addEventListener('DOMContentLoaded', () => {
    const cb = document.getElementById('tritanopia');
    if (cb) {
        cb.addEventListener('change', eventoModoTritanopia);
        eventoModoTritanopia(); // estado inicial
    } else {
        console.warn('Checkbox #tritanopia não encontrado.');
    }
});

const coresOriginais = new Map(); // Vai armazenar cores originais

function eventoModoTritanopia() {
    const isChecked = document.getElementById('tritanopia').checked;

    function temAzul(cor) {
        if (!cor) return false;
        let rgb = cor;

        if (cor.startsWith("rgb")) {
            rgb = cor.match(/\d+/g).map(Number); // [r, g, b]
        } else if (cor.startsWith("#")) {
            const bigint = parseInt(cor.slice(1), 16);
            const r = (bigint >> 16) & 255;
            const g = (bigint >> 8) & 255;
            const b = bigint & 255;
            rgb = [r, g, b];
        } else {
            return false;
        }

        if (Array.isArray(rgb)) {
            return rgb[2] > 50 && rgb[2] > rgb[0] && rgb[2] > rgb[1]; // azul predominante
        }
        return false;
    }

    const todosElementos = document.querySelectorAll("*");

    todosElementos.forEach(el => {
        const style = window.getComputedStyle(el);

        // Guardar cores originais apenas na primeira vez
        if (!coresOriginais.has(el)) {
            coresOriginais.set(el, {
                color: style.color,
                backgroundColor: style.backgroundColor,
                borderColor: style.borderColor,
                boxShadow: style.boxShadow
            });
        }

        if (isChecked) {
            if (temAzul(style.color)) el.style.color = "#555";
            if (temAzul(style.backgroundColor)) el.style.backgroundColor = "#ddd";
            if (temAzul(style.borderColor)) el.style.borderColor = "#999";
            if (style.boxShadow && style.boxShadow.includes("rgb")) {
                const shadowRgb = style.boxShadow.match(/\d+/g).map(Number);
                if (temAzul(shadowRgb)) el.style.boxShadow = "none";
            }
        } else {
            // Restaurar cores originais
            const orig = coresOriginais.get(el);
            el.style.color = orig.color;
            el.style.backgroundColor = orig.backgroundColor;
            el.style.borderColor = orig.borderColor;
            el.style.boxShadow = orig.boxShadow;
        }
    });
}

let vozAtiva = false;
let synth = window.speechSynthesis;
let ultimaSelecao = "";

// Ativar/desativar
function eventoModoVoz() {
    vozAtiva = document.getElementById("voz").checked;
    if (!vozAtiva) pararLeitura();
}

// Ler texto
function lerTexto(texto) {
    if (!texto || texto.trim() === "") return;
    if (texto === ultimaSelecao && synth.speaking) return;

    pararLeitura();
    ultimaSelecao = texto;

    let utterance = new SpeechSynthesisUtterance(texto.trim());
    utterance.lang = "pt-BR";
    synth.speak(utterance);
}

// Parar leitura
function pararLeitura() {
    if (synth.speaking || synth.pending) synth.cancel();
    ultimaSelecao = "";
}

// Detectar mudança de seleção
document.addEventListener("selectionchange", () => {
    if (!vozAtiva) return;

    const selecao = window.getSelection().toString().trim();
    if (selecao) {
        lerTexto(selecao);
    } else {
        pararLeitura();
    }
});

document.addEventListener("click", () => {
    if (!vozAtiva) return;
    if (!window.getSelection().toString().trim()) pararLeitura();
});

document.addEventListener("touchend", () => {
    if (!vozAtiva) return;
    if (!window.getSelection().toString().trim()) pararLeitura();
});


// Evento Compartilhar

function eventoOpenCompartilhar(){
    window.document.getElementById('configurar-display-compartilhar').style.display = 'flex'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
}

function eventoCloseCompartilhar(){
    window.document.getElementById('configurar-display-compartilhar').style.display = 'none'
    window.document.getElementsByTagName('body')[0].style.overflowY = 'auto'
}

// Eventos de Compartilhamento Dinâmico

function eventoImprimir(){
    window.print()
}

// Evento Enviar Dados do Formulário:

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario-comentario");
  if (!form) return;

  // Botão limpar
  window.eventoLimpar = function () { form.reset(); };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome        = document.getElementById("nome-usuario").value.trim();
    const comentario  = document.getElementById("input-comentario").value.trim();
    const infoproduto = document.title;
    const checked     = document.querySelector("input[name='rating']:checked");
    const estrelas    = checked ? checked.value : "0";
    const dataHora    = new Date().toLocaleString("pt-BR");

    // prepara dados para enviar
    const fd = new FormData();
    fd.append("nome",       nome);
    fd.append("feedback",   comentario);
    fd.append("infoproduto", infoproduto);
    fd.append("avaliacao",  estrelas);
    fd.append("dataHora",   dataHora);

    const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbzKQuPwax94NZYDTaOtKNo5sV_7om3sOYgnc09jSncebrAUF3PYnbcJMbfrjxG5m1o_/exec";

    try {
      const res = await fetch(URL_SCRIPT, { method: "POST", body: fd });
      if (!res.ok) throw new Error("HTTP " + res.status);

    //   let msg = "Feedback enviado com sucesso!";
      try {
        const json = await res.json();
        if (json && json.ok === false) msg = "Erro: " + (json.msg || "Falha no servidor");
      } catch (_) {}

    //   alert(msg);
      form.reset();
    } catch (err) {
      alert("Erro ao enviar: " + err.message);
      console.error(err);
    }
  });
});

function eventoEnviarComentario(){ 
    let nome = window.document.getElementById('nome-usuario').value
    let feedback = window.document.getElementById('input-comentario').value
    
    if(nome.length >= 3 && nome.length <= 30 && feedback.length >= 3 && feedback.length <= 1000){
        window.document.getElementById('configurar-display-modal-agradecimento').style.display = 'flex'
        window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
    }else{
        alert('Preencha os Dados Corretamente!')
    }
}

function eventoNewsletter(){
    let nome = window.document.getElementById('nome').value
    let gmail = window.document.getElementById('gmail').value
    let regExGmail = /^[a-zA-Z0-9._]+@gmail\.com$/
    
    if(nome.length >= 3 && regExGmail.test(gmail)){
        window.document.getElementById('configurar-display-modal-agradecimento').style.display = 'flex'
        window.document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
    }else{
        alert('Preencha os Dados Corretamente!')
    }
}

// Configuração JS para o envio na planilha Newsletter:
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyTtRMMI4yuJEILzxhQhJyYzlhCMz_rSgjYv1YhjpgYO63a3LTvgS440pLmKqblg3jq/exec";

  document.getElementById("newsletter-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome  = document.getElementById("nome").value.trim();
    const gmail = document.getElementById("gmail").value.trim();

    // 🔹 Origem = título da página
    const origem = document.title;

    // 🔹 Monta os parâmetros para enviar
    const params = new URLSearchParams({
      nome: nome,
      gmail: gmail,
      origem: origem,
      dispositivo: navigator.userAgent,
      data: new Date().toLocaleDateString("pt-BR"),
      hora: new Date().toLocaleTimeString("pt-BR")
    });

    fetch(SCRIPT_URL + "?" + params.toString(), { method: "GET" })
      .then(r => r.json())
      .then(res => {
        if (res.ok) {
          document.getElementById("newsletter-form").reset();
        } else {
          alert("❌ Erro: " + res.msg);
        }
      })
      .catch(err => {
        alert("⚠️ Falha na comunicação: " + err.message);
      });
  });

function eventoLogin(){
    window.location = "https://digitalltech.netlify.app/classehtml/login-digitalltech"
}