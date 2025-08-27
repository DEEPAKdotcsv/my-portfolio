import { useInView } from "react-intersection-observer";
import "../styles/Section.css";

function Contact() {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <section
      id="contact"
      ref={ref}
      className={`section ${inView ? "active" : ""}`}
    >
      <h2>Contact Me</h2>
      <p>
        If you'd like to collaborate, discuss data science, or just say hello —
        I'm always open to meaningful conversations.
      </p>

      <div className="contact-details">
        <p>
          <strong>Name:</strong> Deepak Padmesh
        </p>
        <p>
          <strong>Phone:</strong> +91-7200255087
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:deepakpadmesh7@gmail.com">deepakpadmesh7@gmail.com</a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://linkedin.com/in/deepad255"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/deepad255
          </a>
        </p>
        <p>
          <strong>Location:</strong> Chennai, Tamil Nadu - 600004
        </p>
      </div>
    </section>
  );
}

export default Contact;
