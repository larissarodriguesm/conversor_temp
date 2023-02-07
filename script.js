function convertToF() {
    let celsius = document.getElementById('celsius').value;
    let farenheit = 1.8 * celsius + 32;

    let textoResult = 'A temperatura ' + celsius + '°C é ' + farenheit + '°F.';
    console.log(textoResult);

    document.getElementsByTagName('p')[0].innerHTML = textoResult

    
    // A temperatura em 25°C é 150°F!
    
    // alert('Clicou no converter!')
}

function limpar () {
    document.getElementsByTagName('p')[0].innerHTML = ''

}