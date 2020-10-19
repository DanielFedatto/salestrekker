import React, { Component } from 'react'
import InputMask from "react-input-mask";


class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert('Form sent');
        event.preventDefault();
    }
  
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} id="salesForm">
                    <div className="inputControll">
                        <label htmlFor="title">Title</label>
                        <select>
                            <option value="Mr">Mr</option>
                            <option value="Ms">Ms</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Miss">Miss</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="inputControll">
                        <label htmlFor="name">First name</label>
                        <input type="text" name="name"/>
                    </div>
                    <div className="inputControll">
                        <label htmlFor="surname">Surname</label>
                        <input type="text" name="surname"/>
                    </div>
                    <div className="inputControll">
                        <label htmlFor="birth">Date of birth</label>
                        <input type="text" name="birth"/>
                    </div>
                    <div className="inputControll">
                        <label htmlFor="email">E-mail</label>
                        <input type="e-mail" name="email"/>
                    </div>
                    <div className="inputControll">
                        <label htmlFor="phone">Phone</label>
                        <InputMask mask="+99 99 9999 9999" maskChar={null} />
                    </div>
                    <div className="inputControll">
                        <label htmlFor="marital">Marital</label>
                        <select>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="De Facto">De Facto</option>
                            <option value="Divorced">Divorced</option>
                        </select>
                    </div>
                    <div className="inputControll">
                        <label>Address Mortgage information</label>
                        <input type="text" name="mort-address"/>
                    </div>
                    <div className="inputControll">
                        <label>Property price</label>
                        <input type="text" name="prop-price"/>
                    </div>
                    <div className="inputControll">
                        <label>Mortgage amount</label>
                        <input type="text" name="mort-amount"/>
                    </div>
                    <div className="inputControll">
                        <label>Term (years)</label>
                        <input type="number" name="mort-term"/>
                    </div>
                    <div className="inputControll">
                        <label>Interest rate</label>
                        <input type="text" name="inter-rate"/>
                    </div>
                    <div className="inputControll">
                        <label>Monthly repayment</label>
                        <input type="text" name="repayment"/>
                    </div>
                    <input type="submit" value="Send" />
                </form>
            </div>
        );
    }
}
export default ContactForm;