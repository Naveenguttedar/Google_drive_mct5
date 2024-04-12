import styled from 'styled-components'
import {route} from "preact-router"
export default function Home() {
    const navigate = path => {
    route(`/${path}`, true);
  };

  return (
    <Container>
      <Row1>
        <div class="left">Google Drive</div>
        <div class="right">
          <div>meet drive</div>
          <div>using drive</div>
          <div>play drive</div>
          <div>eat drive</div>
        </div>
      </Row1>

      <Row2>
        <img src="https://www.google.com/drive/static/images/drive/logo-drive.png" />
        <div>A safe place for all your files</div>
        <Button onClick={()=>navigate('mydrive')}>Go to Google Drive</Button>
      </Row2>
    </Container>)
}

const Container = styled.div`
background: url("https://www.google.com/drive/static/images/home/intro-1600.jpg");
background-size: cover;
width: 100%;
height: 100vh;
`
const Row1 = styled.div`
height: 50px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
color: white;
.left{
font-weight: bold;
font-size: 20px;}
.right{
display: flex;
text-transform: capitalize;
}
.right div{
margin:0px 10px;
}
`
const Row2=styled.div`
height: calc(100vh - 50px);
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
img{
height:77px;
}
div{
color: white;
margin: 20px 0;
font-size: 20px;
}
`
const Button= styled.button`
cursor:pointer;
background: dodgerblue;
color: white;
padding: 20px 40px;
border: none;
`
