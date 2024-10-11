var peso;
var altura;
var imc;
var resultado;

//l recebendo o evento
function calcular(event){
    //refresh do input

    event.preventDefault();
    //alert('Teste');

    //recebendo os dados digitados pelo úsuario
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    //calcular imc
    imc = peso/(altura*altura)

    //testando a recepção dos valores de peso e altura
    //e testando o calculo do imc
    console.log(peso);
    console.log(altura);
    console.log(imc);

    resultado = document.getElementById('resultado');
    if(imc<17){
        resultado.innerHTML = '</br> Seu resultado foi:'+imc.toFixed(2)+'</br>Cuidado você está muito abaixo do peso'
    } else if(imc>=17&&imc<18.5){
        resultado.innerHTML = '</br> Seu resultado foi:'+imc.toFixed(2)+'</br>Você está muito abaixo do peso'
    } else if(imc >= 18.5 && imc < 25) {
        resultado.innerHTML = '</br> Seu resultado foi: ' + imc.toFixed(2) + '</br> Parabéns, você está no peso ideal';
    } else if(imc >= 25 && imc < 30) {
        resultado.innerHTML = '</br> Seu resultado foi: ' + imc.toFixed(2) + '</br> Você está acima do peso';
    } else if(imc >= 30 && imc < 35) {
        resultado.innerHTML = '</br> Seu resultado foi: ' + imc.toFixed(2) + '</br> Cuidado, você está com obesidade grau I';
    } else if(imc >= 35 && imc < 40) {
        resultado.innerHTML = '</br> Seu resultado foi: ' + imc.toFixed(2) + '</br> Atenção, você está com obesidade grau II (severa)';
    } else if(imc >= 40){
        resultado.innerHTML = '</br> Seu resultado foi: ' + imc.toFixed(2) + '</br> Atenção, você está com obesidade grau III (mórbida)';
    } else{
        resultado.innerHTML = '</br> Não foi possivel calcular. Insira um número';
    }
}
    