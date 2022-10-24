import { LoginContainer } from "./Login.styles"
import { useDispatch } from "react-redux";
import { useState } from "react";
import { LoginBtn, FormContainer } from "./Login.styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Login = () => {
    const dispatch = useDispatch();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const handleEmailChange = (e) => {
      setEmail(e.target.value)
    };
      
    const handlePasswordChange = (e) => {
      setPassword(e.target.value)
    };
      
    const handleSubmit = (e) => {
        e.preventDefault()
        const url = ""
        
        const jsBody = {
            email: email,
            password: password
        }
        
        const config = {
            method: "POST",
            headers: new Headers ({
                "Content-Type": "application/json"
            }),
           body: JSON.stringify(jsBody)
        }
    
    };
    return (
        <div>
            <Header></Header>
        <LoginContainer>
            <form onSubmit={handleSubmit}>
                <h1>LOGIN</h1>
                <FormContainer>
                <input 
                    autoComplete="off"
                    type="text" 
                    name={"email"} 
                    placeholder="Username"
                    onChange={handleEmailChange}
                />
                <input 
                    autoComplete="off"
                    type="password" 
                    id={"password"}
                    name={"password"}
                    placeholder="Password"
                    onChange={handlePasswordChange}
                />
                <LoginBtn>
                <button type="submit">Login</button>
                </LoginBtn>
                </FormContainer>
            </form>
        </LoginContainer>
        <Footer></Footer>
        </div>
    )

}

export default Login
