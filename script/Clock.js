function init() {
    let img = window.document.querySelector('img#img')
    let txt2 = window.document.querySelector('div#horas')
    var data = new Date()
    let actualHour = data.getHours()
    let actualMin = data.getMinutes()

    setInterval(() => {
            actualMin += 1
            if (actualMin == 60) {
                actualMin = 0

                actualHour += 1
                if (actualHour == 24) {
                    actualHour = 0
                }
            }

            actualMin < 10 ? txt2.innerHTML = `Agora são ${actualHour}:0${actualMin} ` : txt2.innerHTML = `Agora são ${actualHour}:${actualMin} `
                //dia
            if (actualHour >= 5 && actualHour <= 15) {
                img.src = 'image/8bitday.png'
                img.alt = "Nesse momento, o sol irradia a cidade de Recife"
                document.body.style.background = '#44AAAD'
                    //fim de tarde
            } else if (actualHour >= 16 && actualHour <= 18) {
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

    actualMin < 10 ? txt2.innerHTML = `Agora são ${actualHour}:0${actualMin} ` : txt2.innerHTML = `Agora são ${actualHour}:${actualMin} `


    //dia
    if (actualHour >= 5 && actualHour <= 15) {
        img.src = 'image/8bitday.png'
        img.alt = "Nesse momento, o sol irradia a cidade de Recife"
        document.body.style.background = '#44AAAD'
            //fim de tarde
    } else if (actualHour >= 16 && actualHour <= 18) {
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