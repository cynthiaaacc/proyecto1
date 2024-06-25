const init = () => {
    const submitButton = document.querySelector('#submit')
    submitButton.addEventListener('click', (evt) => {
        evt.preventDefault();

        const loader = document.querySelector('#loading')
        loader.classList.remove('hidden')

        const title = document.querySelector('#title').value
        const message = document.querySelector('#message').value

        const json = JSON.stringify({
            title: title,
            message: message
        })

        fetch('/blog/post/save', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: json
        }).then((res) => {
            loader.classList.add('hidden')
            location.reload()
        })
    })
}

document.addEventListener('DOMContentLoaded', init, false);