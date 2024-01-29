import React from "react";
import { Container, Form } from "./styles";
import { InputCustomizado } from "../../components/ImputCustomizado";

const Login = () => {
  return (
    <div className="inputbox">
      <InputCustomizado type="text" placeholder="Nome" />
      <span>Mone</span>
      <InputCustomizado type="text" placeholder="Email" />
      <span>Email</span>
      <InputCustomizado type="password" placeholder="Senha" />
      <span>Senha</span>
      <InputCustomizado type="password" placeholder="Confirmar Senha" />
      <span>Confirmar Senha</span>
      <button type="submit">Cadastrar</button>
    </div>
  );
};

export default Login;
