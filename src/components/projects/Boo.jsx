import "./ProjectCard.css";
import gsap from "gsap";

const Boo = () => {
  const flipCard = () => {
    const projectCard = document.getElementById("card");
  };

  return (
    <div className="Boo projectCard">
      <div className="imgs-div">
        <img className="project-img-01" src="./assets/cat01.jpg" />
        <img className="project-img-02" src="./assets/cat02.jpg" />
      </div>
      <div className="project-details">
        <h2>Lorem Ipsum </h2>
        <ul>
          <li>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s.
          </li>
          <li>
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged.
          </li>
          <li>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages,
          </li>
          <li>
            {" "}
            Link to the Github:{" "}
            <a href="" target="_blank">
              Front end
            </a>
          </li>
          <li>
            {" "}
            Link to the Github:{" "}
            <a href="" target="_blank">
              Back end
            </a>
          </li>
          <li>
            {" "}
            WebSite:{" "}
            <a href="" target="_blank">
              Lorem Ipsum
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Boo;
