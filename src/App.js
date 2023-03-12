import Container from "./components/Container";
import Header from "./components/Header";
import Logo from "./the-simpson.png";
import styled from "styled-components";
import Welcome from "./components/Welcome";
import CharacterContainer from "./components/CharacterContainer";
import { useState } from "react";

function App() {
  const [characters,setCharacters] = useState(null);

  const reqApi = async() =>{
    const api= await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=3");
    const frase = await api.json();
    setCharacters(frase);
  }




  return (
    <div className="App">
      <Container>
        <Header></Header>
        {!characters ? (<Welcome reqApi={reqApi}></Welcome>)
        :
        (<CharacterContainer characters={characters} reqApi={reqApi}></CharacterContainer>)
        
      
      }


        
        
      </Container>
    </div>
  );
}



export default App;
