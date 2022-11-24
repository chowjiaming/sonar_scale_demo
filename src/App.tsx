import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <StyledHeader>Sonar Stitch Scalebar Demo</StyledHeader>
    </div>
  );
}

const StyledHeader = styled.h1`
  color: #213547;
`;

export default App;
