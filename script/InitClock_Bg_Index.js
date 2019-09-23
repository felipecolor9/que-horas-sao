function init() {
    let img = window.document.querySelector('img#img')
    let txt2 = window.document.querySelector('div#horas')
    var data = new Date()
    let actualHour = data.getHours()
    let actualMin = data.getMinutes()

    //dia
    if (actualHour >= 5 && actualHour <= 15) {
        img.src = 'image/8bitday.png'
        document.body.style.background = 'linear-gradient(to left, #44aaad, #5beef3)'
            //fim de tarde
    } else if (actualHour >= 16 && actualHour <= 18) {
        img.src = 'image/8bitmorning.png'
        document.body.style.background = 'linear-gradient(to left, #db8c74, #d47457)'
            //noite
    } else {
        img.src = 'image/8bitnight.png'
        document.body.style.background = 'linear-gradient(to left, #3f638f, #153050)'
    }


    setInterval(() => {
            actualMin += 1
            if (actualMin == 60) {
                actualMin = 0

                actualHour += 1
                if (actualHour == 24) {
                    actualHour = 0
                }
            }

            actualMin < 10 ? txt2.textContent = `Agora são ${actualHour}:0${actualMin} ` : txt2.textContent = `Agora são ${actualHour}:${actualMin} `
                //dia
            if (actualHour >= 5 && actualHour <= 15) {
                img.src = 'image/8bitday.png'
                document.body.style.background = 'linear-gradient(to left, #44aaad, #5beef3)'
                    //fim de tarde
            } else if (actualHour >= 16 && actualHour <= 18) {
                img.src = 'image/8bitmorning.png'
                document.body.style.background = 'linear-gradient(to left, #db8c74, #d47457)'
                    //noite
            } else {
                img.src = 'image/8bitnight.png'
                document.body.style.background = 'linear-gradient(to left, #3f638f, #153050)'
            }
        }, 60000) //1 min

    actualMin < 10 ? txt2.textContent = `Agora são ${actualHour}:0${actualMin} ` : txt2.textContent = `Agora são ${actualHour}:${actualMin} `
}