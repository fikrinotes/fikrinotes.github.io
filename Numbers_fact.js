//var quote = document.querySelector('.quote');
//var author = document.querySelector('.author')
//fetch('https://random-math-quote-api.herokuapp.com')
//.then(response => response.json())
//.then(data => {
//  quote.innerHTML = data['quote'];
//  author.innerHTML ="- "+ data['author'];
//})


var result1= document.querySelector('.result-1')
var result2= document.querySelector('.result-2')

function random() {
  //result1.innerHTML = 'Loading';
  fetch('http://numbersapi.com/random')
  .then((response) =>response.text())
  .then((data)=> {
    result1.innerHTML=data;
    
  });
}
function custom() {
  //result2.innerHTML = 'Loading...';
  var type = document.querySelector('.form-select').value;
  var input = document.querySelector('.input').value;
  var num =input.toString()
  var url = 'http://numbersapi.com/'+num+'/'+type;
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        result2.innerHTML = data;
    
      });
  
}




//button1.addEventListener('click', function(name){
//fetch('http://numbersapi.com/random')
//.then(response => response.json())
//.then((data) => {
//  alert("hello world");

//})

//.catch(err => alert("error!"))
//})
