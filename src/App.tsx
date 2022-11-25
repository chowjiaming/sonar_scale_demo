import {useState} from 'react';
import {ControlPanel} from './Components/ControlPanel';
import {SonarStitchImage} from './Components/SonarStitchImage';
import styled from 'styled-components';

function App() {
  const [width, setWidth] = useState<number>(800);
  return (
    <div className="App">
      <AppContainer>
        <StyledHeader>Sonar Stitch Scalebar Demo</StyledHeader>
        <ControlPanel />
        <SonarStitchImage width={width} setWidth={setWidth} />
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

export default App;
