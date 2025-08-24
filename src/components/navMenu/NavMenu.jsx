import "./NavMenu.css";

const NavMenu = () => {
  return (
    <div className="NavMenu">
      <div className="nav-list">
        <a id="home" className="nav-tag active-tag">
          Home
        </a>
        <a id="about" className="nav-tag">
          About
        </a>
        <a id="projects" className="nav-tag">
          Projects
        </a>
        <a id="contact" className="nav-tag">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default NavMenu;
