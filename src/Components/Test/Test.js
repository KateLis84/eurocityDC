import {React, useEffect} from "react";
// import './WowTest.scss';
import jQuery from 'jquery'
import WOW from "wow.js"

export default function Test() {
  useEffect(() => {
    let wow = new WOW(
      {
        animateClass: 'animated',
        offset: 100
      }
    );
    wow.init();
  }, [])

  (function() {
    var Util,
      __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  
    Util = (function() {
      function Util() {}
  
      Util.prototype.extend = function(custom, defaults) {
        var key, value;
        for (key in custom) {
          value = custom[key];
          if (value != null) {
            defaults[key] = value;
          }
        }
        return defaults;
      };
  
      Util.prototype.isMobile = function(agent) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
      };
  
      return Util;
  
    })();
  
    this.WOW = (function() {
      WOW.prototype.defaults = {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true
      };
  
      function WOW(options) {
        if (options == null) {
          options = {};
        }
        this.scrollCallback = __bind(this.scrollCallback, this);
        this.scrollHandler = __bind(this.scrollHandler, this);
        this.start = __bind(this.start, this);
        this.scrolled = true;
        this.config = this.util().extend(options, this.defaults);
      }
  
      WOW.prototype.init = function() {
        var _ref;
        this.element = window.document.documentElement;
        if ((_ref = document.readyState) === "interactive" || _ref === "complete") {
          return this.start();
        } else {
          return document.addEventListener('DOMContentLoaded', this.start);
        }
      };
  
      WOW.prototype.start = function() {
        var box, _i, _len, _ref;
        this.boxes = this.element.getElementsByClassName(this.config.boxClass);
        if (this.boxes.length) {
          if (this.disabled()) {
            return this.resetStyle();
          } else {
            _ref = this.boxes;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              box = _ref[_i];
              this.applyStyle(box, true);
            }
            window.addEventListener('scroll', this.scrollHandler, false);
            window.addEventListener('resize', this.scrollHandler, false);
            return this.interval = setInterval(this.scrollCallback, 50);
          }
        }
      };
  
      WOW.prototype.stop = function() {
        window.removeEventListener('scroll', this.scrollHandler, false);
        window.removeEventListener('resize', this.scrollHandler, false);
        if (this.interval != null) {
          return clearInterval(this.interval);
        }
      };
  
      WOW.prototype.show = function(box) {
        this.applyStyle(box);
        return box.className = "" + box.className + " " + this.config.animateClass;
      };
  
      WOW.prototype.applyStyle = function(box, hidden) {
        var delay, duration, iteration;
        duration = box.getAttribute('data-wow-duration');
        delay = box.getAttribute('data-wow-delay');
        iteration = box.getAttribute('data-wow-iteration');
        return box.setAttribute('style', this.customStyle(hidden, duration, delay, iteration));
      };
  
      WOW.prototype.resetStyle = function() {
        var box, _i, _len, _ref, _results;
        _ref = this.boxes;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          box = _ref[_i];
          _results.push(box.setAttribute('style', 'visibility: visible;'));
        }
        return _results;
      };
  
      WOW.prototype.customStyle = function(hidden, duration, delay, iteration) {
        var style;
        style = hidden ? "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;" : "visibility: visible;";
        if (duration) {
          style += "-webkit-animation-duration: " + duration + "; -moz-animation-duration: " + duration + "; animation-duration: " + duration + ";";
        }
        if (delay) {
          style += "-webkit-animation-delay: " + delay + "; -moz-animation-delay: " + delay + "; animation-delay: " + delay + ";";
        }
        if (iteration) {
          style += "-webkit-animation-iteration-count: " + iteration + "; -moz-animation-iteration-count: " + iteration + "; animation-iteration-count: " + iteration + ";";
        }
        return style;
      };
  
      WOW.prototype.scrollHandler = function() {
        return this.scrolled = true;
      };
  
      WOW.prototype.scrollCallback = function() {
        var box;
        if (this.scrolled) {
          this.scrolled = false;
          this.boxes = (function() {
            var _i, _len, _ref, _results;
            _ref = this.boxes;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              box = _ref[_i];
              if (!(box)) {
                continue;
              }
              if (this.isVisible(box)) {
                this.show(box);
                continue;
              }
              _results.push(box);
            }
            return _results;
          }).call(this);
          if (!this.boxes.length) {
            return this.stop();
          }
        }
      };
  
      WOW.prototype.offsetTop = function(element) {
        var top;
        top = element.offsetTop;
        while (element = element.offsetParent) {
          top += element.offsetTop;
        }
        return top;
      };
  
      WOW.prototype.isVisible = function(box) {
        var bottom, offset, top, viewBottom, viewTop;
        offset = box.getAttribute('data-wow-offset') || this.config.offset;
        viewTop = window.pageYOffset;
        viewBottom = viewTop + this.element.clientHeight - offset;
        top = this.offsetTop(box);
        bottom = top + box.clientHeight;
        return top <= viewBottom && bottom >= viewTop;
      };
  
      WOW.prototype.util = function() {
        return this._util || (this._util = new Util());
      };
  
      WOW.prototype.disabled = function() {
        return !this.config.mobile && this.util().isMobile(navigator.userAgent);
      };
  
      return WOW;
  
    })();
  
  }).call(this);
  
  


  return (
    <>
      <div id="container">
        <header>
          <h1>Animate on scroll with wow.js</h1>
        </header>
        <div class="wow fadeInUp" data-wow-duration="2s">
          <h4>
            Credits:{" "}
            <a href="https://pixabay.com/" target="_blank">
              Images
            </a>{" "}
            |
            <a href="http://fontawesome.io/icons/" target="_blank">
              Icons
            </a>{" "}
            |
            <a href="http://mynameismatthieu.com/WOW/" target="_blank">
              WOW JS
            </a>{" "}
            |{" "}
            <a href="https://daneden.github.io/animate.css/" target="_blank">
              Animate CSS
            </a>
          </h4>
        </div>

        <div id="main">
          {/* <!-- FONT AWESOME DEMO -->				 */}
          <div class="col_third">
            <i
              class="fa fa-heart fa-5x icn_red wow pulse"
              data-wow-iteration="infinite"
              data-wow-duration="500ms"
            ></i>
          </div>

          <div class="col_third">
            <i
              class="fa fa-heart fa-5x icn_blue wow shake"
              data-wow-iteration="infinite"
              data-wow-duration="1500ms"
            ></i>
          </div>

          <div class="col_third end">
            <i
              class="fa fa-heart fa-5x icn_green wow bounce"
              data-wow-iteration="infinite"
              data-wow-duration="800ms"
            ></i>
          </div>
          <div class="clear"></div>
          {/* <!--END / FONT AWESOME DEMO -->	 */}

          {/* <!-- 3 COLUMN DEMO  -->		 */}
          <div class="col_third">
            <section
              class="section--yellow wow fadeInLeft"
              data-wow-delay="0.1s"
              style="visibility: visible; -webkit-animation-delay: 0.1s; -moz-animation-delay: 0.1s; animation-delay: 0.1s;"
            ></section>
          </div>

          <div class="col_third">
            <section
              class="section--yellow wow fadeInLeft"
              data-wow-delay="0.2s"
              style="visibility: visible; -webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;"
            ></section>
          </div>

          <div class="col_third end">
            <section
              class="section--yellow wow fadeInLeft"
              data-wow-delay="0.3s"
              style="visibility: visible; -webkit-animation-delay: 0.3s; -moz-animation-delay: 0.3s; animation-delay: 0.3s;"
            ></section>
          </div>
          <div class="clear"></div>
          {/* <!-- END / 3 COLUMN DEMO -->		 */}

          <section class="section--purple"></section>
          <section class="section--blue"></section>

          <div class="wow fadeInUp" data-wow-duration="2s">
            <h2 align="center">
              <strong>Reveal</strong> Animations When You Scroll
            </h2>
          </div>

          <section
            class="section--purple wow fadeInLeft"
            data-wow-duration="2s"
          ></section>
          <section
            class="section--green wow fadeInLeft"
            data-wow-duration="2s"
          ></section>
          <div class="clear"></div>

          {/* <!-- 3 COLUMN DEMO  -->		 */}
          <div class="col_third">
            <section
              class="section--yellow wow fadeInRight"
              data-wow-delay="0.1s"
              style="visibility: visible; -webkit-animation-delay: 0.1s; -moz-animation-delay: 0.1s; animation-delay: 0.1s;"
            ></section>
          </div>

          <div class="col_third">
            <section
              class="section--yellow wow fadeInRight"
              data-wow-delay="0.2s"
              style="visibility: visible; -webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;"
            ></section>
          </div>

          <div class="col_third end">
            <section
              class="section--yellow wow fadeInRight"
              data-wow-delay="0.3s"
              style="visibility: visible; -webkit-animation-delay: 0.3s; -moz-animation-delay: 0.3s; animation-delay: 0.3s;"
            ></section>
          </div>
          <div class="clear"></div>
          {/* <!-- END / 3 COLUMN DEMO --> */}

          <div class="service-section">
            <div
              class="wow_imgage wow fadeInLeft"
              data-wow-delay="0.1s"
              style="visibility: visible; -webkit-animation-delay: 0.1s; -moz-animation-delay: 0.1s; animation-delay: 0.1s;"
            >
              <figure>
                <img
                  src="https://cdn.pixabay.com/photo/2019/12/05/00/36/leaves-4673997_960_720.jpg"
                  width="270"
                  height="180"
                ></img>
              </figure>
            </div>

            <div
              class="wow_imgage wow fadeInLeft"
              data-wow-delay="0.2s"
              style="visibility: visible; -webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; animation-delay: 0.2s;"
            >
              <figure>
                <img
                  src="https://cdn.pixabay.com/photo/2019/12/05/00/36/leaves-4673997_960_720.jpg"
                  width="270"
                  height="180"
                ></img>
              </figure>
            </div>

            <div
              class="wow_imgage end wow fadeInLeft"
              data-wow-delay="0.3s"
              style="visibility: visible; -webkit-animation-delay: 0.3s; -moz-animation-delay: 0.3s; animation-delay: 0.3s;"
            >
              <figure>
                <img
                  src="https://cdn.pixabay.com/photo/2019/12/05/00/36/leaves-4673997_960_720.jpg"
                  width="270"
                  height="180"
                ></img>
              </figure>
            </div>
          </div>
          {/* <!--.SERVICES SECTION--> */}
          <div class="clear"></div>

          <section
            class="section--yellow wow fadeInDown"
            data-wow-duration="1s"
          ></section>
          <section
            class="section--purple wow fadeInDown"
            data-wow-duration="2s"
          ></section>
          <section
            class="section--blue wow fadeInDown"
            data-wow-duration="2s"
          ></section>
          <section
            class="section--green wow fadeInDown"
            data-wow-duration="3s"
          ></section>

          <div class="service-section">
            <div class="wow_imgage wow fadeInLeft" data-wow-delay="0.1s">
              <img
                src="https://cdn.pixabay.com/photo/2019/12/05/00/36/leaves-4673997_960_720.jpg"
                width="270"
                height="180"
              ></img>
            </div>

            <div class="wow_imgage wow fadeInLeft" data-wow-delay="0.2s">
              <img
                src="https://cdn.pixabay.com/photo/2019/12/05/00/36/leaves-4673997_960_720.jpg"
                width="270"
                height="180"
              ></img>
            </div>

            <div class="wow_imgage end wow fadeInLeft" data-wow-delay="0.3s">
              <img
                src="https://cdn.pixabay.com/photo/2019/12/05/00/36/leaves-4673997_960_720.jpg"
                width="270"
                height="180"
              ></img>
            </div>
          </div>
          {/* <!-- End Images SECTION-->			

	<!-- 3 COLUMN DEMO  -->		 */}
          <div class="col_third">
            <section class="section--yellow wow fadeInDown"></section>
          </div>

          <div class="col_third">
            <section class="section--yellow wow fadeInDown"></section>
          </div>

          <div class="col_third end">
            <section class="section--yellow wow fadeInDown"></section>
          </div>
          <div class="clear"></div>
          {/* <!-- END / 3 COLUMN DEMO -->		

	<!-- FONT AWESOME DEMO -->				 */}
          <div class="col_third">
            <i
              class="fa fa-heart fa-5x icn_red wow pulse"
              data-wow-iteration="infinite"
              data-wow-duration="500ms"
            ></i>
          </div>

          <div class="col_third">
            <i
              class="fa fa-heart fa-5x icn_blue wow shake"
              data-wow-iteration="infinite"
              data-wow-duration="1500ms"
            ></i>
          </div>

          <div class="col_third end">
            <i
              class="fa fa-heart fa-5x icn_green wow bounce"
              data-wow-iteration="infinite"
              data-wow-duration="800ms"
            ></i>
          </div>
          <div class="clear"></div>
          {/* <!--END / FONT AWESOME DEMO -->	 */}
        </div>
      </div>
    </>
  );
}