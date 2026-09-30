import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xyezobqp");

  if (state.succeeded) {
    return (
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div
                className="text-center p-5 bg-white rounded-4"
                style={{
                  boxShadow: "0 10px 35px rgba(0,0,0,.08)",
                }}
              >
                <h1
                  className="fw-bold"
                  style={{
                    color: "#087ea4",
                  }}
                >
                  Message Sent!
                </h1>

                <p className="text-secondary mt-3 mb-0">
                  Thank you for contacting me. I'll get back to you as soon as
                  possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Header */}
            <div className="text-center mb-5">
              <h1 className="display-5 fw-bold">Contact Me</h1>

              <p className="text-secondary">
                Have a project or opportunity? Send me a message.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="p-4 p-md-5 bg-white rounded-4"
              style={{
                boxShadow: "0 10px 35px rgba(0,0,0,.08)",
              }}
            >
              <div className="row g-4">
                {/* Name */}
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    required
                  />

                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>

                {/* Email */}
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="you@example.com"
                    required
                  />

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                {/* Message */}
                <div className="col-12">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="6"
                    placeholder="Write your message..."
                    required
                  ></textarea>

                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                {/* General Errors */}
                <ValidationError prefix="Form" errors={state.errors} />

                {/* Submit */}
                <div className="col-12">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="btn w-100 py-2"
                    style={{
                      backgroundColor: "#087ea4",
                      borderColor: "#087ea4",
                      color: "#ffffff",
                    }}
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
