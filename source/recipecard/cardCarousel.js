
class CardCarousel extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        style.innerHTML = `
        .back, .forward {
            cursor: pointer;
            position: relative;
            top: 50%;
            display: block;
            width: auto;
            height: 20px;
            padding: 17px;
            border-radius: 50px;
            color: black;
            font-size: 20px;
            overflow: hidden;
            transition: all .35s;
          }
          
          .back {
          }
          
          /* place forward button to right of page */
          .forward {
          }
          
          /* button transition features */
          .back:hover, .forward:hover {
            color: #df342f;
          }
          
          .back:before, .back:after,
          .forward:before, .forward:after {  
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            top: -100%;
            left: 0;
            background: lightgrey;
            z-index: -1;
            transition: all .35s;
          }
          
          .back:before, .forward:before {
            opacity: .5;
          }
          
          .back:after, .forward:after {
            transition-delay: .25s;
          }
          
          .back:hover:before, .back:hover:after,
          .forward:hover:before, .forward:hover:after {
            top: 0;
          }
          `;

        this.shadowRoot.append(style);
    }


    // paramter is in an array of recipe cards
    createCardCarousel(recipeCards) {
        const forwardButton = document.createElement('a');
        const backwardButton = document.createElement('a');
        forwardButton.classList.add('forward')
        backwardButton.classList.add('back')
        forwardButton.innerHTML = '&#10095;';
        backwardButton.innerHTML = '&#10094;';

        // Add the back button to the card carousel
        this.shadowRoot.append(backwardButton);
        //this.shadowRoot.querySelector('.back').setAttribute('style', 'display: none');

        // Set cards in the carousel
        for (let i = 0; i < recipeCards.length; i++) {
            this.shadowRoot.append(recipeCards[i]);
        }

        var currentIndex = 0;
        // gets a number of recipes that would fit on the screen
        var numberOfrecipes = parseInt(window.innerWidth / 400);

        this.displayCards(currentIndex, numberOfrecipes, recipeCards);

        // Add the forward button to the card carousel
        this.shadowRoot.append(forwardButton);

        //Binds the back and forward buttons to their respective carousel's functions
        this.shadowRoot.querySelector('.back').addEventListener('click', () => {
            this.displayCards(currentIndex, numberOfrecipes, recipeCards);
            currentIndex -= numberOfrecipes;
            if (currentIndex < 0) {
                currentIndex = 0;
                // Since there is nothing to go back to, we need to indicate that the carousel is at the end
                //this.shadowRoot.querySelector('.back').setAttribute('style', 'display: none');
            }
            //this.shadowRoot.querySelector('.forward').setAttribute('style', '');
        });


        this.shadowRoot.querySelector('.forward').addEventListener('click', () => {
            this.displayCards(currentIndex, numberOfrecipes, recipeCards);
            currentIndex += numberOfrecipes;
            if (currentIndex > recipeCards.length - numberOfrecipes) {
                currentIndex = recipeCards.length - numberOfrecipes;
                // Since there is nothing to go forward to, we need to indicate that the carousel is at the end
                //this.shadowRoot.querySelector('.forward').setAttribute('style', 'display: none');
            }
            //this.shadowRoot.querySelector('.back').setAttribute('style', '');
        });

        // Adjusts the number of cards displayed when the window is resized
        window.addEventListener('resize', () => {
            // gets a number of recipes that would fit on the screen
            numberOfrecipes = parseInt(window.innerWidth / 400);
            this.displayCards(currentIndex, numberOfrecipes, recipeCards);
        });
    }

    // display the the number of cards specified by the parameter starting from an initial index
    displayCards(startingIndex, numberOfrecipes, recipeCards) {
        for (let i = 0; i < recipeCards.length; i++) {
            if (startingIndex <= i && i < startingIndex + numberOfrecipes) {
                recipeCards[i].setAttribute('style', '');
            } else {
                recipeCards[i].setAttribute('style', 'display: none');
            }
        }
    }

    
}


customElements.define('card-carousel', CardCarousel);