const buttons = document.querySelectorAll('.button');

const body = document.body;

buttons.forEach(function(button) {
  console.log(button)
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
    const color =e.target.id;
    switch(color)
    {
      case 'grey':
    
    body.style.backgroundColor=color;
    break;

    case 'white':
    
    body.style.backgroundColor=color;
    break;

    case 'blue':
    
    body.style.backgroundColor=color;
    break;

    case 'yellow':
    
    body.style.backgroundColor=color;
    break;

    

    }
    
  })
})
