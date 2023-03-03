const sliderItens = document.querySelectorAll('.box')
const Botoes = document.querySelectorAll('.btn')

const maxItens = sliderItens.length

let contadorSlider = 0

console.log(Botoes)

// setInterval( function(){
//     nextImage();
// }, 5000)

Botoes.forEach((btn) =>{
    btn.addEventListener('click', () =>{
        const btnEsquerdo = btn.classList.contains('esquerdo')
        const btnDireito = btn.classList.contains('direito')

        if(btnEsquerdo){
            if(contadorSlider === 0){
                contadorSlider = maxItens - 1
            }else{
                contadorSlider = contadorSlider - 1
            }
        }
        if(btnDireito){
            if(contadorSlider === maxItens - 1 ){
                contadorSlider = 0
            }else{
                contadorSlider = contadorSlider + 1
            }
        }

        sliderItens[contadorSlider].scrollIntoView(
            {
                inline:'center',
                behavior: 'smooth'
            }
        )
    })
})

function nextImage(){
    contadorSlider++;
    if(contadorSlider === maxItens - 1){
        contadorSlider = 0
    }

    sliderItens[contadorSlider].scrollIntoView(
        {
            inline:'center',
            behavior: 'smooth'
        }
    )
}

