// função criada para 

function verific() {
    var data = new Date();
    var ano = data.getFullYear(); // full para pegar os 4 digitos do ano
    var fano = document.querySelector('input#txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano){ 
        // value para retorna o conteudo da var, length para OBTER O TAMANHO DA STRING , ou seja a quantidade de letras, palavras ou elementos.
        // "Number" nesse caso não é obrigatorio. poreia ter colocado apenas o "fano.value".
        window.alert('[ERRO] Verifique os dados e tente novamente');
    } else {
      //  window.alert('tudo ok') // SEMPRE TESTE O CODIGO AO DECORRER DA SUA CRIAÇÃO "NÃO  DEIXE PARE RESTAR APENAS NO FIM!" [TESTE 1]


      var fsex = document.getElementsByName('radsex');
      // criamos a var dessa forma justamente pela necessidade de ter que pegar o "name"= radsex dentro do input, conforme explicação dentro do html.
      //VAR CRIADA PARA DESCOBRIR QUAL CAMPO FOI CHECKED (FEM OU MASC)

      var idade = ano - Number(fano.value);
     // res.innerHTML = `Idade calculada: ${idade}`
             //[TESTE 2]         //`${}` == place holder

      var  genero= ''
      var img = document.createElement('img');
      img.setAttribute('id', 'foto'); // comando que se comapara a escrever no HTML == <img id= foto></img>
      // createElement == criamos a foto (img)
      //setAttribute == dar um id e o nome dele

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <=6) {
                //CRIANÇA PEQUENA
                img.setAttribute('src','crianca_peq_masc.png');
                
                }else if (idade >=7 && idade <= 12) {
                    // CRIANÇA (GRANDE)
                    img.setAttribute('src','crianca_grande_masc.png');
                    
                }else if (idade <= 18) { // POR LÓGICA COMO ATE 12 É CRIANÇA, ENTÃ0 QUALQUER IDADE QUE FOR MENOR OU IGUAL A 18 JA SE ENCAIXA AQUI, POIS O PARAMETRO ACIMA JA ESTIPULA O QUE ACONTECE AO 12 OU MENOS.

                    // ADOLECENTE
                    img.setAttribute('src','adolec_masc.png');

                }else if (idade <= 30){
                    // ADULTO JOVEM
                    img.setAttribute('src', 'adulto_jovem_masc.png');
                   
                }else if (idade <= 59){
                    // ADULTO MEDIO
                    img.setAttribute('src', 'adulto_medio_masc.png');

                }else if (idade > 59){
                    // iDOSO
                    img.setAttribute('src','idoso_masc.png');
                }

        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <=6) {
                //CRIANÇA PEQUENA
                img.setAttribute('src','crianca_peq_fem.png');

                }else if (idade >=7 && idade <= 12) {
                    // CRIANÇA (GRANDE)
                    img.setAttribute('src','crianca_grande_fem.png');

                }else if (idade <= 18) { // POR LÓGICA COMO ATE 12 É CRIANÇA, ENTÃ0 QUALQUER IDADE QUE FOR MENOR OU IGUAL A 18 JA SE ENCAIXA AQUI, POIS O PARAMETRO ACIMA JA ESTIPULA O QUE ACONTECE AO 12 OU MENOS.

                    // ADOLECENTE
                    img.setAttribute('src','adolec_fem.png');

                }else if (idade <= 30){
                    // ADULTO JOVEM
                    img.setAttribute('src', 'adulto_jovem_fem.png');

                }else if (idade <= 59){
                    // ADULTO MEDIO
                    img.setAttribute('src', 'adulto_medio_fem.png');

                }else if (idade > 59){
                    // iDOSO
                    img.setAttribute('src','idoso_fem.png');
                }
        }
        res.style.textAlign = 'center' 
        res.innerHTML= `Detectamos que é um(a) ${genero} com ${idade} anos`
        res.appendChild(img)
            // COMANDO PARA ADICIONAR AS FOTOS, ELA ENTRA COMO UM CHILD NA ARVORE DOM


    }
    
}