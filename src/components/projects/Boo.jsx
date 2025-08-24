import "./ProjectCard.css";
import gsap from "gsap";

const Boo = () => {
  const flipCard = () => {
    const projectCard = document.getElementById("card");
  };

  return (
    <div className="Boo projectCard" >
      <div className="imgs-div">
        <img className="project-img-01" src="./assets/Boo.png" />
        <img className="project-img-02" src="./assets/boo01.png" />
      </div>
      <div className="project-details">
        <h2>Boo</h2>
        <ul>
          <li>
            Search for and display pet listings based on pet characteristics,
            location, and status.
          </li>
          <li>
            Search for and display animal welfare organizations based on
            organization name, ID, and location. display profiles of local
            organizations.
          </li>
          <li>
            Help users find their perfect pets by location, breed, and other
            characteristics.
          </li>
          <li>
            {" "}
            Link to the Github:{" "}
            <a href="https://github.com/Ruwaidah/boo" target="_blank">
              Front end
            </a>
          </li>
          <li>
            {" "}
            Link to the Github:{" "}
            <a href="https://github.com/Ruwaidah/boo-server" target="_blank">
              Back end
            </a>
          </li>
          <li>
            {" "}
            Link to the App:{" "}
            <a href="https://boo-7emc.onrender.com/" target="_blank">
              Boo
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Boo;
