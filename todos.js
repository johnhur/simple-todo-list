var form = document.querySelector('form');
var ul = document.getElementById('list');

form.addEventListener('submit', function(e){
	e.preventDefault();
	var input = document.getElementById('userInput')
	console.log(input.value)
})

var button = document.querySelector('button');
button.addEventListener('click', function(){
	var input2 = document.querySelector('input');
	var li = document.createElement('li');
	ul.appendChild(li);
	li.innerHTML = input2.value;
	document.getElementById('userInput').value = '';

})
//var ul = document.querySelectorAll('li');
ul.addEventListener('click', function(event) {
	event.srcElement.className = "completed"
})