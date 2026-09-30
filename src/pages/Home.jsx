import { useState } from "react";
import { Link } from "react-router-dom";
import download from "../assets/download.jpg";

function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        padding: "80px 0",
      }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          {/* LEFT SIDE */}
          <div className="col-lg-7">
            <h1
              className="display-4 fw-bold"
              style={{
                color: "#111827",
                lineHeight: "1.1",
              }}
            >
              Hi, I'm{" "}
              <span style={{ color: "#087ea4" }}>Christopher B. Suan</span>
            </h1>

            <p
              className="lead text-secondary mt-4"
              style={{
                maxWidth: "650px",
              }}
            >
              I'm a passionate frontend developer with a strong focus on
              creating responsive and user-friendly web applications.
            </p>

            {showMore && (
              <p
                className="text-secondary"
                style={{
                  maxWidth: "650px",
                }}
              >
                I enjoy turning ideas into functional interfaces while keeping
                my code clean, reusable and maintainable.
              </p>
            )}

            {/* BUTTONS */}
            <div className="d-flex flex-wrap gap-3 mt-4">
              <Link
                to="/projects"
                className="btn px-4 py-2"
                style={{
                  backgroundColor: "#087ea4",
                  borderColor: "#087ea4",
                  color: "#ffffff",
                }}
              >
                View Projects
              </Link>

              <Link to="/contact" className="btn btn-outline-dark px-4 py-2">
                Contact Me
              </Link>

              <button
                className="btn btn-link"
                onClick={() => setShowMore(!showMore)}
                style={{
                  textDecoration: "none",
                }}
              >
                {showMore ? "Show Less" : "Learn More"}
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - PROFILE IMAGE */}
          <div className="col-lg-5">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "100%",
                minHeight: "350px",
              }}
            >
              <img
                src={download}
                alt="Portfolio Profile"
                className="img-fluid"
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
