import React, { useState } from 'react'
import './App.css'
import yellowemoji from './assets/yellowemoji.jpg'
import durian from './assets/durian.jpg'
import banana from './assets/banana.jpg'
import strawberry from './assets/strawberry.jpg'
import peach from './assets/peach.jpg'
import watermeal from './assets/watermeal.jpg'

function App() {
  const [cardPairs, setCardPairs] = useState([
    { "Click the card to flip!": ["Nice, you are ready to go! Click the next button to continue!", yellowemoji] },
    { "What fruit is known as the 'king of fruits'? Hint: it is stinky!": ["Durian", durian] },
    { "What fruit is the most commonly eaten around the world?": ["Banana", banana] },
    { "What fruit has an average of 200 seeds on its exterior?": ["Strawberry", strawberry] },
    { "What was the first fruit eaten on the moon?": ["Peaches", peach] },
    { "What is the smallest edible fruit in the world?": ["Asian watermeal (Wolffia)", watermeal] }
  ]);

  const [index, setIndex] = useState(0);

  const [isQuestion, setQuestionFlag] = useState(true);

  function createRandomColor() {
    const r = Math.floor(Math.random() * 62) + 194;
    const g = Math.floor(Math.random() * 62) + 194;
    const b = Math.floor(Math.random() * 62) + 194;
    document.getElementById("flashcard-front").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("flashcard-back").style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

  }

  function toggleQuestion() {
    setQuestionFlag(!isQuestion);
  }


  return (
    <div className = "base">
      <div className="description">
        <h1>🍓 🍊 🍌 🥑 🫐 🍇 Fruit Trivia!🍓 🍊 🍌 🥑 🫐 🍇</h1>

        <h3>Welcome to Fruit Trivia! In this game, you will be asked random questions about fruits. </h3>
        <h3>Total Number of Cards: {Object.keys(cardPairs).length}</h3>
        <h1></h1>
      </div>

      <div className={`flashcard ${!isQuestion ? 'flipped' : ''}`} onClick={toggleQuestion}>

        <div id="flashcard-front" class="front">
          {Object.keys(cardPairs[index])[0]}
        </div>

        <div id="flashcard-back" class="back">
          {Object.values(cardPairs[index])[0][0]}
          {Object.values(cardPairs[index])[0][1] && (
            <img src={Object.values(cardPairs[index])[0][1]} alt="flashcard visual" />
          )}
        </div>


      </div>

      <div className="buttons">
        <button
          className="nav"
          onClick={() => {
            if (index > 0 && index < Object.keys(cardPairs).length) setIndex(index - 1)
            else setIndex((index + 1) % Object.keys(cardPairs).length);
            setQuestionFlag(true);
            createRandomColor();
          }}
        >
          Previous
        </button>

        <h6 className="navtext">{index + 1}</h6>
        <button
          className="nav"
          onClick={() => {
            if (index < cardPairs.length - 1) setIndex(index + 1);
            else setIndex((index + 1) % Object.keys(cardPairs).length);
            setQuestionFlag(true);
            createRandomColor();
          }}
        >
          Next
        </button>

      </div>


    </div>
  )
}

export default App
