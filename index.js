let local_img = 1;
function trocarImg(direcao){
    if(local_img == 1){
        if(direcao == "avancar"){
            elementImg.src = 'fundo2.jpg';
            local_img = 2;

        }else{
            elementImg.src = 'fundo3.jpg';
            local_img = 3;

        }  
    }
    else if(local_img == 2){
        if(direcao == "avancar"){
            elementImg.src = 'img/bg-3.jpeg';
            local_img = 3;

        }else{
            elementImg.src = 'img/bg-1.jpeg';
            local_img = 1;

        }  

    }
    else if(local_img == 3){
        if(direcao == "avancar"){
            elementImg.src = 'img/bg-1.jpeg';
            local_img = 1;

        }else{
            elementImg.src = 'img/bg-2.jpeg';
            local_img = 2;

        }  

    }
   
}
