import { Link } from "react-router-dom"
import styled from "styled-components"
import AnimatedText from "./AnimatedText"
import BannerImage from "../Assets/header_illustration.svg"

const StyledAnimatedText = styled.div`
    font-family:'Lilita One', sans-serif;
    font-size: 3.0em;
    height: 150px;
`
const AnimatedTextStyle = styled.span`
    color: #1CF78E;
`
const StyledBanner = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #EAE8E8;
`
const StyledBannerImage = styled.div`
    width: 70%;
`
const StyledBannerText = styled.div`
    width: 1000px;
    margin-left:50px;
`
const StyltedTextDescription = styled.div`
    font-family: 'Kodchasan', sans-serif;
    
`
const StyledButton = styled.div`
    background-color: #1A1A1F;
    width: 120px;
    height: 60px;
    color: #fff;
    position: absolute;
    left:250px;
    justify-content: center;
    &: hover {
        background-color: #1CF78E;
        box-shadow: 0px 0px 10px 0px #000;
    }
`
const StyledParagraph = styled.p`
    margin-left: 20px;
    justify-content: center;
    font-family: 'Kodchasan', sans-serif;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    &:hover{
        color: #000;
    }
`

function Banner(){
    return (
        <StyledBanner>
            <StyledBannerText>
                <StyledAnimatedText>
                   <p>Pour ceux qui<AnimatedTextStyle> <AnimatedText/></AnimatedTextStyle> leur CNI</p>
                </StyledAnimatedText>
                <StyltedTextDescription>
                    <p>Nous vous aidons à retrouver facilement votre carte d’identité lorsque vous ne savez plus où elle se trouve. Faites confiance à votre application pour enregistrer vos données d’identification.</p>
                </StyltedTextDescription>
                <StyledButton><StyledParagraph><StyledLink to="/">Get started</StyledLink></StyledParagraph></StyledButton>
            </StyledBannerText>
            <StyledBannerImage>
                <img src={BannerImage} alt="banner"/>
            </StyledBannerImage>
        </StyledBanner>
    )
}

export default Banner