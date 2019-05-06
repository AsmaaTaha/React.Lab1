import React from 'react';
import SimpleSchema from 'simpl-schema';
import axios from 'axios';
export default class AddPost extends React.Component {
    state = {
        title: '',
        body: '',
        userId: '',
        errors: '',
    }
    handelChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value });
    }
    handelSubmit = (e) => {
        e.preventDefault();
        const { title, body, userId } = this.state;
        const Validationcontext = new SimpleSchema(

            {
                title: {
                    type: String,
                    max: 40,
                    min: 1,

                },
                body: {
                    type: String,
                    max: 40,
                    min: 1,

                },
                userId: {
                    type: SimpleSchema.Integer,
                    optional: true,

                },
            }
        ).newContext();
        Validationcontext.validate({ title, body, userId: +userId });
        // console.log(Validationcontext.validationErrors());
        if (Validationcontext.isValid()) {
            axios.post('https://jsonplaceholder.typicode.com/posts', { title, body, userId: +userId })
                .then((response) => {
                    console.log(response);
                    this.setState({ errors: 'No Error' })
                }
                )
                .catch((error) => {
                    console.log(error);
                });
        }
        else {
          
          let errors= Validationcontext._validationErrors.reduce((result,current)=>{
                return (current.name+" error     "+result);
            }," ");
            console.log(Validationcontext._validationErrors.name)
            this.setState({ errors: errors })
        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <>
                <form onSubmit={this.handelSubmit} >
                    TiTle<input type="text" name="title" onChange={this.handelChange} value={this.state.title} />
                    Body<input type="text" name="body" onChange={this.handelChange} value={this.state.body} />
                    Id<input type="number" name="userId" onChange={this.handelChange} value={this.state.userId} />
                    <button type="submit">submit</button>
                </form>
                <div>
                    {
                        <h1>{this.state.errors}</h1>
                    }
                </div>
            </>
        )
    }
}