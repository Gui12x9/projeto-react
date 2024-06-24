import React, { useState, useRef } from "react";
import axios from "axios";
import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";
import { useHistory } from "react-router-dom";
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
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const history = useHistory();
  const inputAge = useRef();

  // Função para formatar a primeira letra para maiúscula
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  async function addNewUser() {
    try {
      const capitalizedUserName = capitalizeFirstLetter(
        inputName.current.value
      ); // Capitaliza o nome do usuário

      // Envia uma requisição POST para adicionar o usuário no backend
      const response = await axios.post("http://localhost:3001/users", {
        name: capitalizedUserName,
        age: inputAge.current.value,
      });

      const newUser = response.data; // Obtém os dados do novo usuário a partir da resposta do backend

      // Adiciona o novo usuário à lista de usuários no estado local
      setUsers([...users, newUser]);

      // Limpa os campos de nome e idade após adicionar o usuário com sucesso
      inputName.current.value = "";
      inputAge.current.value = "";
    } catch (error) {
      console.error("Error adding new user:", error); // Registra erro caso a adição de usuário falhe
    }
    history.push("/usuarios");
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar
          <img alt="seta" src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default App;
