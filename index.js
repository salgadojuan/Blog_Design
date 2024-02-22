function submitQuiz() {
    let score = 0;
    const correctAnswers = ['A', 'B', 'A', 'B', 'A']; // Example correct answers
    const userAnswers = [
      document.querySelector('input[name="question1"]:checked')?.value,
      document.querySelector('input[name="question2"]:checked')?.value,
      // Repeat for all questions
    ];
  
    userAnswers.forEach((answer, index) => {
      if (answer === correctAnswers[index]) {
        score += 1;
      }
    });
  
    document.getElementById('result').innerHTML = `Your score is: ${score} out of 5`;
  }
  