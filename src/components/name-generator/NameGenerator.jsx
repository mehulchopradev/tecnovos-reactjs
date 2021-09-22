import { Component } from 'react';
import './NameGenerator.css';

class NameGenerator extends Component {

  // every class component has a `state` attribute
  // every class component has a `props` attribute

  constructor() {
    super(...arguments);

    // initial state
    this.state = {
      firstName: this.props.defaultFirst,
      lastName: this.props.defaultSecond
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    // update `state` using setState
    this.setState({
      [name]: value
    }); // re render of the react component internally
  }

  render() {
    return (
      <div className="name-generator">
        <h2>Name generator</h2>
        <p>
          <input type="text" name="firstName" placeholder="Enter first name" value={this.state.firstName} onChange={this.handleChange} />
        </p>
        <p>
          <input type="text" name="lastName" placeholder="Enter last name" value={this.state.lastName} onChange={this.handleChange}/>
        </p>
        <p>
          Final Name: <span>{`${this.state.firstName} ${this.state.lastName}`}</span>
        </p>
        <p>
          Name: {this.state.firstName.toUpperCase()}
        </p>
      </div>
    )
  }
}

/* function NameGenerator() {
  // Every component can have a `state`. State stores data. Which the component can remember acrosss re renders
  const handleChange = () => {
    // can retrieve the value that changed in the firstName/lastName
    // const firstName=
    // const lastName=
    // assign firstName, lastName to a `state`

    // cause a re render of the NameGenerator component
  };

  return (
    <div className="name-generator">
      <h2>Name generator</h2>
      <p>
        <input type="text" name="firstName" placeholder="Enter first name" onChange={handleChange} />
      </p>
      <p>
        <input type="text" name="lastName" placeholder="Enter last name" onChange={handleChange} />
      </p>
      <p>
        Final Name: <span>{// access firstName from `state` + access lastName from `state`}</span>
      </p>
    </div>
  )
} */

export default NameGenerator;