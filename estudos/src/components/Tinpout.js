import React, { useState } from "react";

// Um componente funcional que renderiza um campo de entrada com um rótulo e um texto de ajuda
function InputField(props) {
  // Um estado para armazenar o valor do campo de entrada
  const [value, setValue] = useState(props.value || "");

  // Uma função para lidar com as mudanças no campo de entrada
  function handleChange(event) {
    // Atualiza o estado com o novo valor
    setValue(event.target.value);
    // Chama a função onChange passada pelas props, se houver
    if (props.onChange) {
      props.onChange(event);
    }
  }

  // Retorna o elemento JSX que renderiza o campo de entrada
  return (
    <div className="input-field">
      {/* Renderiza o rótulo, se houver */}
      {props.label && (
        <label className="input-label" htmlFor={props.name}>
          {props.label}
        </label>
      )}
      {/* Renderiza o campo de entrada com os atributos passados pelas props */}
      <input
        className="input-element"
        id={props.name}
        name={props.name}
        type={props.type || "text"}
        placeholder={props.placeholder}
        value={value}
        readOnly={props.readOnly}
        autoFocus={props.autoFocus}
        required={props.required}
        maxLength={props.maxLength}
        pattern={props.pattern}
        onChange={handleChange}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        onKeyDown={props.onKeyDown}
      />
      {/* Renderiza o texto de ajuda, se houver */}
      {props.helperText && (
        <span className="input-helper-text">{props.helperText}</span>
      )}
    </div>
  );
}

// Um componente funcional que renderiza um formulário com dois campos de entrada
function Tinput() {
  // Uma função para lidar com o envio do formulário
  function handleSubmit(event) {
    // Previne o comportamento padrão do formulário
    event.preventDefault();
    // Obtém os valores dos campos de entrada
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    // Exibe os valores no console
    console.log(`First name: ${firstName}`);
    console.log(`Last name: ${lastName}`);
  }

  // Retorna o elemento JSX que renderiza o formulário
  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* Renderiza o campo de entrada para o primeiro nome */}
      <InputField
        name="firstName"
        label="First name"
        placeholder="Enter your first name"
        required
      />
      {/* Renderiza o campo de entrada para o sobrenome */}
      <InputField
        name="lastName"
        label="Last name"
        placeholder="Enter your last name"
        required
      />
      {/* Renderiza o botão de envio do formulário */}
      <button className="form-button" type="submit">
        Submit
      </button>
    </form>
  );
}

// Exporta o componente Form
export default Tinput;
