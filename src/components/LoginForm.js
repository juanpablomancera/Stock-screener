import React from "react"
import "../ComponentsStyles/forms.css"
import {Link} from "react-router-dom";


export default function LoginForm(){


    const [formData, setFormData] = React.useState(
        {
            email: "",
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

    function handleSubmit(e){
        e.preventDefault()

        const request = new Request("http://localhost:5000/login",{
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        fetch(request).then(res => res.json()).then(data => console.log(data))

        setFormData({
            email: "",
            password:""
        })


    }
    return (
        <div className="login-form">
            <div className="form">
                <h1 className="login-title">Get logged</h1>
                <label>
                    Email
                </label>
                    <input
                        type="email"
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
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
                <button className="login-form-btn" onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}