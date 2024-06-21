function init() {
    const buttonyes = document.querySelector('#button-yes')
    
    buttonyes.addEventListener("click", function(event) {
        buttonyes.classList.remove("bg-green-500");
        buttonyes.classList.add("bg-red-500");
    });

    const body = document.querySelector('body')
    body.addEventListener('mousemove', (event) => {
        console.log(event)

    })
}

document.addEventListener("DOMContentLoaded", function() {
    init()
})