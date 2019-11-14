import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useScrollPosition from './useScrollPosition';

styled.input.attrs(props => ({
  type: 'text',
  size: props.small ? 5 : undefined,
}));

const ScrollProgressContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  z-index: 1;
  height: ${({ height }) => height};
  background-color: ${({ color }) => color};
`;

const ScrollProgress = ({ color = '#2B879E', height = '6px' }) => {
  const [width, setWidth] = useState(0);
  const scrollPosition = useScrollPosition();
  useEffect(() => {
    setWidth(
      (scrollPosition / (document.body.offsetHeight - window.innerHeight)) * 100
    );
  }, [scrollPosition]);

  return (
    <ScrollProgressContainer
      color={color}
      height={height}
      style={{ width: `${width}%` }}
    />
  );
};

export default ScrollProgress;
