import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      gender: "",
      location: "",
      age: "",
      dietaryRestrictions: {
        isVegan: false,
        isKosher: false,
        isLactoseFree: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target
    type === "checkbox" ?
       this.setState(prevState => {
        return { 
         dietaryRestrictions: {
          ...prevState.dietaryRestrictions,
        [name]: checked 
      }
    }
    }) :
       this.setState({ 
        [name]: value 
      });
  }

  render() {
    return (
      <main>
        <form>
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
            value={this.state.age}
            name="age"
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
          <label>Location : </label>
          <select
            value={this.state.location}
            onChange={this.handleChange}
            name="location"
          >
            <option value="">Chose Location</option>
            <option value="Italy">Italy</option>
            <option value="Spain">Spain</option>
            <option value="Netherlands">Netherlands</option>
            <option value="New Zeland">New Zeland</option>
            <option value="Switzerland">Switzerland</option>
          </select>
          <br />
     
          
          <button className="btn">Submit</button>
          <hr />
          <label>Entered Information : </label>
          <br />
          <p>Your Name : {this.state.firstName} {this.state.lastName}</p>
          <p>Your Age : {this.state.age}</p>
          <p>You are a {this.state.gender}</p>
          <p>Your location is {this.state.location}</p>
       

     
         
        </form>
      </main>
    );
  }
}

export default App;
