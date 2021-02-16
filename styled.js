import styled from "styled-components";

const FontFamily = `
  font-family: "Raleway", sans-serif;
`;

const MarginLeft = `
  margin-left: 5px;
`;

const InputStyles = `
  display: flex;
  width: 96%;
  height: 26px;
  margin-bottom: 12px;
  padding-left: 4px;
  transition: all 0.16s linear;
  border: 1px solid #808080;
  border-radius: 4px;

  &:focus {
    border: 1px solid #87cefa;
    outline: none;
    box-shadow: 0px 0 6px #87cefa;
  }
`;

const LabelStyles = `
  ${FontFamily}
  font-size: 20px;
`;

const ButtonStyles = `
  width: 120px;
  height: 26px;
  color: #fff;
  background-color: #4169E1;
  cursor: pointer;
  transition: all 0.1s linear;
  border-radius: 4px; 
  border: none;

  &:active {
    border: 2px solid #87cefa;
    outline: none;
  }

  &:disabled {
    background-color: #ADD8E6;
  }

  &:focus {
    outline: none;
  }
`;

export const Header = styled.h2`
  ${FontFamily}
  font-weight: 700;
  color: #4682b4;
  margin: 10px 0 10px 5px;
`;

export const Form = styled.form`
  ${MarginLeft}
  font-weight: 600;
  width: 470px;
  margin: 0 auto 20px auto;
  border-radius: 6px;
  padding: 10px;
  box-shadow: 1px 2px 10px -4px #000000;
`;

export const FormInput = styled.input`
  ${InputStyles}
`;

export const FormLabel = styled.label`
  ${LabelStyles}
  margin-left: 1px;
`;

export const Input = styled.input`
  ${InputStyles}
  ${MarginLeft}
`;

export const Label = styled.label`
  ${LabelStyles}
  ${MarginLeft}
`;

export const Button = styled.button`
  ${ButtonStyles}
`;

export const ListItemButton = styled.button`
  ${ButtonStyles}
  width: 32px;
  background-color: #ee5353;
  margin-left: 10px;
  font-weight: 600;
  padding-top: 2px;
`;

export const ListItem = styled.li`
  ${FontFamily}
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 6px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #808080;
  border-radius: 6px;
  box-shadow: 1px 2px 7px -4px #000000;
  padding: 8px;
`;

export const Name = styled.span`
  width: 170px;
`;

export const Container = styled.div`
  width: 500px;
  margin-left: calc(50% - 250px);
  overflow-x: hidden;
`;

export const FilterContainer = styled.div`
  ${MarginLeft}
  width: 482px;
  margin: 0 auto 20px auto;
  border-radius: 6px;
  padding: 6px;
  box-shadow: 1px 2px 10px -4px #000000;
`;

export const ErrorBlock = styled.div`
  background-color: #f73f3f;
  width: 220px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  color: #fff;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-right: 16%;
  border-radius: 6px;
  z-index: 2;
`;

export const ChangerForm = styled.form`
  margin: 0 auto;
  width: 484px;
  height: 30px;
  border: 4px solid #3074b8;
  position: absolute;
  top: 306px;
  ${FontFamily}
  font-size: 20px;
  margin-bottom: 6px;
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
  box-shadow: 1px 2px 7px -4px #000000;
  padding: 4px;
  background-color: #fff;
`;

export const WelcomeBox = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 320px;
`;

export const UserButton = styled.button`
  ${ButtonStyles}
  width: 100px;
  background-color: #f0b27a;
  margin-left: 10px;
  margin-top: 3px;
  font-family: "Raleway", sans-serif;

  &:hover {
    background-color: #eb984e;
    transform: scale(1.02);
  }
`;

export const PageHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-bottom: 30px;
  padding: 0 20px;
  box-shadow: 0px 1px 6px 4px rgba(34, 60, 80, 0.56);
  font-family: "Raleway", sans-serif;
  font-weight: 600;
`;

export const HomeTitle = styled.h1`
  ${FontFamily}
  font-weight: 700;
  color: #4682b4;
  margin-left: 20px;
`;
