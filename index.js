let elementImg = document.getElementById('imgfundo');

let local_img = 1;
function trocar(direcao){
    if(local_img == 1){
        if(direcao == "avancar"){
            elementImg.src = 'img/fundo2.webp';
            local_img = 2;

        }else{
            elementImg.src = 'img/fundo3.webp';
            local_img = 3;

        }  
    }
    else if(local_img == 2){
        if(direcao == "avancar"){
            elementImg.src = 'img/fundo3.webp';
            local_img = 3;

        }else{
            elementImg.src = 'img/fundo4.webp';
            local_img = 4;

        }  

    }
    else if(local_img == 3){
        if(direcao == "avancar"){
            elementImg.src = 'img/fundo1.webp';
            local_img = 1;

        }else{
            elementImg.src = 'img/fundo2.webp';
            local_img = 2;

        }  

    }
   
}
