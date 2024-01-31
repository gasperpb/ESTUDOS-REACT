import React from "react";
import { Container, Form, SubContainerSign } from "./styles";
import { InputCustomizado } from "../../components/ImputCustomizado";
import Botao from "../../components/Botao";

const Login = () => {
  return (
    <Container>
      <Form>
        <h1>Faça o seu Login 👋</h1>
        <InputCustomizado
          name="email"
          placeholder="Digite o seu e-mail"
          onChange={handleChange}
          type="email"
        />
        <InputCustomizado
          name="password"
          placeholder="Digite a sua senha"
          onChange={handleChange}
          type="password"
        />
        <Botao
          type="submit"
          text="Entrar!"
          onClick={handleSubmit}
          disabled={loading === true || !validadorInput()}
        />
        <SubContainerSign>
          <p>Não possui conta?</p>
          <NavLink to="cadastrar">Cadastrar</NavLink>
        </SubContainerSign>
      </Form>
    </Container>
  );
};

export default Login;
