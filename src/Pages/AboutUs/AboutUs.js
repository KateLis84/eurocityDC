import { React, useEffect } from "react";
import "./AboutUs.scss";

import { HashLink as Link } from 'react-router-hash-link';

import aboutVideo from "../../Assets/Videos/AboutUs.mp4";
import family from '../../Assets/Images/happyFamily.jpg';

import $ from "jquery";

export default function AboutUs() {

  useEffect(() => {
    document.getElementById("heroEffectHeader").style.display = "none";
    document.getElementById("customHeader").className = 'header header-scroll';
  }, []);

  window.scrollTo(0, 0)

  $(function () {
    var fx = function fx() {
      $(".toCount").each(function (i, el) {
        var data = parseInt(this.dataset.n, 10);
        var props = {
          from: {
            count: 0,
          },
          to: {
            count: data,
          },
        };
        $(props.from).animate(props.to, {
          duration: 1000 * 2,
          step: function (now, fx) {
            $(el).text(Math.ceil(now));
          },
          complete: function () {
            el.textContent = "20+";
            if (el.dataset.sym !== undefined) {
              el.textContent = el.textContent.concat(el.dataset.sym);
            }
          },
        });
      });

      $(".toCount1").each(function (i, el) {
        var data = parseInt(this.dataset.n, 10);
        var props = {
          from: {
            count: 0,
          },
          to: {
            count: data,
          },
        };
        $(props.from).animate(props.to, {
          duration: 1000 * 3,
          step: function (now, fx) {
            $(el).text(Math.ceil(now));
          },
          complete: function () {
            el.textContent = "1430+";
            if (el.dataset.sym !== undefined) {
              el.textContent = el.textContent.concat(el.dataset.sym);
            }
          },
        });
      });
    };

    var reset = function reset() {
      if ($(this).scrollTop() > 90) {
        $(this).off("scroll");
        fx();
      }
    };

    $(window).on("scroll", reset);
  });

  let animation = false;

  function getRGB(hex) {
    var hexNum = hex.replace("#", "");
    var hexValues = hexNum.match(/.{1,2}/g);
    for (var i = 0; i < hexValues.length; i++) {
      hexValues[i] = parseInt("0x" + hexValues[i], 16);
    }
    return hexValues;
  }
  function greatDiff(start, end) {
    var stColor = getRGB(start),
      enColor = getRGB(end),
      diff = 0;
    for (var i = 0; i < stColor.length; i++) {
      var calcDiff = Math.abs(stColor[i] - enColor[i]);
      if (calcDiff > diff) {
        diff = calcDiff;
      }
    }
    return diff;
  }
  function convertColor(start, end, step) {
    var startRGB = getRGB(start),
      endRGB = getRGB(end),
      result = "#";
    for (var i = 0; i < startRGB.length; i++) {
      var stNum = startRGB[i],
        enNum = endRGB[i];
      if (stNum != enNum) {
        if (stNum < enNum) {
          startRGB[i]++;
        } else if (stNum > enNum) {
          startRGB[i]--;
        }
      }
      var intVer = parseInt(startRGB[i], 10);
      if (intVer < 10) {
        result += "0" + intVer.toString(16);
      } else {
        result +=
          intVer.toString(16).length < 2
            ? "0" + intVer.toString(16)
            : intVer.toString(16);
      }
    }
    return result;
  }
  class Counter {
    constructor(timer) {
      this.timer = timer;
      this.started = false;
      this.numStart =
        typeof this.timer.dataset.start != "undefined"
          ? this.timer.dataset.start
          : 0;
      this.numEnd = this.timer.dataset.finnish;
      this.prepend =
        typeof this.timer.dataset.prepend != "undefined"
          ? this.timer.dataset.prepend
          : "";
      this.append =
        typeof this.timer.dataset.append != "undefined"
          ? this.timer.dataset.append
          : "";
      this.animateNum =
        typeof this.timer.dataset.countanim != "undefined"
          ? this.timer.dataset.countanim
          : true;
      this.count = this.numStart;
      this.speed =
        typeof this.timer.dataset.speed != "undefined"
          ? this.timer.dataset.speed
          : 100;
      this.increment =
        typeof this.timer.dataset.increment != "undefined"
          ? this.timer.dataset.increment
          : 0;
      this.displayLoop();
    }
    displayLoop() {
      let _this = this;
      this.started = true;
      if (this.animateNum == true) {
        this.timer.querySelector(
          ".display"
        ).innerHTML = `<span class="decorator prepend">${this.prepend}</span><span class="count">${this.count}</span><span class="decorator append">${this.append}</span>`;
      }
      if (this.count < this.numEnd) {
        this.loop = setTimeout(function () {
          _this.displayLoop();
        }, this.speed);
        if (this.increment > 0 && this.numEnd - this.count > this.increment) {
          this.count += this.increment;
        } else {
          this.count++;
        }
      }
    }
    prependCanvas(canvas) {
      var firstChild = this.timer.firstChild;
      this.timer.insertBefore(canvas, firstChild);
    }
    getTimer() {
      return this.timer;
    }
    getCount() {
      return this.count;
    }
    getTotal() {
      return this.numEnd;
    }
    getStarted() {
      return this.started;
    }
  }
  class Radial extends Counter {
    constructor(timer) {
      super(timer);
      var _timer = super.getTimer();
      this.cClockwise =
        typeof _timer.dataset.cclockwise != "undefined"
          ? this.timer.dataset.cclockwise
          : false;
      var pixelRatio = window.devicePixelRatio || 1;
      var canvas = document.createElement("canvas");
      canvas.setAttribute("class", "progress-bar");
      canvas.setAttribute("width", "350");
      canvas.setAttribute("height", "240");
      super.prependCanvas(canvas);
      // Radial bar
      this.radialBar = _timer.querySelector(".progress-bar");
      this.radialBar.style.width = this.radialBar.width + "px";
      this.radialBar.style.height = this.radialBar.height + "px";
      this.radialBar.width *= pixelRatio;
      this.radialBar.height *= pixelRatio;
      this.radialColor =
        typeof _timer.dataset.color != "undefined"
          ? this.timer.dataset.color
          : "#000";
      this.startColor = this.radialColor;
      this.endColor =
        typeof _timer.dataset.endcolor != "undefined"
          ? this.timer.dataset.endcolor
          : this.radialColor;
      this.xPos = this.radialBar.width / 2 / pixelRatio;
      this.yPos = this.radialBar.height / 2 / pixelRatio + 10;
      this.radialProgress = this.radialBar.getContext("2d");
      this.radialProgress.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      this.setStage();
      this.displayLoop();
    }
    setStage() {
      var radius = 95;
      var startAngle = 0.75 * Math.PI;
      var endAngle = 2.25 * Math.PI;
      var counterClock = false;
      // Set position and width
      this.radialProgress.beginPath();
      this.radialProgress.arc(
        this.xPos,
        this.yPos,
        radius,
        startAngle,
        endAngle,
        counterClock
      );
      this.radialProgress.lineWidth = 60;
      // line color
      this.radialProgress.strokeStyle = "#444";
      // this.radialProgress.lineCap = 'butt';
      this.radialProgress.stroke();
    }
    drawProgress(percent) {
      var radius = 95;
      if (this.cClockwise) {
        var startAngle = 2.25 * Math.PI;
        var position = (percent * (0.75 - 2.25)) / 100 + 2.25;
        var endAngle = (position >= 0.75 ? position : 0.75) * Math.PI;
      } else {
        var startAngle = 0.75 * Math.PI;
        var position = (percent * (2.25 - 0.75)) / 100 + 0.75;
        var endAngle = (position <= 2.25 ? position : 2.25) * Math.PI;
      }
      this.radialProgress.beginPath();
      this.radialProgress.arc(
        this.xPos,
        this.yPos,
        radius,
        startAngle,
        endAngle,
        this.cClockwise
      );
      this.radialProgress.lineWidth = 40;
      // this.radialProgress.lineCap = 'round';
      // line color
      if (this.radialColor == this.endColor) {
        this.radialProgress.strokeStyle = this.radialColor;
      } else {
        this.startColor = convertColor(this.startColor, this.endColor, percent);
        this.radialProgress.strokeStyle = this.startColor;
      }
      this.radialProgress.stroke();
    }
    displayLoop() {
      var _started = super.getStarted();
      super.displayLoop();
      var _count = super.getCount();
      if (typeof this.radialProgress != "undefined") {
        this.radialProgress.clearRect(
          0,
          0,
          this.radialBar.width,
          this.radialBar.height
        );
        this.setStage();
        this.drawProgress(_count);
      }
    }
  }

  function startAnimation() {
    var counters = [],
      counterBlocks = document.querySelectorAll(".js-counter");
    for (let i = 0; i < counterBlocks.length; ++i) {
      counters[i] = new Counter(counterBlocks[i]);
    }
    var radials = [],
      radialBlocks = document.querySelectorAll(".js-radial");
    for (let i = 0; i < radialBlocks.length; i++) {
      radials[i] = new Radial(radialBlocks[i]);
    }
  }

  window.addEventListener("scroll", function () {
    var elementTarget = document.getElementById("section-3");
    if(elementTarget != null) {
      if (
        Math.round(window.scrollY) + elementTarget.offsetHeight >=
          elementTarget.offsetTop &&
        animation == false
      ) {
        animation = true;
        startAnimation();
      }
    }
    
  });

  return (
    <>
      <div className="aboutUs">
        <div className="stage aboutUs__block">
          <div class="wrapper">
            <div class="slash"></div>
            <div class="sides">
              <div class="side"></div>
              <div class="side"></div>
              <div class="side"></div>
              <div class="side"></div>
            </div>
            <div class="text">
              <div class="text--backing">EuroCity</div>
              <div class="text--left">
                <div class="inner">EuroCity</div>
              </div>
              <div class="text--right">
                <div class="inner">EuroCity</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="stat-one aboutUs__block">
        <div className="counter__block">
            <span className="stat-number toCount" data-n="20">
              <span className="Single">0</span>
            </span>
            <div className="stat-one__text">Років на ринку</div>
          </div>

          <div className="counter__block">
            <span className="stat-number toCount1" data-n="1430">
              <span className="Single">0</span>
            </span>
            <div className="stat-one__text">Задоволених клієнтів</div>
          </div>
        </div>

        <div id="section-3" className="aboutUs__block" style={{ boxSizing: "border-box", paddingTop: '10vh'}}>
          <div
            className="stat-one__text"
            style={{ color: "white", marginBottom: "50px" }}
          >
            Житлові комплекси
          </div>
          <div class="example-row">
            <div class="example">
              <h3>ЖК Стожари</h3>
              <div
                class="js-radial counter radial"
                data-finnish="100"
                data-speed="40"
                data-append="%"
                data-color="#5EFB6E"
              >
                <div class="display">
                  <span class="count">0</span>
                  <span class="decorator">%</span>
                </div>
                <div style={{ fontSize: "15px" }}>збудовано</div>
              </div>
            </div>
            <div class="example">
              <h3>ЖК Винковий</h3>
              <div
                class="js-radial counter radial"
                data-finnish="94"
                data-speed="26"
                data-append="%"
                data-color="#5EFB6E"
              >
                <div class="display">
                  <span class="count">0</span>
                  <span class="decorator">%</span>
                </div>
                <div style={{ fontSize: "15px" }}>збудовано</div>
              </div>
            </div>
            <div class="example">
              <h3>Green Vilage</h3>
              <div
                class="js-radial counter radial"
                data-finnish="52"
                data-speed="26"
                data-append="%"
                data-color="#5EFB6E"
              >
                <div class="display">
                  <span class="count">0</span>
                  <span class="decorator">%</span>
                </div>
                <div style={{ fontSize: "15px" }}>збудовано</div>
              </div>
            </div>
          </div>
        </div>

        <div className="videoBlock aboutUs__block">
          <video
            id="bgvid"
            playsInLine
            autoPlay
            muted
            loop
            className="videoBlock__video"
          >
            <source src={aboutVideo} type="video/mp4" />
          </video>

          <div className="videoBlock__grid">
            <div className="videoBlock__text">
              <div className="videoBlock__text_title">Якість</div>
              <div className="videoBlock__text_description">
                У нашій компанії ми віримо, що якість - це основний стовп, на
                якому будується довіра. Тому ми докладаємо максимум зусиль, щоб
                кожен наш проект був втіленням найвищих стандартів якості. Ми
                працюємо з надійними постачальниками, використовуємо тільки
                перевірені матеріали та застосовуємо передові технології
                будівництва.
              </div>
            </div>

            <div className="videoBlock__text videoBlock__text_floatRight">
              <div className="videoBlock__text_title">Надійність</div>
              <div className="videoBlock__text_description">
                З багаторічним досвідом на ринку нерухомості, ми гордо
                презентуємо успішні проекти, які підтверджують нашу репутацію
                надійного партнера. Довіряйте нам для створення вашого
                майбутнього в надійному та високоякісному житлі.
              </div>
            </div>

            <div className="videoBlock__text videoBlock__text_floatLeft">
              <div className="videoBlock__text_title">Довіра</div>
              <div className="videoBlock__text_description">
                Наша компанія продала понад 100 квартир, що є міцним показником
                довіри українців. Ми вдячні нашим клієнтам за віру в нас і
                підтверджуємо нашу зобов'язаність до надійності та якості.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="teamInfo" id="teamInfo">
        <div className="teamInfo__text">
          <div className="teamInfo__text_title">Команда</div>
          <div className="teamInfo__text_description">
            Наша команда - це сильний рушійний механізм, що допомагає нам
            досягати високих результатів. Наші працівники - це
            висококваліфіковані фахівці, які об'єднують професіоналізм, талант
            та пристрасть до своєї роботи. З ними ви можете бути впевнені, що
            ваші потреби та очікування будуть завжди на першому місці.
          </div>
        </div>

        <div className="teamMembers">
          <div className="teamMembers__member">
            <img
              src="https://i.postimg.cc/zG5c7T02/168-1685371-corporate-headshot-pic-png-transparent-png.png"
              alt="UI Designer"
            />
          </div>
          <div className="teamMembers__member">
            <img
              src="http://gocheckers.com/images/roster/josh_wesley_headshot_1718.png"
              alt="UI Designer"
            />
          </div>
          <div className="teamMembers__member">
            <img
              src="https://i.postimg.cc/FKqR0FNp/Andrew-Stader-Headshot-Low-Res-Transparent-Background.png"
              alt="UI Designer"
            />
          </div>
          <div className="teamMembers__member">
            <img
              src="http://gocheckers.com/images/roster/andrew_poturalski_headshot_1718.png"
              alt="UI Designer"
            />
          </div>
          <div className="teamMembers__member">
            <img
              src="https://i.postimg.cc/50n49xjb/888-8883444-headshot-no-background-scarf.png"
              alt="UI Designer"
            />
          </div>
        </div>
      </div>
      
      <div className="readMore">
        <img src={family} alt="family" className="readMore__photo"/>
        <div className="readMore__text"><span style={{fontSize: '25px'}}>У</span> нашій компанії ваша задоволеність - наш головний пріоритет. Ми прагнемо забезпечити вам найкращий досвід покупки новобудови, надаючи індивідуальний та уважний підхід до кожного клієнта</div>
        <div className="readMore__btnContainer"><Link class="btn-0" to="/filters">Знайти своє житло</Link></div>
      </div>
    </>
  );
}
