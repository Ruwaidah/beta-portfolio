import "./ProjectCard.css";

const Connect = () => {
  return (
    <div className="Connect projectCard">
      <div className="imgs-div">
        <img className="project-img-01" src="./assets/connect01.png" />
        <img className="project-img-02" src="./assets/connect02.png" />
        {/* <img src={connect03} /> */}
      </div>
      <div className="project-details">
        <h2>Connect</h2>
        <ul>
          <li>
            Chat messaging of real-time digital communication that allows users
            to send and receive text.
          </li>
          <li>
            Making conversations faster, more accessible, and more engaging.
          </li>
          <li>Customize your profile with a photo, status, and bio.</li>
          <li>Frontend: HTML, CSS, JavaScript (React.js)</li>
          <li>Backend: Node.js with Express.</li>
          <li>Authentication: JWT (JSON Web Tokens) for session management.</li>
          <li>WebSockets: For real-time messaging (Socket.io)</li>
          <li>
            {" "}
            Link to the Github:{" "}
            <a href="https://github.com/Ruwaidah/hashtag-fe" target="_blank">
              Front end
            </a>
            
          </li>
          <li>
            {" "}
            Link to the Github:{" "}
            <a href="https://github.com/Ruwaidah/hashtagserver" target="_blank">
              Back end
            </a>
            
          </li>
          <li>
            {" "}
            Link to the App:{" "}
            <a href="https://hashtag-fe-t22k.onrender.com" target="_blank">
              Connect
            </a>
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Connect;
