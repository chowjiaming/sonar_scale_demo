import React from 'react';
import styled from 'styled-components';

export function ControlPanel(): JSX.Element {
  return (
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
  );
}

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

ControlPanel.displayName = 'ControlPanel';
