function tamanhoBody(){
    if(window.innerWidth > 595){
        window.document.getElementById('container-select-opcoes').style.display = 'none'
        window.document.getElementById('menu-mobile').style.display = 'none'
        window.document.querySelectorAll('.sub-menu-padrao').forEach((elementos) => {
            elementos.style.display = 'none'
        })
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