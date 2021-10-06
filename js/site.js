

//display a message to the user
//Controller Function
function getUserString(){
    //get the user's input
    let userString = "";
    userString = document.getElementById("userString").value;
    userString = userString.toLowerCase();
    userString = userString.replace(/[^a-zA-Z]/g, "");

    //Reverse the user's input - separate function
    let revString = reverseString(userString);
    //Compare original input and reversed input - separate function
    compareStrings(userString, revString);
    //Output Result - separate function
    //  displayData(result);
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
function compareStrings(userString, revString){
    //This is the work part 
    //A!=a
    //Normalize the case
    // let usLC = userString.toLowerCase();
    // let rsLC = revString.toLowerCase();
    // //Extra credit - "A man , a plan, a canal; Panama" - is a palindrome when the spaces and special characters are removed
    // //Regex is used for this
    // let usReg = usLC.replace(/[^a-zA-Z]/g, "");
    // let rsReg = rsLC.replace(/[^a-zA-Z]/g, "");
    // userString = usReg;
    // revString = rsReg;
    let alert = document.getElementById("results");
    // alert.classList.remove("invisible", "alert-success", "alert-danger");
    // alert.classList.add("show");
    if(userString === revString){
        alert.innerHTML = `${userString} is a palindrome!`;
        
        // alert.classList.add("alert-success");    
    } else {
        alert.innerHTML = `${userString} is <strong>NOT</strong> a palindrome`;
        
        // alert.classList.add("alert-danger");
    }
};
//  function displayData(result){
// //     //We want to output three things

//      //1. The original input
    
//      //2. The reversed input
//      //3. Was it a palindrome?
     

//  };
