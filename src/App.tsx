import styled from "styled-components";
import { Card } from "./components/Card";
import { PokeData } from "./components/PokeData";
import "./index.css";

function App() {
  return (
    <Container>
      <PokeData pokemonId={123} />
    </Container>
  );
}

const Container = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

export default App;
