const questions = [
  {
  question: "What was the 'Eastern Question' primarily concerned with?",
  answers: [
    { text: "The colonization of India", correct: false },
    { text: "The decline of the Ottoman Empire", correct: true },
    { text: "The rise of China", correct: false },
    { text: "The unification of Germany", correct: false }
  ]
},
{
  question: "Which countries were part of the main alliance against Russia in the Crimean War?",
  answers: [
    { text: "Russia, Austria, and Prussia", correct: false },
    { text: "France, Britain, and the Ottoman Empire", correct: true },
    { text: "Germany, Austria, and Britain", correct: false },
    { text: "Italy, France, and Russia", correct: false }
  ]
},
{
  question: "What year did the Crimean War begin?",
  answers: [
    { text: "1830", correct: false },
    { text: "1853", correct: true },
    { text: "1815", correct: false },
    { text: "1861", correct: false }
  ]
},
{
  question: "Which famous nurse became a symbol of modern nursing during the Crimean War?",
  answers: [
    { text: "Florence Nightingale", correct: true },
    { text: "Clara Barton", correct: false },
    { text: "Edith Cavell", correct: false },
    { text: "Mary Seacole", correct: false }
  ]
},
{
  question: "The Crimean War ended with which treaty?",
  answers: [
    { text: "Treaty of Paris (1856)", correct: true },
    { text: "Treaty of Versailles", correct: false },
    { text: "Treaty of Vienna", correct: false },
    { text: "Treaty of Tilsit", correct: false }
  ]
},
{
  question: "Which empire was seen as 'the sick man of Europe' in relation to the Eastern Question?",
  answers: [
    { text: "Russian Empire", correct: false },
    { text: "Ottoman Empire", correct: true },
    { text: "British Empire", correct: false },
    { text: "Austrian Empire", correct: false }
  ]
},
{
  question: "Which battle during the Crimean War is known for the 'Charge of the Light Brigade'?",
  answers: [
    { text: "Battle of Alma", correct: false },
    { text: "Battle of Sevastopol", correct: false },
    { text: "Battle of Balaclava", correct: true },
    { text: "Battle of Inkerman", correct: false }
  ]
},
{
  question: "What was a key strategic aim of Britain and France in the Crimean War?",
  answers: [
    { text: "To stop Russian expansion into the Mediterranean", correct: true },
    { text: "To support Russian claims in the Balkans", correct: fa
      
  
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
     button.classList.add("btn");
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
  
 
