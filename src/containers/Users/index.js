import React, { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.png";
import { useHistory } from "react-router-dom";
import { Container, Image, ContainerItens, H1, Button, User } from "./styles";

function Users() {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  // Função assíncrona para buscar usuários ao inicializar o componente
  useEffect(() => {
    async function fetchUsers() {
      try {
        const { data: newUsers } = await axios.get(
          "http://localhost:3001/users"
        );
        setUsers(newUsers); // Define a lista de usuários no estado local com os dados recebidos
      } catch (error) {
        console.error("Error fetching users:", error); // Registra erro caso a busca de usuários falhe
      }
    }

    fetchUsers(); // Chama a função de busca ao inicializar o componente
  }, []);

  // Função para excluir usuário
  function deleteUsers(userId) {
    try {
      axios.delete(`http://localhost:3001/users/${userId}`); // Envia uma requisição DELETE para excluir o usuário no backend
      const newUsers = users.filter((user) => user.id !== userId); // Filtra a lista de usuários excluindo o usuário com o ID correspondente
      setUsers(newUsers); // Atualiza a lista de usuários no estado local
    } catch (error) {
      console.error("Error deleting user:", error); // Registra erro caso a exclusão de usuário falhe
    }
  }

  function goBackPage() {
    history.push("/");
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItens>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUsers(user.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>
        <Button onClick={goBackPage}>
          <img alt="seta" src={Arrow} />
          Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Users;
