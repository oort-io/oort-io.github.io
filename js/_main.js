// Off Canvas Sliding
$(document).ready(function(){
  // Menu button click
  $('#js-menu-trigger,#js-menu-screen').on('click touchstart', function(e){
    // $('#js-body').toggleClass('no-scroll');
    $('#js-menu, #js-menu-screen').toggleClass('is-visible');
    $('#js-menu-trigger').toggleClass('slide close');
    // $('#masthead, #page-wrapper').toggleClass('slide');
    e.preventDefault();
  });
});

// FitVids
$(document).ready(function(){
	// Target your .container, .wrapper, .post, etc.
	$("#main").fitVids();
});


$(document).ready(function(){
  var timer = null;
  var self = $("input[type='submit']");
  var clicked = false;
  $("#emailForm").on("submit", function () {
    console.log("Submit clicked");
    if (clicked === false){
      self.removeClass("filled");
      self.addClass("circle");
      self.val("");
      clicked = true;
      $("svg").css("display", "block");
      $(".circle_2").attr("class", "circle_2 fill_circle");

      timer = setInterval(
        function tick() {
        self.removeClass("circle");
        self.addClass("filled");
        self.val("Thank you!");
        $("svg").css("display", "none");
        clearInterval(timer);
      }, 2000);
      }
  });
});

/*
//callback handler for form submit
$("#emailForm").submit(function(e)
{
    var postData = $(this).serializeArray();
    console.log(postData);
    var formURL = $(this).attr("action");
    var target = $(this).attr("target");
    console.log("AJAX form submiteroni");
    $.ajax(
    {
        url : formURL,
        type: "POST",
        data : postData,
        target: target,
        success:function(data, textStatus, jqXHR)
        {
            console.log("Success!");
            //data: return data from server
        },
        error: function(jqXHR, textStatus, errorThrown)
        {
            console.log("Not Success!");
            console.log(errorThrown);
            //if fails
        }
    });

    e.preventDefault(); //STOP default action
});
*/
// Table of Contents title. Change text to localize
$("#markdown-toc").prepend("<li><h6>{{ site.data.messages.locales[site.locale].overview }}</h6></li>");
