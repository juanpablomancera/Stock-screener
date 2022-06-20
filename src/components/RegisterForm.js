import {useState} from "react"
import "../ComponentsStyles/forms.css"
import {Link, useNavigate} from "react-router-dom";

export default function RegisterForm(){
    const navigate = useNavigate()
    const [formData, setFormData] = useState(
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

    function restartData(){
        setFormData({
            email: "",
            password: "",
            confirmPassword: "",
        })
    }

    function handleRequest(data){
        if (data.msg === "User already exists"){
            window.alert("That user already exists!!")
        }
        else  {
            sessionStorage.setItem("token",data.msg)
            navigate("/stockscreener")

        }
    }

    function handleSubmit(e){
        e.preventDefault()
        if (formData.password === formData.confirmPassword){
            const request = new Request("http://localhost:5000/register", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type":"application/json"
                }
            });

            fetch(request)
                .then(res => res.json())
                .then(data => handleRequest(data))

            restartData()

            }
        else {
            window.alert("The passwords don't match!!")
        }
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
            <h3>You have already an account? Log in
                <Link to="/login" style={{ textDecoration: 'underline',color:'#1E1E24' }}> KNOW</Link>
            </h3>
            <button className="register-form-btn" onClick={handleSubmit}>Register</button>
        </div>


        </div>
    )
}