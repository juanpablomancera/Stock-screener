import React from "react"
import "../ComponentsStyles/registerform.css"

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
            <h1 className="register-form-title">Get Registered</h1>
        <form>
            <label>
                Username*
            <input
                type="text"
                placeholder="Username"
                onChange={handleChange}
                name="username"
                value={formData.username}
                />
            </label>

            <label>
                Email*
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            </label>

            <label>
                Password*
            <input
                type="password"
                placeholder="Password"
                onChange={handleChange}
                name="password"
                value={formData.password}
            />
            </label>

            <label>
                Confirm password*
            <input
                type="password"
                placeholder="Repeat your password"
                onChange={handleChange}
                name="confirmPassword"
                value={formData.confirmPassword}
            />
                <small>* This data is compulsory</small>
            </label>

        </form>

            <button className="register-form-btn">Register</button>
        </div>
    )
}