function toggleAnswer(id) {
  console.log("hit");
  let questionNumber = id.split("question")[1];
  let answerId = "answer" + questionNumber;
  let answerElement = document.getElementById(answerId);

  answerElement.classList.toggle("open");
}
