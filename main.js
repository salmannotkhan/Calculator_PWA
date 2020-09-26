const input = document.querySelector('.input')
const result = document.querySelector('.result')
const btns = document.querySelectorAll('button')
const dark = document.querySelector('.darkmode')

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