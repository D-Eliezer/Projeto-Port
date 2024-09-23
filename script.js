
function menu() {

    let header = document.getElementById('cabeca');

    let hamburgue = document.getElementById('hamburgue');

    let info = document.getElementById('info');

    if (info.style.top === '-80px' || info.style.top === ''){

        info.style.top = '110px'
        info.style.opacity = '1'
        info.style.transition = 'top 0.7s ease, opacity 1s ease'

        header.style.height = '280px'
        header.style.transition = 'height 0.7s ease'

        hamburgue.style.top = '140px'
        hamburgue.src = 'imagens/seta-para-cima.png'
        hamburgue.style.transition = 'top 0.9s ease'

    } else {info.style.top ='-80px'
            info.style.opacity = '0'
            info.style.transition = 'opacity 1s ease, top 1s ease'

            header.style.height = '150px'
            header.style.transition = 'height 0.7s ease'

            hamburgue.style.top = '0px';
            hamburgue.src = 'imagens/menu.png';
            hamburgue.style.transition = 'top 0.8s ease';
    
    }
}