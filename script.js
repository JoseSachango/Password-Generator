// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    //arrays for different character types
  var characterstring = "abcdefghijklmnopqrstuvwxyz"
  var characterstring2 = characterstring.toUpperCase()
  var numberstring = "0123456789" 
  var specialcharstring = "!@#$%^&*"
  var mixarray = [characterstring,numberstring,specialcharstring,characterstring2]
  var mixarray2 =[characterstring,characterstring2,numberstring]
  var mixarray3 =[characterstring,characterstring2]
  var mixarray4 =[characterstring]
  var mixarray5 = [characterstring2,numberstring,specialcharstring]
  var mixarray6 = [characterstring2,numberstring]
  var mixarray7 = [characterstring2,specialcharstring]
  var mixarray8 = [characterstring2]
  var mixarray9 = [numberstring,specialcharstring,characterstring]
  var mixarray10 = [numberstring,characterstring]
  var mixarray11 = [numberstring,specialcharstring]
  var mixarray12 = [numberstring]
  var mixarray13 = [specialcharstring,characterstring2,characterstring]
  var mixarray14 = [specialcharstring,characterstring]
  var mixarray15 = [specialcharstring]
  var emptystring = ""
  var count = 0

    //prompts for password criteria
  var passwordlength = prompt("How many characters long will your password be? (passwords can be no less than 8 characters and no more the 128 characters long)")  
  var passwordcharacters = prompt("What kind of characters do you want the password to be made of? (This can include; lowercase, uppercase, numeric, and/or special characters")

    //generatePassword function 
  function generatePassword() {
      
      for(var i=0;i<passwordlength;i++) {
          
        console.log("characeter string is: "+characterstring)
        console.log("the passwords length is: "+passwordlength)

        var case1 = passwordcharacters.includes('lowercase')&&passwordcharacters.includes('uppercase')&&passwordcharacters.includes('numeric')&&passwordcharacters.includes('special characters')
        var case2 = passwordcharacters.includes('lowercase')||passwordcharacters.includes('uppercase')||passwordcharacters.includes('numeric')
        var case3 = passwordcharacters.includes('lowercase')


        if(case1) {
            var index= Math.floor(Math.random()*(characterstring.length))
            var indexmix = Math.floor(Math.random()*(mixarray.length))
            var mixarrayindexlength = mixarray[indexmix].length
            var index2 = Math.floor(Math.random()*(mixarrayindexlength))

            console.log("Conditional statment is working")
            console.log("Index is working and is: "+ index)

            emptystring = emptystring + mixarray[indexmix][index2]

            console.log("Empty string is working and is: "+ emptystring)

            count++

            console.log("The count is: "+count)
            
        }
        else{
          console.log("Didnt work")
        }


      }

      return emptystring
      console.log(emptystring)
      
  }  

  var password = generatePassword();
  console.log("This is the password "+password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


