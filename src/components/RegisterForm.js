import React from "react"
import "../ComponentsStyles/forms.css"

export default function RegisterForm(){

    const [formData, setFormData] = React.useState(
        {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    )

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    return(
        <div className="register-form">

        <div className="form">
            <h1 className="register-title">Get Registered</h1>
            <label>
                Username*
            </label>
            <input
                type="text"
                onChange={handleChange}
                name="username"
                value={formData.username}
                />


            <label>
                Email*
            </label>
            <input
                type="email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />

            <label>
                Password*
            </label>
            <input
                type="password"
                onChange={handleChange}
                name="password"
                value={formData.password}
            />


            <label>
                Confirm password*
            </label>
            <input
                type="password"
                onChange={handleChange}
                name="confirmPassword"
                value={formData.confirmPassword}
            />
            <p className="required-data">* This data is compulsory</p>
            <button className="register-form-btn">Register</button>
        </div>


        </div>
    )
}