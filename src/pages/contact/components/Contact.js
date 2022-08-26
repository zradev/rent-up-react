import React from "react";
import img from "../../../assets/images/about.jpg";
import Hero from "../../../components/hero/Hero";

const Contact = () => {
  const submitForm = () => {
    console.log("Submitted");
  };

  return (
    <>
      <section className="contact mb">
        <Hero
          name="Contact Us"
          title="Get Help And Friendly Support"
          cover={img}
        />
        <div className="container">
          <form>
            <h4>Fillup The Form</h4>
            <div>
              <input
                type="text"
                placeholder="Full Name"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Full Name")}
              />
              <input
                type="text"
                placeholder="Email"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Email")}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Subject")}
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="Details..."
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) => (e.target.placeholder = "Details...")}
            ></textarea>
            <button onClick={submitForm}>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
