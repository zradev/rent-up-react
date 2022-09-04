import React from "react";
import img from "../../../assets/images/about.jpg";
import Hero from "../../../components/hero/Hero";
import "../Contact.css";

const Contact = () => {
  const submitForm = () => {
    console.log("Submitted");
    alert("The form was submitted");
  };

  return (
    <>
      <section className="contact mb">
        <Hero
          name="Contact Us"
          title="Get Help And Friendly Support"
          cover={img}
        />
        <div className="container mtop">
          <form onSubmit={submitForm}>
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
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
