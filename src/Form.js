import React from 'react';

export default class Form extends React.Component {
   
    // holds all the values
    // have those values reflected in the form
    state = {
        skill: "",
        rating: "",
        comments: "",
        actions: "",
    }

    // event.target.[element] on which the event occured
    // event grabs the values of input tag form (name, placeholder etc.) and puts it in event.target.[input]
    // lets us set the value of our state
    handleChange(event) {
        this.props.onChange({ [event.target.name]: event.target.value })
        this.setState({ [event.target.name]: event.target.value });
    }

    // handle form submission, can redirect page, give it to another component etc.
    onSubmit(event) {
        // default action of submit forms is to refresh - event.preventDefault() stops the "default" action
        event.preventDefault();
        // pass on the current state from the App React properties
        // this.props.onSubmit(this.state);

        // setting the state to empty after submitting
        this.setState({
            skill: "",
            rating: "",
            comments: "",
            actions: "",
        });
        // clears the current state from App component
        this.props.onChange({
            skill: "",
            rating: "",
            comments: "",
            actions: "",
        });
    };

    render () {

        return(
            <form>
                <input 
                    name="skill"
                    placeholder='Skill'
                    value={this.state.skill} 
                    onChange={(event) => this.handleChange(event)}
                />
                <input
                    name="rating" 
                    placeholder='Rating'
                    value={this.state.rating} 
                    onChange={(event) => this.handleChange(event)}
                />
                <input 
                    name="comments"
                    placeholder='Comments'
                    value={this.state.comments} 
                    onChange={(event) => this.handleChange(event)}
                />
                <input 
                    name="actions"
                    placeholder='Actions'
                    value={this.state.actions} 
                    onChange={(event) => this.handleChange(event)}
                />
                <button onClick={(event) => this.onSubmit(event)}>Submit</button>
            </form>
        )
    }
}
