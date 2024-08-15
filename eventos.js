//eventos para el div//
document.querySelector('div').addEventListener('click', function() {
    alert('Hola! soy el div');

});

//eventos para el botonn//
document.querySelector('button').addEventListener('click', function(event) {
    event.stopPropagation(); 
    alert('Hola!');
});