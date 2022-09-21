import styled from "styled-components";
import { Card } from "./components/Card";
import "./index.css";

function App() {
  return (
    <Container>
      <Card
        imageSrc="https://via.placeholder.com/200"
        title="Titre"
        description="Reprehenderit adipisicing eiusmod adipisicing laboris Lorem nostrud occaecat non adipisicing aliquip quis voluptate. Est nostrud incididunt Lorem aliqua est ex."
        status="warning"
      />
    </Container>
  );
}

const Container = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export default App;
