import React from "react";
import styled from "styled-components";

const ButtonComponent = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  vertical-align: center;
  cursor: pointer;
  user-select: none;
  border-radius: 0.3rem;
  padding: 0
    ${(props) =>
      props.size === "sm"
        ? "1.1rem"
        : props.size === "md"
        ? "1.4rem"
        : props.size === "lg"
        ? "1.6rem"
        : "1.1rem"};
    height: ${(props) =>
      props.size === "sm"
        ? "34px"
        : props.size === "md"
        ? "37px"
        : props.size === "lg"
        ? "40px"
        : "34px"};}
    font-family : "Lora", san-serif;
    font-weight: 300;
    border: 1px solid transparent;
    background-color : ${(props) =>
      props.variant === "login"
        ? "red"
        : props.variant === "signup"
        ? "blue"
        : "green"};
    color : ${(props) =>
      props.variant === "login"
        ? "white"
        : props.variant === "signup"
        ? "white"
        : "green"};
`;

const Button1 = ({ type, variant, className, children, size }) => {
  return (
    <ButtonComponent
      type={type ? type : "button"}
      variant={variant}
      size={size}
      className={className ? `btn-component ${className}` : "btn-component"}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button1;
