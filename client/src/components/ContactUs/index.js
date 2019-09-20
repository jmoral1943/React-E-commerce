import React from 'react';
import Form from './Form';
import MapCard from './MapCard';

class ContactUs extends React.Component {
  state = {
    fname: false,
    fnameData: '',
    lname: false,
    lnameData: '',
    email: false,
    emailData: '',
    subject: false,
    subjectData: ''
  }

  handleFirstNameChange = (e) => {
    if (e.target.value === " " || e.target.value === "") {
      e.target.classList.add("Error");
      this.setState({
        fname: true
      })
    } else {
      this.setState({
        fname: false,
        fnameData: e.target.value
      })
      e.target.classList.remove("Error");
    }
  }

  handleLastNameChange = (e) => {
    if (e.target.value === " " || e.target.value === "") {
      e.target.classList.add("Error");
      this.setState({
        lname: true
      })
    } else {
      this.setState({
        lname: false,
        lnameData: e.target.value
      })
      e.target.classList.remove("Error");
    }
  }

  handleSubjectChange = (e) => {   
    if (e.target.value === " " || e.target.value === "") {
      e.target.classList.add("Error");
      this.setState({
        subject: true
      })
    } else {
      this.setState({
        subject: false,
        subjectData: e.target.value
      })
      e.target.classList.remove("Error");
    }
  }

  handleEmail = (e) => {
    if (e.target.value === " " || e.target.value === "" || !e.target.value.includes("@") || !e.target.value.includes(".com") ) {
      e.target.classList.add("Error");
      this.setState({
        email: true
      })
    } else if (e.target.value.includes("@") || e.target.value.includes(".com")) {
      this.setState({
        email: false,
        emailData: e.target.value
      })
      e.target.classList.remove("Error");
    }
  }

  handleForm = () => {
    if (this.state.fnameData === "" || this.state.lnameData === "" || this.state.subjectData === "" || this.state.emailData === "") {
      alert("Complete the form")
    }
  }

  render() {
    return(
      <div className="ContactUs">
        <h1 className="ContactUs__header">Contact Us</h1>
        <div className="ContactUs__content">
          <Form
            fnameStatus={this.state.fname}
            lnameStatus={this.state.lname}
            emailStatus={this.state.email}
            subjectStatus={this.state.subject}
            fname={this.handleFirstNameChange}
            lname={this.handleLastNameChange}
            subject={this.handleSubjectChange}
            handleEmail={this.handleEmail}
            handleForm={this.handleForm}
          />
          <MapCard />
        </div>
      </div>
    );
  }
  
}

export default ContactUs;