import React from 'react';
import './Card.scss'
import '../Test/Test.scss'
import jQuery from 'jquery'

function Card({image, title, description, date}) {

  // jQuery(function($) {
  //   var doAnimations = function() {
      
  //     var offset = $(window).scrollTop() + $(window).height(),
  //         $animatables = $('.animatable');
      
  //     if ($animatables.length == 0) {
  //       $(window).off('scroll', doAnimations);
  //     }
      
  //     $animatables.each(function(i) {
  //        var $animatable = $(this);
  //       if (($animatable.offset().top + $animatable.height() - 20) < offset) {
  //         $animatable.removeClass('animatable').addClass('animated');
  //       }
  //     });
  
  //   };
    
  //   $(window).on('scroll', doAnimations);
  //   $(window).trigger('scroll');
  // });

  //  animatable bounceInLeft

  return (
    <div className="card">
      <div className="card__pic" style={{backgroundImage: `url('${image}')`}}></div>
      <div className="card__text">
        <div className="card__date">
          {date}
        </div>
        <div className="card__title">{title}</div>
        <div className="card__description">
          {description}
        </div>
      </div>
    </div>
  );
}

export default Card;