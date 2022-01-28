function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() // caso queira testar desabilite essa var e abilite a de baixo
   //var hora = 2 //abilite para forçar os horarios e testa
    var min = data.getMinutes()
    msg.innerText = `Agora são ${hora}:${min} horas.`
        if(hora >= 0 && hora <12){
            //Bom dia!
            img.src ='manha.png'
            msg.innerHTML += '<br/>Bom dia!'
            document.body.style.background = '#dfdcd7' //para alterar a cor do fundo
            msg.style.color= '#dfdcd7'  //para alterar a cor do texto da div "id='msg'"          
        }
         else if (hora >=12 && hora<18){
            //Boa Tarde!
            img.src ='tarde.png'
            msg.innerHTML += '<br/>Boa tarde!'
            document.body.style.background = '#fd9f53' //cor aproveitada da imagem , código capturado no GIMP (cod hexadecimal)
            msg.style.color= '#fd9f53'// idem 
            }
        else{
            //Boa noite!
            img.src ='noite.png'
            msg.innerHTML += '<br/>Boa noite!'
            document.body.style.background = '#152945'
            msg.style.color = '#152945'
        }

}
