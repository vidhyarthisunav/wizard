function setClass(item){
    if($(item).hasClass("btn--multi")){
      if($(item).hasClass("btn--pill--selected btn--multi--selected")){
        $(item).removeClass("btn--pill--selected btn--multi--selected");
      }
      else{
        $(item).addClass("btn--pill--selected btn--multi--selected");
        $(item).siblings("first").removeClass("btn--pill--selected");
          if($(item).siblings(":first").hasClass("btn--pill") && !$(item).siblings(":first").hasClass("btn--multi")){
            $(item).siblings(":first").removeClass("btn--pill--selected");
          }
      }
    }
    else{
      $(item).siblings(".btn--pill").removeClass("btn--pill--selected btn--multi--selected");
      $(item).siblings().removeClass("btn--pill--selected");
      $(item).addClass("btn--pill--selected");
    }
  }
$('.snacks__example-row__item').click(function(){
  $(this).siblings().removeClass("snacks__example-row__item--selected btn--radio--selected");
  $(this).addClass("snacks__example-row__item--selected btn--radio--selected");
  if($(this).is(':first-child')){
    $(this).parent().siblings().removeClass();
    $(this).parent().siblings().addClass("snacks__description snacks__description--first");
    $(this).parent().siblings().children(":first").text("Doesn't eat any");
    $(this).parent().siblings().children(':nth-child(2)').text('');

  }
  if($(this).is(':nth-child(2)')){
    $(this).parent().siblings().removeClass();
    $(this).parent().siblings().addClass("snacks__description snacks__description--second");
    $(this).parent().siblings().children(":first").text('Has some');
    $(this).parent().siblings().children(':nth-child(2)').text('1-3 times a day');
  }
  if($(this).is(':nth-child(3)')){
    $(this).parent().siblings().removeClass();
    $(this).parent().siblings().addClass("snacks__description snacks__description--third");
    $(this).parent().siblings().children(":first").text('Has lots');
    $(this).parent().siblings().children(':nth-child(2)').text('4+ times a day');
  }
})

$('.body-type__example-row__item').click(function(){
  $(this).siblings().removeClass("body-type__example-row__item--selected btn--radio--selected");
  $(this).addClass("body-type__example-row__item--selected btn--radio--selected");
  if($(this).is(':first-child')){
    $(this).parent().parent().siblings().removeClass();
    $(this).parent().parent().siblings().addClass("body-type__description body-type__description--first");
    $(this).parent().parent().siblings().children(":first").text('A little skinny');
    $(this).parent().parent().siblings().children(':nth-child(2)').text('Narrow waistline and you can clearly see his ribs.');
  }
  if($(this).is(':nth-child(2)')){
    $(this).parent().parent().siblings().removeClass();
    $(this).parent().parent().siblings().addClass("body-type__description body-type__description--second");
    $(this).parent().parent().siblings().children(":first").text('Just right');
    $(this).parent().parent().siblings().children(':nth-child(2)').text('Visible waistline with some fat cover but his ribs are easy to feel.');
  }
  if($(this).is(':nth-child(3)')){
    $(this).parent().parent().siblings().removeClass();
    $(this).parent().parent().siblings().addClass("body-type__description body-type__description--third");
    $(this).parent().parent().siblings().children(":first").text('A bit chubby');
    $(this).parent().parent().siblings().children(':nth-child(2)').text('Waistline is not visible and his ribs are tricky to feel.');
  }
})
$('.activity-level__example-row__item').click(function(){
  $(this).siblings().removeClass("activity-level__example-row__item--selected btn--radio--selected");
  $(this).addClass("activity-level__example-row__item--selected btn--radio--selected");
  if($(this).is(':first-child')){
    $(this).parent().siblings().removeClass();
    $(this).parent().siblings().addClass("activity-level__description activity-level__description--second");
    $(this).parent().siblings().children(":first").text('Somewhat active');
    $(this).parent().siblings().children(':nth-child(2)').text('0.5 - 1hr walks per day');
  }
  if($(this).is(':nth-child(2)')){
    $(this).parent().siblings().removeClass();
    $(this).parent().siblings().addClass("activity-level__description activity-level__description--fourth");
    $(this).parent().siblings().children(":first").text('Very active');
    $(this).parent().siblings().children(':nth-child(2)').text('2-3hr walks per day');
  }
})