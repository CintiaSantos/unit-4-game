$( document ).ready(function(){
    var random=Math.floor(Math.random()*101+19)
    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    //
    $('#randomNumber').text(random);
    // Appending random number to the randomNumber id in the html doc
    //
    var blue= Math.floor(Math.random()*11+1)
    var green= Math.floor(Math.random()*11+1)
    var red= Math.floor(Math.random()*11+1)
    var yellow= Math.floor(Math.random()*11+1)
    // Setting up random numbers for each jewel
    // Random number has to be between 1 - 12
    // 
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    //  Decaring variables for tallies
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
  //resets the game
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(random)
        $('#randomNumber').text(random);
        blue= Math.floor(Math.random()*11+1);
        green= Math.floor(Math.random()*11+1);
        red= Math.floor(Math.random()*11+1);
        yellow= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 
  //adds the wins to the userTotal
  function youWin(){
  alert("You won!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  //addes the losses to the userTotal
  function youLost(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
  //sets up click for jewels
    $('#blue').on ('click', function(){
      userTotal = userTotal + blue;
      console.log("New userTotal= " + userTotal);
      $('#totalScore').text(userTotal); 
            //sets win/lose conditions
          if (userTotal == random){
            youWin();
          }
          else if ( userTotal > random){
            youLost();
          }   
    })  
    $('#green').on ('click', function(){
      userTotal = userTotal + green;
      console.log("New userTotal= " + userTotal);
      $('#totalScore').text(userTotal); 
          if (userTotal == random){
            youWin();
          }
          else if ( userTotal > random){
            youLost();
          } 
    })  
    $('#red').on ('click', function(){
      userTotal = userTotal + red;
      console.log("New userTotal= " + userTotal);
      $('#totalScore').text(userTotal);
  //sets win/lose conditions
            if (userTotal == random){
            youWin();
          }
          else if ( userTotal > random){
            youLost();
          } 
    })  
    $('#yellow').on ('click', function(){
      userTotal = userTotal + yellow;
      console.log("New userTotal= " + userTotal);
      $("#totalScore").text(userTotal); 
        
            if (userTotal == random){
            youWin();
          }
          else if ( userTotal > random){
            youLost();
          }
    });   
  }); 