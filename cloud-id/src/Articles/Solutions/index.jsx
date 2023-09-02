import Cloud from '../../Assets/cloud-arrow-down-solid.svg'
//import Data from '../../Assets/system-solid-17-assignment.svg'
import Search from '../../Assets/system-solid-42-search.svg'
import Flux from '../../Assets/system-solid-35-compare.svg'
import styled from 'styled-components'

const StyledBlackCard = styled.div`
    display: flex;
    flex-direction: row;
    color: #fff;
    background-color: #1A1A1F;
`
const ImageContainer = styled.div`
    width: 100px;
    height: 100px;
    backgroud-color:#fff;
    border-radius: 50px;
`
const StyledImage = styled.img
`
    width: 50px;
    height: 50px;
    margin-left: 20px;
    margin-top: 20px;
    backgroud-color:#fff;`
const StyledParagraph = styled.p`
    margin-left: 20px;
    justify-content: center;
    font-family: 'Kodchasan', sans-serif;
    font-size: 1.2em;
    color: #fff;
`
const StyledParag = styled.p`
    margin-left: 20px;
    justify-content: center;
    font-family: 'Kodchasan', sans-serif;
    font-size: 1.2em;
    color: #1A1A1F;
`
const StyledWhiteCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff;
    `

function Solution(){
    return(
        <><StyledBlackCard>
            <ImageContainer> <StyledImage src={Cloud} alt='cloud'/></ImageContainer>
            <StyledParagraph>Sauvegardez vos données d’identité directement dans le Cloud</StyledParagraph>
        </StyledBlackCard>
        <StyledWhiteCard>
            <ImageContainer> <StyledImage src={Search} alt='search'/>
            </ImageContainer>
            <StyledParag>En cas de perte de votre CNI, retrouvez rapidement vos données d’identification </StyledParag>
        </StyledWhiteCard>
        <StyledWhiteCard>
            <ImageContainer> <StyledImage src={Cloud} alt='data'/>
            </ImageContainer>
            <StyledParag>Simplifiez-vous les demandes d’établissement de CNI</StyledParag>
        </StyledWhiteCard>
        <StyledWhiteCard>
            <ImageContainer> <StyledImage src={Flux} alt='data-exchange'/>
            </ImageContainer>
            <StyledParag>Partagez vos données d’identification avec les organismes de votre choix</StyledParag>
        </StyledWhiteCard></>
    )
}

export default Solution;