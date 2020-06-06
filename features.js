
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
        $("#girlbutton").addClass("btn--pill--selected");
        $("#boybutton").removeClass("btn--pill--selected");
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
        $("#boybutton").addClass("btn--pill--selected");
        $("#girlbutton").removeClass("btn--pill--selected");
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
  
      $("#yesbutton").click(function(){
        $("#yesbutton").addClass("btn--pill--selected");
        $("#nobutton").removeClass("btn--pill--selected");
      });
  
      $("#nobutton").click(function(){
        $("#nobutton").addClass("btn--pill--selected");
        $("#yesbutton").removeClass("btn--pill--selected");
      });
  
      $("#adultbutton").click(function(){
        $("#adultbutton").addClass("btn--pill--selected");
        $("#puppybutton").removeClass("btn--pill--selected");
        document.getElementById('months').innerHTML = "years";
        document.getElementById('weeks').innerHTML = "months";
        $('#next').attr('disabled', false); 
      });
  
      $("#puppybutton").click(function(){
        $("#puppybutton").addClass("btn--pill--selected");
        $("#adultbutton").removeClass("btn--pill--selected");
        document.getElementById('months').innerHTML = "months";
        document.getElementById('weeks').innerHTML = "weeks";
        $('#next').attr('disabled', false); 
      });
  
      $("#fussybutton").click(function(){
        $("#fussybutton").addClass("btn--pill--selected");
        $("#notfussybutton").removeClass("btn--pill--selected");
        $("#veryfussybutton").removeClass("btn--pill--selected");
        $("#foodiebutton").removeClass("btn--pill--selected");
      });
      $("#notfussybutton").click(function(){
        $("#notfussybutton").addClass("btn--pill--selected");
        $("#fussybutton").removeClass("btn--pill--selected");
        $("#veryfussybutton").removeClass("btn--pill--selected");
        $("#foodiebutton").removeClass("btn--pill--selected");
      });
      $("#veryfussybutton").click(function(){
        $("#veryfussybutton").addClass("btn--pill--selected");
        $("#fussybutton").removeClass("btn--pill--selected");
        $("#notfussybutton").removeClass("btn--pill--selected");
        $("#foodiebutton").removeClass("btn--pill--selected");
      });
      $("#foodiebutton").click(function(){
        $("#foodiebutton").addClass("btn--pill--selected");
        $("#fussybutton").removeClass("btn--pill--selected");
        $("#veryfussybutton").removeClass("btn--pill--selected");
        $("#notfussybutton").removeClass("btn--pill--selected");
      });
  
      $("#drybutton").click(function(){
        if($("#drybutton").hasClass("btn--pill--selected btn--multi--selected")){
          $("#drybutton").removeClass("btn--pill--selected btn--multi--selected");
        }
        else{
          $("#drybutton").addClass("btn--pill--selected btn--multi--selected");
        }
      });
  
      $("#wetbutton").click(function(){
        if($("#wetbutton").hasClass("btn--pill--selected btn--multi--selected")){
          $("#wetbutton").removeClass("btn--pill--selected btn--multi--selected");
        }
        else{
          $("#wetbutton").addClass("btn--pill--selected btn--multi--selected");
        }
      });
  
      $("#rawbutton").click(function(){
        if($("#rawbutton").hasClass("btn--pill--selected btn--multi--selected")){
          $("#rawbutton").removeClass("btn--pill--selected btn--multi--selected");
        }
        else{
          $("#rawbutton").addClass("btn--pill--selected btn--multi--selected");
        }
      });
  
      $("#homebutton").click(function(){
        if($("#homebutton").hasClass("btn--pill--selected btn--multi--selected")){
          $("#homebutton").removeClass("btn--pill--selected btn--multi--selected");
        }
        else{
          $("#homebutton").addClass("btn--pill--selected btn--multi--selected");
        }
      });
      $("#nohealthbutton").click(function(){
        $("#nohealthbutton").addClass("btn--pill--selected");
        $("#somehealthbutton").removeClass("btn--pill--selected");
        $("#healthissuesfield").css("display", "none");
      });
      $("#somehealthbutton").click(function(){
        $("#somehealthbutton").addClass("btn--pill--selected");
        $("#nohealthbutton").removeClass("btn--pill--selected");
        $("#healthissuesfield").css("display", "block");
      });
      $("#cheese").click(function(){
        $("#cheese").addClass("btn--pill--selected btn--multi--selected");
        $("#chicken").removeClass("btn--pill--selected btn--multi--selected");
        $("#nothing").removeClass("btn--pill--selected");
      });
      $("#chicken").click(function(){
        $("#chicken").addClass("btn--pill--selected btn--multi--selected");
        $("#cheese").removeClass("btn--pill--selected btn--multi--selected");
        $("#nothing").removeClass("btn--pill--selected");
      });
      $("#nothing").click(function(){
        $("#nothing").addClass("btn--pill--selected");
        $("#chicken").removeClass("btn--pill--selected btn--multi--selected");
        $("#cheese").removeClass("btn--pill--selected btn--multi--selected");
      });
      $("#skinny").click(function(){
        $("#skinny").addClass("body-type__example-row__item--selected btn--radio--selected");
        $("#chubby").removeClass("body-type__example-row__item--selected btn--radio--selected");
        $("#ideal").removeClass("body-type__example-row__item--selected btn--radio--selected");
        $("#bodyframe").addClass("body-type__description--first");
        $("#bodyframe").removeClass("body-type__description--second");
        $("#bodyframe").removeClass("body-type__description--third");
        document.getElementById('bodyheadline').innerHTML = "A little skinny";
        document.getElementById('bodycontent').innerHTML = "Narrow waistline and you can clearly see his ribs.";
      });
      $("#chubby").click(function(){
        $("#chubby").addClass("body-type__example-row__item--selected btn--radio--selected");
        $("#skinny").removeClass("body-type__example-row__item--selected btn--radio--selected");
        $("#ideal").removeClass("body-type__example-row__item--selected btn--radio--selected");
        $("#bodyframe").addClass("body-type__description--third");
        $("#bodyframe").removeClass("body-type__description--second");
        $("#bodyframe").removeClass("body-type__description--first");
        document.getElementById('bodyheadline').innerHTML = "A bit chubby";
        document.getElementById('bodycontent').innerHTML = "Waistline is not visible and his ribs are tricky to feel.";
      });
      $("#ideal").click(function(){
        $("#ideal").addClass("body-type__example-row__item--selected btn--radio--selected");
        $("#skinny").removeClass("body-type__example-row__item--selected btn--radio--selected");
        $("#chubby").removeClass("body-type__example-row__item--selected btn--radio--selected");
        $("#bodyframe").addClass("body-type__description--second");
        $("#bodyframe").removeClass("body-type__description--first");
        $("#bodyframe").removeClass("body-type__description--third");
        document.getElementById('bodyheadline').innerHTML = "Just right";
        document.getElementById('bodycontent').innerHTML = "Visible waistline with some fat cover but his ribs are easy to feel.";
      });
      $("#none").click(function(){
        $("#none").addClass("snacks__example-row__item--selected btn--radio--selected");
        $("#some").removeClass("snacks__example-row__item--selected btn--radio--selected");
        $("#many").removeClass("snacks__example-row__item--selected btn--radio--selected");
        $("#partyframe").addClass("snacks__description--first");
        $("#partyframe").removeClass("snacks__description--second");
        $("#partyframe").removeClass("snacks__description--third");
        document.getElementById('partyhead').innerHTML = "Doesn't eat any";
        document.getElementById('partycontent').innerHTML = "";
      });
      $("#some").click(function(){
        $("#some").addClass("snacks__example-row__item--selected btn--radio--selected");
        $("#none").removeClass("snacks__example-row__item--selected btn--radio--selected");
        $("#many").removeClass("snacks__example-row__item--selected btn--radio--selected");
        $("#partyframe").addClass("snacks__description--second");
        $("#partyframe").removeClass("snacks__description--first");
        $("#partyframe").removeClass("snacks__description--third");
        document.getElementById('partyhead').innerHTML = "Has some";
        document.getElementById('partycontent').innerHTML = "1-3 times a day";
      });
      $("#many").click(function(){
        $("#many").addClass("snacks__example-row__item--selected btn--radio--selected");
        $("#none").removeClass("snacks__example-row__item--selected btn--radio--selected");
        $("#some").removeClass("snacks__example-row__item--selected btn--radio--selected");
        $("#partyframe").addClass("snacks__description--third");
        $("#partyframe").removeClass("snacks__description--first");
        $("#partyframe").removeClass("snacks__description--second");
        document.getElementById('partyhead').innerHTML = "Has lots";
        document.getElementById('partycontent').innerHTML = "4+ times a day";
      });
      $("#many").click(function(){
        $("#many").addClass("snacks__example-row__item--selected btn--radio--selected");
        $("#none").removeClass("snacks__example-row__item--selected btn--radio--selected");
        $("#some").removeClass("snacks__example-row__item--selected btn--radio--selected");
        $("#partyframe").addClass("snacks__description--third");
        $("#partyframe").removeClass("snacks__description--first");
        $("#partyframe").removeClass("snacks__description--second");
        document.getElementById('partyhead').innerHTML = "Has lots";
        document.getElementById('partycontent').innerHTML = "4+ times a day";
      });
      $("#one").click(function(){
        $("#one").addClass("activity-level__example-row__item--selected btn--radio--selected");
        $("#two").removeClass("activity-level__example-row__item--selected btn--radio--selected");
        $("#three").removeClass("activity-level__example-row__item--selected btn--radio--selected");
        $("#four").removeClass("activity-level__example-row__item--selected btn--radio--selected");
        $("#five").removeClass("activity-level__example-row__item--selected btn--radio--selected");
        $("#activebody").removeClass();
        $("#activebody").addClass("activity-level__description activity-level__description--first");
        document.getElementById('activehead').innerHTML = "A serial snoozer";
        document.getElementById('activecontent').innerHTML = "Under 30min walks per day";
      });
      $("#two").click(function(){
        $("#two").addClass("activity-level__example-row__item--selected btn--radio--selected");
        $("#one").removeClass("activity-level__example-row__item--selected btn--radio--selected");
        $("#three").removeClass("activity-level__example-row__item--selected btn--radio--selected");
        $("#four").removeClass("activity-level__example-row__item--selected btn--radio--selected");
        $("#five").removeClass("activity-level__example-row__item--selected btn--radio--selected");
        $("#activebody").removeClass();
        $("#activebody").addClass("activity-level__description activity-level__description--second");
        document.getElementById('activehead').innerHTML = "Somewhat active";
        document.getElementById('activecontent').innerHTML = "0.5 - 1hr walks per day";
      });
      $("#three").click(function(){
        $("#three").addClass("activity-level__example-row__item--selected btn--radio--selected");
        $("#one").removeClass("activity-level__example-row__item--selected btn--radio--selected");
        $("#two").removeClass("activity-level__example-row__item--selected btn--radio--selected");
        $("#four").removeClass("activity-level__example-row__item--selected btn--radio--selected");
        $("#five").removeClass("activity-level__example-row__item--selected btn--radio--selected");
        $("#activebody").removeClass();
        $("#activebody").addClass("activity-level__description activity-level__description--third");
        document.getElementById('activehead').innerHTML = "Active";
        document.getElementById('activecontent').innerHTML = "1-2hr walks per day";
      });
      $("#four").click(function(){
        $("#four").addClass("activity-level__example-row__item--selected btn--radio--selected");
        $("#one").removeClass("activity-level__example-row__item--selected btn--radio--selected");
        $("#two").removeClass("activity-level__example-row__item--selected btn--radio--selected");
        $("#three").removeClass("activity-level__example-row__item--selected btn--radio--selected");
        $("#five").removeClass("activity-level__example-row__item--selected btn--radio--selected");
        $("#activebody").removeClass();
        $("#activebody").addClass("activity-level__description activity-level__description--fourth");
        document.getElementById('activehead').innerHTML = "Very active";
        document.getElementById('activecontent').innerHTML = "2-3hr walks per day";
      });
      $("#five").click(function(){
        $("#five").addClass("activity-level__example-row__item--selected btn--radio--selected");
        $("#one").removeClass("activity-level__example-row__item--selected btn--radio--selected");
        $("#two").removeClass("activity-level__example-row__item--selected btn--radio--selected");
        $("#three").removeClass("activity-level__example-row__item--selected btn--radio--selected");
        $("#four").removeClass("activity-level__example-row__item--selected btn--radio--selected");
        $("#activebody").removeClass();
        $("#activebody").addClass("activity-level__description activity-level__description--fifth");
        document.getElementById('activehead').innerHTML = "Full of energy";
        document.getElementById('activecontent').innerHTML = "More than 3hr walks per day";
      });