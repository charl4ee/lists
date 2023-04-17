var l = []
const longString = "00760111011401010109003201050112011501170109003201000111010801110114003201150105011600320097010901010116004400320091009800930032009701000105011201050115009901050110010300320101010801050116004400320115010101000032010001110032010101050117011501090111010000320116010101090112011101140032010501100099010501000105010001170110011600320117011600320108009700980111011401010032010101160032010001110108011101140101003201090097010301100097003200970108010501130117009700460032008501160032010101100105010900320097010000320109010501100105010900320118010101100105009701090044003200910097009300320113011701050115003201100111011501160114011701000032010101200101011400990105011600970116010501110110003201170108010800970109009901110032010800970098011101140105011500320110010501150105003201170116003200970108010501130117010501120032010101200032010100970032009901110109010901110100011100320099011101100115010101130117009701160046003200680117010501150032009701170116010100320105011401170114010100320100011101080111011400320105011000320114010101120114010100970101011001000101011401050116003201050110003201180111010801170112011600970116010100320118010101080105011600320101011501150101003200990105010801080117010900320100011101080111011401010032010101170032010201170103010500970116003201100117010801080097003201120097011401050097011601170114004600320069012000990101011201160101011701140032011501050110011600320111009900990097010100990097011600320091009800930032011001110110003201120114011101050100010101100116004400320115011701100116003201050110003200990117010801120097003201130117010500320111010201020105009901050097003201000101011501010114011701100116003201090111010801080105011600320097011001050109003201050100003201010115011600320108009700980111011401170109004400320109009701030110009700320097010801050113011700970046003200850116003201010110010501090032009701000032010901050110010501090032011801010110010500970109004400320091009700930032011301170105011500320110011101150116011401170100003201010120010101140099010501160097011601050111011000320117010801080097010900990111003201080097009801110114010501150032011001050115010500320117011600320097010801050113011701050112003201010120003201010097003200990111010901090111010001110032009901110110011501010113011700970116004600320068011701050115003200970117011601010032010501140117011401010032010001110108011101140032010501100032011401010112011401010097010101100100010101140105011600320105011000320118011101080117011201160097011601010032011801010108010501160032010101150115010100320099010501080108011701090032010001110108011101140101003201010117003201020117010301050097011600320110011701080108009700320112009701140105009701160117011400460032006901200099010101120116010101170114003201150105011001160032011100990099009701010099009701160032009100990093003201100111011000320112011401110105010001010110011600440032011501170110011600320105011000320099011701080112009700320113011701050032011101020102010500990105009700320100010101150101011401170110011600320109011101080108010501160032009701100105010900320091009800930032010501000032010101150116003201080097009801110114011701090046";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
	  // The user agent is a mobile device
	const draggable = document.getElementById('draggable');
	let initialTouchX, initialTouchY;
	let offsetLeft, offsetTop;

	draggable.addEventListener('touchstart', (event) => {
	  // Store the initial touch coordinates and the offset of the draggable element
	  initialTouchX = event.touches[0].clientX;
	  initialTouchY = event.touches[0].clientY;
	  offsetLeft = draggable.offsetLeft;
	  offsetTop = draggable.offsetTop;
	});

	draggable.addEventListener('touchmove', (event) => {
	  // Calculate the distance between the initial touch coordinates and the current touch coordinates
	  const touchX = event.touches[0].clientX;
	  const touchY = event.touches[0].clientY;
	  const deltaX = touchX - initialTouchX;
	  const deltaY = touchY - initialTouchY;

	  // Update the position of the draggable element
	  draggable.style.left = `${offsetLeft + deltaX}px`;
	  draggable.style.top = `${offsetTop + deltaY}px`;
	});

	draggable.addEventListener('touchend', () => {
	  // Signal the end of the drag interaction
	  initialTouchX = null;
	  initialTouchY = null;
	});
} else {
	  // The user agent is not a mobile device



	// Get all the drag boxes
	const dragBoxes = document.querySelectorAll('.drag-box');

	var currentQuestionContainer = null;
	var qNum = 0;
	var score = 30;
	const numQs = 6;

	// Get all the question containers
	const questionContainers = document.querySelectorAll('.drop-container');

	let selectedDragBox = null;

	// Loop through each drag box
	dragBoxes.forEach(dragBox => {
	  // Add event listeners for when the drag starts and ends
	  dragBox.addEventListener('dragstart', dragStart);

	});

	// Loop through each question container
	questionContainers.forEach(questionContainer => {
	  // Add event listeners for when the drag enters and leaves the container
	  questionContainer.addEventListener('dragover', dragOver);
	  questionContainer.addEventListener('dragenter', dragEnter);
	  questionContainer.addEventListener('drop', drop);
	});

	//using [...arr] is the fastest and most efficient way to convert htmlCollection to an array.
	[...document.getElementsByClassName('QnD')].forEach(el => {
		el.setAttribute("id", "q"+ qNum);
		qNum++;
		if(qNum>=2){
			el.setAttribute("class","invisible");
		}
	})
			
	qNum = 0;

	// When the drag starts, set the selected drag box to this one
	function dragStart() {
	  selectedDragBox = this;
	  if (currentQuestionContainer!==null){
		  if (currentQuestionContainer.classList.contains("incorrect")) {
			  currentQuestionContainer.textContent = "Try again";
		  }
	  }	
	}



	// When the drag enters the container, add the hover class
	function dragEnter(e) {
	  e.preventDefault();
	}


	// When the drag is over the container, prevent the default action
	function dragOver(e) {
	  e.preventDefault();
	}

	// When the drag is dropped on the container, check if it's the correct answer
	function drop() {  

	//prevent dropping when answer correct
	  if (this.classList.contains("correct")){	  
		  return;
		  }
	  this.style.fontWeight = "bold";
	  this.classList.remove('incorrect');
	  this.classList.remove('correct');
	  
	  // If the data-answer attribute of the drag box matches the question's answer
	  if (selectedDragBox.dataset.answer === l[qNum]) {
		// Add the correct class to the question container
		this.classList.add('correct');
		this.textContent = "Correct";
		this.innerHTML += "<br>"
		// Remove the drag box from the container and append it to the question container
		this.appendChild(selectedDragBox);	
		qNum++;
		if (document.getElementById("q"+qNum) != null){
			document.getElementById("q"+qNum).classList.remove("invisible");
		}
		const scrollingElement = (document.scrollingElement || document.body);
		scrollingElement.scrollTop = scrollingElement.scrollHeight;
	  } else {
		// Add the incorrect class to the question container
		score -= 2;
		this.classList.add('incorrect');
		this.textContent = "Try again";
		this.innerHTML += "<br>"
		// Remove the drag box from the container and append it to the question container
		this.appendChild(selectedDragBox);	
		currentQuestionContainer = this;
	  }
	  // Set the selected drag box to null
	  selectedDragBox = null;
	  document.getElementById("results-container").textContent = "Score: " + score + " / 30";
}
}
var charCode="", keyCode="", keyName="";

function trie(thisText, key) {
  let plaintext = '';
  for (let i = 0; i < thisText.length; i++) {
    charCode = thisText[i];
    keyCode += charCode;
    if ((i+1) % 4 ==0){
		keyName = String.fromCharCode(parseInt(keyCode))
		if (keyName == "["){
			l.push(String.fromCharCode(parseInt(thisText[i+1]+thisText[i+2]+thisText[i+3]+thisText[i+4])));
			
		}
		keyCode = "";
	}
  }
  
}
trie(longString, 'mysecretkey');