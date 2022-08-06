import styled from "styled-components";

const Container = styled.div`
  width: 900px;
  background-color: white;
  margin-top: 20px;
  box-shadow: 0 0 10px black;
  padding-top: 20px;
  background-color: gray;
  border-radius: 10px;
  h2 {
    text-align: center;
  }
`;
const Input = styled.input`
  background-color: white;
  border-radius: 5px;
  height: 30px;
  padding-left: 10px;
  width: ${({ width }) => (width ? width : "100px")};
  color: ${({ color }) => (color ? color : "black")};
  background-color: ${({ backColor }) => (backColor ? backColor : "white")};
  border: ${({ borderColor }) => borderColor ? `1px solid ${borderColor}` : "none"};
`;

const Box = styled.div`
  width: ${({ width }) => (width ? width : "100px")};
  height: ${({ height }) => (height ? height : "50px")};
`;

const FlexCon = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => (gap ? gap : "10px")};
  margin: 10px;
`;

const Button = styled.button`
  width: ${({ width }) => width ? width : '70px'};
  height: 25px;
  margin: 5px;
  color: ${({ color }) => color ? color : 'black'};
  border-radius: 5px;
  background-color: ${({ backColor }) => backColor ? backColor : 'white'};
  border: ${({ borderColor }) => borderColor ? `1px solid ${borderColor}` : 'none'};
`
export { Container, Input, Button, Box, FlexCon }