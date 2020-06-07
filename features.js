
  function setName(){
    document.getElementById('buttontitle').innerHTML = "Continue";
    
    var i;
    var list = document.getElementsByClassName('nameofpet');
    for (i = 0; i < list.length; i++) {
      list[i].innerHTML = document.getElementById('dog-name-input-0').value;
    }
    $("#prev").css("display", "block");
    
  }
      $("#girlbutton").click(function(){
        var girllist = document.getElementsByClassName('genderofpet');
        for (i = 0; i < girllist.length; i++) {
          girllist[i].innerHTML = "she";
        }
        var girllistpos = document.getElementsByClassName('possesive');
        for (i = 0; i < girllistpos.length; i++) {
          girllistpos[i].innerHTML = "her";
        }
        document.getElementById('spaneu').innerHTML = "spayed";
        $("#spayed").css("display", "block");
        $('#next').attr('disabled', false); 
      });
  
      $("#boybutton").click(function(){
        var boylist = document.getElementsByClassName('genderofpet');
        for (i = 0; i < boylist.length; i++) {
          boylist[i].innerHTML = "he";
        }
        var boylistpos = document.getElementsByClassName('possesive');
        for (i = 0; i < boylistpos.length; i++) {
          boylistpos[i].innerHTML = "him";
        }
        document.getElementById('spaneu').innerHTML = "neutered";
        $("#spayed").css("display", "block");
        $('#next').attr('disabled', false); 
      });
  
      $("#adultbutton").click(function(){
        document.getElementById('months').innerHTML = "years";
        document.getElementById('weeks').innerHTML = "months";
        $('#next').attr('disabled', false); 
      });
  
      $("#puppybutton").click(function(){
        document.getElementById('months').innerHTML = "months";
        document.getElementById('weeks').innerHTML = "weeks";
        $('#next').attr('disabled', false); 
      });

      $("#nohealthbutton").click(function(){
        $("#healthissuesfield").css("display", "none");
      });

      $("#somehealthbutton").click(function(){
        $("#healthissuesfield").css("display", "block");
      });
      