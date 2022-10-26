import { HeaderContainer, LinkContainer, Logo, Link, HeaderBtn, BtnLeft, BtnRight, Line } from "./Header.styles"
//import { useNavigate } from "react-router"



const Header = () => {
  // const navigate = useNavigate();

    return (
        
        <HeaderContainer>
            <Logo>
            <img src="/images/icons/logo.svg"/>
            </Logo>

            <LinkContainer>
                <Link>
                    <button /*onClick={() => navigate('/')}*/>
                    <p>Home</p>
                    </button>
                </Link>

                <Link>
                    <button  /*onClick={() => navigate('/search')}*/ >
                    <p >Search</p>
                    </button>
                </Link>

                <Link>
                    <button  /*onClick={() => navigate('/profile')}*/>
                        <p>Profile</p>
                    </button>
                </Link>
                
                <HeaderBtn>
                    <BtnLeft>
                        <button  /*onClick={() => navigate('/signup')}*/ >
                            <p >SIGNUP</p>
                        </button>
                    </BtnLeft>
                </HeaderBtn>

                <HeaderBtn>
                    <BtnRight>
                        <button  /*onClick={() => navigate('/login')}*/>
                            <p>LOGIN</p>
                        </button>
                    </BtnRight>
                </HeaderBtn>
            </LinkContainer>
        </HeaderContainer>  
        
    )

}

export default Header
