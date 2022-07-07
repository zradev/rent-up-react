import React from "react";
import "./Contact.css";
import Back from "../common/Back";
import img from "../images/about.jpg";

const Contact = () => {
  return (
    <>
      <section className="contact mb">
        <Back
          name="Contact Us"
          title="Get Help And Friendly Support"
          cover={img}
        />
        <div className="container">
          <form action="" className="shadow">
            <h4>Fillup The Form</h4>
            <div>
              <input type="text" placeholder="Name" name="" id="" />
              <input type="text" placeholder="Email" name="" id="" />
            </div>
            <input type="text" placeholder="Subject" name="" id="" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
