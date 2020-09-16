import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import User from './User'
import formSchema from './formSchema'
import axios from 'axios'
import * as yup from 'yup'





const initialFormValues = {
  //text inputs
  username: '',
  email: '',
  password: '',
  terms: false
}

const initialFormErrors = {
  username: '',
  email: '',
  password: ''
}

const initialUser = []
const initialDisabled = true

function App() {
  //const [users, setUsers] = useState(Array.from(initialUser)) 
    const [users, setUsers] = useState(initialUser)          // array of user objects
    const [formValues, setFormValues] = useState(initialFormValues) // object for values state
    const [formErrors, setFormErrors] = useState(initialFormErrors) // object for errors
    const [disabled, setDisabled] = useState(initialDisabled)       // boolean to enable submit button
  

  
    const postNewUser = newUser => {
      axios.post('https://reqres.in/api/users', newUser)
        .then(good => {
          // setUsers(users.concat(good.data)) //given that .data is an object I tried to use the concat function to make it an array to map over, but this causes a TypeError: users.concat is not a function
         setUsers([...users, good.data]) //adding newUser to state
        })
        .catch(err => {
          console.log(err)
          debugger
        })
        .finally(() => { //form resets regardless of success or failure
          setFormValues(initialFormValues)
        })
    }
  
//form actions
    const inputChange = (name, value) => {
      //  validation with yup
      yup
        .reach(formSchema, name)
        //validate using the value
        .validate(value)
        // if the validation is successful, error message is cleared
        .then(valid => {
          setFormErrors({
            ...formErrors,
            [name]: "",
          })
        })
        // if the validation is unsuccessful, return error message set up in formSchema
        .catch(err => {
          setFormErrors({
            ...formErrors,
            [name]: err.errors[0],
          })
        })
  
      setFormValues({
        ...formValues,
        [name]: value
      })
    }

    const checkboxChange = (name, isChecked) => {
      //new state for the whole form
      setFormValues({
        ...formValues,
          [name]: isChecked
      })
    }
  
    const submit = () => {
      const newUser = {
        username: formValues.username.trim(),
        email: formValues.email.trim(),
        password: formValues.password,
        terms: formValues.terms
      }

      // making a new user
      postNewUser(newUser)
    }
  
    useEffect(() => {
      //changes disabled everytime formValue changes
      formSchema.isValid(formValues)
        .then(valid => {
          setDisabled(!valid);
        })
    }, [formValues])

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />

        <div className = "form-container">
          <Form
            values={formValues}
            inputChange={inputChange}
            checkboxChange={checkboxChange}
            submit={submit}
            disabled={disabled}
            errors={formErrors}
          />
          </div>
          <div className = "userCard-Container">
          {
            
              <User details= {users} />
            
          }
          </div>
      </header>
    </div>
  );
}

export default App;
