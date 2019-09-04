
// selecting the photo effect and making it come alive
const image = document.querySelector('.app-hover');
image.addEventListener('mouseover', hoverEffect);
image.addEventListener('mouseout', afterHoverEffect);

const content1 = document.querySelector('.button1-content')
const content2 = document.querySelector('.button2-content')

function hoverEffect(){
  const hover = document.querySelector('.hover-effect');
  hover.style.display = 'block';
}

function afterHoverEffect(){
  const hover = document.querySelector('.hover-effect');
  hover.style.display = 'none';
}

// videos selector

const button = document.querySelector('.change1')
const button2 = document.querySelector('.change2')

button.addEventListener('click', buttonChange);
button2.addEventListener('click', buttonChange2);

// changing state of first button
function buttonChange(){
  // changing color of the button
  button2.style.backgroundColor = 'black';
  button.style.backgroundColor = '#402b3c';

  // removing content of button1 if button 1 is clicked
  content1.style.display = 'block';
  content2.style.display = 'none';
}

function buttonChange2(){
  // change button effect
  button2.style.backgroundColor = '#402b3c';
  button.style.backgroundColor = "black";

  content1.style.display = 'none';
  content2.style.display = 'block';
}
