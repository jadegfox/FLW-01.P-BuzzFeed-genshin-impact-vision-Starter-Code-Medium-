document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz(){ 

  
  // task 4: declare variables for the html elements you'll use as selectors later. You need the submit button, display div, and all three inputs for your questions.

  let button = document.querySelector(".submit");
  let displayResult= document.querySelector(".displayResult");
  let q1 = document.querySelector(".q1");
  let q2 = document.querySelector(".q2");
  let q3 = document.querySelector(".q3");

  
  // task 5: declare variables for values we'll set later. You'll need one for an image source, a result and a score for each question.
  let imgSrc;
  let character;
  let q1Score;
  let q2Score;
  let q3Score;



  button.onclick = function(){

    // task 6: Declare user input variables for each of your questions. If you have three questions, you should have three variables. These variables should equal the value of the user input for each question. 
let options1 = q1.value;  
let options2 = q2.value;  
let options3 = q3.value; 



    // task 7: create a conditional statement for the responses to Question 1 based on the user input.
if (options1 === "Fire"){  
  q1Score = 1;
} else if(options1 === "Water"){ 
  q1Score = 2;
}else if(options1 === "Earth"){ 
  q1Score = 3;
}  
else if(options1 ==="Ice"){  
  q1Score = 4;
} 

    


    // task 8: create a conditional statement for the responses to Question 2 based on the user input.
if (options2 === "Dragon Ball Z"){ 
   q2Score = 4;
} else if(options2 === "Naruto"){ 
  q2Score = 3;
}else if(options2 === "Bleach"){   
  q2Score = 2;
} else if(options2 ==="My Hero Academia"){ 
  q2Score = 1;
}

    // task 9: create a conditional statement for the responses to Question 3 based on the user input.
if (options3 === "I don’t play the game"){ 
  q3Score = 4
} else if(options3 === "1-3 hours"){ 
    q3Score = 3
}else if(options3 === "4-6 hours"){ 
    q3Score = 2
} else if(options3 ==="4-8 hours"){ 
   q3Score = 1
}


    // task 10: declare a variable for the total score of the quiz and set it equal to the sum of each question score.
let totalQuiz = q3Score + q2Score + q1Score;
console.log (totalQuiz);


    // task 11: create a conditional statement for the result to the quiz based on the total score. Using string interpolation, display these to the page: the result, an image that corresponds and a message to go with it.
 if(totalQuiz > 1 && totalQuiz < 5){
   displayResult.innerHTML = "your a water vision."; 
 let waterImg = document.createElement("img"); 
   waterImg.src= "https://ih1.redbubble.net/image.1937324613.2520/st,small,507x507-pad,600x600,f8f8f8.jpg";  
 displayResult.insertAdjacentElement('afterend',waterImg);
 }else if(totalQuiz > 5 && totalQuiz < 7){
   displayResult.innerHTML = "your a Fire vision";  
   let fireImg = document.createElement("img"); 
   fireImg.src= "https://ih1.redbubble.net/image.2361714614.7191/st,small,507x507-pad,600x600,f8f8f8.jpg"; 
displayResult.insertAdjacentElement('afterend',fireImg);
 }else if(totalQuiz > 7 && totalQuiz < 10){
   displayResult.innerHTML = "your a Earth vision. ";  
   let earthImg = document.createElement("img") 
   earthImg.src= "https://static.wikia.nocookie.net/gensin-impact/images/9/94/Item_Liyue_Vision.png/revision/latest?cb=20210703160038";
   displayResult.insertAdjacentElement('afterend',earthImg); 
   }else if(totalQuiz > 10 && totalQuiz < 13){
   displayResult.innerHTML = "your a Ice vision. ";  
   let iceImg = document.createElement("img") 
   iceImg.src= "https://ih1.redbubble.net/image.1937330499.2698/st,small,507x507-pad,600x600,f8f8f8.jpg";
   displayResult.insertAdjacentElement('afterend',iceImg);
  };
}  
} 
//monospace 