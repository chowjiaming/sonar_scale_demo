import {useState} from 'react';
import demoStitch from '../assets/demo-stitch.png';
import styled from 'styled-components';

type Props = {
  width: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
};
export function SonarStitchImage(props: Props): JSX.Element {
  const handleMouseRight = (
    mouseDownEvent: React.MouseEvent<HTMLButtonElement>
  ) => {
    const startWidth = props.width;
    const startPosition = mouseDownEvent.pageX;
    function onMouseMove(mouseMoveEvent: MouseEvent) {
      props.setWidth(() => startWidth - startPosition + mouseMoveEvent.pageX);
    }
    function onMouseUp() {
      document.body.removeEventListener('mousemove', onMouseMove);
    }
    document.body.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseup', onMouseUp, {once: true});
  };
  const handleMouseLeft = (
    mouseDownEvent: React.MouseEvent<HTMLButtonElement>
  ) => {
    const startWidth = props.width;
    const startPosition = mouseDownEvent.pageX;
    function onMouseMove(mouseMoveEvent: MouseEvent) {
      props.setWidth(() => startWidth + startPosition - mouseMoveEvent.pageX);
    }
    function onMouseUp() {
      document.body.removeEventListener('mousemove', onMouseMove);
    }
    document.body.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseup', onMouseUp, {once: true});
  };
  return (
    <ImageContainer width={props.width}>
      <LeftResizeButton onMouseDown={handleMouseLeft} />
      <StyledSonarStitchImage src={demoStitch} alt="Stitched sonar demo" />
      <RightResizeButton onMouseDown={handleMouseRight} />
    </ImageContainer>
  );
}

const ImageContainer = styled.div<{width: number}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width}px;
`;
const StyledSonarStitchImage = styled.img`
  width: 100%;
  height: 100%;
`;
const ResizeButton = styled.button`
  position: absolute;
  height: 100%;
  cursor: ew-resize;
  background-color: transparent;
  border: none;
`;
const RightResizeButton = styled(ResizeButton)`
  right: 0;
`;
const LeftResizeButton = styled(ResizeButton)`
  left: 0;
`;

SonarStitchImage.displayName = 'SonarStitchImage';
