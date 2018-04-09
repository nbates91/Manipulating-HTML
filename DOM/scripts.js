var body = document.body;
var btn = document.createElement('button');
var btnText = document.createTextNode('Click me please!');
var btn2 = document.getElementById('button2');
var square = document.getElementById('square');
var colorText = document.getElementById('colorText');
var btn3 = document.createElement('button');
var btnText2 = document.createTextNode('Click for my name!');
var btn4 = document.getElementById('button4');
var ul = document.getElementById('friendList');

var li = document.createElement('li');

body.appendChild(btn);
btn.appendChild(btnText);
btn3.appendChild(btnText2);
body.appendChild(btn3);

square.style.height = '100px';
square.style.width = '100px';
square.style.backgroundColor = 'grey';

colorText.addEventListener('click', randomColor);

square.addEventListener('mouseover', function() {
	square.style.backgroundColor = 'orange';
});

square.addEventListener('mouseleave', function() {
	square.style.backgroundColor = 'grey';
});

btn.addEventListener('click', function() {
	alert('Thanks for the click!');
});

btn2.addEventListener('click', function() {
	var textInput = document.getElementById('textInput').value;
	alert(textInput);
});

btn3.addEventListener('click', function() {
	var span = document.createElement('span');
	var nameText = document.createTextNode('Nick Bates');
	span.appendChild(nameText);
	body.appendChild(span);
});

function listFriends(i) {
	var friends = ['Kalyn', 'Ned', 'Benny', 'Zack', 'Kristi', 'Stephen', 'Mary', 'Taft', 'Marshay', 'Brady'];
	friendList.innerHTML = friendList.innerHTML + friends[i];
}

function randomColor() {
	var rcolor1 = Math.floor(Math.random() * 256);
	var rcolor2 = Math.floor(Math.random() * 256);
	var rcolor3 = Math.floor(Math.random() * 256);
	this.style.color = 'rgb(' + rcolor1 + ',' + rcolor2 + ',' + rcolor3 + ')';
}
