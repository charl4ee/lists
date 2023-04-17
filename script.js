// Get all the drag boxes
const dragBoxes = document.querySelectorAll('.drag-box');

var currentQuestionContainer = null;
var qNum = 1;

// Get all the question containers
const questionContainers = document.querySelectorAll('.drop-container');

let selectedDragBox = null;

// Loop through each drag box
dragBoxes.forEach(dragBox => {
  // Add event listeners for when the drag starts and ends
  dragBox.addEventListener('dragstart', dragStart);
  dragBox.addEventListener('dragend', dragEnd);
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
	if(qNum>=3){
		el.setAttribute("class","invisible");
	}
})
		
qNum = 1;

// When the drag starts, set the selected drag box to this one
function dragStart() {
  selectedDragBox = this;
  if (currentQuestionContainer!==null){
	  if (currentQuestionContainer.classList.contains("incorrect")) {
		  currentQuestionContainer.textContent = "Try again";
	  }
  }	
}

// When the drag ends, remove the invisible class from the selected drag box
function dragEnd() {
  //selectedDragBox.classList.remove('invisible');
}

// When the drag enters the container, add the hover class
function dragEnter(e) {
  e.preventDefault();
  //this.classList.add('hovered');
}


// When the drag is over the container, prevent the default action
function dragOver(e) {
  e.preventDefault();
}

// When the drag is dropped on the container, check if it's the correct answer
function drop() {  
  if (this.classList.contains("correct")){
	  
	  return;
	  }
  
  this.classList.remove('incorrect');
  this.classList.remove('correct');
  
  // If the data-answer attribute of the drag box matches the question's answer
  if (selectedDragBox.dataset.answer === this.dataset.answer) {
    // Add the correct class to the question container
    this.classList.add('correct');
	this.textContent = "Correct";
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
	this.classList.add('incorrect');
	this.textContent = "Try again";
	// Remove the drag box from the container and append it to the question container
    this.appendChild(selectedDragBox);	
	currentQuestionContainer = this;
  }
  // Set the selected drag box to null
  selectedDragBox = null;
}

