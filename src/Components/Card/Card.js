import React from 'react';
import './Card.scss'
import '../Test/Test.scss'
import jQuery from 'jquery'

function Card(props) {

  jQuery(function($) {
    var doAnimations = function() {
      
      var offset = $(window).scrollTop() + $(window).height(),
          $animatables = $('.animatable');
      
      if ($animatables.length == 0) {
        $(window).off('scroll', doAnimations);
      }
      
      $animatables.each(function(i) {
         var $animatable = $(this);
        if (($animatable.offset().top + $animatable.height() - 20) < offset) {
          $animatable.removeClass('animatable').addClass('animated');
        }
      });
  
    };
    
    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');
  });

  return (
    <div className="card animatable bounceInLeft">
      <div className="card__pic"></div>
      <div className="card__text">
        <div className="card__date">
          27.02.2022
        </div>
        <div className="card__title">Головна назва</div>
        <div className="card__description">
          Місце для тексту новин Новобудови та інші актуальні новини якими ви
          можете зацікавитись
        </div>
      </div>
    </div>
  );
}

export default Card;