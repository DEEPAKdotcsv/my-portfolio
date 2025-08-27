import { useInView } from "react-intersection-observer";
import "../styles/Section.css";

function Projects() {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <section
      id="projects"
      ref={ref}
      className={`section ${inView ? "active" : ""}`}
    >
      <h2>Projects</h2>

      <div className="project">
        <h3>Full-Stack Personal Portfolio with Dynamic CMS</h3>
        <p>
          Designed and developed a dynamic website using React, applying
          software engineering principles.
        </p>
        <p>
          <strong>Timeline:</strong> Jun 2025 – Jul 2025
        </p>
      </div>

      <div className="project">
        <h3>Job Portal Web Application</h3>
        <p>
          Built a full-stack app connecting job seekers and providers with
          streamlined UI and backend logic.
        </p>
        <p>
          <strong>Timeline:</strong> Jan 2025 – Mar 2025
        </p>
      </div>

      <div className="project">
        <h3>Collaborative Data Analytics Platform</h3>
        <p>
          Front-end completed; backend integration and real-time communication
          features in progress.
        </p>
        <p>
          <strong>Timeline:</strong> Aug 2025 – Present
        </p>
      </div>
    </section>
  );
}

export default Projects;
