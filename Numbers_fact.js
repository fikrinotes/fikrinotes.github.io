var button1 = document.querySelector('.btn-1')
var result1= document.querySelector('.result-1')
button1.addEventListener('click',random);
function random() {
  fetch('http://numbersapi.com/random/?json')
  .then(response =>response.json())
  .then(data=> {
    result1.innerHTML=data['text'];
    
  });
}
