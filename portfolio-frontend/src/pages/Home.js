import { useInView } from "react-intersection-observer";
import "../styles/Section.css";

function Home() {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <section
      id="home"
      ref={ref}
      className={`section ${inView ? "active" : ""}`}
    >
      <h1>Deepak Padmesh</h1>
      <p className="tagline">
        Aspiring Data Scientist | ML Enthusiast | Full-Stack Developer
      </p>
      <p className="location">📍 Chennai, Tamil Nadu</p>
      <div className="contact">
        <p>📞 +91-7200255087</p>
        <p>📧 deepakpadmesh7@gmail.com</p>
        <p>
          🔗{" "}
          <a
            href="https://linkedin.com/in/deepad255"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}

export default Home;
