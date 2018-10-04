const typeWriter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

// Type Method
typeWriter.prototype.type = function () {
    // Current Index of Words
    const current = this.wordIndex % this.words.length;

    //Get Full Text of Current word
    const fulltxt = this.words[current];

    //Check if Deleting
    if (this.isDeleting) {
        //Remove Character
        this.txt = fulltxt.substring(0, this.txt.length - 1);
    }else{
        //Add Character
        this.txt = fulltxt.substring(0, this.txt.length + 1);
    }

    //Insert Txt into Element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
        typeSpeed /= 2;
    }

    //If Word is Complete
    if (!this.isDeleting && this.txt === fulltxt) {
        //Make a pause at End
        typeSpeed = this.wait;
        //Set Delete to true
        this.isDeleting = true;
    }else if(this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        //Move to the next word
        this.wordIndex++;
        //Pause before start typing
        typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
}


//Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    //Init Type Writer

    new typeWriter(txtElement, words, wait);
}