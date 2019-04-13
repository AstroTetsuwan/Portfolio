import React from 'react';
import './ContactForm.css';

class ContactForm extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            name: "",
            email: "",
            subject: "",
            message:""
        };
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //Your message is going nowhere, sorry my friend...
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-text-element" name="name" value={this.state.name} onChange={this.handleChange}/>
                </div>               
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-text-element" name="email" value={this.state.email} onChange={this.handleChange}/>
                </div>              
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" className="form-text-element" name="subject" value={this.state.subject} onChange={this.handleChange}/>
                </div>             
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" className="form-text-element" value={this.state.message} onChange={this.handleChange}></textarea>
                </div>

                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>

            </form>
        );
    }
}

export default ContactForm;