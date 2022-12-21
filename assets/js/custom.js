$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var header = $('.navbar').height();
    if (scroll >= header) {
        $("header").addClass("sticky_header");
    } else {
        $("header").removeClass("sticky_header");
    }
});


$(function(){ 
    var navMain = $("#collapsibleNavbar");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});

// Counter To Count Number Visit
var height = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  // Md.Asaduzzaman Muhid
  if (height == 0 && $(window).scrollTop() > oTop) {
    $('.percent-value').each(function() {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 1500,
            easing: 'swing',
            step: function () {
                $this.text(Math.ceil(this.Counter));
            }
        });
    });
    height = 1;// Md.Asaduzzaman Muhid
  }
});
