function myFunction() {
    var age, voteable;

    age = document.getElementById("age").value;
    
    voteable = (age < 18) ? "Too young":"Old enough";
    
    document.getElementById("demo").innerHTML = voteable + " to vote.";
  }

  //Alternate to ternary is  if/else... look how
  //many more lines of code it takes.

  function myLaps(){
      var laps, farEnough;

      laps = document.getElementById("laps").value;
      if(laps > 4){
          farEnough = "You've ran at least a mile."
      }else{
        farEnough = "Not far enough. Run more."
      }
      document.getElementById("demo2").innerHTML = farEnough;


  }