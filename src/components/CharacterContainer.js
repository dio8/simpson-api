import Character from "./Character";
import styled from "styled-components";

export default function CharacterContainer(props) 
{
    const {characters ,reqApi} = props;
    console.log(characters);
    return(
        <>
        <ContainerCharater>
            {characters.map((characters,index) =>(
                <Character dataCharacter ={characters} key={index}></Character>
            ))}

            
        </ContainerCharater>
        <ContainerButton>
        <Button onClick={reqApi}>Recargar personajes</Button>
        </ContainerButton>
        </>
        
      
    )
    
};

const ContainerCharater =styled.div`
    display:flex;

`


const ContainerButton = styled.div`
    width: 100%;
    text-align: center;



`

const Button = styled.button`
    width: 250px;
    background-color: #e76f51;
    color: #ffff;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 18px;
    margin-top: 40px;
    transition: all 0.2s ease-out;

    &:hover {
        cursor: pointer;
        background-color: #1c0950;
    }




`




