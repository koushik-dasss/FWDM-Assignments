import { useState } from "react";
function Login(){
    const[formData,setFormData] = useState({
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
            "http://localhost:5000/login",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(formData),
            }
        );
        const data = await response.json();
        localStorage.setItem(
            "token",
            data.token
        );
        alert(data.message);
    };
    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
                    Login
                </button>
            </form>
        </div>
    );
}
export default Login;