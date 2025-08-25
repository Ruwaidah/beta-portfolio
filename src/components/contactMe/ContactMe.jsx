import ContactForm from "./ContactForm";
import "./ContactMe.css";

const ContactMe = () => {

  return (
    <section className="fourth" id="fourth04">
      <div className="outer">
        <div className="inner">
          <div className="bg">
            {/* <div className="name-title">
              <h2 className="section-heading">Contact Me</h2>
            </div> */}
            <div className="contactme-methods">
              <ContactForm />
              <div className="email-linkedin-github">
                {/* <div className="github-linkedin">
                  <a href="https://github.com/Ruwaidah" target="_blank">
                    <img
                      width="96"
                      height="96"
                      src="./assets/github.png"
                      alt="github"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ruwaidah-a-930b9a8b/"
                    target="_blank"
                    alt="linkedin"
                  >
                    <img src="./assets/linkedin.png" />
                  </a>
                  <a
                    href="https://app.enhancv.com/share/50b87f57/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
                    target="_blank"
                  ></a>
                </div>{" "} */}
                <div className="email-div">
                  <img
                    className="gmail-logo"
                    alt="gmail-logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
                  />
                  <p> ruwaidah.riyadh@gmail.com</p>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
