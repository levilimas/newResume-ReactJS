import React from 'react';
import styled from 'styled-components';

const Site = styled.div `
  width: 100vh;
  height: 100vh;
  background-color: #000;
`;

const Title = styled.h1 `
  color: #0eb;
  font-size: 30px;
  text-align: center;
`;

const Botao = styled.button `
  font-size: 19px;
  background-color: #00FF99;
  padding: 10px 15px;
  border-radius: 20px;
  color: #fff;
  border: 2px solid #00FF00;
  text-align: center;
  display: flex;
`;

function App() {
  return (
    <Site>
    <Title>Bem Vindo e obrigado por estar aqui Jesus.</Title>
    <Botao>Click aqui</Botao>
    </Site>
  );
}
  

export default App;