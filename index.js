var readline=require('readline-sync');
var score=0
var user=readline.question("Welcome Please Enter your name: ");



console.log("Welcome ",user + " Let's start with the quiz: ");

var question=[
    {
    ques: "Who's my favorite hero",
    ans: "captain america"
  },
    {
    ques: "What's my favorite food?",
    ans: "roti"
  },
  {
    ques:"Where do I live?",
    ans: "ranipet"
  },

  {
    ques: "Where do I  work?",
    ans: "conversion flow"
  },

];

function checkAnswers(data,res){
  if(data.ans==res.toLowerCase()){
    score++;
    console.log("Correct Answer,Your Score = "+ score);
  }else{
    score--;
    console.log("Wrong Answer Your Score = "+score);
  }
}

for(var i=0;i<question.length;i++){
  var res=readline.question(question[i].ques);
  checkAnswers(question[i],res);
}

console.log("Your Final Score is " + score);