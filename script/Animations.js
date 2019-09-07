function fadeIn(element, timePostLoad, fadeDuration) {
    let box = window.document.body.querySelector('#' + element)

    setTimeout(() => {
        fadeIn2(box, fadeDuration)

        function fadeIn2(element1, time) {
            process(element1, time)
        }
    }, timePostLoad)

    function process(element, time) {
        let opacity = 0

        let interval = setInterval(function() {
            if (opacity != 100) {
                opacity += 2
                element.style.opacity = opacity / 100
                element.style.filter = "alpha(opacity=" + opacity + ")"

            }
            box.style.display = 'block'
        }, time * 10)

    }


}