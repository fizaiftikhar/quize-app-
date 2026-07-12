
const questions=[


{
question:"HTML stands for?",
options:[
"Hyper Text Markup Language",
"High Text Machine Language",
"Hyper Tool Multi Language",
"None"
],
answer:0
},



{
question:"CSS is used for?",
options:[
"Programming",
"Styling Website",
"Database",
"Server"
],
answer:1
},



{
question:"JavaScript is used for?",
options:[
"Logic and Interaction",
"Design",
"Images",
"Database"
],
answer:0
},



{
question:"Tailwind CSS is a?",
options:[
"Framework",
"Language",
"Browser",
"Database"
],
answer:0
}


];



let current=0;

let score=0;



const question =
document.getElementById("question");


const options =
document.getElementById("options");


const nextBtn =
document.getElementById("nextBtn");


const progress =
document.getElementById("progress");





function loadQuestion(){


nextBtn.classList.add("hidden");


let q=questions[current];


question.innerHTML=
`${current+1}. ${q.question}`;



progress.style.width=
`${((current)/questions.length)*100}%`;



options.innerHTML="";



q.options.forEach((option,index)=>{


let btn=document.createElement("button");


btn.innerHTML=option;


btn.className=

"w-full p-4 rounded-xl bg-gray-100 text-gray-700 font-medium hover:bg-purple-100 hover:scale-105 transition shadow";



btn.onclick=()=>checkAnswer(index);



options.appendChild(btn);



});



}





function checkAnswer(index){


if(index===questions[current].answer){

score++;

}



Array.from(options.children)
.forEach(btn=>{

btn.disabled=true;

});



nextBtn.classList.remove("hidden");


}




nextBtn.onclick=()=>{


current++;


if(current < questions.length){

loadQuestion();

}

else{

showResult();

}


}




function showResult(){


document.getElementById("quizBox")
.classList.add("hidden");



document.getElementById("result")
.classList.remove("hidden");



document.getElementById("score")
.innerHTML=

`Your Score 🎯 : ${score}/${questions.length}`;


}



loadQuestion();
