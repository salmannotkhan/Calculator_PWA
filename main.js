const input = document.querySelector('.input')
const result = document.querySelector('.result')
const btns = document.querySelectorAll('button')
const bkspc = document.querySelector('button[data-func="bkspc"]')
const dark = document.querySelector('.darkmode')
var hold

dark.addEventListener('click', () => {
    if (document.querySelector('body').classList.contains('dark')) {   
        document.querySelector('.darkmode img').src = 'moon-icon.webp'
    }
    else{
        document.querySelector('.darkmode img').src = 'sun-icon.webp'
    }
    document.querySelector('body').classList.toggle('dark')
})

btns.forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.dataset['func']) {
            switch (this.dataset['func']) {
                case 'bkspc':
                    value = input.innerHTML.split('')
                    value.pop()
                    input.innerHTML = value.join('')
                    if (isNaN(input.innerHTML)){
                        try {
                            result.innerHTML = eval(input.innerHTML)
                        } catch (error) {}
                    }
                    else {
                        result.innerHTML = '&nbsp;'
                    }
                    break;
                case 'eq':
                    if (result.innerHTML != '&nbsp;'){
                        input.innerHTML = result.innerHTML
                    }
                    result.innerHTML = '&nbsp;' 
                    break
            }
        }
        else {
            if (!(isNaN(this.innerHTML) && input.innerHTML == '')){
                input.innerHTML += this.innerHTML
            }
            if (isNaN(input.innerHTML)){
                    try {
                        result.innerHTML = eval(input.innerHTML)
                    } catch (error) {}
            }
            else { 
                result.innerHTML = '&nbsp;'
            }
        }
    })
})

anim = document.querySelector('.display .animation')
clearall = () => {
    hold = null
    anim.style.opacity = 1
    anim.style.transform = 'scale(2)'
    setTimeout(() => {
        result.innerHTML = '&nbsp;'
        input.innerHTML = ''
        anim.style.opacity = 0
        anim.style.transform = 'scale(0)'
    }, 600);
}

// anim.addEventListener('animtionstart', () => {
// })

['mousedown', 'touchstart'].forEach(evt => {
    bkspc.addEventListener(evt, () => {
        if (!hold) {
            hold = setTimeout(clearall, 1000)
        }
    });
});

['mouseup', 'touchend'].forEach(evt => {
    bkspc.addEventListener(evt, () => {
        if (hold) {
            clearTimeout(hold);
            hold = null
        }
    })
});