import Logo from '../Assets/cloud-id_logo.svg';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    `

const StyledLogoDiv = styled.div`
    width: 400px;
    height: 150px;
    `
const StyledLogo = styled.img`
    width: 100%;
    height: 100%;
    `
const StyledMenu = styled.ul`
    align-items: center;
`
const StyledMenuItem = styled.li`
    display: inline;
    margin-left: 10px;
    margin-right: 30px;
    font-family: 'Kodchasan', sans-serif;
    list-style-type: none;
    &:hover{    
        background-color: black;
        border-radius: 50px;
    }
`
const StyledLink = styled(Link)`    
    text-decoration: none;
    color: black;
    font-size: 1.2em;
    &:hover{    
        color: white;
    }
`
function Header(){
    return (
        <StyledHeader>
            <StyledLogoDiv>
                <StyledLogo src={Logo} alt="logo" />
            </StyledLogoDiv>
            <StyledMenu>
                <nav>
                    <ul>
                        <StyledMenuItem><StyledLink to="/">|  Home</StyledLink></StyledMenuItem>
                        <StyledMenuItem><StyledLink to="/">|  About us</StyledLink></StyledMenuItem>
                        <StyledMenuItem><StyledLink to="/">|  Contact</StyledLink></StyledMenuItem>
                    </ul>
                </nav>
            </StyledMenu>
        </StyledHeader>
    )
}

export default Header;