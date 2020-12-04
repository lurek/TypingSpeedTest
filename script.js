const setofwords = [
	"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
	"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
	"when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	"It has survived not only five centuries,",
	"but also the leap into electronic typesetting, remaining essentially unchanged. "
];
const msg = document.getElementById('msg');
const typewords = document.getElementById('mywords');
const btn = document.getElementById('btn');
const time = document.getElementById('time');
let startTime , endTime , totalTime;

const playGame = () => {
	randomNumber = Math.floor(Math.random()*setofwords.length);
	msg.innerText = setofwords[randomNumber];
	let date = new Date();
	startTime = date.getTime();
	btn.innerText = "Done";
}
const endGame = () => {
	if (typewords.value == "") {
		alert("Please type in the box first");
	} else {
	let date = new Date();
	endTime = date.getTime();
	totalTime = ((endTime - startTime) / 1000);

	let totalStr = typewords.value;
	let wordCount = wordCounter(totalStr);

	let speed = Math.round((wordCount / totalTime) * 60);
	let finalMsg = "Your typing speed is "+speed+" words per minute , "
	finalMsg += compareWords(msg.innerText,totalStr);
	msg.innerText = finalMsg;
}
}
const wordCounter = (str) => {
	let response = str.split(" ").length;
	return response;
}
const compareWords = (str1,str2) => {
	let words1 = str1.split(" ");
	let words2 = str2.split(" ");
	let cnt = 0;

	words1.forEach(function (item, index) {
		if (item == words2[index]) {
			cnt++;
		}
	})
	let errorWords = (words1.length - cnt);
	return ( cnt + " Correct out of " + words1.length + " words and the total number of error(s) are " 
		+ errorWords + " . ")
}
btn.addEventListener('click',function(){
	if (this.innerText == 'Start') {
		typewords.disabled = false;
		playGame();
	} else if (this.innerText == 'Done'){
		typewords.disabled = true;
		btn.innerText = "Start";
		endGame();
	}
})