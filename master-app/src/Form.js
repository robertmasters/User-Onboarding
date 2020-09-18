import React from 'react'


export default function newUserForm(props) {

    const {
        values, 
        submit,
        inputChange,
        checkboxChange,
        disabled,
        errors,
    } = props


const onSubmit = evt => {
    evt.preventDefault()
    submit()
}

const onCheckboxChange =evt => {
    const { name, checked } = evt.target
    checkboxChange(name, checked)
}

const onInputChange = evt => {
    const { name, value } = evt.target
    inputChange(name, value)
}

return (

    <form className = 'newUserForm-container' onSubmit={onSubmit}>
        <h2>Add New User</h2>
        {/*button disabled */}
        <button id = 'submitButton' disabled = {disabled}>Submit</button>
        
        <div className= 'error'>
            {/* 2 validation error one for username and one for email */}
            <div>{errors.username}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
        </div>

        <div className='form-group inputs'>
            <h3>Information</h3>

            <label> Username:
                <input 
                    value={values.username}
                    onChange={onInputChange}
                    name='username'
                    type='text'
                />
            </label>

            <label> Email:
                <input 
                    value={values.email}
                    onChange={onInputChange}
                    name='email'
                    type='email'
                />
            </label>

            <label> Password:
                <input 
                    value={values.password}
                    onChange={onInputChange}
                    name='password'
                    type='password'
                />
            </label>
        </div>

        <div className='terms-of-service'>
            <label>Terms of Service
                <input 
                    type='checkbox'
                    name='terms'
                    checked={values.terms}
                    onChange={onCheckboxChange}
                />
            </label>     
        </div>
    </form>
)
}