let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []        //vetor, com esse vetor analisar os dados , array.


function numeroAdc(n){                          //recebe um numero no paramentro
    return (Number(n) >= 1 && Number(n) <= 100)     //só aceita se for numero entre 1 e 100

}

function numeroLista(n,l){                      //recebe um numero, e uma lista representada pelo 1
    if (l.indexOf(Number(n)) != -1){            // se na lista o number de N for diferente de -1..
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(numeroAdc(num.value) && !numeroLista(num.value, valores)){           //adicionar se for um numero, e se numero nao estiver na lista e valores para saber se esta na lista.
        valores.push(Number(num.value))                                 //push adicionar um elemento no vetor, adicionar number dentro de value
        let item = document.createElement('option')                     //criando elemento dentro do item
        item.text = 'Valor '+num.value+' adicionado'            //msg ser escrita no item
        lista.appendChild(item)                 //para numero e msg ir para lista.
        res.innerHTML = ""                 //quando eu conseguir adicionar elemento, tem que limpar resultado
    
    }else {
        window.alert('Valor inválido ou já encontrado na lista !!')
    }
    num.value = "" //para ele apagar no bloco no numero adicionado
    num.focus()    // voltar cursor apos acrescentar
}

function finalizar(){
    if(valores.length == 0){        // Se o vetor estiver vazio,mostrar msg
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let tot = valores.length        //saber quantos numeros foi adcionado
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for(let pos in valores){            //teste para saber o maior e menor numero adicionado
            soma += valores[pos]                // para fazer a soma do valor atual com posterior
            if(valores[pos] > maior)                //Deixa de ser valor anterior para ser o maior encontrado
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]    
        }
        media = soma / tot  //tirar a media dos valores
        res.innerHTML = ""    //para ele zerar o valor
        res.innerHTML += '<p>Ao todo, temos '+tot+' números cadastrados</p>'
        res.innerHTML +='<p>O maior valor informado foi '+maior+'.</p>'
        res.innerHTML +='<p>O menor valor informado foi '+menor+'.</p>'
        res.innerHTML +='<p>Somando todos valores são '+soma+'.</p>'
        res.innerHTML +='<p>A media dos valores digitados são '+media+'.</p>'
        res.innerHTML +='<p>Tem '+par+' valores pares.</p>'
    }
}


