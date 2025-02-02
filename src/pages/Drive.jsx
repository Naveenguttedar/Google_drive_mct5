import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Data from '../components/Data'
import styled from 'styled-components'
export default function Drive({user}) {
  return (
    <Container>
      <Header photoURL={user.photoURl} />
      <Main>
      <SideBar/>
      <Data/>
      </Main>
    </Container>
  )
}

const Container=styled.div`
height:100%;
`
const Main=styled.div`
display:flex;
`
