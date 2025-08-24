import { useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import Observer from "gsap/Observer";
import "./App.css";
import Home from "./components/home/Home";
import NavMenu from "./components/navMenu/NavMenu";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import ContactMe from "./components/contactMe/ContactMe";

function App() {
  useEffect(() => {
    gsap.registerPlugin(Observer, SplitText);
    const home = document.getElementById("home");
    const about = document.getElementById("about");
    const project = document.getElementById("projects");
    const contact = document.getElementById("contact");
    const aTags = document.getElementsByClassName("nav-tag");
    let sections = document.querySelectorAll("section"),
      images = document.querySelectorAll(".bg"),
      headings = gsap.utils.toArray(".section-heading"),
      outerWrappers = gsap.utils.toArray(".outer"),
      innerWrappers = gsap.utils.toArray(".inner"),
      splitHeadings = headings.map(
        (heading) =>
          new SplitText(heading, {
            type: "chars,words,lines",
            linesClass: "clip-text",
          })
      ),
      currentIndex = -1,
      wrap = gsap.utils.wrap(0, sections.length),
      animating;
    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    function gotoSection(index, direction) {
      if (currentIndex === index) return;
      index = wrap(index);
      animating = true;
      let fromTop = direction === -1,
        dFactor = fromTop ? -1 : 1,
        tl = gsap.timeline({
          defaults: { duration: 0.5, ease: "power1.inOut" },
          onComplete: () => (animating = false),
        });
      if (currentIndex >= 0) {
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
          sections[currentIndex],
          { autoAlpha: 0 }
        );
        aTags[index].classList.add("active-tag");
        aTags[currentIndex].classList.remove("active-tag");
      }
      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo(
        [outerWrappers[index], innerWrappers[index]],
        {
          yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
        },
        {
          yPercent: 0,
        },
        0
      ).fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0);
      tl.fromTo(
        splitHeadings[index].chars,
        {
          autoAlpha: 0,
          yPercent: 150 * dFactor,
        },
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.3,
          ease: "power2",
          stagger: {
            each: 0.02,
            from: "random",
          },
        },
        0.5
      );

      currentIndex = index;
    }

    Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });

    home.addEventListener("click", () => gotoSection(0, -1));
    about.addEventListener("click", () => gotoSection(1, -1));
    project.addEventListener("click", (e) => gotoSection(2, -1));
    contact.addEventListener("click", (e) => gotoSection(3, -1));
    gotoSection(0, -1);
  }, []);

  return (
    <div className="App">
      <div className="header">
        <NavMenu />
      </div>
      <Home />
      <About />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
