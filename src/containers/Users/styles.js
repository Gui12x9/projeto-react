import styled from "styled-components";
import Backgroud from "../../assets/backgroud1.svg";

export const Container = styled.div`
  background: url("${Backgroud}");
  display: flex;
  gap: 35px;
  height: 100%;
  min-height:100vh;
  flex-direction: column;
  align-items: center;
  background-size: cover;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const ContainerItens = styled.div`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  backdrop-filter:blur(45px);
  height: 100%;
  min-height: calc(100vh - 165px);
  border-radius: 61px 61px 0px 0px;
  padding: 50px 36px;
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: bold;
  line-height: 40px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 80px;
`;

export const InputLabel = styled.p`
  letter-spacing: -0.408px;
  font-style: normal;
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
  color: #eeeeee;
  margin-left: 25px;
`;

export const Button = styled.button`
  background: transparent;
  border-radius: 14px;
  border: 1px solid #ffffff;
  width: 342px;
  height: 74px;
margin-top:120px;
  font-style: normal;
  font-weight: bold;
  color: #ffffff;
  font-size: 17px;
  line-height: 28px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
  img{
    transform:rotateY(180deg) 
  }
`;

export const User = styled.li`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;

  outline: none;
  border: none;

  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  width: 342px;
  height: 58px;
  padding-left: 25px;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    line-height: 28px;

    color: #ffffff;
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
