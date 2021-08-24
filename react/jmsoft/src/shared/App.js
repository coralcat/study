import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Home, About, Solutions, Services, Support } from "../pages";
import { SmoothProvider } from "react-smooth-scrolling";


class App extends Component {
  componentDidMount() {    
    document.documentElement.className = "js";
    var supportsCssVars = function () {
      var e, t = document.createElement("style");
      return t.innerHTML = "root: { --tmp-var: bold; }", document.head.appendChild(t), e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)")), t.parentNode.removeChild(t), e
    };
    supportsCssVars() || alert("Please view this in a modern browser that supports CSS Variables.");

    let header;
    let logo = document.querySelector("header .logo");
    let hamburgerMenu = document.querySelectorAll(".hamburger-menu path");

    function init() {
      header = document.querySelector("header");
      document.addEventListener("scroll", scrollMenu, false);
    }

    function scrollMenu() {
      if (document.documentElement.scrollTop > 50) {
        header.classList.add("scroll");
      } else {
        header.classList.remove("scroll");
      }
    }

    document.addEventListener("DOMContentLoaded", init, false);



    document.addEventListener("DOMContentLoaded", function () {
      // helper functions
      const MathUtils = {
        // map number x from range [a, b] to [c, d]
        map: (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c,
        // linear interpolation
        lerp: (a, b, n) => (1 - n) * a + n * b,
        // Random float
        getRandomFloat: (min, max) =>
          (Math.random() * (max - min) + min).toFixed(2),
      };
    
      // body element
      const body = document.body;
    
      // calculate the viewport size
      let winsize;
      const calcWinsize = () =>
        (winsize = { width: window.innerWidth, height: window.innerHeight });
      calcWinsize();
      // and recalculate on resize
      window.addEventListener("resize", calcWinsize);
    
      // scroll position
      let docScroll;
      // for scroll speed calculation
      let lastScroll;
      let scrollingSpeed = 0;
      // scroll position update function
      const getPageYScroll = () =>
        (docScroll = window.pageYOffset || document.documentElement.scrollTop);
      window.addEventListener("scroll", getPageYScroll);
    
      // Item
      class Item {
        constructor(el) {
          // the .item element
          this.DOM = { el: el };
          // the inner image
          this.DOM.image = this.DOM.el.querySelector(".image");
          this.renderedStyles = {
            // here we define which property will change as we scroll the page and the item is inside the viewport
            // in this case we will be:
            // - scaling the inner image
            // - translating the item's title
            // we interpolate between the previous and current value to achieve a smooth effect
            imageScale: {
              // interpolated value
              previous: 0,
              // current value
              current: 0,
              // amount to interpolate
              ease: 0.1,
              // current value setter
              setValue: () => {
                const toValue = 1.25;
                const fromValue = 1;
                const val = MathUtils.map(
                  this.props.top - docScroll,
                  winsize.height,
                  -1 * this.props.height,
                  fromValue,
                  toValue
                );
                return Math.max(Math.min(val, toValue), fromValue);
              },
            },
            titleTranslationY: {
              previous: 0,
              current: 0,
              ease: 0.1,
              fromValue: Number(MathUtils.getRandomFloat(30, 400)),
              setValue: () => {
                const fromValue = this.renderedStyles.titleTranslationY.fromValue;
                const toValue = -1 * fromValue;
                const val = MathUtils.map(
                  this.props.top - docScroll,
                  winsize.height,
                  -1 * this.props.height,
                  fromValue,
                  toValue
                );
                return fromValue < 0
                  ? Math.min(Math.max(val, fromValue), toValue)
                  : Math.max(Math.min(val, fromValue), toValue);
              },
            },
          };
          // gets the item's height and top (relative to the document)
          this.getSize();
          // set the initial values
          this.update();
          // use the IntersectionObserver API to check when the element is inside the viewport
          // only then the element styles will be updated
          this.observer = new IntersectionObserver((entries) => {
            entries.forEach(
              (entry) => (this.isVisible = entry.intersectionRatio > 0)
            );
          });
          this.observer.observe(this.DOM.el);
          // init/bind events
          this.initEvents();
        }
    
        update() {
          // sets the initial value (no interpolation)
          for (const key in this.renderedStyles) {
            this.renderedStyles[key].current = this.renderedStyles[
              key
            ].previous = this.renderedStyles[key].setValue();
          }
          // apply changes/styles
          this.layout();
        }
    
        getSize() {
          const rect = this.DOM.el.getBoundingClientRect();
          this.props = {
            // item's height
            height: rect.height,
            // offset top relative to the document
            top: docScroll + rect.top,
          };
        }
    
        initEvents() {
          window.addEventListener("resize", () => this.resize());
        }
    
        resize() {
          // gets the item's height and top (relative to the document)
          this.getSize();
          // on resize reset sizes and update styles
          this.update();
        }
    
        render() {
          // update the current and interpolated values
          for (const key in this.renderedStyles) {
            this.renderedStyles[key].current = this.renderedStyles[key].setValue();
            this.renderedStyles[key].previous = MathUtils.lerp(
              this.renderedStyles[key].previous,
              this.renderedStyles[key].current,
              this.renderedStyles[key].ease
            );
          }
    
          // and apply changes
          this.layout();
        }
    
        layout() {
          // scale the image
          this.DOM.image.style.transform = `scale3d(${this.renderedStyles.imageScale.previous},${this.renderedStyles.imageScale.previous},1)`;
          // translate the title
        }
      }
    })
    /* =====================================================
       Menu Trigger & Image/Text Reveal Effects
       ===================================================== */
    const main = document.querySelector(".main");
    const sections = document.querySelectorAll("section");
    const footer = document.querySelector("footer");

    if (main) {
      document.addEventListener("scroll", () => {
        sections.forEach((section) => {
          if (document.documentElement.scrollTop >= section.offsetTop - 800) {
            section.style.opacity = "1";
          }
        });

        if (document.documentElement.scrollTop >= footer.offsetTop - 800) {
          footer.style.opacity = "1";
        }
      });

      sections.forEach((section) => {
        if (document.documentElement.scrollTop >= section.offsetTop - 800) {
          section.style.opacity = "1";
        }
      });

      window.addEventListener("scroll", () => {
        let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
        let windowHeight = window.innerHeight; // 스크린 창
        let fullHeight = document.body.scrollHeight; //  margin 값은 포함 x

        if (matchMedia("(min-width: 768px)").matches) {
          if (scrollLocation + windowHeight >= fullHeight - 100) {
            let footer = document.querySelector("footer");
            footer.style.opacity = "1";
          }
        }
      });
    }
  }

  render() {
    return (
      <>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Switch>
          <Route path="/solutions/:tab" component={Solutions} />
          <Route path="/solutions" component={Solutions} />
        </Switch>
        <Switch>
          <Route path="/services/:tab" component={Services} />
          <Route path="/services" component={Services} />
        </Switch>
        <Route path="/support" component={Support} />
        <Footer />
      </>
    );
  }
}

export default App;
