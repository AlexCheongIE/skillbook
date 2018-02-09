import React, { Component } from 'react';
import './css/App.css';
import Form from './Form';


class App extends Component {

  state = {
    fields: {}
  }

  // passing in fields from Form component 
  // spread (...) properties of the object passed in are copied onto the components props
  onChange = updatedValue => {
    //this.setState({ fields });

    // we're setting the state, keeping the unchanged fields 
    // passing the updated value in and changing that
    this.setState({ 
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
      });
  }

  render() {

    return (
      
      <div className="App">
        {/* add form to main component and display it 
        pass field arguments from the original form to onSubmit() */}
        <Form onChange={fields => this.onChange(fields) }/>
          <p>{JSON.stringify(this.state.fields, null, 2)}</p>
      </div>
    );
  }
}

export default App;