import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ color?: string }>`
  margin: 2%;
  height: 100vh;
  border: 1px solid black;
  width: 15%;
  text-align: center;
`;

interface props {
  columnName: string;
  children: React.ReactNode;
}

const Column = ({ columnName, children }: props) => (
  <Wrapper>
    <h1>
      {columnName} {children}
    </h1>
  </Wrapper>
);

export default Column;
