import React, {useState} from "react";
import People from "./assets/people.svg";
import Arrow from "./assets/arrow.svg";
import Trash from "./assets/trash.png";
import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
  User,
} from "./styles";

function App() {
  const [users, setUser]= useState([])
  
  function addNewUser() {
  setUser([{id: Math.random(), name: "Guiherme", age: 25}] )
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade"></Input>

        <Button onClick={addNewUser}>
          Cadastrar
          <img alt="seta" src={Arrow} />
        </Button>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button><img src={Trash} alt="lata-de-lixo"/></button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App;
