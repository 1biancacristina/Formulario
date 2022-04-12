function enquanto(){
    var num1 = document.getElementById('name').value;
    var num2 = document.getElementById('nickname').value;
    var num3 = document.getElementById('day').value;
    var num4 = document.getElementById('month').value;
    var num5 = document.getElementById('year').value;
    var num6 = document.getElementById('cpf').value;
    var num7 = document.getElementById('sel1').value;

    var exibe = 'Seu nome é ' +  num1 + ' e seu apelido é ' + num2 + ' você nasceu em ' + num3 + ' / ' + num4 + ' / '  + num5 + '. <br> Portador do CPF ' + num6 + '<br> Seu time preferido é ' + num7;

    document.getElementById('texto').innerHTML = exibe;
}