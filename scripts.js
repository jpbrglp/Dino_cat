const boneco = document.querySelector('.boneco');
const cano = document.querySelector('.cano');
const pontos = document.getElementById('pontos');
const img = document.getElementById('container')
const scream = document.getElementById('scream')
let contador = 0;
scream.style.width = '0 px';
scream.style.height = '0 px';
alert("Cloque o volume no máximo")
const jump = () => {
    boneco.classList.add('jump');
    setTimeout(() =>{
        boneco.classList.remove('jump');
    }, 500);
}

const loop = setInterval(()=>{
    const posicao_cano = cano.offsetLeft;
    const posicao_boneco = +window.getComputedStyle(boneco).bottom.replace('px', '');
    contador +=1.0;
    console.log(contador);
    pontos.innerHTML = contador;
    if (posicao_cano <= 60 && posicao_boneco <= 80 && posicao_cano > 0) {
       cano.style.animation = 'none';
       cano.style.left = `${posicao_cano}px`;
       boneco.style.animation = 'none'
       boneco.style.bottom = `${posicao_boneco}px`
       img.style.backgroundImage = "url('./img/ok1.jpg')";
       img.style.width = '80%'
       img.style.height = '500px'
       img.style.border = 'none';
       boneco.style.width = '00px';
       scream.play()
       clearInterval(loop);
       document.body.style.backgroundColor = 'black'
       pontos.style.color = "white";
    }
},10)

document.addEventListener('keydown', jump);