var button1 = document.querySelector('.btn-1')
button1.addEventListener('click',random);
function random() {
  var result1= document.querySelector('.result-1');
  fetch('http://numbersapi.com/random/?json')
  .then(response =>response.json())
  .then(data=> {
    alert('hello world');
    
  });
}
