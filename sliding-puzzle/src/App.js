import React, { useState } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import './App.css';

function App() {

  return (
    <Stage width={window.innerWidth} height = {window.innerHeight}>
      <Layer>
        <Rect
          x={20}
          y = {50}
          width = {100}
          height = {100}
          fill="blue"
        />
        <Text
          x="70"
          y= "120"
          fill="white">
            Hello
        </Text>
      </Layer>
    </Stage>
  );
}

export default App;
