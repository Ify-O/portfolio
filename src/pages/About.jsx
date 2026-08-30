import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const goToProjects = () => {
    // Go back to the Home page
    navigate("/");

    // Wait for the Home page to render, then scroll
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");

      if (projectsSection) {
        projectsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };

  return (
    <main className="about-page">
      {/* ABOUT INTRO */}
      <section className="about-hero">
        <div className="about-container">
          <p className="section-label">ABOUT ME</p>

          <h1>
            Curious by nature. <br />
            Driven to build, solve, and grow.
          </h1>

          <p className="about-intro">
            I have always been curious about the world around me. From a young
            age, I found joy in reading, learning, and discovering new
            information. That curiosity continues to shape how I approach
            personal and professional growth.
          </p>
        </div>
      </section>

      {/* MY JOURNEY */}
      <section className="about-story">
        <div className="about-container">
          <h2>My Journey</h2>

          <p>
            I studied Theatre Arts at university, drawn to expression,
            creativity, and presentation. But while studying, I discovered a
            growing interest in management. I explored event management, theatre
            management, and business, and realised I wanted to do more than
            create. I wanted to build, manage, solve problems, and help things
            grow.
          </p>

          <p>
            That realisation led me to entrepreneurship. What started as a way
            to earn extra income became a B2B business connecting students,
            entrepreneurs, and businesses with suppliers and wholesale
            opportunities. Over time, I built a community of retailers and
            supported them with products, suppliers, and business opportunities.
          </p>

          <p>
            After university, I formally founded the business and grew it to
            eight figures over five years while expanding into new cities and
            building a wider customer base. The experience also strengthened my
            passion for helping small businesses grow. Eventually, I realised I
            needed to learn more about strategy, scaling, and sustainable
            growth. I wanted to understand not just how to run a business, but
            how to take one to the next level.
          </p>
        </div>
      </section>

      {/* BUSINESS TO TECHNOLOGY */}
      <section className="about-transition">
        <div className="about-container">
          <h2>From Business to Technology</h2>

          <p>
            This led me to pursue a Master's in Business Management, where I
            developed a deeper understanding of strategy, growth, operations,
            and using technology to scale businesses.
          </p>

          <p>
            I soon realised that understanding business growth also meant
            understanding the technology driving it. This led me into cloud
            computing, software development, and artificial intelligence. I have
            continued developing my skills in AWS, web development, cloud
            technologies, and AI.
          </p>

          <p>
            My learning has been hands-on. I have built projects across cloud
            infrastructure, AWS services, web development, and full-stack
            applications, using each project to understand how technology can
            solve practical problems.
          </p>

          <p>
            Today, I am particularly interested in the space where business and
            technology meet. I believe technology, cloud, and AI can help
            businesses, especially small and growing businesses, become more
            efficient, scalable, and sustainable.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <div className="about-container">
          <h2>What I Bring</h2>

          <div className="values-grid">
            <article className="value-card">
              <h3>Curiosity</h3>
              <p>
                I enjoy learning, asking questions, and continuously expanding
                my knowledge.
              </p>
            </article>

            <article className="value-card">
              <h3>Solution-focused</h3>
              <p>
                When I encounter a problem, my first instinct is to ask, "How do
                we solve this?"
              </p>
            </article>

            <article className="value-card">
              <h3>Integrity</h3>
              <p>
                I was raised to believe that there is value and integrity in
                your name. Trust and keeping your word matter to me.
              </p>
            </article>

            <article className="value-card">
              <h3>Reliability</h3>
              <p>
                I take responsibility for what I commit to and value being
                someone others can depend on.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FUTURE */}
      <section className="about-future">
        <div className="about-container">
          <h2>Where I'm Going</h2>

          <p>
            I’m looking for an opportunity where I can bring together my
            communication, business, and technical skills to contribute
            meaningfully to a team. I want to work with a company whose values
            align with mine—one where I can help solve problems, build better
            solutions, support business growth, and continue learning.
          </p>

          <p>
            I'm especially drawn to opportunities at the intersection of
            business and technology, where I can use what I've learned while
            continuing to grow and explore how technology can shape what comes
            next.
          </p>

          {/* PROJECT LINK */}
          <div className="about-project-link">
            <p>
              Curious about what I have been building and learning along the
              way?
            </p>

            <button
              type="button"
              onClick={goToProjects}
              className="view-projects-btn"
            >
              See My Projects →
            </button>
          </div>

          {/* BACK BUTTON */}
          <div className="about-back">
            <button
              type="button"
              className="back-button"
              onClick={() => navigate(-1)}
            >
              ← Back
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
