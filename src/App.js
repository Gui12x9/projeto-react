import React from "react";

import { Container, Image, ContainerItens, H1, InputLabel, Input, Button } from "./styles";

function App() {
  
  return (
    <Container>
    <Image></Image>
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
};

export default App;
