let moves = 0;
let seconds = 0;
var WinAudio = new Audio('BOJwinsound.mp3');
document.getElementById("timevar").innerHTML = seconds;
document.getElementById("movevar").innerHTML = moves;
var stopt = setInterval(timer2, 1000);
function timer2(){
	//timer
	seconds = ++seconds;
	document.getElementById("timevar").innerHTML = seconds;
}
function press(x){
	//inverts button you pressed and increases move count
	if (x.getAttribute('class') === 'drunk'){
	x.setAttribute('class', 'sober');
	}
	else if (x.getAttribute('class') === 'sober'){
		x.setAttribute('class', 'drunk');
	}
	moves = ++moves;
	document.getElementById("movevar").innerHTML = moves;
}
function wincheck() {
	//check gamestate to see if you won
	var buttonswin = document.getElementsByClassName('drunk');
	if (buttonswin.length === 25){
		WinAudio.play();
		alert("YOU WIN!");
	}
}
function startgame() {
	//timer and move count
	moves = -13;
	seconds = -1;
	document.getElementById("movevar").innerHTML = moves;
	document.getElementById("timevar").innerHTML = seconds;
	timer2();
	//randomize board
	var testreset = document.getElementsByClassName('testclass');
	var soberreset = document.getElementsByClassName('sober');
	while(testreset.length){
		testreset[0].setAttribute('class', 'drunk');
	}
	while(soberreset.length){
		soberreset[0].setAttribute('class', 'drunk');
	}
	var rng = [];
	while(rng.length < 13){
		var r = Math.floor(Math.random() * 25) + 1;
		if(rng.indexOf(r) === -1) rng.push(r);
	}
	function buttonrng(buttonnum){
		if(rng.includes(buttonnum)){
			document.getElementById("button" + buttonnum).click();
		}
	}
	buttonrng(1);
	buttonrng(2);
	buttonrng(3);
	buttonrng(4);
	buttonrng(5);
	buttonrng(6);
	buttonrng(7);
	buttonrng(8);
	buttonrng(9);
	buttonrng(10);
	buttonrng(11);
	buttonrng(12);
	buttonrng(13);
	buttonrng(14);
	buttonrng(15);
	buttonrng(16);
	buttonrng(17);
	buttonrng(18);
	buttonrng(19);
	buttonrng(20);
	buttonrng(21);
	buttonrng(22);
	buttonrng(23);
	buttonrng(24);
	buttonrng(25);
}
//adjacent buttons functions
/*potential generalized func
function adjacent(xn, bn)
	var xn = document.getElementById('bn');
	if (xn.getAttribute('class') === 'drunk'){
		xn.setAttribute('class', 'sober')
	}
	else if (xn.getAttribute('class') === 'sober'){
		xn.setAttribute('class', 'drunk')
	}
} */
function bca1(){
	var a1 = document.getElementById('button1');
	if (a1.getAttribute('class') === 'drunk'){
		a1.setAttribute('class', 'sober');
	}
	else if (a1.getAttribute('class') === 'sober'){
		a1.setAttribute('class', 'drunk');
	}
}
function bca2(){
	var a2 = document.getElementById('button2');
	if (a2.getAttribute('class') === 'drunk'){
		a2.setAttribute('class', 'sober');
	}
	else if (a2.getAttribute('class') === 'sober'){
		a2.setAttribute('class', 'drunk');
	}
}
function bca3(){
	var a3 = document.getElementById('button3');
	if (a3.getAttribute('class') === 'drunk'){
		a3.setAttribute('class', 'sober');
	}
	else if (a3.getAttribute('class') === 'sober'){
		a3.setAttribute('class', 'drunk');
	}
}
function bca4(){
	var a4 = document.getElementById('button4');
	if (a4.getAttribute('class') === 'drunk'){
		a4.setAttribute('class', 'sober');
	}
	else if (a4.getAttribute('class') === 'sober'){
		a4.setAttribute('class', 'drunk');
	}
}
function bca5(){
	var a5 = document.getElementById('button5');
	if (a5.getAttribute('class') === 'drunk'){
		a5.setAttribute('class', 'sober');
	}
	else if (a5.getAttribute('class') === 'sober'){
		a5.setAttribute('class', 'drunk');
	}
}
function bcb1(){
	var b1 = document.getElementById('button6');
	if (b1.getAttribute('class') === 'drunk'){
		b1.setAttribute('class', 'sober');
	}
	else if (b1.getAttribute('class') === 'sober'){
		b1.setAttribute('class', 'drunk');
	}
}
function bcb2(){
	var b2 = document.getElementById('button7');
	if (b2.getAttribute('class') === 'drunk'){
		b2.setAttribute('class', 'sober');
	}
	else if (b2.getAttribute('class') === 'sober'){
		b2.setAttribute('class', 'drunk');
	}
}
function bcb3(){
	var b3 = document.getElementById('button8');
	if (b3.getAttribute('class') === 'drunk'){
		b3.setAttribute('class', 'sober');
	}
	else if (b3.getAttribute('class') === 'sober'){
		b3.setAttribute('class', 'drunk');
	}
}
function bcb4(){
	var b4 = document.getElementById('button9');
	if (b4.getAttribute('class') === 'drunk'){
		b4.setAttribute('class', 'sober');
	}
	else if (b4.getAttribute('class') === 'sober'){
		b4.setAttribute('class', 'drunk');
	}
}
function bcb5(){
	var b5 = document.getElementById('button10');
	if (b5.getAttribute('class') === 'drunk'){
		b5.setAttribute('class', 'sober');
	}
	else if (b5.getAttribute('class') === 'sober'){
		b5.setAttribute('class', 'drunk');
	}
}
function bcc1(){
	var c1 = document.getElementById('button11');
	if (c1.getAttribute('class') === 'drunk'){
		c1.setAttribute('class', 'sober');
	}
	else if (c1.getAttribute('class') === 'sober'){
		c1.setAttribute('class', 'drunk');
	}
}
function bcc2(){
	var c2 = document.getElementById('button12');
	if (c2.getAttribute('class') === 'drunk'){
		c2.setAttribute('class', 'sober');
	}
	else if (c2.getAttribute('class') === 'sober'){
		c2.setAttribute('class', 'drunk');
	}
}
function bcc3(){
	var c3 = document.getElementById('button13');
	if (c3.getAttribute('class') === 'drunk'){
		c3.setAttribute('class', 'sober');
	}
	else if (c3.getAttribute('class') === 'sober'){
		c3.setAttribute('class', 'drunk');
	}
}
function bcc4(){
	var c4 = document.getElementById('button14');
	if (c4.getAttribute('class') === 'drunk'){
		c4.setAttribute('class', 'sober');
	}
	else if (c4.getAttribute('class') === 'sober'){
		c4.setAttribute('class', 'drunk');
	}
}
function bcc5(){
	var c5 = document.getElementById('button15');
	if (c5.getAttribute('class') === 'drunk'){
		c5.setAttribute('class', 'sober');
	}
	else if (c5.getAttribute('class') === 'sober'){
		c5.setAttribute('class', 'drunk');
	}
}
function bcd1(){
	var d1 = document.getElementById('button16');
	if (d1.getAttribute('class') === 'drunk'){
		d1.setAttribute('class', 'sober');
	}
	else if (d1.getAttribute('class') === 'sober'){
		d1.setAttribute('class', 'drunk');
	}
}
function bcd2(){
	var d2 = document.getElementById('button17');
	if (d2.getAttribute('class') === 'drunk'){
		d2.setAttribute('class', 'sober');
	}
	else if (d2.getAttribute('class') === 'sober'){
		d2.setAttribute('class', 'drunk');
	}
}
function bcd3(){
	var d3 = document.getElementById('button18');
	if (d3.getAttribute('class') === 'drunk'){
		d3.setAttribute('class', 'sober');
	}
	else if (d3.getAttribute('class') === 'sober'){
		d3.setAttribute('class', 'drunk');
	}
}
function bcd4(){
	var d4 = document.getElementById('button19');
	if (d4.getAttribute('class') === 'drunk'){
		d4.setAttribute('class', 'sober');
	}
	else if (d4.getAttribute('class') === 'sober'){
		d4.setAttribute('class', 'drunk');
	}
}
function bcd5(){
	var d5 = document.getElementById('button20');
	if (d5.getAttribute('class') === 'drunk'){
		d5.setAttribute('class', 'sober');
	}
	else if (d5.getAttribute('class') === 'sober'){
		d5.setAttribute('class', 'drunk');
	}
}
function bce1(){
	var e1 = document.getElementById('button21');
	if (e1.getAttribute('class') === 'drunk'){
		e1.setAttribute('class', 'sober');
	}
	else if (e1.getAttribute('class') === 'sober'){
		e1.setAttribute('class', 'drunk');
	}
}
function bce2(){
	var e2 = document.getElementById('button22');
	if (e2.getAttribute('class') === 'drunk'){
		e2.setAttribute('class', 'sober');
	}
	else if (e2.getAttribute('class') === 'sober'){
		e2.setAttribute('class', 'drunk');
	}
}
function bce3(){
	var e3 = document.getElementById('button23');
	if (e3.getAttribute('class') === 'drunk'){
		e3.setAttribute('class', 'sober');
	}
	else if (e3.getAttribute('class') === 'sober'){
		e3.setAttribute('class', 'drunk');
	}
}
function bce4(){
	var e4 = document.getElementById('button24');
	if (e4.getAttribute('class') === 'drunk'){
		e4.setAttribute('class', 'sober');
	}
	else if (e4.getAttribute('class') === 'sober'){
		e4.setAttribute('class', 'drunk');
	}
}
function bce5(){
	var e5 = document.getElementById('button25');
	if (e5.getAttribute('class') === 'drunk'){
		e5.setAttribute('class', 'sober');
	}
	else if (e5.getAttribute('class') === 'sober'){
		e5.setAttribute('class', 'drunk');
	}
}