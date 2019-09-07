function init() {
    let box = window.document.querySelector('div#box1')
    let img = window.document.querySelector('img#img')
    let txt2 = window.document.querySelector('div#horas')
    var data = new Date()
    let horaAtual = data.getHours()
    let minAtual = data.getMinutes()

    setInterval(() => {
            minAtual += 1
            if (minAtual == 60) {
                minAtual = 0

                horaAtual += 1
                if (horaAtual == 24) {
                    horaAtual = 0
                }
            }

            minAtual < 10 ? txt2.innerHTML = `Agora são ${horaAtual}:0${minAtual} ` : txt2.innerHTML = `Agora são ${horaAtual}:${minAtual} `
                //dia
            if (horaAtual >= 5 && horaAtual <= 15) {
                img.src = 'image/8bitday.png'
                img.alt = "Nesse momento, o sol irradia a cidade de Recife"
                document.body.style.background = '#44AAAD'
                    //fim de tarde
            } else if (horaAtual >= 16 && horaAtual <= 18) {
                img.src = 'image/8bitmorning.png'
                img.alt = "O pôr do sol no oeste anuncia a noite na região metropolitana"
                document.body.style.background = '#db8c74'
                    //noite
            } else {
                img.src = 'image/8bitnight.png'
                img.alt = "O luar da noite reflete sobre as praias de Recife"
                document.body.style.background = '#3f638f'
            }
        }, 60000) //1 min

    minAtual < 10 ? txt2.innerHTML = `Agora são ${horaAtual}:0${minAtual} ` : txt2.innerHTML = `Agora são ${horaAtual}:${minAtual} `


    //dia
    if (horaAtual >= 5 && horaAtual <= 15) {
        img.src = 'image/8bitday.png'
        img.alt = "Nesse momento, o sol irradia a cidade de Recife"
        document.body.style.background = '#44AAAD'
            //fim de tarde
    } else if (horaAtual >= 16 && horaAtual <= 18) {
        img.src = 'image/8bitmorning.png'
        img.alt = "O pôr do sol no oeste anuncia a noite na região metropolitana"
        document.body.style.background = '#db8c74'
            //noite
    } else {
        img.src = 'image/8bitnight.png'
        img.alt = "O luar da noite reflete sobre as praias de Recife"
        document.body.style.background = '#3f638f'
    }

}