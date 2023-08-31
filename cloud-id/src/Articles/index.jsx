import Solution from './Solutions/index.jsx';
import SolutionImage from '../Assets/advantages.jpg';
import styled from 'styled-components'

const StyledBlackCard = styled.div`
    background-color: #1A1A1F;
`
const TitleContainer = styled.h2`
    width: 100px;
`
const ImageCard = styled.div`
    width: 482px;
    height: 605px;
    `

function Articles() {
  return (
    <><div>
            <TitleContainer>Articles</TitleContainer>
            <ImageCard>
                <img src={SolutionImage} alt='advantage'/>
            </ImageCard>
        </div>
        <Solution/>
        <StyledBlackCard></StyledBlackCard>
    </>     
    )
}

export default Articles;