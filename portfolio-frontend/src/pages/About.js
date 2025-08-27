import { useInView } from "react-intersection-observer";
import "../styles/Section.css";

function About() {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <section
      id="about"
      ref={ref}
      className={`section ${inView ? "active" : ""}`}
    >
      <h2>About Me</h2>
      <p>
        I’m Deepak Padmesh, a third-year Information Technology student at VIT
        with a CGPA of 9.53 and a top 5 departmental ranking. I specialize in
        developing ML-powered generative AI tools and analyzing healthcare data.
        My passion lies in solving real-world problems using Java, SQL, and
        modern software development tools.
      </p>

      <h3>Education</h3>
      <ul>
        <li>
          <strong>Vellore Institute of Technology</strong> – B.Tech in IT
          (2023–Present), CGPA: 9.53
        </li>
        <li>
          <strong>Chettinad Vidyashram</strong> – 12th: 92%, 10th: 87.17%
        </li>
      </ul>

      <h3>Skills</h3>
      <ul>
        <li>
          <strong>Languages:</strong> Java, HTML/CSS, JavaScript, Python
        </li>
        <li>
          <strong>Technologies:</strong> React, Node.js, REST APIs, SQL, AWS,
          Figma
        </li>
        <li>
          <strong>Tools:</strong> Git, GitHub, Docker, Jenkins, Kubernetes,
          Postman, JIRA
        </li>
        <li>
          <strong>Soft Skills:</strong> Communication, Team Collaboration,
          Willingness to Learn
        </li>
      </ul>

      <h3>Achievements</h3>
      <ul>
        <li>Top 5 rank in IT department at VIT</li>
        <li>Qualified JEE Advanced 2023 (Top 1.5%)</li>
        <li>Finalist – Biotech Hackathon, VIT Club (2023)</li>
        <li>R&D Wing Member – IEEE Computer Society (VIT Chapter)</li>
      </ul>
    </section>
  );
}

export default About;
