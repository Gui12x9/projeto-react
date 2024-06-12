import React from "react";
import People from "./assets/people.png";

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from "./styles";

function App() {
  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input placeholder="idade"></Input>

        <Button>Cadastrar</Button>
      </ContainerItens>
    </Container>
  );
}

export default App;
