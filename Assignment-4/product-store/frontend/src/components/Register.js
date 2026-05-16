import { useState } from "react";
function Register(){
    const[formData,setFormData] = useState({
        username:"",
        email:"",
        password:"",
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    };
    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch(
            "http://localhost:5000/register",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(formData),
            }
        );
        const data = await response.json();
        alert(data.message);
    };
    return(
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                />
                <br /><br />
                <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                />
                <br /><br />
                <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                />
                <br /><br />
                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    );
}
export default Register;