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
        var case2 = passwordcharacters.includes('lowercase')&&passwordcharacters.includes('uppercase')&&passwordcharacters.includes('numeric')
        var case3 = passwordcharacters.includes('lowercase')&&passwordcharacters.includes('uppercase')
        var case4 = passwordcharacters.includes('lowercase')
        var case5 = passwordcharacters.includes('lowercase')&&passwordcharacters.includes('special characters')&&passwordcharacters.includes('numeric')
        var case6 = passwordcharacters.includes('uppercase')&&passwordcharacters.includes('numeric')
        var case7 = passwordcharacters.includes('uppercase')&&passwordcharacters.includes('special characters')
        var case8 = passwordcharacters.includes('uppercase')
        var case9 = passwordcharacters.includes('numeric')&&passwordcharacters.includes('special characters')&&passwordcharacters.includes('lowercase')
        var case10 = passwordcharacters.includes('numeric')&&passwordcharacters.includes('lowercase')
        var case11 = passwordcharacters.includes('numeric')&&passwordcharacters.includes('special characters')
        var case12 = passwordcharacters.includes('numeric')
        var case13 = passwordcharacters.includes('special characters')&&passwordcharacters.includes('uppercase')&&passwordcharacters.includes('lowercase')
        var case14 = passwordcharacters.includes('special characters')&&passwordcharacters.includes('lowercase')
        var case15 = passwordcharacters.includes('special characters')


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

        if(case2) {
          var index= Math.floor(Math.random()*(characterstring.length))
          var indexmix = Math.floor(Math.random()*(mixarray2.length))
          var mixarrayindexlength2 = mixarray2[indexmix].length
          var index2 = Math.floor(Math.random()*(mixarrayindexlength2))

          console.log("Conditional statment is working")
          console.log("Index is working and is: "+ index)

          emptystring = emptystring + mixarray2[indexmix][index2]

          console.log("Empty string is working and is: "+ emptystring)

          count++

          console.log("The count is: "+count)
          
      }
      else{
        console.log("Didnt work")
      }


      if(case3) {
        var index= Math.floor(Math.random()*(characterstring.length))
        var indexmix = Math.floor(Math.random()*(mixarray3.length))
        var mixarrayindexlength3 = mixarray3[indexmix].length
        var index2 = Math.floor(Math.random()*(mixarrayindexlength3))

        console.log("Conditional statment is working")
        console.log("Index is working and is: "+ index)

        emptystring = emptystring + mixarray3[indexmix][index2]

        console.log("Empty string is working and is: "+ emptystring)

        count++

        console.log("The count is: "+count)
        
    }
    else{
      console.log("Didnt work")
    }


    if(case4) {
      var index= Math.floor(Math.random()*(characterstring.length))
      var indexmix = Math.floor(Math.random()*(mixarray4.length))
      var mixarrayindexlength4 = mixarray4[indexmix].length
      var index2 = Math.floor(Math.random()*(mixarrayindexlength4))

      console.log("Conditional statment is working")
      console.log("Index is working and is: "+ index)

      emptystring = emptystring + mixarray4[indexmix][index2]

      console.log("Empty string is working and is: "+ emptystring)

      count++

      console.log("The count is: "+count)
      
  }
  else{
    console.log("Didnt work")
  }


  if(case5) {
    var index= Math.floor(Math.random()*(characterstring.length))
    var indexmix = Math.floor(Math.random()*(mixarray5.length))
    var mixarrayindexlength5 = mixarray5[indexmix].length
    var index2 = Math.floor(Math.random()*(mixarrayindexlength5))

    console.log("Conditional statment is working")
    console.log("Index is working and is: "+ index)

    emptystring = emptystring + mixarray5[indexmix][index2]

    console.log("Empty string is working and is: "+ emptystring)

    count++

    console.log("The count is: "+count)
    
}
else{
  console.log("Didnt work")
}


if(case6) {
  var index= Math.floor(Math.random()*(characterstring.length))
  var indexmix = Math.floor(Math.random()*(mixarray.length))
  var mixarrayindexlength6 = mixarray6[indexmix].length
  var index2 = Math.floor(Math.random()*(mixarrayindexlength6))

  console.log("Conditional statment is working")
  console.log("Index is working and is: "+ index)

  emptystring = emptystring + mixarray6[indexmix][index2]

  console.log("Empty string is working and is: "+ emptystring)

  count++

  console.log("The count is: "+count)
  
}
else{
console.log("Didnt work")
}


if(case7) {
  var index= Math.floor(Math.random()*(characterstring.length))
  var indexmix = Math.floor(Math.random()*(mixarray7.length))
  var mixarrayindexlength7 = mixarray7[indexmix].length
  var index2 = Math.floor(Math.random()*(mixarrayindexlength7))

  console.log("Conditional statment is working")
  console.log("Index is working and is: "+ index)

  emptystring = emptystring + mixarray7[indexmix][index2]

  console.log("Empty string is working and is: "+ emptystring)

  count++

  console.log("The count is: "+count)
  
}
else{
console.log("Didnt work")
}


if(case8) {
  var index= Math.floor(Math.random()*(characterstring.length))
  var indexmix = Math.floor(Math.random()*(mixarray8.length))
  var mixarrayindexlength8 = mixarray8[indexmix].length
  var index2 = Math.floor(Math.random()*(mixarrayindexlength8))

  console.log("Conditional statment is working")
  console.log("Index is working and is: "+ index)

  emptystring = emptystring + mixarray8[indexmix][index2]

  console.log("Empty string is working and is: "+ emptystring)

  count++

  console.log("The count is: "+count)
  
}
else{
console.log("Didnt work")
}


if(case9) {
  var index= Math.floor(Math.random()*(characterstring.length))
  var indexmix = Math.floor(Math.random()*(mixarray9.length))
  var mixarrayindexlength9 = mixarray9[indexmix].length
  var index2 = Math.floor(Math.random()*(mixarrayindexlength9))

  console.log("Conditional statment is working")
  console.log("Index is working and is: "+ index)

  emptystring = emptystring + mixarray9[indexmix][index2]

  console.log("Empty string is working and is: "+ emptystring)

  count++

  console.log("The count is: "+count)
  
}
else{
console.log("Didnt work")
}


if(case10) {
  var index= Math.floor(Math.random()*(characterstring.length))
  var indexmix = Math.floor(Math.random()*(mixarray10.length))
  var mixarrayindexlength10 = mixarray10[indexmix].length
  var index2 = Math.floor(Math.random()*(mixarrayindexlength10))

  console.log("Conditional statment is working")
  console.log("Index is working and is: "+ index)

  emptystring = emptystring + mixarray10[indexmix][index2]

  console.log("Empty string is working and is: "+ emptystring)

  count++

  console.log("The count is: "+count)
  
}
else{
console.log("Didnt work")
}


if(case11) {
  var index= Math.floor(Math.random()*(characterstring.length))
  var indexmix = Math.floor(Math.random()*(mixarray11.length))
  var mixarrayindexlength11 = mixarray11[indexmix].length
  var index2 = Math.floor(Math.random()*(mixarrayindexlength11))

  console.log("Conditional statment is working")
  console.log("Index is working and is: "+ index)

  emptystring = emptystring + mixarray11[indexmix][index2]

  console.log("Empty string is working and is: "+ emptystring)

  count++

  console.log("The count is: "+count)
  
}
else{
console.log("Didnt work")
}


if(case12) {
  var index= Math.floor(Math.random()*(characterstring.length))
  var indexmix = Math.floor(Math.random()*(mixarray12.length))
  var mixarrayindexlength12 = mixarray12[indexmix].length
  var index2 = Math.floor(Math.random()*(mixarrayindexlength12))

  console.log("Conditional statment is working")
  console.log("Index is working and is: "+ index)

  emptystring = emptystring + mixarray12[indexmix][index2]

  console.log("Empty string is working and is: "+ emptystring)

  count++

  console.log("The count is: "+count)
  
}
else{
console.log("Didnt work")
}


if(case13) {
  var index= Math.floor(Math.random()*(characterstring.length))
  var indexmix = Math.floor(Math.random()*(mixarray13.length))
  var mixarrayindexlength13 = mixarray13[indexmix].length
  var index2 = Math.floor(Math.random()*(mixarrayindexlength13))

  console.log("Conditional statment is working")
  console.log("Index is working and is: "+ index)

  emptystring = emptystring + mixarray13[indexmix][index2]

  console.log("Empty string is working and is: "+ emptystring)

  count++

  console.log("The count is: "+count)
  
}
else{
console.log("Didnt work")
}


if(case14) {
  var index= Math.floor(Math.random()*(characterstring.length))
  var indexmix = Math.floor(Math.random()*(mixarray14.length))
  var mixarrayindexlength14 = mixarray14[indexmix].length
  var index2 = Math.floor(Math.random()*(mixarrayindexlength14))

  console.log("Conditional statment is working")
  console.log("Index is working and is: "+ index)

  emptystring = emptystring + mixarray14[indexmix][index2]

  console.log("Empty string is working and is: "+ emptystring)

  count++

  console.log("The count is: "+count)
  
}
else{
console.log("Didnt work")
}


if(case15) {
  var index= Math.floor(Math.random()*(characterstring.length))
  var indexmix = Math.floor(Math.random()*(mixarray15.length))
  var mixarrayindexlength15 = mixarray15[indexmix].length
  var index2 = Math.floor(Math.random()*(mixarrayindexlength15))

  console.log("Conditional statment is working")
  console.log("Index is working and is: "+ index)

  emptystring = emptystring + mixarray15[indexmix][index2]

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


