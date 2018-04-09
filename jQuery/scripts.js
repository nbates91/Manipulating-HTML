var body = $('body');
var btn = $('<button>Click me!</button>');
var btn2 = $('#button2');
var square = $('#square');
var p = $('<p>I am changing colors!!!</p>');
var btn3 = $('#button3');
var btn4 = $('#button4');
var ul = $('#friendList');

body.append(p);
body.append(btn);
btn.click(niceAlert);

function niceAlert() {
	alert('Thanks for the click, friend!');
}

btn2.click(function() {
	var textInput = $('#textInput').val();
	alert(textInput);
});

square.css({
	height: '100px',
	width: '100px',
	'background-color': 'grey',
});

square.mouseover(function() {
	square.css('background-color', 'orange');
});

square.mouseleave(function() {
	square.css('background-color', 'grey');
});

p.click(generateColor);

btn3.click(function() {
	var span = $('<span>Nick Bates</span>');
	var nameHolder = $('#nameHolder');
	nameHolder.append(span);
});

var friends = ['Kalyn', 'Ned', 'Benny', 'Zack', 'Kristi', 'Stephen', 'Mary', 'Taft', 'Marshay', 'Brady'];

btn4.click(function() {
	for (var i = 0; i < friends.length; i++) {
		var li = $('<li>' + friends[i] + '</li>');
		ul.append(li);
	}
});

function generateColor() {
	var randomColor1 = Math.floor(Math.random() * 256);
	var randomColor2 = Math.floor(Math.random() * 256);
	var randomColor3 = Math.floor(Math.random() * 256);
	$(this).css('color', 'rgb(' + randomColor1 + ',' + randomColor2 + ',' + randomColor3 + ')');
}
