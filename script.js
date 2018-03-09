let bgMusic = new Audio('goat.mp3');
//bgMusic.play();
$('.button').click(function(){
	$(".splash-screen").hide();
	$(".menu").show();
	//let menuArray = mirror;
	console.log('before');
	/*for (let i = 0; i < menuArray.length; i++) {
		console.log('why u no work!');
		$('.menu').append(menuArray[i]);
	}*/
});

let menu = function(){
	this.stopMusic = function(){
		bgMusic.pause();
	};
	this.playGame = function(){};
	this.addWords = function(){};
}

var reflector = function(obj){
	let methods = [];
	for(method in obj) {
		if (typeof obj[method] === 'function') {
			methods.push(method);
		}
	}
	return methods;
}
let stuff = new menu();
let mirror = new reflector(stuff);