import styled from "styled-components";

export const InputCustomizado = styled.input`
  .inputBox {
    position: relative;
    width: 250px;
  }
  .inputBox input {
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    background: #1d2b3a;
    border-radius: 5px;
    outline: none;
    color: #fff;
    font-size: 1em;
  }

  .inputBox span {
    position: absolute;
    left: 0;
    padding: 10px;
    pointer-events: none;
    font-size: 1em;
    color: rgba(255, 255, 255, 0.25);
    text-transform: uppercase;
    transition: 0.5s;
  }

  .inputBox input:valid ~ span,
  .inputBox input:focus ~ span {
    color: #00dfc4;
    transform: translateX(10px) translateY(-7px);
    font-size: 0.65em;
    padding: 0 10px;
    background: #1d2b3a;
    border-left: 1px solid #00dfc4;
    border-right: 1px solid #00dfc4;
    letter-spacing: 0.2em;
  }

  .inputBox:nth-child(2) input:focus ~ span,
  .inputBox:nth-child(2) input:focus ~ span {
    background: #00dfc4;
    color: #1d2b3a;
    border-radius: 2px;
  }
`;
