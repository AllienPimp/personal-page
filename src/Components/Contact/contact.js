import React from "react";
import "./contact.css";
import mail from "../../img/email.jpg";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);

    fetch("https://formspree.io/xzbjonvp", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ status: "SUCCESS" });
        form.reset();
      })
      .catch((error) => {
        this.setState({ status: "ERROR" });
      });
  }
  render() {
    const { status } = this.state;
    return (
      <div className="contact">
        <div className="container-contact">
          <div className="image">
            <img src={mail} alt="IMG" />
          </div>

          <form className="form" onSubmit={this.submitForm}>
            <h3 className="form-title">Get in touch</h3>
            <input
              className="input1"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className="input1"
              type="text"
              name="email"
              placeholder="Email"
            />
            <textarea
              className="input1"
              name="message"
              placeholder="Message"
            ></textarea>
            <button className="btn">Send message</button>
            {status === "SUCCESS" && <p>Thanks!</p>}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
        </div>
      </div>
    );
  }
}
export default ContactPage;
