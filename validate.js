$('#moredogs').click(function(){
    $('<div class="card question__item"><label for="dog-name-input-0" id="dog-name-label-0">My dog is called</label><input type="text" id="dog-name-input-0" aria-labelledby="dog-name-label-0" placeholder="Your dog&#39;s name"></div>').insertBefore('.add-dog-button');
  
    $('<div><div class="sub-question"><div class="question-divider"><span><span class="nameofpet"/> is a good...</span></div><div class="btn--group"><button class="btn btn--pill" role="button" type="radio" id="girlbutton"><span>Girl</span></button><button class="btn btn--pill" role="button" type="radio" id="boybutton"><span>Boy</span></button></div></div><div class="sub-question" id="spayed" style="display:none;"><p>and is <span class="genderofpet"/> spayed?</p><div class="btn--group"><button class="btn btn--pill" role="button" type="button" id="yesbutton"><span>Yes</span></button><button class="btn btn--pill" role="button" type="button" id="nobutton"><span>No</span></button></div></div></div>').insertBefore('.add1');
    
    $('<div class="question"> <div class="sub-question"> <div class="question-divider"> <span><span class="nameofpet"></span> is...</span> </div> <div class="age-input-container"> <div class="btn--group"> <button class="btn btn--pill adult" role="button" type="button" id="adultbutton"> <span>An adult</span> </button> <button class="btn btn--pill" role="button" type="button" id="puppybutton"> <span>A puppy</span> </button> </div> <div class="age-inputs"> <input type="number" class="age-input" id="dog-age-months-input-0" aria-labelledby="dog-age-months-label-0" placeholder="0"> <label for="dog-age-months-input-0" id="months">months</label> <input type="number" class="age-input" id="dog-age-weeks-input-0" aria-labelledby="dog-age-weeks-label-0" placeholder="0"> <label for="dog-age-weeks-input-0" id="weeks">weeks</label> </div> </div> <div class="puppy-brought-home-wrapper"> <input type="checkbox" class="puppy-brought-home-input" id="puppy-brought-home-input-0" aria-labelledby="puppy-brought-home-label-0" role="button"> <label for="puppy-brought-home-input-0" class="checkbox-label">I haven&#39;t brought <span class="possesive"></span> home yet. Soon, very soon.</label> </div> </div> </div> </div>').insertBefore('.add2');
    
    $('<div class="question-inner-wrapper" id="what-breed-step"> <div class="question-inner" style="transform: translate(0%, 0%); opacity: 1;"> <div class="question"><div class="sub-question"><p class="question-divider"> <span><span class="nameofpet"></span> is a...</span></p><div role="combobox" aria-owns="typeahead-list-box0" aria-haspopup="listbox" aria-expanded="false" id="breed-typeahead-0" class="typeahead-combobox"><input type="text" class="typeahead-input" aria-label="Search for your dogs breed" aria-controls="typeahead-listbox" aria-autocomplete="typeahead-list-box0" placeholder="Breed"><div class="typeahead-selector-wrapper"></div></div> <div class="checkbox-wrapper"> <input type="checkbox" class="check" id="unknown-breed-input-0" aria-labelledby="unknown-breed-label-0" role="button"> <label for="unknown-breed-input-0" class="checkbox-label ">I don&#39;t know <span class="possesive"></span> breed</label> </div> </div> </div> </div>').insertBefore('#addbreed');

    $('<div class="question"><div class="sub-question"> <div class="question-divider"> <span><span class="nameofpet"></span> is...</span> </div> <div class="btn--group"> <button class="btn btn--pill " role="button" type="button"> <span>Very fussy</span> </button> <button class="btn btn--pill " role="button" type="button"> <span>Fussy</span> </button> <button class="btn btn--pill " role="button" type="button"> <span>Not fussy</span> </button> <button class="btn btn--pill " role="button" type="button"> <span>A foodie</span> </button> </div> </div>').insertBefore('#addfussy');
    
    $('<div class="sub-question"><div class="question-divider"><span><span class="nameofpet"/> eats...</span></div><div class="btn--group"><button class="btn btn--pill btn--multi" role="button" type="button"><span>Dry</span></button><button class="btn btn--pill btn--multi" role="button" type="button"><span>Wet</span></button><button class="btn btn--pill btn--multi" role="button" type="button"><span>Raw</span></button><button class="btn btn--pill btn--multi" role="button" type="button"><span>Home-cooked</span></button></div></div>').insertBefore('#foodtype');

    $('<div class="sub-question"> <div class="question-divider"> <span><span class="nameofpet"> </span> is...</span> </div> <div> <div class="body-type"> <div class="body-type__example-row"> <div role="button" tabindex="0" class="body-type__example-row__item btn btn--radio" id="skinny"> <img class="default-image" alt="a skinny dog" src="./images/skinny.svg"> <img class="selected-image" alt="a skinny dog" src="./images/skinny-selected.svg"> </div> <div role="button" tabindex="0" class="body-type__example-row__item btn btn--radio body-type__example-row__item--selected btn--radio--selected" id="ideal"> <img class="default-image" alt="a dog whose weight is ideal" src="./images/just-right.svg"> <img class="selected-image" alt="a dog whose weight is ideal" src="./images/just-right-selected.svg"> </div> <div role="button" tabindex="0" class="body-type__example-row__item btn btn--radio " id="chubby"> <img class="default-image" alt="a chubby dog" src="./images/chubby.svg"> <img class="selected-image" alt="a chubby dog" src="./images/chubby-selected.svg"> </div> </div> </div> <div class="body-type__description body-type__description--second"> <p>Just Right</p> <p>Visible waistline with some fat cover but his ribs are easy to feel.</p> </div> </div> </div>').insertBefore('#body');
    
    $('<div class="sub-question"> <div class="question-divider"> <span><span class="nameofpet"></span> weighs about...</span> </div> <div class="weight-input"> <div class="range-slider__output"> <div class="range-slider__output__wrapper"> <input type="number" placeholder="00" aria-label="Enter your dog&#39;s weight" id="weight"> <p>kg</p> </div> </div> </div> </div>').insertBefore('#addweight');
    
    $('<div class="sub-question"> <div class="question-divider"> <span><span class="nameofpet"></span> is...</span> </div> <div class="activity-level"> <div class="activity-level__example-row"> <div role="button" tabindex="0" class="activity-level__example-row__item btn btn--radio activity-level__example-row__item--selected btn--radio--selected"> <img class="default-image" alt="a walking dog" src="./images/fairly-active.svg"> <img class="selected-image" alt="a walking dog" src="./images/fairly-active-selected.svg"> </div> <div role="button" tabindex="0" class="activity-level__example-row__item btn btn--radio"> <img class="default-image" alt="a running dog" src="./images/adult-bundle-of-energy.svg"> <img class="selected-image" alt="a running dog" src="./images/adult-bundle-of-energy-selected.svg"> </div> </div> <div class="activity-level__description activity-level__description--second" id="activebody"> <p id="activehead">Somewhat active</p> <p id="activecontent">0.5 - 1hr walks per day</p> </div> </div> </div>').insertBefore('#addactivity');

    $('<div class="question"> <div class="sub-question"><div class="question-divider"> <span><span class="nameofpet"></span> is allergic to...</span> </div> <div class="btn--group"> <button class="btn btn--pill btn--pill--selected" type="button" id="nothing"> <span>Nothing</span> </button> <button class="btn btn--pill btn--multi " role="button" type="button" id="chicken"> <span>Chicken</span> </button> <button class="btn btn--pill btn--multi " role="button" type="button" id="cheese"> <span>Cottage Cheese</span> </button> </div> <div> <div class="checkbox-wrapper"> <input type="checkbox" aria-labelledby="unknown-allergies-label-0" role="button" id="unknown-allergies-input-0"> <label class="checkbox-label">I&#39;m not sure yet</label> </div> </div> </div>').insertBefore('#addallergy');

    $('<div class="sub-question"> <div class="question-divider"> <span><span class="nameofpet"></span> has...</span> </div> <div class="health-issues"> <div class="btn--group"> <button class="btn btn--pill" role="button" type="button" id="nohealthbutton"> <span>No health issues</span> </button> <button class="btn btn--pill " role="button" type="button" id="somehealthbutton"> <span>Some health issues</span> </button> <div role="combobox" aria-owns="typeahead-list-box0" aria-haspopup="listbox" aria-expanded="false" class="typeahead-combobox" style="display:none;" id="healthissuesfield"> <input type="text" class="typeahead-input" aria-controls="typeahead-list-box0" aria-autocomplete="typeahead-listbox" aria-label="Search for your dog&#39;s health issues" placeholder="health issues"> </div> </div> </div> </div>').insertBefore('#addissues');

    $('<div class="sub-question"> <div class="question-divider"> <span><span class="nameofpet"></span>...</span> </div> <div class="snacks"> <div class="snacks__example-row"> <div role="button" tabindex="0" class="snacks__example-row__item btn btn--radio"> <img class="default-image" alt="an outline of a dog treat" src="./images/no-treats.svg"> <img class="selected-image" alt="an outline of a dog treat" src="./images/no-treats-selected.svg"> </div> <div role="button" tabindex="0" class="snacks__example-row__item btn btn--radio snacks__example-row__item--selected btn--radio--selected"> <img class="default-image" alt="a few dog treats" src="./images/some-treats.svg"> <img class="selected-image" alt="a few dog treats" src="./images/some-treats-selected.svg"> </div> <div role="button" tabindex="0" class="snacks__example-row__item btn btn--radio"> <img class="default-image" alt="a big bunch of dog treats" src="./images/lots-of-treats.svg"> <img class="selected-image" alt="a big bunch of dog treats" src="./images/lots-of-treats-selected.svg"> </div> </div> <div class="snacks__description snacks__description--second" id="partyframe"> <p id="partyhead">Has some</p> <p id="partycontent">1-3 times a day</p> </div> </div> </div>').insertBefore('#addlast');

    $('.btn--pill').click(function(){
        if($(this).hasClass("btn--multi")){
          if($(this).hasClass("btn--pill--selected btn--multi--selected")){
            $(this).removeClass("btn--pill--selected btn--multi--selected");
          }
          else{
            $(this).addClass("btn--pill--selected btn--multi--selected");
          }
        }
        else{
          $(this).siblings().removeClass("btn--pill--selected");
          $(this).addClass("btn--pill--selected");
        }
      })
      $('.snacks__example-row__item').click(function(){
        $(this).siblings().removeClass("snacks__example-row__item--selected btn--radio--selected");
        $(this).addClass("snacks__example-row__item--selected btn--radio--selected");
        if($(this).is(':first-child')){
          $(this).parent().siblings().removeClass();
          $(this).parent().siblings().addClass("snacks__description snacks__description--first");
  
        }
        if($(this).is(':nth-child(2)')){
          $(this).parent().siblings().removeClass();
          $(this).parent().siblings().addClass("snacks__description snacks__description--second");
        }
        if($(this).is(':nth-child(3)')){
          $(this).parent().siblings().removeClass();
          $(this).parent().siblings().addClass("snacks__description snacks__description--third");
        }
      })
      
      $('.body-type__example-row__item').click(function(){
        $(this).siblings().removeClass("body-type__example-row__item--selected btn--radio--selected");
        $(this).addClass("body-type__example-row__item--selected btn--radio--selected");
        if($(this).is(':first-child')){
          $(this).parent().parent().siblings().removeClass();
          $(this).parent().parent().siblings().addClass("body-type__description body-type__description--first");
        }
        if($(this).is(':nth-child(2)')){
          $(this).parent().parent().siblings().removeClass();
          $(this).parent().parent().siblings().addClass("body-type__description body-type__description--second");
        }
        if($(this).is(':nth-child(3)')){
          $(this).parent().parent().siblings().removeClass();
          $(this).parent().parent().siblings().addClass("body-type__description body-type__description--third");
          this.parentElement.parentElement.siblings
        }
      })
      $('.body-type__example-row__item').click(function(){
        $(this).siblings().removeClass("body-type__example-row__item--selected btn--radio--selected");
        $(this).addClass("body-type__example-row__item--selected btn--radio--selected");
        if($(this).is(':first-child')){
          $(this).parent().parent().siblings().removeClass();
          $(this).parent().parent().siblings().addClass("body-type__description body-type__description--first");
        }
        if($(this).is(':nth-child(2)')){
          $(this).parent().parent().siblings().removeClass();
          $(this).parent().parent().siblings().addClass("body-type__description body-type__description--second");
        }
        if($(this).is(':nth-child(3)')){
          $(this).parent().parent().siblings().removeClass();
          $(this).parent().parent().siblings().addClass("body-type__description body-type__description--third");
          this.parentElement.parentElement.siblings
        }
      })
      $('.activity-level__example-row__item').click(function(){
        $(this).siblings().removeClass("activity-level__example-row__item--selected btn--radio--selected");
        $(this).addClass("activity-level__example-row__item--selected btn--radio--selected");
        if($(this).is(':first-child')){
          $(this).parent().siblings().removeClass();
          $(this).parent().siblings().addClass("activity-level__description activity-level__description--second");
        }
        if($(this).is(':nth-child(2)')){
          $(this).parent().siblings().removeClass();
          $(this).parent().siblings().addClass("activity-level__description activity-level__description--fourth");
        }
      })
  })