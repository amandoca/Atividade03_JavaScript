const obj_txt_display = document.querySelector('#txt_display')
const array_bt_num = document.querySelectorAll('.bt_num')
const array_botoes = document.querySelectorAll('.botoes')
const obj_bt_calcular = document.querySelector('#bt_calcular')
const obj_bt_limpar = document.querySelector('#bt_limpar')

let limpa_display = false
let conta_display = 0

for (obj_bt_num of array_bt_num){
    obj_bt_num.addEventListener('click', function() { FunMontaDisplay(this.innerText) } )
}
for (obj_botao of array_botoes){
    obj_botao.addEventListener('click', function(){FunMontaDisplay(operacao)})
    const operacao = obj_botao.getAttribute('data-oper')

}

obj_bt_calcular.addEventListener('click', FunCalcularResultado)
obj_bt_limpar.addEventListener('click', FunLimpar)

function FunMontaDisplay(parametro_txt){
    if (limpa_display == true){
        obj_txt_display.value = ''
        limpa_display = false
        conta_display = 0
    }
    if (conta_display < 20) {
        obj_txt_display.value += parametro_txt
        conta_display++
    }else {
        alert('ATENÇÃO! VOCÊ ATINGIU O LIMITE DE DIGITOS.')
    }
}

function FunCalcularResultado(){
    try {
        obj_txt_display.value = eval(obj_txt_display.value)
    }
    catch(erro) {
        alert('Cálculo Indeferido!. Erro: '+ erro.message)
    }
    limpa_display = true
}

function FunLimpar(){
    obj_txt_display.value = ''
    conta_display = 0
}

obj_num_largura = document.querySelector('#num_largura')
obj_num_altura = document.querySelector('#num_altura')
obj_div_poligono =  document.querySelector('#div_poligono')
obj_p_perimetro =  document.querySelector('#p_perimetro')

obj_num_largura.addEventListener('change', FunRedimensionarPoligono)
obj_num_altura.addEventListener('change', FunRedimensionarPoligono)

function FunRedimensionarPoligono(){
    if (obj_num_largura.value < 50 || obj_num_largura.value > 100 
     || obj_num_altura.value < 50 || obj_num_altura.value > 100) {
            alert('DIGITOS INDEFERIDOS! ')
    }
    else {
        obj_div_poligono.style.width = obj_num_largura.value + 'px'
        obj_div_poligono.style.height = obj_num_altura.value + 'px'
        obj_div_poligono.innerText = 'Área: ' + (obj_num_largura.value * obj_num_altura.value) + 'px²'
        obj_p_perimetro.innerText = 'Perímetro: ' +
        ( parseInt(obj_num_largura.value) + parseInt(obj_num_altura.value) + 
          parseInt(obj_num_largura.value) + parseInt(obj_num_altura.value) ) + 'px'
    }
}

obj_number1 = document.querySelector('#number1')
obj_number2 = document.querySelector('#number2')
obj_resultado = document.querySelector('#resultado')
obj_somar = document.querySelector('#somar')
obj_multiplicar = document.querySelector('#multiplicar')

obj_somar.addEventListener('click', FunSoma)
obj_multiplicar.addEventListener('click', FunMultiplica)

let conta = 0

function FunSoma(){
    if(obj_number1.value =='' || obj_number2.value =='' ){
        alert('DIGITOS INDEFERIDOS!')
    }else{
        if (obj_number1.value > 50 || obj_number1.value < 1
         || obj_number2.value > 50 || obj_number2.value < 1) {
                alert('DIGITOS INDEFERIDOS!')
        }else{
            let conta = parseInt(obj_number1.value)+parseInt(obj_number2.value)
            obj_resultado.value = conta
        }
    }
}
function FunMultiplica(){
    if(obj_number1.value =='' || obj_number2.value =='' ){
        alert('DIGITOS INDEFERIDOS!')
    }else{
        if (obj_number1.value > 50 || obj_number1.value < 1  
         || obj_number2.value > 50 || obj_number2.value < 1) {
                alert('DIGITOS INDEFERIDOS!')
        }else{
            let conta = parseInt(obj_number1.value)*parseInt(obj_number2.value)
            obj_resultado.value = conta
        }
    }
}
const obj_aumentar = document.querySelector('#aumentar')
const obj_diminuir = document.querySelector('#diminuir')
const obj_clipboard = document.querySelector('#clipboard')

let tamanho_imagem = 0

obj_aumentar.addEventListener('click', FunAumentar)
obj_diminuir.addEventListener('click', FunDiminuir)

function FunAumentar() {
    tamanho_imagem = obj_clipboard.width
    tamanho_imagem = tamanho_imagem + 10
    if (tamanho_imagem <= 150) {
        obj_clipboard.style.width = tamanho_imagem + 'px'
    }
    else {
        alert('TAMANHO MÁXIMO!')
    }
}

function FunDiminuir() {
    tamanho_imagem = obj_clipboard.width
    tamanho_imagem = tamanho_imagem - 10
    if (tamanho_imagem >= 50) {
        clipboard.style.width = tamanho_imagem + 'px'
    }
    else {
        alert('TAMANHO MÍNIMO!')
    }
}

