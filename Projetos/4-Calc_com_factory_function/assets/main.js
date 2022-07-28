
// VARIAVEIS GLOBAIS

const calculadora = criaCalculadora();
calculadora.inicia(); // método



//factory function: (função fabrica)

function criaCalculadora() {

    return { // objeto

        //atributo: (ATENÇÃO => para chamar esses atributos dentro dos métodos usamos THIS. para referencia-los)
        result: document.querySelector('.result'), // caixa de texto do total do resultado
        

        //métodos:
        inicia() {
            this.clicarBotoes();
            this.pressionaEnter();
            console.log('Calculadora iniciada');
        },

        limparDisplay(){
            this.result.value = ''; //limpar o texto
        },

        deletaUltDig(){ 
            this.result.value = this.result.value.slice(0, -1); //todos menos o ultimo
        },                  //0= tamanho da string | -1 = apagar o ultimo digito

        realizaConta(){
            let conta = this.result.value;
            try {
                conta = eval (conta); // ATENÇÃO cuidado com o comando eval
                                    // Ele obriga o sistema a executar o que estiver dentro do comando
                if(!conta && conta != 0){
                    alert ('Conta invalida');
                    return
                }
            this.result.value  = String (conta);  
            } catch (error) {
                alert('Erro. Digite apenas números')
               return
            }
            
        },
        
        pressionaEnter(){
            this.result.addEventListener('keyup', e=> { //keyup = soltar a tecla
                
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        clicarBotoes() {
            document.addEventListener('click', function (event) {
                const apertou = event.target;
                 //peguei o evento acima e coloquei em uma var para capturar onde cliquei

                //console.log(apertou); //mostra no console onde esta clicando na pagina
                
                event.preventDefault() // evitar o refrech da pagina NO EVENTO CAPTURADO

                if (apertou.classList.contains('btnGeneric')) {
                    //console.log('apertou o botão');

                    //o this é usado por que é um metodo dentro de outro metodo
                    this.comandoParaTotal(apertou.innerText/* PEGAR O VALOR ESCRITO DENTRO DO BOTÃO*/); // caixa de resultado
                };
                if (apertou.classList.contains('btnClear')) {
                    this.limparDisplay();
                };
                if (apertou.classList.contains('btnDel')) {
                    this.deletaUltDig();
                };
                if (apertou.classList.contains('btnIgual')) {
                    this.realizaConta();
                }

                
            }.bind(this));//para corrigir o bug do this, pois estava apontanda para o document e agora temos que apontar o thus para o clicarBotoes() da linha 17
        },

        comandoParaTotal(nomeDoBotao) { // caixa de resultado
            let valor = nomeDoBotao;

            //chama this para referenciar o atributo result (linha 13)
            this.result.value += valor; //concatenando
        }


        

    };

}
