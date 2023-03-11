document.getElementById('add').addEventListener('click', (event) => {
    let num = parseInt(document.getElementById('total').innerHTML)
    document.getElementById('total').innerHTML = num + 1
})