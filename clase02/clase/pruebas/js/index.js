const tres = document.querySelector('#tres');
tres.addEventListener("click", function(e){
    e.stopPropagation();
    console.log('click 3');
})

const dos = document.querySelector('#dos');
dos.addEventListener("click", function(e){
    e.stopPropagation();
    console.log('click 2');
})

const uno = document.querySelector('#uno');
uno.addEventListener("click", function(){
    console.log('click 1');
})
