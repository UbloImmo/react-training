import styled from "styled-components";
import { PokeData } from "./feature/components_test/PokeData";
import "./index.css";

function App() {
  return (
    <Container>
      <PokeData pokemonId={123} />
      {...Array(10)
        .fill(null)
        .map((_, index) => <PokeData pokemonId={index + 1} />)}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

export default App;
