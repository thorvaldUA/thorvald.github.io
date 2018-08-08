// ScrollMagic

// init controller
	var controller = new ScrollMagic.Controller();

// loop through all elements
$('q, img').each(function() {
  
  // build a tween
  var tween = TweenMax.from($(this), 0.3, {opacity: 0, top: '50px'});

  // build a scene
  var scene = new ScrollMagic.Scene({
    triggerElement: this
  })
  .setTween(tween) // trigger a TweenMax.to tween
  .addTo(controller);
  
});
