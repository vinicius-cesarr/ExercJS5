let n1 = document.getElementById('n1')
let vdn = document.getElementById('vdn')
let res = document.getElementById('res')
let val = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function add(){
    if(isNumero(n1.value) && !inLista(n1.value,val)){

        val.push(Number(n1.value))
        let item = document.createElement('option')
        item.text = `Valor ${n1.value} foi adicionado.`
        vdn.appendChild(item)
        res.innerHTML = ''

    }else{
        alert('[ERRO] veja os dados com cuidado')
    }
    n1.value = ' '
    n1.focus()
}
function finalizar(){
    if(val.length == 0){
        alert('Adicione valores antes de finalizar!')
    }else{
        let tolt = val.length
        let maior = val [0]
        let menor = val [0]
        let soma = 0
        let med = 0

        for(let pos in val){
            soma += val[pos]
            if(val[pos]>maior){
                maior = val[pos]
            }if(val[pos < menor]){
                menor = val[pos]
            }            
        }

        med = soma/ tolt

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tolt} numeros cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi de ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi de ${menor}.</p>`
        res.innerHTML += `<p> Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p> A media dos valores é igual a ${med}.</p>`
    }
}

