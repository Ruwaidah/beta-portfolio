import { useEffect } from "react";
import "./Projects.css";
import gsap from "gsap";
import Boo from "./Boo";
import Connect from "./Connect";
import MovieKnight from "./MovieKnight";

const Projects = () => {
  useEffect(() => {
    let active;

    // VARIABLES TO FLIP CARD
    let flipIndex = 0;
    let flipReverse = true;
    let expanders = gsap.utils.toArray(".expander");

    expanders.forEach(function (card) {
      gsap.set(card, {
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      });
      const q = gsap.utils.selector(card);
      const front = q(".frontCard");
      const back = q(".backCard");

      gsap.set(back, { rotationY: -180 });

      const tl = gsap.timeline({ paused: true });
      tl.to(front, { duration: 1, rotationY: 180 });
      tl.to(back, { duration: 1, rotationY: 0 }, 0);
      // tl.to(card, { z: 50 }, 0);
      // tl.to(card, { z: 0 }, 0.5);
      const flipBtn = q(".flipCard")[0];
      flipBtn.addEventListener("click", function () {
        if (flipReverse) {
          tl.play();
          flipReverse = false;
        } else {
          flipReverse = true;
          tl.reverse();
        }
      });
    });

    // ANIMATION OF THE EXPAND PROJECT
    expanders.forEach(function (expander, index) {
      let close = expander.querySelector(".close");
      let animation = gsap.timeline({ paused: true });
      if (window.screen.width >= 1024) {
        animation.to(expander, { width: 1200, duration: 0.4 });
      } else if (window.screen.width <= 1024 && window.screen.width >= 800) {
        animation.to(expander, { width: 900, duration: 0.4 });
      } else if (window.screen.width <= 800 && window.screen.width >= 700) {
        animation.to(expander, { width: 700, duration: 0.4 });
      } else if (window.screen.width <= 700 && window.screen.width >= 500) {
        animation.to(expander, { height: 500, duration: 0.4 });
      } else {
        animation.to(expander, { height: 500, duration: 0.4 });
      }

      animation.to(
        close,
        { display: "flex", duration: 0.1, scale: 1, x: "-=10" },
        "-=0.1"
      );

      expander.animation = animation;
      expander.addEventListener("click", function (e) {
        if (active) {
          active.animation.reverse();
          active.classList.remove("expand-project");
        }
        expander.classList.add("expand-project");
        expander.animation.play();
        active = expander;
        flipIndex = index;
      });

      close.addEventListener("click", function (event) {
        event.stopPropagation();
        expander.animation.reverse();
        setTimeout(() => {
          expander.classList.remove("expand-project");
        }, 200);
      });
    });
    gsap.set(".expander", {
      backgroundColor: gsap.utils.wrap(["#f5ce5b", "#c570b6", "#78d6e0"]),
    });

    gsap.set(".expander", {
      backgroundColor: gsap.utils.wrap([
        "rgba(248, 199, 97, 0.7)",
        "rgba(217, 156, 72, 0.7)",
        "rgba(181, 132, 99, 0.7)",
      ]),
    });
  }, []);

  return (
    <section className="third" id="third03">
      <div className="outer">
        <div className="inner">
          <div className="bg">
            <div className="projects-container">
              <h2 className="section-heading">Projects</h2>
              <div className="wrapper">
                <div className="expander">
                  <div className="project-header">
                    <div className="project-title">
                      <p className="project-name">Boo</p>
                    </div>{" "}
                    <div id="closeBtn" className="close">
                      X
                    </div>
                  </div>
                  <div className="expander-container cardFlip frontCard">
                    <Boo />
                  </div>
                  <div className="backCard cardFlip">
                    <img src="./assets/Boo.png" />
                    <img src="./assets/boo01.png" />
                  </div>
                  <div className="flipReverse-btn-div">
                    <div id="flip-btn" className="flipCard">
                      <img src="./assets/flip.svg" />
                    </div>
                  </div>
                </div>
                <div className="expander">
                  <div className="project-header">
                    <div className="project-title">
                      <p className="project-name">Connect</p>
                    </div>{" "}
                    <div id="closeBtn" className="close">
                      X
                    </div>
                  </div>
                  <div className="expander-container cardFlip frontCard">
                    <Connect />
                  </div>{" "}
                  <div className="backCard cardFlip">
                    <img src="./assets/connect01.png" />
                    <img src="./assets/connect02.png" />
                  </div>
                  <div className="flipReverse-btn-div">
                    <div id="flip-btn" className="flipCard">
                      <img src="./assets/flip.svg" />
                    </div>
                  </div>
                </div>
                <div className="expander">
                  <div className="project-header">
                    <div className="project-title">
                      <p className="project-name">MovieKnight</p>
                    </div>{" "}
                    <div id="closeBtn" className="close">
                      X
                    </div>
                  </div>
                  <div className="expander-container cardFlip frontCard">
                    <MovieKnight />
                  </div>
                  <div className="backCard cardFlip">
                    <img src="./assets/movieKnight.png" />
                    <img src="./assets/movieknight01.png" />
                  </div>
                  <div className="flipReverse-btn-div">
                    <div id="flip-btn" className="flipCard">
                      <img src="./assets/flip.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
