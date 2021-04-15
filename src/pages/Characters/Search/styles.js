import styled from "styled-components";

export default styled.input`
  width: 100%;
  max-width: 350px;
  height: 38px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #888;
  padding: 2px 10px;

  &:focus {
    box-shadow: 0px 0px 6px 1px #c2c2c2;
  }
`;
