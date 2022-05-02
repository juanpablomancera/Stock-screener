import React from "react"
import "../ComponentsStyles/forms.css"

export default function RegisterForm(){

    const [formData, setFormData] = React.useState(
        {
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

    function handleSubmit(e){
        e.preventDefault()

        const request = new Request("http://localhost:5000/register", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type":"application/json"
            }
        });

        fetch(request).then(res => res.json()).then(data => console.log(data))

        setFormData({
            email: "",
            password: "",
            confirmPassword: "",
        })
    }

    return(
        <div className="register-form">

        <div className="form">
            <h1 className="register-title">Get Registered</h1>


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
            <button className="register-form-btn" onClick={handleSubmit}>Register</button>
        </div>


        </div>
    )
}