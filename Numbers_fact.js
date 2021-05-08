var button1 = document.querySelector('.btn-1')
button1.addEventListener('click',random);
function random() {
  var result1= document.querySelector('.result-1');
  fetch('https://random-math-quote-api.herokuapp.com')
  .then(response => response.json())
  .then(data => {
  result1.innerHTML = data['quote'];
  alert(data['author'];
})
}
