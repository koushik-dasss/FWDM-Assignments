import React,{ useState } from "react";
function LoginForm(){
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[errors,setErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        if(!email){
            newErrors.email = "Email is required";
        }
        if(!password){
            newErrors.password = "Password is required";
        }
        setErrors(newErrors);
        if(Object.keys(newErrors).length === 0){
            alert("Login Successful");
        }
    };
    return(
        <div>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <br />
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <p style={{color:"red"}}>
                        {errors.email}
                    </p>
                </div>
                <div>
                    <label>Password:</label>
                    <br />
                    <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <p style={{color:"red"}}>
                        {errors.password}
                    </p>
                </div>
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}
export default LoginForm;