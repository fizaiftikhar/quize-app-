
let que = [
    {
        question: "What is the capital of Indonesia?",
        options: ["Jakarta", "Bandung", "Surabaya", "Medan"],
        answer: "Jakarta"
    },
    {
        question: "What is the capital of Pakistan?",
        options: ["Lahore", "Islamabad", "Karachi", "Peshawar"],
        answer: "Islamabad"
    },
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "New Delhi", "Chennai", "Kolkata"],
        answer: "New Delhi"
    },
    {
        question: "What is the capital of China?",
        options: ["Shanghai", "Beijing", "Wuhan", "Guangzhou"],
        answer: "Beijing"
    },
    {
        question: "What is the capital of Saudi Arabia?",
        options: ["Makkah", "Madinah", "Riyadh", "Jeddah"],
        answer: "Riyadh"
    },
    {
        question: "What is the capital of Turkey?",
        options: ["Istanbul", "Ankara", "Izmir", "Antalya"],
        answer: "Ankara"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Osaka", "Kyoto", "Tokyo", "Hiroshima"],
        answer: "Tokyo"
    }
];

let CurrentQuestion = document.getElementById("CurrentQuestion");
let displayQuestion = document.getElementById("displayQuestion");
let totalQuestion = document.getElementById("totalQuestion");
let OptionContainer = document.getElementById("OptionContainer");

let CurrentQuestionIndex = 0;
let marks = 0;

function renderQuestion() {
    OptionContainer.innerHTML = "";

    let questionObj = que[CurrentQuestionIndex];
    displayQuestion.innerHTML = questionObj.question;
    totalQuestion.innerHTML = que.length;
    CurrentQuestion.innerHTML = CurrentQuestionIndex + 1;

    for (let i = 0; i < questionObj.options.length; i++) {
        let optionValue = questionObj.options[i];
        OptionContainer.innerHTML += `
            <div onclick="checkAnswer('${questionObj.answer}','${optionValue}')" 
            class="p-2 bg-blue-500 text-white cursor-pointer m-2">
                ${optionValue}
            </div>`;
    }
}

function checkAnswer(correct, selected) {
    if (correct === selected) {
        marks++;
    }

    CurrentQuestionIndex++;

    if (CurrentQuestionIndex === que.length) {
        alert(`Your score is ${marks} out of ${que.length}`);
        return;
    }

    renderQuestion();
}

renderQuestion();

/* let CurrentQuestion = document.getElementById(CurrentQuestion)
let displayQuestion = document.getElementById(displayQuestion)
let totalQuestion = document.getElementById(totalQuestion)
let OptionContainer = document.getElementById(OptionContainer)
let CurrentQuestionIndex = 0;
function renderQuestion(){
    let questionObj = que[CurrentQuestionIndex];
    displayQuestion.innerHTML = questionObj.question
    totalQuestion.innerHTML = que.length
    CurrentQuestion.innerHTML = CurrentQuestionIndex + 1
    console.log(OptionValue)

    for(let i = 0; i < questionObj.optios.length; i++){
        let OptionValue = questionObj.optios[i];
        OptionContainer.innerHTML +=  `<div onclick="checkanswer('${questionObj.answer}','${OptionValue}')" class="p-2 bg-blue-500 text-black">
            option</div>`
    }

}

function checkAnswer(a, b){
    if (a === b){
        mark++;
    }
}
console.log(marks)
if(CurrentQuestionIndex === que.length - 1){
    alert(`your score is ${marks} out of ${que.length}`)
    return
} */






