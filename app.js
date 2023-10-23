let cards = [
    {
        h3: "Do you have all major credit cards?",
        p:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio animi in sapiente quis consequuntur dolores dolorem velit unde quos aliquid earum, minima quibusdam nulla dolore?"
    },
    {
        h3: "Do you have all major credit cards?",
        p:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio animi in sapiente quis consequuntur dolores dolorem velit unde quos aliquid earum, minima quibusdam nulla dolore?"
    },
    {
        h3: "Do you have all major credit cards?",
        p:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio animi in sapiente quis consequuntur dolores dolorem velit unde quos aliquid earum, minima quibusdam nulla dolore?"
    }
];

let cardContainer = document.querySelector('.card-container')

cards.forEach(function (card) {
    
    let cardElement = document.createElement('div');

    cardElement.classList.add = "card"
    cardElement.style.backgroundColor = "black"
    cardElement.style.marginBottom = "1rem"
    cardElement.style.padding = "0.5rem"
    cardElement.style.width = "100%"
    cardElement.style.transition = "1s"

    cardElement.innerHTML = `

    <h3 id="h3">
    ${card.h3}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <img class="on button"  src="./images/plus button.png" width="25px">
    </h3>

     <p class="p" style="display:none;">
     ${card.p}
        </p>`;

    cardContainer.appendChild(cardElement);

    cardElement.querySelector('.on').addEventListener('click',  function () {

        let body = document.querySelector('body')
        body.style.backgroundColor = body.style.backgroundColor === "rgb(48, 210, 89)" ? "rgb(18, 164, 162)" : "rgb(48, 210, 89)" 

        let h1 = document.querySelector('h1')
        h1.style.backgroundColor = h1.style.backgroundColor === "rgb(18, 164, 162)" ? "rgb(48, 210, 89)" : "rgb(18, 164, 162)" 

        cardElement.style.backgroundColor = cardElement.style.backgroundColor === "black" ? "rgb(238, 237, 237)" : "black"
        cardElement.style.color = cardElement.style.color === "black" ? "rgb(238, 237, 237)" : "black"

        let h3 = cardElement.querySelector('#h3')
        h3.style.transition = "1s"
        h3.style.borderBottom = h3.style.borderBottom === "1px solid black" ? "1px solid whitesmoke" : "1px solid black"

        let button = cardElement.querySelector(".button");
        button.src = button.src === "./images/plus button.png" ? "./images/mins button.png" : "./images/plus button.png";
        
        let p = cardElement.querySelector('.p')
        p.style.transition = "1s"
        p.style.display = p.style.display === "none" ? "block" : "none" 

    })

});