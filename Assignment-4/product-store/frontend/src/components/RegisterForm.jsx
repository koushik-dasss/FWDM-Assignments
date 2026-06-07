import React,{ useState } from "react";
function RegisterForm(){
    const[username,setUsername] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[confirmPassword,setConfirmPassword] = useState("");
    const[errors,setErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        if(!username){
            newErrors.username = "Username required";
        }
        if(!email){
            newErrors.email = "Email required";
        }
        if(!password){
            newErrors.password = "Password required";
        }
        if(password !== confirmPassword){
            newErrors.confirmPassword = "Passwords do not match";
        }
        setErrors(newErrors);
        if(Object.keys(newErrors).length === 0){
            alert("Registration Successful");
        }
    };
    return(
        <div>
            <h2>Register Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <br />
                    <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <p style={{color:"red"}}>
                        {errors.username}
                    </p>
                </div>
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
                <div>
                    <label>Confirm Password:</label>
                    <br />
                    <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <p style={{color:"red"}}>
                        {errors.confirmPassword}
                    </p>
                </div>
                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    );
}
export default RegisterForm;