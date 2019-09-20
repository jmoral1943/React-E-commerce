import React from 'react';

const Form = (props) => (
  <form className="Form">
    <div className="Form__fields">
    
      <div className="Form__labels">
        <label className="Form__label" htmlFor="firstName">First Name</label>
        <label className="Form__label" htmlFor="lastName">Last Name</label>
        <label className="Form__label" htmlFor="email">Email</label>
        <label className="Form__label" htmlFor="subject">Subject</label>
        <label className="Form__label" htmlFor="comments">Comments</label>
      </div>

      <div className="Form__inputs">
        {props.fnameStatus ?
          <p className="Input__error">Your first name is not filled in correctly</p>:null}
        <input onChange={(e) => props.fname(e)} className="Form__input" type="text" id="firstName"/>

        {props.lnameStatus ?
          <p className="Input__error">Your last name is not filled in correctly</p>:null}
        <input onChange={(e) => props.lname(e)} className="Form__input" type="text" id="lastName"/>

        {props.emailStatus ?
          <p className="Input__error">Enter a proper email</p>:null}
        <input onChange={(e) => props.handleEmail(e)} className="Form__input" type="text" id="email"/>

        {props.subjectStatus ?
          <p className="Input__error">What do you want to talk about ?</p>:null}
        <input onChange={(e) => props.subject(e)} className="Form__input" type="text" id="subject"/>
        <textarea  className="Form__input" id="comments"/>
      </div>
    </div>
    <button className="Form__button" type="button" onClick={props.handleForm}>Submit</button>
  </form>
);

export default Form;