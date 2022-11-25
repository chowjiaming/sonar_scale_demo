import demoStitch from "./assets/demo-stitch.png";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <AppContainer>
        <StyledHeader>Sonar Stitch Scalebar Demo</StyledHeader>
        <StyledControlPanel>
          <StyledParagraph>
            <StyledSpan>gsd_ortho:</StyledSpan> 0.5
          </StyledParagraph>
          <StyledParagraph>
            <StyledSpan>width_ortho:</StyledSpan> 0.5
          </StyledParagraph>
          <StyledParagraph>
            <StyledSpan>width_canvas:</StyledSpan> 0.5
          </StyledParagraph>
          <StyledParagraph>
            <StyledSpan>scalebar_ratio:</StyledSpan> 0.5
          </StyledParagraph>
          <StyledParagraph>
            <StyledSpan>num_sections:</StyledSpan> 0.5
          </StyledParagraph>
        </StyledControlPanel>
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
const StyledControlPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2em;
  padding: 1em;
  margin: 1em;
`;
const StyledParagraph = styled.p`
  font-size: 1.6em;
  line-height: 1.1;
  color: #213547;
`;
const StyledSpan = styled.span`
  font-weight: 500;
`;

export default App;
