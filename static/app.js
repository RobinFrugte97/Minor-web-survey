var nummer = document.getElementById('nummer')
var slider = document.createElement('input')
slider.type = 'range'
slider.min = 1
slider.max = 10
slider.step = 1
slider.setAttribute('aria-hidden', 'true')
var test = []

var sliderContainer = document.getElementById('nummer-container')
if (sliderContainer !== null) {
    sliderContainer.appendChild(slider) 
}

if (document.addEventListener) {
    slider.addEventListener('input', function () {
        nummer.value = slider.value
    })
    // Event 'change' voor IE.
    slider.addEventListener('change', function () {
        nummer.value = slider.value
    })
    if (nummer !== null) {
        nummer.addEventListener('input', function () {
            slider.value = nummer.value
        })
    }
} else {
    slider.attachEvent("oninput", function () {
        nummer.value = slider.value
    })
    // Event 'onchange' voor IE.
    slider.attachEvent("onchange", function () {
        nummer.value = slider.value
    })
    if (nummer !== null) {
        nummer.attachEvent("oninput", function () {
            slider.value = nummer.value
        })
    }
} 

var studentnummerLabel = document.getElementById('studentnummerLabel')
var studentnummerInput = document.getElementById('studentnummerInput')

studentnummerInput.addEventListener('keydown', function() {
    var chars = studentnummerInput.value.length + 1
    if (chars < 9) {
        studentnummerLabel.innerHTML = 'Nog '+ (9 - (studentnummerInput.value.length + 1)) + ' characters..'
    } else if (chars >= 9){
        studentnummerLabel.innerHTML = ''
    }
})