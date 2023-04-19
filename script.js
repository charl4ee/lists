var l = []
const longString = "007601110114010101090032010501120115011701090032010001110108011101140032011501050116003200970109010101160044003200910098009300320097010001050112010501150099010501100103003201010108010501160044003201150101010000320100011100320101010501170115010901110100003201160101010901120111011400320105011000990105010001050100011701100116003201170116003201080097009801110114010100320101011600320100011101080111011401010032010900970103011000970032009701080105011301170097004600320085011600320101011001050109003200970100003201090105011001050109003201180101011001050097010900440032009100970093003201130117010501150032011001110115011601140117010000320101012001010114009901050116009701160105011101100032011701080108009701090099011100320108009700980111011401050115003201100105011501050032011701160032009701080105011301170105011200320101012000320101009700320099011101090109011101000111003200990111011001150101011301170097011600460032006801170105011500320097011701160101003201050114011701140101003201000111010801110114003201050110003201140101011201140101009701010110010001010114010501160032010501100032011801110108011701120116009701160101003201180101010801050116003201010115011501010032009901050108010801170109003201000111010801110114010100320101011700320102011701030105009701160032011001170108010800970032011200970114010500970116011701140046003200690120009901010112011601010117011400320115010501100116003201110099009900970101009900970116003200910098009300320110011101100032011201140111010501000101011001160044003201150117011001160032010501100032009901170108011200970032011301170105003201110102010201050099010500970032010001010115010101140117011001160032010901110108010801050116003200970110010501090032010501000032010101150116003201080097009801110114011701090044003201090097010301100097003200970108010501130117009700460032008501160032010101100105010900320097010000320109010501100105010900320118010101100105009701090044003200910097009300320113011701050115003201100111011501160114011701000032010101200101011400990105011600970116010501110110003201170108010800970109009901110032010800970098011101140105011500320110010501150105003201170116003200970108010501130117010501120032010101200032010100970032009901110109010901110100011100320099011101100115010101130117009701160046003200680117010501150032009701170116010100320105011401170114010100320100011101080111011400320105011000320114010101120114010100970101011001000101011401050116003201050110003201180111010801170112011600970116010100320118010101080105011600320101011501150101003200990105010801080117010900320100011101080111011401010032010101170032010201170103010500970116003201100117010801080097003201120097011401050097011601170114004600320069012000990101011201160101011701140032011501050110011600320111009900990097010100990097011600320091009900930032011001110110003201120114011101050100010101100116004400320115011701100116003201050110003200990117010801120097003201130117010500320111010201020105009901050097003201000101011501010114011701100116003201090111010801080105011600320097011001050109003200910098009300320105010000320101011501160032010800970098011101140117010900460113011701050115003201100111011501160114011701000032009100980093003201010120010101140099010501160097011601050111011000320117010801080097010900990111003201080097009801110114010501150032011001050115010500320117011600320091009800930097010801050113011701050112003201010120003201010097003200990111010901090111010001110032009901110110011501010113011700970116004600320068011701050115003200910098009300970117011601010032010501140117011401010032010001110108011101140032010501100032011401010112011401010097010101100100010101140105011600320105011000320118011101080117011201160097011601010091009800930032011801010108010501160032010101150115010100320099010501080108011701090032010001110108011101140101003201010117003201020117010301050097011600320110011701080108009700320112009701140105009701160117011400460032006901200099010101120116010101170114003201150105011001160032011100990099009701010099009701130117010501150032011001110115011601140117010000320101012001010114009901050116009701160105011101100032011701080108009701090099011100320108009700980111011401050115003201100105011501050032011701160032009701080105011301170105011200320101012000320101009700320099011101090109011101000111003200990111011001150101011301170097011600460032006801170105011500320097011701160101003201050114011701140101003201000111010801110114003201050110003201140101011201140101009701010110010001010114010501160032010501100032011801110108011701120116009701160101003201180101010801050116009100990093003201010115011501010032009100970093009901050108010801170109003201000111010801110114010100320101011700320102011701030105009701160032011001170108010800970032011200970114010500970116011701140046003200910099009300690120009901010112011601010117011400320115010501100116009100990093003201110099009900970101009900970032011301170105011500320110011101150116011401170100003201010120010101140099010501160097011601050111011000320117010801080097010900990111003201080097009801110114010501150032011001050115010500320117011600320097010801050113011701050112003201010120003201010097003200990111010901090111010001110032009901110110011501010113011700970116004600320068011701050115003200970117011601010032010501140117011401010032010001110108011101140032010501100032011401010112011401010097010100910097009301100100010101140105011600320105011000320118011101080117011201160097011601010032011801010108010501160032010101150115010100320099010501080108011701090032010001110108011101140101003201010117003201020117010301050097011600320110011701080108009700320112009701140105009701160117011400460032006901200099010101120116010101170114003201150105011001160032011100990099009701010099";

var qNum = 0;
var TotScore = 75;
var score = 75;
const numQs = 15;


const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
//if (isMobile) {
	const draggableElements = document.querySelectorAll('[draggable=true]');
	const dropContainers = document.querySelectorAll('.drop-container');	
	let currentDrag;
	
	draggableElements.forEach((draggable) => {
	  draggable.addEventListener('touchstart', onTouchStart);
	  draggable.addEventListener('touchmove', onTouchMove);
	  draggable.addEventListener('touchend', onTouchEnd);
	  draggable.addEventListener('touchcancel', onTouchEnd);
	});
	
	function onTouchStart(event) {
	  const touch = event.targetTouches[0];
	  currentDrag = touch.target;
	  currentDrag.style.transition = 'none';
	  currentDrag.style.zIndex = 100;
	}

	function onTouchMove(event) {
	  const touch = event.targetTouches[0];
	  const offsetX = touch.target.offsetLeft;
	  const offsetY = touch.target.offsetTop;
	  const x = touch.pageX - offsetX;
	  const y = touch.pageY - offsetY;
	  currentDrag.style.transform = `translate(${x}px, ${y}px)`;
	  	
	  
	// Check if the current drag element is over any of the drop containers
	dropContainers.forEach((container) => {
		if (isOverElement(currentDrag, container)) {
		  container.classList.add('drag-over');		  
		} else {
		  container.classList.remove('drag-over');
		}			
  	    if (container.classList.contains("incorrect")) {
		  container.textContent = "Try again";
	    }
		
	});
	}  
	
	
	function onTouchEnd(event) {
	  console.log("a");
	  currentDrag.style.transition = 'transform 0.2s ease-in-out';
	  currentDrag.style.transform = 'none';
	  currentDrag.style.zIndex = 'auto';
	  
	  // Check if the current drag element is over any of the drop containers
	  dropContainers.forEach((container) => {		
		  if (isOverElement(currentDrag, container)) {	  
		    if (container.classList.contains("correct")){	  
			  return;
		    }
		  container.style.fontWeight = "bold";
		  container.classList.remove('incorrect');
		  container.classList.remove('correct');
		  container.classList.remove('drag-over');
		  		  
		  if (container!==null){
			  if (container.classList.contains("incorrect")) {
				  container.textContent = "Try again";
			  }
		  } else {
			container.classList.remove('drag-over');
			}
		
		// If the data-answer attribute of the drag box matches the question's answer
		  if (currentDrag.dataset.answer === l[qNum]) {
			// Add the correct class to the question container
			container.classList.add('correct');
			container.textContent = "Correct";
			container.innerHTML += "<br>"
			container.appendChild(currentDrag);
			qNum++;
			if (document.getElementById("q"+qNum) != null){
				document.getElementById("q"+qNum).classList.remove("invisible");
			}
			const scrollingElement = (document.scrollingElement || document.body);
			scrollingElement.scrollTop = scrollingElement.scrollHeight;
		  } else {
			// Add the incorrect class to the question container
			score -= 2;
			container.classList.add('incorrect');
			container.textContent = "Try again";
			container.innerHTML += "<br>"
			container.appendChild(currentDrag);
		  }
		  document.getElementById("results-container").textContent = "Score: " + score + " / " + TotScore;
		
		}
	  });
	  
	}
	
	function isOverElement(element, container) {
	  const elementRect = element.getBoundingClientRect();
	  const containerRect = container.getBoundingClientRect();
	  
	  return (
		elementRect.right >= containerRect.left &&
		elementRect.left <= containerRect.right &&
		elementRect.bottom >= containerRect.top &&
		elementRect.top <= containerRect.bottom
	  );
	}

	
//} else {
	  // The user agent is not a mobile device

	// Get all the drag boxes
	const dragBoxes = document.querySelectorAll('.drag-box');

	var currentQuestionContainer = null;

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


	// When the drag starts, set the selected drag box to this one
	function dragStart() {
	  selectedDragBox = this;
	  //remove child if incorrect
	  if (currentQuestionContainer!==null){
		  if (currentQuestionContainer.classList.contains("incorrect")) {
			  currentQuestionContainer.textContent = "Try again";
		  }
	  }	
	}

	// When the drag enters the container, add the hover class
	function dragEnter(e) {
	  e.preventDefault();	  	  
	  this.classList.add('drag-over');
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
	  this.classList.remove('drag-over');
	  
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
	  document.getElementById("results-container").textContent = "Score: " + score + " / " + TotScore;
	}
//}


//using [...arr] is the fastest and most efficient way to convert htmlCollection to an array.
[...document.getElementsByClassName('QnD')].forEach(el => {
	el.setAttribute("id", "q"+ qNum);
	qNum++;
	if(qNum>=2){
		el.setAttribute("class","invisible");
	}
})
		
qNum = 0;



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