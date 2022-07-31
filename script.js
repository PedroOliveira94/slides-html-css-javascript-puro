let trocarfoto = 1;

setInterval( function(){
    document.querySelector("#slide" + trocarfoto).checked = true;
    trocarfoto ++;
    
    if(trocarfoto > 5){
        trocarfoto = 1;
    }
}, 3000);