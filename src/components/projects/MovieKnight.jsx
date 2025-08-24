import "./ProjectCard.css";


const MovieKnight = () => {
  return (
    <div className="MovieKnight projectCard">
      <div className="imgs-div">
        <img className="project-img-01" src="./assets/movieKnight.png" />
        <img className="project-img-02" src="./assets/movieknight01.png" />
        {/* <img src={movieKnight02} /> */}
      </div>
      <div className="project-details">
        <ul>
          <h2>MovieKnight</h2>
          <li>
            Front end built using React and the Back end built using Node.js and
            Express.{" "}
          </li>
          <li>
            Displays movies showing in theaters within the zip code you've
            search for.
          </li>
          <li>
            Provides more detailed information about each movie if required.
          </li>
          <li>
            Allows users to select their preferences for a movie going
            experience.
          </li>
          <li>
            Filters available movies that match those preferences for the user.
          </li>
          <li>
            Link to the Github:
            <a
              href="https://github.com/Ruwaidah/movie_knight_be"
              target="_blank"
            >
              {" "}
              Back end
            </a>
          </li>
          <li>
            {" "}
            Link to the Github:{" "}
            <a
              href="https://github.com/Ruwaidah/movie-knight-fe"
              target="_blank"
            >
              {" "}
              Front end{" "}
            </a>
          </li>

          <li>
            {" "}
            Link to the App:{" "}
            <a href="https://movieknight.onrender.com/" target="_blank">
              {" "}
              MoviKnight{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MovieKnight;
