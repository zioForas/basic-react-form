import React from "react"

function FormComponent(props) {
    return (
        <main>
          <form>
            <input
              type="text"
              value={props.firstName}
              name="firstName"
              placeholder="First Name"
              onChange={props.handleChange}
            />
            <br />
            <input
              type="text"
              value={props.lastName}
              name="lastName"
              placeholder="Last Name"
              onChange={props.handleChange}
            />
            <br />
            <input
              type="text"
              value={props.age}
              name="age"
              placeholder="Age"
              onChange={props.handleChange}
            />
            <br />
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={props.gender === "male"}
                onChange={props.handleChange}
              />
              Male
            </label>
            <br />
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={props.gender === "female"}
                onChange={props.handleChange}
              />
              Female
            </label>
            <br />
            <label>Location : </label>
            <select
              value={props.location}
              onChange={props.handleChange}
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
            <p>Your Name : {props.firstName} {props.lastName}</p>
            <p>Your Age : {props.age}</p>
            <p>You are a {props.gender}</p>
            <p>Your location is {props.location}</p>
         
  
       
           
          </form>
        </main>
      );
    }

    export default FormComponent