function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] verifique os dados novamente')
    }else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        //res.innerHTML = `idade calculada: ${idade}`
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')    
        if (fsex[0].checked){
            genero= 'mulher'
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'fotos/mulher-crianca.jpg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'fotos/mulher-jovem.jpg')
            }else if (idade < 60){
                //adulto
                img.setAttribute('src', 'fotos/mulher-adulto.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'fotos/mulher-idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero= 'homem'
            if(idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'fotos/homem-crianca.jpg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'fotos/homem-jovem.jpg')
            }else if (idade < 60){
                //adulto
                img.setAttribute('src', 'fotos/homem-adulto.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'fotos/homem-idoso.jpg')
            }
        }else if (fsex[2].checked){
            genero='pessoa'
            img.setAttribute('src', 'fotos/pessoas.jpg')
        }
        res.innerHTML = `detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}