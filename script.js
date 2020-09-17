window.onload = () => {

    document.querySelector('.card').classList.add(randomCard());
    document.querySelector('.card').innerHTML = randomNumber();
};

let randomNumber = () => {
    let numbersCard = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let numberRandom = Math.floor(Math.random() * numbersCard.length);


    return numbersCard[numberRandom];
};

let randomCard = () => {
    let typeCard = ["diams", "spades", "heart", "clubs"];
    let typeCardRandom = Math.floor(Math.random() * typeCard.length);

    return typeCard[typeCardRandom];
};