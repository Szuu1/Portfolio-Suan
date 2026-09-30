function Projects() {
  const projects = [
    {
      id: 1,
      title: "Todo List App",
      category: "Laravel",
      description:
        "A backend CRUD application for managing tasks with user authentication.",
      technologies: ["PHP", "Laravel", "JavaScript", "Blade"],
      github: "https://github.com/Szuu1/To-Do-List.git",
    },
    {
      id: 2,
      title: "Vehicle Maintenance Management System",
      category: "PHP",
      description:
        "A web application for managing vehicle maintenance records and schedules.",
      technologies: ["CSS", "HTML", "PHP", "Javascript"],
      github:
        "https://github.com/charlesv12/Vehicle-Maintenance-Management-System.git",
    },
    {
      id: 3,
      title: "Medicine Inventory Management System",
      category: "Javascript",
      description:
        "A web application for managing medicine inventory, including stock levels and expiration dates.",
      technologies: ["Javascript", "HTML", "CSS"],
      github: "https://github.com/Szuu1/FRONTEND-LABEXAM-MIDTERM-.git",
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold">My Projects</h1>

          <p className="text-secondary">
            Some projects I've built using modern technologies.
          </p>
        </div>

        {/* Projects */}
        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  className="card h-100 border-0"
                  style={{
                    borderRadius: "15px",
                    overflow: "hidden",
                    boxShadow: "0 8px 25px rgba(0,0,0,.08)",
                    cursor: "pointer",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                >
                  {/* Project Header */}
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      height: "170px",
                      background: "linear-gradient(135deg, #111827, #087ea4)",
                      color: "#61dafb",
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    &lt;/&gt;
                  </div>

                  {/* Project Content */}
                  <div className="card-body d-flex flex-column">
                    {/* Category */}
                    <span
                      className="badge align-self-start mb-2"
                      style={{
                        backgroundColor: "#e0f2fe",
                        color: "#0369a1",
                      }}
                    >
                      {project.category}
                    </span>

                    {/* Title */}
                    <h5 className="card-title fw-bold">{project.title}</h5>

                    {/* Description */}
                    <p className="card-text text-secondary">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="d-flex flex-wrap gap-2 mt-auto mb-3">
                      {project.technologies.map((technology) => (
                        <small
                          key={technology}
                          className="badge bg-light text-dark"
                        >
                          {technology}
                        </small>
                      ))}
                    </div>

                    {/* GitHub Button */}
                    <div>
                      <span className="btn btn-dark btn-sm">
                        View on GitHub
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
