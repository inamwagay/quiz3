const questions = [
    {
  question: "When did World War I begin?",
  answers: [
    { text: "1914", correct: true },
    { text: "1939", correct: false },
    { text: "1905", correct: false },
    { text: "1920", correct: false }
  ]
},
{
  question: "Which event is widely considered the spark that started World War I?",
  answers: [
    { text: "Assassination of Archduke Franz Ferdinand", correct: true },
    { text: "Invasion of Poland", correct: false },
    { text: "Sinking of the Lusitania", correct: false },
    { text: "Zimmermann Telegram", correct: false }
  ]
},
{
  question: "Which countries made up the Triple Entente?",
  answers: [
    { text: "France, Russia, Britain", correct: true },
    { text: "Germany, Austria-Hungary, Italy", correct: false },
    { text: "USA, France, Britain", correct: false },
    { text: "Italy, Japan, Germany", correct: false }
  ]
},
{
  question: "Which country switched sides in 1915 to join the Allies?",
  answers: [
    { text: "Italy", correct: true },
    { text: "Germany", correct: false },
    { text: "Austria-Hungary", correct: false },
    { text: "Bulgaria", correct: false }
  ]
},
{
  question: "What type of warfare was most associated with World War I?",
  answers: [
    { text: "Trench warfare", correct: true },
    { text: "Naval warfare", correct: false },
    { text: "Guerrilla warfare", correct: false },
    { text: "Aerial bombing", correct: false }
  ]
},
{
  question: "Which new weapon was first widely used during WWI?",
  answers: [
    { text: "Poison gas", correct: true },
    { text: "Atomic bomb", correct: false },
    { text: "Jet aircraft", correct: false },
    { text: "Tanks in WWII", correct: false }
  ]
},
{
  question: "What was the name of the treaty that ended World War I?",
  answers: [
    { text: "Treaty of Versailles", correct: true },
    { text: "Treaty of Ghent", correct: false },
    { text: "Treaty of Tordesillas", correct: false },
    { text: "Treaty of Brest-Litovsk", correct: false }
  ]
},
{
  question: "Which nation joined WWI in 1917 and helped turn the tide?",
  answers: [
    { text: "United States", correct: true },
    { text: "Italy", correct: false },
    { text: "Japan", correct: false },
    { text: "Spain", correct: false }
  ]
},
{
  question: "What was 'No Man's Land'?",
  answers: [
    { text: "The area between opposing trenches", correct: true },
    { text: "A neutral country", correct: false },
    { text: "A battlefield in Africa", correct: false },
    { text: "A term for unclaimed colonies", correct: false }
  ]
},
{
  question: "Which empire collapsed as a result of WWI?",
  answers: [
    { text: "Ottoman Empire", correct: true },
    { text: "British Empire", correct: false },
    { text: "American Empire", correct: false },
    { text: "French Empire", correct: false }
  ]
},
{
  question: "What was the Zimmermann Telegram?",
  answers: [
    { text: "A German proposal to Mexico to join the war", correct: true },
    { text: "A peace message to Russia", correct: false },
    { text: "A British message to France", correct: false },
    { text: "A Russian threat to Germany", correct: false }
  ]
},
{
  question: "What was the name of Germany’s military plan to quickly defeat France?",
  answers: [
    { text: "Schlieffen Plan", correct: true },
    { text: "Marshall Plan", correct: false },
    { text: "Molotov Plan", correct: false },
    { text: "Versailles Plan", correct: false }
  ]
},
{
  question: "What was the main reason the US joined WWI?",
  answers: [
    { text: "Unrestricted submarine warfare", correct: true },
    { text: "To gain territory", correct: false },
    { text: "To support Germany", correct: false },
    { text: "A treaty with Austria-Hungary", correct: false }
  ]
},
{
  question: "Which battle is known for being extremely deadly with little territorial gain?",
  answers: [
    { text: "Battle of the Somme", correct: true },
    { text: "Battle of Midway", correct: false },
    { text: "Battle of Britain", correct: false },
    { text: "Battle of El Alamein", correct: false }
  ]
},
{
  question: "What year did World War I end?",
  answers: [
    { text: "1918", correct: true },
    { text: "1920", correct: false },
    { text: "1917", correct: false },
    { text: "1915", correct: false }
  ]
}      
  ];
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
  
  function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo +". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
     button.clst.add("btn");
      answerButtons.appendChild(button);
      if(answer.correct){
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click",selectAnswer)
    });
  }
  
  function resetState(){
    nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
  }
  
  function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
      selectedBtn.classList.add("correct");
      score++;
    }else{
      selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
      if(button.dataset.correct === "true"){
        button.classList.add("correct");
      }
      button.disabled=true;
    });
    nextButton.style.display="block";
  }
  
  function showScore(){
    resetState();
    questionElement.innerHTML = `You score ${score} out of ${questions.length} !`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display = "block"; 
  };
  
  function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
      showQuestion();
  }else{
    showScore();
  }
  }
  nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
      handleNextButton();
    }else{
      startQuiz();
    }
  });
  
  startQuiz();
  
 
