import styled from "styled-components";
import Backgroud from "../../assets/backgroud.svg";

export const Container = styled.div`
  background: url("${Backgroud}");
  display: flex;
  gap: 35px;
  height: 100vh;
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
  height: 100vh;
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

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;

  width: 342px;
  height: 58px;
  padding-left: 25px;
  margin-bottom: 34px;

  outline: none;
  border: none;

  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
`;

export const Button = styled.button`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 14px;
  border: none;
  margin-top: 130px;
  width: 342px;
  height: 74px;

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
`;
