import demoStitch from "./assets/demo-stitch.png";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <AppContainer>
        <StyledHeader>Sonar Stitch Scalebar Demo</StyledHeader>
        <img src={demoStitch} alt="Stitched sonar demo" />
      </AppContainer>
    </div>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledHeader = styled.h1`
  font-size: 3.2em;
  line-height: 1.1;
  color: #213547;
`;
// const StyledInfoPanel = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background-color: #213547;
//   color: #fff;
//   padding: 1em;
//   border-radius: 0.5em;
//   margin: 1em;
// `;
// const StyledParagraph = styled.p`
//   font-size: 1.6em;
//   line-height: 1.1;
//   color: #213547;
// `;

export default App;
