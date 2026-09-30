import { useState } from "react";

function About() {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    {
      name: "React",
      level: "Beginner",
      description: "Building reusable components and dynamic interfaces.",
    },
    {
      name: "JavaScript",
      level: "Beginner",
      description: "Creating interactive frontend applications.",
    },
    {
      name: "Bootstrap",
      level: "Begineer",
      description: "Building responsive layouts using Bootstrap utilities.",
    },
    {
      name: "CSS",
      level: "Intermediate",
      description: "Creating responsive and polished user interfaces.",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-start g-5">
          {/* About */}
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold mb-4">About Me</h1>

            <p className="lead text-secondary">
              I'm a frontend developer who enjoys creating clean, responsive and
              interactive websites.
            </p>

            <p className="text-secondary">
              My approach focuses on reusable components, responsive design,
              maintainable code and a good user experience.
            </p>

            <div className="d-flex flex-wrap gap-2 mt-4">
              {["Frontend", "React", "Responsive Design", "UI/UX"].map(
                (item) => (
                  <span
                    key={item}
                    className="badge rounded-pill"
                    style={{
                      backgroundColor: "#e0f2fe",
                      color: "#0369a1",
                      padding: "10px 15px",
                    }}
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Skills */}
          <div className="col-lg-6">
            <h3 className="fw-bold mb-4">My Skills</h3>

            <div className="d-flex flex-column gap-3">
              {skills.map((skill) => {
                const isActive = activeSkill === skill.name;

                return (
                  <div
                    key={skill.name}
                    className="border rounded-3 p-3"
                    onClick={() => setActiveSkill(isActive ? null : skill.name)}
                    style={{
                      cursor: "pointer",
                      backgroundColor: isActive ? "#eff6ff" : "#ffffff",
                      transition: "all .2s ease",
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center gap-3">
                      <strong>{skill.name}</strong>

                      <span
                        className="badge"
                        style={{
                          backgroundColor: "#087ea4",
                        }}
                      >
                        {skill.level}
                      </span>
                    </div>

                    {isActive && (
                      <p className="text-secondary mt-3 mb-0">
                        {skill.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
