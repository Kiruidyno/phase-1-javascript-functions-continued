// code your solution here
function saturdayFun(activity) {
    activity = activity || "roller-skate";
    return "This Saturday, I want to " + activity + "!";
  }
  
  saturdayFun(); // returns "This Saturday, I want to roller-skate!"
  saturdayFun("bathe my dog"); // returns "This Saturday, I want to bathe my dog!"
  


  function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`;
}

console.log(mondayWork('work from home')); // returns "This Monday, I will work from home."
console.log(mondayWork('go to the office')); // returns "This Monday, I will go to the office."
console.log(mondayWork()); // returns "This Monday, I will go to the office."


function wrapAdjective(flair = "*") {
    return function(adj = "special") {
      return `You are ${flair}${adj}${flair}!`;
    }
  }
  
  const highlightWithStars = wrapAdjective("*");
  console.log(highlightWithStars("a hardworker")); // logs "You are *awesome*!"
  
  const highlightWithBars = wrapAdjective("||");
  console.log(highlightWithBars("a dedicated programmer")); // logs "You are ||incredible||!"
  