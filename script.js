let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1

  const changeTitle = function () {
    document.getElementById('main-title').textContent = "Dom Toretto";
  };

  changeTitle();
  
  // Part 2

  const changeBackgroundColor = function () {
    document.body.style.backgroundColor = '#C05780';
  }(); // note to self: adding parenthesis will call function automatically

  // Part 3

  const favThings = function () {
    document.getElementById('favorite-things').lastElementChild.remove();
  }();

  // Part 4

  const changeFontSize = function () {
    let specialTitleElements = document.getElementsByClassName('special-title');
    for(let i = 0; i<specialTitleElements.length; i++){
      specialTitleElements[i].style.fontSize = '2rem';
    }
  }();

  // Part 5

  const removeChicago = function () {
    let pastRacesElements = document.getElementById('past-races').children;
    for(let i = 0; i < pastRacesElements.length; i++){
      if(pastRacesElements[i].textContent === 'Chicago'){
        pastRacesElements[i].remove();
      }
    }
  }();

  // Part 6

  const addCity = function () {
    let pastRaces = document.getElementById('past-races');
    let newListElement = document.createElement('li');
    newListElement.textContent = 'New York City';
    pastRaces.appendChild(newListElement);
  }();

  // Part 7

  const newBlogpost = function () {
    let blogPostContainer = document.getElementsByClassName('main')[0];
    let newDiv = document.createElement('div');
    let newH1 = document.createElement('h1');
    let newP = document.createElement('p');
    newH1.textContent = 'New York City';
    newP.textContent = 'I JUMPED OVER THE STATUE OF LIBERTY!';
    newDiv.className ='blog-post purple';
    newDiv.appendChild(newH1);
    newDiv.appendChild(newP);
    blogPostContainer.appendChild(newDiv);
  }();
}
