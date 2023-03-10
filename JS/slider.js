const buttons = document.querySelectorAll('.btn')
const boxs = document.querySelectorAll('.slide')

const maxLenght = boxs.length

let count = 1
document.getElementById('radio1').checked = true

let interval = setInterval(() =>{
    nextImage()
},5000)


buttons.forEach((btn) =>{
    btn.addEventListener('click', () =>{
        const esquerdo = btn.classList.contains('esquerdo')
        const direito = btn.classList.contains('direito')

        if(esquerdo){
            if(count <= 1){
                count = maxLenght
                document.getElementById('radio'+count).checked = true
                clearInterval(interval)
                interval = setInterval(() =>{
                    nextImage()
                },5000)
            }else{
                count = count - 1
                document.getElementById('radio'+count).checked = true
                clearInterval(interval)
                interval = setInterval(() =>{
                    nextImage()
                },5000)
                
                
            }
        }

        if(direito){
            if(count >= maxLenght){
                count = 1
                document.getElementById('radio'+count).checked = true
                clearInterval(interval)
                interval = setInterval(() =>{
                    nextImage()
                },5000)

            }else{
                count = count + 1
                document.getElementById('radio'+count).checked = true
                clearInterval(interval)
                interval = setInterval(() =>{
                    nextImage()
                },5000)

            }
        }
    })
})
const nextImage = () =>{
    count++
    if(count>maxLenght){
        count = 1
    }

    document.getElementById('radio'+count).checked = true
}