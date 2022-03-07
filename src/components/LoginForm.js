import React from "react"
import "../ComponentsStyles/forms.css"
import {Link} from "react-router-dom";

export default function LoginForm(){
    const [formData, setFormData] = React.useState(
        {
            username: "",
            password: "",
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
    return (
        <div className="login-form">
            <div className="form">
                <h1 className="login-title">Get logged</h1>
                <label>
                    Username
                </label>
                    <input
                        type="text"
                        onChange={handleChange}
                        name="username"
                        value={formData.username}
                    />

                <label >
                    Password
                </label>
                    <input
                        type="password"
                        onChange={handleChange}
                        name="password"
                        value={formData.password}
                    />
                    <h3>You don't have an account? Register
                        <Link to="/register" style={{ textDecoration: 'underline',color:'#1E1E24' }}> KNOW</Link>
                    </h3>
                <button className="login-form-btn">Login</button>
            </div>
        </div>
    )
}