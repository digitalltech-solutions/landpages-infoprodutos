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

function eventoModoDark(){
    let caixaDark = document.getElementById('caixa-dark') 
    let iconeModoClaro = document.getElementById('configuracao-modo-claro')
    let iconeModoEscuro = document.getElementById('configuracao-modo-escuro')
    if(caixaDark.checked){
        iconeModoClaro.style.display = 'none'
        iconeModoEscuro.style.display = 'block'
    }else{
        iconeModoClaro.style.display = 'block'
        iconeModoEscuro.style.display = 'none'
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
        window.location = 'digitalltech100@gmail.com'
    }else{
        window.location = 'https://mail.google.com/mail/?view=cm&fs=1&to=digitalltech100@gmail.com&su=Interesse%20em%20Produto%20ou%20Servi%C3%A7o%20-%20DigitallTech'
    }
}

// Evento Icone Empresa

function eventoEmpresa(){
    window.location = 'https://digitalltech.netlify.app'
}