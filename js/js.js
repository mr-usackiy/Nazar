let input_calc = document.querySelector('.input_calc')
let popup = document.querySelector('.popup_type_site')
let wrapper_calc = document.querySelector('#price')


input_calc.addEventListener('click', () =>{
    popup.style.visibility = 'visible';
})
wrapper_calc.addEventListener('click', () =>{
    popup.setAttribute('visibility: hidden');
    console.log('q');
})










//