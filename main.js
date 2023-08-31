// let counter = 0;
// let score = 0;
// const first_question = document.getElementById("Python")
// const second_question = document.getElementById("Canva")
// const third_question = document.getElementById("javascript");
// const fourth_question = document.getElementById("PHP");
// const fifth_question = document.getElementById("JAVA");
// const answer_btns = [ans1, ans2, ans3, ans4, ans5];
// let ans1 = 

// function quiizer() {
//   question.innerHTML = list_questions[counter].question;
//   ans1.innerHTML = first_question[counter].answers[0];
//   ans2.innerHTML = second_question[counter].answers[1];
//   ans3.innerHTML = third_question[counter].answers[2];
//   ans4.innerHTML = fourth_question[counter].answers[3];
//   ans5.innerHTML = fifth_question[counter].answers[3];
//   ans1.value = 0;
//   ans2.value = 1;
//   ans3.value = 2;
//   ans4.value = 3;
//   ans5.value = 4;

//   quiz_length.innerHTML = counter + 1 + " of " + list_questions.length;
// }

function check_correct() {
  next_inp.style.display = "none";
  ans1.className = "input";
  ans2.className = "input";
  ans3.className = "input";
  ans4.className = "input";
  answer_btns.forEach((input) => {
    input.addEventListener("click", function () {
      if (input.value == list_questions[counter].correct) {
        score += 1;
        scores.innerText = score;
        btn.className = "input correct-ans";
        next_inp.innerText = "Next";
        next_inp.style.display = "block";
      } else {
        btn.className = "input wrong-ans";
        answer_btns[list_questions[counter].correct].className =
          "input correct-ans";
        next_input.innerText = "Next";
        next_input.style.display = "block";
      }
    });
  });
}

next_btn.addEventListener("click", function () {
  counter = counter + 1;
  quiizer();
  check_correct();
});

quiizer();
check_correct();