import styled from "styled-components";

export const Wrapper = styled.div`
  @font-face {
    font-family: "Marvel";
    src: local("Marvel"), url(./fonts/Marvel.ttf) format("opentype");
  }
  font-family: "Marvel", sans-serif;
  background-color: red;
  color: white;
  font-size: 40px;
  height: 50px;
  padding: 6px 12px 20px 12px;
`;
