import React from 'react';
import axios from 'axios';
import SimpleSchema from 'simpl-schema';
export default class AddUser extends React.Component {
    state = {
        username: '',
        email: '',
        phone: '',
        website: '',
        id: '',
        errors:'',
    }
    handelchange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }
    handelsubmit = (e) => {
        e.preventDefault();
        const { username, email, phone, id } = this.state;
        const ValidationContext = new SimpleSchema(
            {
            username: {
                type: String,
                max: 10,
                min:1,
              },
              email: {
                type:String,
                max: 100,
                min:1,  
                regEx: SimpleSchema.RegEx.Email,          
              },
              phone: {
                type: String,
                max: 11,
                min:11,
              },
            //   website: {
            //     type: String,
            //     max: 40,
            //     min:1,
            //     regEx:SimpleSchema.RegEx.Url,
            //   },
              id: {
                type: SimpleSchema.Integer,
                optional: true,
              },
        
        }
        ).newContext();
// console.log(ValidationContext.validationErrors());
        ValidationContext.validate({ username, email, phone,id: +id });
        console.log(ValidationContext.validationErrors());
        console.log(ValidationContext._validationErrors.length)
        console.log(ValidationContext._validationErrors[0].name);
        // console.log(ValidationContext.validationErrors());
        if (ValidationContext.isValid()) {
            axios.post('https://jsonplaceholder.typicode.com/users', { username, email, phone,id:+id })
                .then((response) => {
                    // handle success
                    // console.log(response);
                    this.setState({errors:'No Errors'})
                }
                )
                .catch((error) => {
                    // handle error
                    // console.log(error);
                })
                .then(() => {
                    // always executed
                });
        }
        else
        {
            let errors= ValidationContext._validationErrors.reduce((result,current)=>{
                return (current.name+" error     "+result);
            }," ");
            console.log(ValidationContext._validationErrors.name)
            this.setState({ errors: errors })
        }
    }
    render() {
        return (

            <form onSubmit={this.handelsubmit}>
                username <input type="text" name="username" onChange={this.handelchange} value={this.state.username} />
                email <input type="text" name="email" onChange={this.handelchange} value={this.state.email} />
                phone <input type="text" name="phone" onChange={this.handelchange} value={this.state.phone} />
                {/* website <input type="text" name="website" onChange={this.handelchange} value={this.state.website} /> */}
                userID <input type="number" name="id" onChange={this.handelchange} value={this.state.id} />
                <button type="submit">submit</button>
                <h1>{this.state.errors}</h1>
            </form>
        )
    }
}