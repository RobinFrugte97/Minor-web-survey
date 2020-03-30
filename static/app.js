var nummer = document.getElementById('nummer')
var slider = document.createElement('input')
slider.type = 'range'
slider.min = 1
slider.max = 10
slider.step = 1
slider.setAttribute('aria-hidden', 'true')

var sliderContainer = document.getElementById('nummer-container')

sliderContainer.appendChild(slider)
if (typeof Array.prototype.forEach == 'function') {
    slider.addEventListener('input', function () {
        nummer.value = slider.value
    })
    nummer.addEventListener('input', function () {
        slider.value = nummer.value
    })
} else {
    if (document.addEventListener) {
        slider.addEventListener('change', function () {
            nummer.value = slider.value
        })
        nummer.addEventListener('input', function () {
            slider.value = nummer.value
        })
    } else {
        slider.attachEvent("oninput", function () {
            nummer.value = slider.value

        });
        nummer.attachEvent("oninput", function () {
            slider.value = nummer.value

        })
    } 
}

