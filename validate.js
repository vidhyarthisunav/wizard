var pageaddress = 0;
    
$('#next').click(function(){
  if(pageaddress == 6 || pageaddress == 11 || pageaddress == 0){
    $('#next').attr('disabled',true);
  }
  if(pageaddress == 13){
    var petname = document.getElementById('dog-name-input-0').value;
    var parentname = document.getElementById('fullname').value;
    var weight = document.getElementById('weight').value;
    var calorie = document.getElementById('calorie').innerHTML;
    var url = encodeURI("Hi Mom and Paw team, Myself "+parentname+" and my pet's name is "+petname+". "+petname+"'s weight is "+weight+". According to your analysis, "+petname+" requires "+calorie+" calories on daily basis and I want to order <recipe name> fresh food for my pet. Please suggest how to go ahead.");
    var win = window.open('https://api.whatsapp.com/send?phone=+919636277560&text='+url, '_blank');
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website.');
    }
  } 
  pageaddress++;     
})
$(document).ready(function(){
  $('#next').attr('disabled', true);  
    $('#dog-name-input-0').keyup(function(){
        if($(this).val().length !=0)
            $('#next').attr('disabled', false);            
        else
            $('#next').attr('disabled',true);
    })
});


$('#weight').keyup(function(){
  if($(this).val().length !=0)
      $('#next').attr('disabled', false);
})

$('#fullname').keyup(function(){
    if($(this).val().length !=0){
      $('#email').keyup(function(){
        if($(this).val().length !=0){
          $('#phone').keyup(function(){
            if($(this).val().length !=0){
              $('#next').attr('disabled',false);
            }
          })
        }
      })
    }
})

$('#breed').keyup(function(){
    if($(this).val().length !=0)
        $('#unknown-breed-input-0').attr('checked', false);            
    else
        $('#unknown-breed-input-0').attr('checked',true);
})


$(document).ready(function(){
    $('#dog-name-input-0').keyup(function(){
        if($(this).val().length !=0)
            $('#next').attr('disabled', false);
    })
});

$('#prev').click(function(){
  pageaddress--;
  $('#next').attr('disabled',false);
  if(pageaddress == 0){
  document.getElementById('buttontitle').innerHTML = "Let's Start";
  }
});