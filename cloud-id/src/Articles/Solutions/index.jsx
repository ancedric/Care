import Cloud from '../../assets/cloud-arrow-down-solid.svg'
import Data from '../../assets/system-solid-17-assignment.svg'
import Search from '../../assets/system-solid-42-search.svg'
import Flux from '../../assets/system-solid-35-compare.svg'
import styled from 'styled-components'

const StyledBlackCard = styled.div`
    background-color: #1A1A1F;
`
const ImageContainer = styled.div`
    width: 100px;
    height: 100px;
`

function Solution(){
    return(
        <><StyledBlackCard>
            <ImageContainer> <img src={Cloud} alt='cloud'/></ImageContainer>
        </StyledBlackCard>
        <div className="white card">
        <ImageContainer> <img src={Search} alt='search'/></ImageContainer>
        <ImageContainer> <img src={Data} alt='data'/></ImageContainer>
        <ImageContainer> <img src={Flux} alt='data-exchange'/></ImageContainer>
        </div></>
    )
}

export default Solution;