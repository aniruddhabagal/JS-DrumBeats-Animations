
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    
    if(!audio) return; //Stops the function from returning all together
    
    audio.currentTime = 0; //rewinds to the start of music
    audio.play();
    // console.log(key);
    key.classList.add('playing');
    
}


function removeTransition(e){
    if (e.propertyName !== 'transform')
    return; // skip it if its not a transfom
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key =>key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

