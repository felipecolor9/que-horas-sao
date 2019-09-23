function init() {

    var data = new Date()
    let actualHour = data.getHours()
    let actualMin = data.getMinutes()
    if (actualHour >= 5 && actualHour <= 15) {
        document.body.style.background = 'linear-gradient(to left, #44aaad, #5beef3)'
    } else if (actualHour >= 16 && actualHour <= 18) {
        document.body.style.background = 'linear-gradient(to left, #db8c74, #d47457)'
    } else {
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
            if (actualHour >= 5 && actualHour <= 15) {
                document.body.style.background = 'linear-gradient(to left, #44aaad, #5beef3)'
            } else if (actualHour >= 16 && actualHour <= 18) {
                document.body.style.background = 'linear-gradient(to left, #db8c74, #d47457)'
            } else {
                document.body.style.background = 'linear-gradient(to left, #3f638f, #153050)'
            }
        }, 60000) //1 min
}