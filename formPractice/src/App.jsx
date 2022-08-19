import React, { Component } from "react";
// wire up form so it works
// use concept of controlled form
// reactjs.org/docs/forms.html
// corsework.vschool.io/travel-form/

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      Age: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;

    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.Age}
          name="Age"
          placeholder="Age"
          onChange={this.handleChange}
        />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />
          Female
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Dog"
            checked={this.state.gender === "Dog"}
            onChange={this.handleChange}
          />
          Dog
        </label>
        <br />

        <label>Location: </label>
        {/*formik*/}
        <select
          value={this.state.location}
          onChange={this.handleChange}
          name="location"
        >
          <option value={"Pastaland"}>italy</option>
          <option value={"Pain"}>Spain</option>
          <option value={"Switzerland"}>Switzerland</option>
          <option value={"Weedland"}>Deutchland</option>
          <option value={"America, fuck yeah"}>USA</option>
          <option value={"mooseland"}>Canada</option>
        </select>
        <br />
        <hr />
        <br />
        <h2>Entered information:</h2>

        <p>
          Your name: {this.state.firstName} {this.state.lastName}
        </p>

        <p>Your Age: {this.state.Age}</p>

        <p>gender: {this.state.gender}</p>

        <p> you live in... {this.state.location}</p>

        <button>Submit</button>
      </form>
    );
  }
}

export default App;
