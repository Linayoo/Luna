import { LoginContainer } from "./Login.styles"
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate} from "react-router-dom"
import { LoginBtn, FormContainer } from "./Login.styles";
import { addToken } from "../../redux/loginSlice";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
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
        const url = "https://luna-tuna.propulsion-learn.ch/backend/token/"
        
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

        fetch(url, config).then((response) => {
            if (response.status === 200) {
                    navigate('/home')
                    return response.json()
                } else {
                    alert('Something went wrong')
                }
          }).then(data => {
            localStorage.setItem("token", data.access)
            setToken(data.access)
            dispatch(addToken(data.access))
            console.log(data)
          }
        )
    };
    console.log(token)
    return (
        <div>
            <Header></Header>
        <LoginContainer>
            <form onSubmit={handleSubmit}>
                <h1>LOGIN</h1>
                <FormContainer>
                <input 
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
