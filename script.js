document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("#number-of-subject");
  let subject = document.querySelector(".num-subject");
  let subjectList = document.querySelector(".subjects-input");
  let numberOfSubject; // Declare numberOfSubject outside the event listener
  let calculateButton = document.createElement("button"); // Create calculate button

  calculateButton.className = "btn btn-success col-12 calculate";
  calculateButton.type = "button";
  calculateButton.innerText = "Calculate";

  button.addEventListener("click", () => {
    numberOfSubject = parseInt(subject.value);

    if (isNaN(numberOfSubject) || numberOfSubject <= 0) {
      alert("Please enter a valid number of subjects.");
      return;
    } else if (numberOfSubject < 0) {
      alert("Negative subject !");
    }

    subjectList.innerHTML = "";

    for (let i = 1; i <= numberOfSubject; i++) {
      let inputSub = document.createElement("div");
      inputSub.className = "subjects";
      inputSub.style.padding = "5px";
      inputSub.innerHTML = `<input type="text" class="form-control subject${i}" name="subject${i}" placeholder="Enter marks for subject ${i}" />`;
      subjectList.appendChild(inputSub);
    }

    subjectList.appendChild(calculateButton); // Append calculate button
  });

  calculateButton.addEventListener("click", () => {
    // Call calculateMarks() when calculate button is clicked
    calculateMarks(subject);
  });
});

//function to calculate the marks

function calculateMarks(subject) {
  let total = 0; // Initialize total
  let marksarray = [];
  let result;
  let avarage;
  let sub = parseInt(subject.value);
  for (let i = 1; i <= sub; i++) {
    let marks = parseInt(document.querySelector(`.subject${i}`).value);
    if (isNaN(marks)) {
      alert("Please enter valid marks for all subjects.");
      return;
    } else if (marks < 0) {
      alert("Negative marks are not accepted!");
    } else if (marks > 100) {
      alert("Marks is greater than 100");
    }
    total += marks; // Add marks to total
  }
  marksarray.push(marks);
  avarage = total / sub;
  marksarray.forEach((marks) => {
    if (marks < 35) {
      result = false;
      result;
    }
  });
  if (result == false) {
    result = "Fail";
  } else {
    result = "Pass";
  }

  display(result, total, avarage);
}

//function to display the marks
function display(result, total, avarage) {
  console.log(total);
  document.querySelector("#result").innerText = result;
  document.querySelector("#marks").innerText = total;
  document.querySelector("#average").innerText = avarage;
}
