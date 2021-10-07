
//display a message to the user
//Controller Function
function getUserString(){
    //get the user's input
    let userString = document.getElementById("userString").value;
    

    //Reverse the user's input - separate function
    let revString = reverseString(userString);
    //Compare original input and reversed input - separate function
    let result =compareStrings(userString, revString);
    //Output Result - separate function
    //  displayData(result);
    displayData(result, userString, revString);
}
function reverseString(userString){
    //This is Rewind
    let startValue = userString.length-1;
    let endValue = 0;
    let revString = "";
    //User input = Frank
    //Frank is a string AND an array of characters
    //In a decremented for loop the startValue must be higher than the endValue
    for (let index = startValue; index >= endValue; index--) {
        revString += userString[index];
        
    }
    return revString;
};
function ReverseStringB(userString){
    return userString.split("").reverse().join("")
}
function compareStrings(userString, revString){
    //This is the work part 
    //A!=a
    //Normalize the case
    let normalUser = userString.toLowerCase();
    let normalRev = revString.toLowerCase();

    let regUser = normalUser.replace(/[^A-Z0-9]/ig,"");
    let regRev = normalRev.replace(/[^A-Z0-9]/ig,"");
    if(regUser == regRev){
        return "is a palindrome";
    } else {
        return "is not a palindrome";
    };
    // //Extra credit - "A man , a plan, a canal; Panama" - is a palindrome when the spaces and special characters are removed
    // //Regex is used for this
    
    
     
    
};
 function displayData(result, userString, revString){
      //We want to output three things

      //1. The original input
    
      //2. The reversed input
      //3. Was it a palindrome?
     let output = document.getElementById("results");
     output.innerHTML = `After reversing your string I found that it ${result}</br> You entered ${userString}</br> Reversed was ${revString}`;

  };
