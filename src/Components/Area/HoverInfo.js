import {React, useEffect} from 'react';

function HoverInfo (props) {

  let myDiv=document.getElementsByClassName('test')[0];

  useEffect(()=>{
    myDiv=document.getElementsByClassName('test')[0];
    myDiv.style.display = props.isDisplayed ? 'block' : 'none';
  })

  function isTouchDevice() {
    try{
      document.createEvent("TouchEvent");
      return true;
    }
    catch (e) {
      return false;
    }
  }

  const move = (e) => {
    console.log('aaa')
    try{
      var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
      var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    } catch (e) {}

    myDiv.style.left = x +10+ "px";
    myDiv.style.top = y -20+ "px";
  };

  document.addEventListener("mousemove", (e)=> {
    myDiv=document.getElementsByClassName('test')[0];
    move(e);
  })

  document.addEventListener("touchmove", (e)=> {
    move(e)
  })

  return(
    <div className="test">Hello world</div>
  )
}

export default HoverInfo;