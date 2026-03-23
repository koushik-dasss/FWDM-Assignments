import {useState} from 'react';
function ThemeToggle(){
    const[darkMode , setDarkMode] = useState(false);
    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };
    const style  = {
        backgroundColor : darkMode ? "black" : "white",
        color : darkMode ? "white" : "black",
        height : "200px",
        padding : "20px"
    };
    return(
        <div style={style}>
            <h2>Current Mode : {darkMode ? "Dark":"Light"}</h2>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
        </div>
    );
}
export default ThemeToggle;