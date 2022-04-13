let eyes = document.querySelectorAll('i')
eyes.forEach(eye => eye.addEventListener('click', (event) => {
    let inputs, inputtype, input
    inputs = document.querySelectorAll('input')
    input = event.target.closest('.form-group').querySelector('input')
    inputtype = input.getAttribute('type')
    if (inputtype === 'password') {
        input.setAttribute("type", "text")
        // document.getElementsByTagName('i')[3]
    } else if (inputtype === 'text') { input.setAttribute("type", "password") } else { input.setAttribute("type", "text") }
    console.log(inputtype)
    
}))



