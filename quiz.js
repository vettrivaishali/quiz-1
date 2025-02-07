function checkAnswers() {
    const answers = {
      q1: "shinchan", // Correct answers here
      q2: "icecream",
      q3: "gojosan",
      q4:"Pizza",
      q5:"JUNE 7"
    };
  
    let score = 0;
  
    for (let q in answers) {
      const selectedAnswer = document.querySelector(`input[name="${q}"]:checked`);
      if (selectedAnswer && selectedAnswer.value === answers[q]) {
        score++;
      }
    }
  
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `You got ${score} out of 5 questions correct.`;
  }