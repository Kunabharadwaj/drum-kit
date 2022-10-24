const buttons = Array.from(document.getElementsByClassName('drum'));

buttons.forEach(button=>{
    button.addEventListener('click', function handleClick(event){
        alert('I got clicked');
    })
})

