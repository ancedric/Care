import Solution from './Solutions/index.jsx';
import SolutionImage from '../Assets/advantages.jpg';
import '../App.css'
import styled from 'styled-components'

const StyledBlackCard = styled.div`
    background-color: #1A1A1F;
    height: 200px;
`
const TitleContainer = styled.h2`
    width: 400px;
`
const ImageCard = styled.div`
    width: 482px;
    height: 605px;
    margin-left:200px;
    `
const StyledImg = styled.img`
    width: 482px;
    height: 605px;
`
const StyledSolution = styled.div`
    position: absolute;
    left:800px;
    top: 635px;
    margin-top: 100px;
    width: 430px;
`
const StyledArticle = styled.div`
    display: flex;
    flex-direction: row;
`
const StyledBloc1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 100px;
    margin-left: 100px;
    width: 600px;
    height: 605px;
`

function Articles() {
  return (
    <><StyledArticle><StyledBloc1>
          <TitleContainer>Ne perdez plus vos données, enregistrez-les dans le Cloud</TitleContainer>
          <ImageCard>
              <StyledImg src={SolutionImage} alt='advantage' />
          </ImageCard>
      </StyledBloc1>
          <StyledSolution>
              <Solution /></StyledSolution>
      </StyledArticle><StyledBlackCard></StyledBlackCard></>   
    )
}

export default Articles;