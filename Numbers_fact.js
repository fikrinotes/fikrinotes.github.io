var button1 = document.querySelector('.btn-1')
button1.addEventListener('click',random);
function random() {
  var result1= document.querySelector('.result-1');
  result1.innerHTML="Loading...";
  fetch('http://numbersapi.com/random/?json')
  .then(response =>response.json())
  .then(data=> {
    result1.innerHTML=data['text'];
    
  });
}
