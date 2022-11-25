import React from 'react';
import demoStitch from '../assets/demo-stitch.png';

export function SonarStitchImage(): JSX.Element {
  return <img src={demoStitch} alt="Stitched sonar demo" />;
}

SonarStitchImage.displayName = 'SonarStitchImage';
