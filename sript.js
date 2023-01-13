var image = document.getElementById('imgRES')
var title = document.getElementById('titleRES')
var img = document.createElement('img')
img.setAttribute('id', "foto")
var voto
var arr = []

function num(valor){
    var val = valor
    if(val ==1){
        img.setAttribute('src','img/informatica.png')
        title.innerHTML = 'INFORMÁTICA'
        voto = 1
        var soudconfirm = new Audio('audios/clicks.wav')
        soudconfirm.play()
    }
    else if(val ==2){
        img.setAttribute('src','img/agro.png')
        title.innerHTML = 'AGROPECUÁRIA'
        voto = 2
        var soudconfirm = new Audio('audios/clicks.wav')
        soudconfirm.play()
    }
    else if(val ==3){
        img.setAttribute('src','img/conta.png')
        title.innerHTML = 'CONTABILIDADE'
        voto = 3
        var soudconfirm = new Audio('audios/clicks.wav')
        soudconfirm.play()
    }
    else if(val ==4){
        img.setAttribute('src','img/administração.png')
        title.innerHTML = 'ADIMINISTRAÇÃO'
        voto = 4
        var soudconfirm = new Audio('audios/clicks.wav')
        soudconfirm.play()
    }
    else if(val ==5){
        title.innerHTML = 'VOCÊ AINDA ESTÁ EM DÚVIDA PARA QUAL CURSO VIM'
        img.setAttribute('src','')
        voto = 5
        var soudconfirm = new Audio('audios/clicks.wav')
        soudconfirm.play()
    }
    else if(val ==6){
        title.innerHTML = 'VOCÊ NÃO PRETENDE VIM PARA A EEEP NAPOLEÃO'
        img.setAttribute('src','')
        voto = 6
        var soudconfirm = new Audio('audios/clicks.wav')
        soudconfirm.play()
    }
    image.innerHTML = ''
    image.appendChild(img)
}

function confirmar(){
    
    var list = document.createElement('h3')
    var pai = document.getElementById('container')
    
    if(voto ==  null){
        alert('Você não escolheu nenhuma opção')
    }
    else if(voto == 1){
        //list.innerHTML = 'Informática'
        //localStorage.setItem('infor', JSON.stringify(lista))
        //list.textContent = JSON.parse(localStorage.getItem('infor'))
        if (localStorage.meuArr){             
            arr = JSON.parse(localStorage.getItem('meuArr')); 
         }
         
         let novoItem = 'Informática'
         arr.push(novoItem);
         localStorage.meuArr = JSON.stringify(arr);
       

    }
    else if(voto == 2){
        //list.innerHTML = 'Agropecuária'
        //localStorage.setItem('agro', JSON.stringify(lista))
        //list.textContent = JSON.parse(localStorage.getItem('agro'))
        if (localStorage.meuArr){             
            arr = JSON.parse(localStorage.getItem('meuArr')); 
         }
         
         let novoItem = 'Agropecuária'
         arr.push(novoItem);
         localStorage.meuArr = JSON.stringify(arr);
        
    }
    else if(voto == 3){
        //list.innerHTML = 'Contabilidade'
        //localStorage.setItem('cont', JSON.stringify(lista))
        //list.textContent = JSON.parse(localStorage.getItem('cont'))
        if (localStorage.meuArr){             
            arr = JSON.parse(localStorage.getItem('meuArr')); 
         }
         
         let novoItem = 'Contabilidade'
         arr.push(novoItem);
         localStorage.meuArr = JSON.stringify(arr);
    }
    else if(voto == 4){
        //lista = 'Adiministração'
        //localStorage.setItem('adm', JSON.stringify(lista))
        //list.textContent = JSON.parse(localStorage.getItem('adm'))
        if (localStorage.meuArr){             
            arr = JSON.parse(localStorage.getItem('meuArr')); 
         }
         
         let novoItem = 'Adiministração'
         arr.push(novoItem);
         localStorage.meuArr = JSON.stringify(arr);
    }
    else if(voto == 5){
        //lista = 'Dúvida'
        //localStorage.setItem('duvid', JSON.stringify(lista))
        //list.textContent = JSON.parse(localStorage.getItem('duvid'))
        if (localStorage.meuArr){             
            arr = JSON.parse(localStorage.getItem('meuArr')); 
         }
         
         let novoItem = 'Dúvida'
         arr.push(novoItem);
         localStorage.meuArr = JSON.stringify(arr);
        
    }
    else if(voto == 6){
        
        if (localStorage.meuArr){             
            arr = JSON.parse(localStorage.getItem('meuArr')); 
         }
         
         let novoItem = 'Nenhum'
         arr.push(novoItem);
         localStorage.meuArr = JSON.stringify(arr);
       
    }
    

   //for(var i in arr){
    //let p = document.createElement("p");
    //p.innerHTML = arr[i];
    //ress.append(p);
 //}
   image.removeChild(img)
   title.innerHTML = 'ESCOLHA UM CURSO'
   title.style.marginTop = '70px'

    var soudconfirm = new Audio('audios/confirm.wav')
    soudconfirm.play()
    
}

function ver(){
    var ress = document.getElementById('respp')
    for(var i in arr){
        let p = document.createElement("p");
        p.innerHTML = arr[i];
        ress.append(p);
}
}


