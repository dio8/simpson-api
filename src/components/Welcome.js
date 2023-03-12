import styled from "styled-components";
import Logo from "../the-simpson.png";
export default function Welcome(props) {
    const {reqApi} = props;

    return (
        <ContentLogo>
            <WelcomeText>Bienvenido,para utilizar las frases pincha sobre la imagen</WelcomeText>
            <ImageLogo src={Logo}
                alt="Logo Simpson"
                onClick={reqApi} />
        </ContentLogo>
    );


};



const ImageLogo = styled.img`
  width: 450px;
  height: auto;

  &:hover{
    cursor: pointer;
  }
`;

const WelcomeText = styled.div`
  color: #2a9d8f;
  text-align: center;
  font-weight: 900;
  padding: 50px 0 10px 0;
  font-size: 25px;
`


const ContentLogo = styled.div`
  width: 100%;
  text-align: center;

`
