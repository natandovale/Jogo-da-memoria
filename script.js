const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockboard = false;

function flipCard() {
	if(lockboard) return;
	if(this === firstCard) return;
	
	
	this.classList.add('flip');
	if(!hasFlippedCard){
		hasFlippedCard = true;
		firstCard = this;
		return;
	}
	secondCard = this;
	hasFlippedCard = false;
	checkForMath();
}

function checkForMath(){
	if(firstCard.dataset.card === secondCard.dataset.card ){
		desableCards();
		return;
	}
	
	unflipCards();
	
}

function desableCards(){
	firstCard.removeEventListener('click', flipCard);
	secondCard.removeEventListener('click', flipCard);
	
	resetBoard();
}

function unflipCards(){
	lockboard = true;
	
	setTimeout(() => {
	  firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');	  
	  
	  resetBoard();
	  
	 lockboard = false; 
	}, 1500)
}

function resetBoard(){
	[hasFlippedCard, lockboard] = [false, false];
	[firstCard, secondCard] = [null, null];
	
}

(function shufle(){
	cards.forEach((card) => {
		let randomPosition = Math.floor(Math.random() * 12)
		card.style.order = randomPosition;
	})
	
})();

cards.forEach((card) => {
	card.addEventListener('click', flipCard)
	
})




















































