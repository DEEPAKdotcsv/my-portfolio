import { useInView } from "react-intersection-observer";
import "../styles/Section.css";

function Blog() {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <section
      id="blog"
      ref={ref}
      className={`section ${inView ? "active" : ""}`}
    >
      <h2>Blog</h2>
      <p>
        Welcome to my blog — where I explore ideas at the intersection of data,
        technology, and impact.
      </p>

      <div className="blog-post">
        <h3>🔬 Big Data in Genomics: Why It Matters</h3>
        <p>
          In my recent seminar prep, I’ve been diving into how large-scale
          genomic data is transforming personalized medicine. From variant
          calling to predictive modeling, the potential is staggering — and
          deeply human.
        </p>
        <p>
          <em>Posted: August 2025</em>
        </p>
      </div>

      <div className="blog-post">
        <h3>📊 Visualizing Impact: Why Dashboards Aren’t Just Pretty Charts</h3>
        <p>
          Data storytelling isn’t just about aesthetics — it’s about clarity,
          empathy, and decision-making. I share lessons from building my thyroid
          diagnostic app and how user experience shapes trust.
        </p>
        <p>
          <em>Posted: July 2025</em>
        </p>
      </div>

      <div className="blog-post">
        <h3>
          🧠 AI Puzzles and Optimization: What They Teach Us About Problem
          Solving
        </h3>
        <p>
          From the Missionaries and Cannibals puzzle to simulated annealing,
          these classic challenges reveal how constraints shape creativity. I
          reflect on how they’ve sharpened my algorithmic thinking.
        </p>
        <p>
          <em>Posted: June 2025</em>
        </p>
      </div>
    </section>
  );
}

export default Blog;
