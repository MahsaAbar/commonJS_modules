const say_message = require("./messages/say-message")
const sayMessage = say_message.sayMessage


function sayHelloTo(name) {
    sayMessage(`Hello ${name}!`)
  }
  
  sayHelloTo("Woody");

  function giveMessageToMrsPotato(message) {
    sayHelloTo("Mrs. Potato");
    console.log(`(Psst... ${message})`)
  }
  
  giveMessageToMrsPotato("Hi Buzz");
  

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/
let msg1 = "You are looking very spudly today!";
let msg2 = "There's a good deal on mattresses tomorrow.";
let msg3 = "Do you like to do things in unnecessarily complicated ways?";

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);