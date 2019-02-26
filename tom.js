function require(file) {
	$.ajax({
		url: file,
		success: function (file) {
			console.log("File loaded successfully")
		},
		error: function () {
			throw new Error("Could not load "+file)
		}
	});
	return file;
}

const sleepImg = require('img/sleep.gif');
const eatImg = require('img/eat.gif');
const fallImg = require('img/fall.gif');
const talkImg = require('img/talk.gif');

class Tom {
	recognizeWord(){

		var recognition = new webkitSpeechRecognition() ||
		root.mozSpeechRecognition ||
		root.msSpeechRecognition ||
		root.oSpeechRecognition ||
		root.SpeechRecognition;
		
		recognition.continuous = true;
		recognition.interimResults = true;

			recognition.onresult = function(event) { 
				console.log(event);
				var returnedWord;
				
				for(var i=0; i<event.results.length; i++){
					
					returnedWord = event.results[i][0].transcript;
					sayWord(returnedWord);
				}
			}
			recognition.start();
		}

	sayWord(word){
		var msg = new SpeechSynthesisUtterance();
		msg.text = word;
		msg.volume = 100;
		window.speechSynthesis.speak(msg);

		talk();
	}

	talk(){
		var bgImage = document.querySelector(".background");
		bgImage.src = talkImg;
		return;
	}

	fall(){
		var bgImage = document.querySelector(".background");
		bgImage.src = fallImg;
		return;
	}

	sleep(){
		var bgImage = document.querySelector(".background");
		bgImage.src = sleepImg;
		return;
	}

	eat(){
		var bgImage = document.querySelector(".background");
		bgImage.src = eatImg;
		return;		
	}
}
var tom = new Tom();

const tomTalk = document.querySelector('.talk');
const beat = document.querySelector('.beat');
const tomSleep = document.querySelector('.sleep');
const tomEat = document.querySelector('.eat'); 

tomTalk.addEventListener("click", tom.recognizeWord());
beat.addEventListener("click", tom.fall());
tomSleep.addEventListener("click", tom.sleep());
tomEat.addEventListener("click", tom.eat());