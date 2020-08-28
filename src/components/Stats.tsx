import React, { useEffect, useRef, useState, createContext } from 'react';
import styled from 'styled-components';

const StatComponent = styled('div')`
  width: 50%;
  text-align: center;
  color: black;
`;

const Stats = () => (
  <StatComponent>
    <h1>Pipeline | Track your Job Applications</h1>
    <h1>Total Jobs Applied: </h1>
    <h1>Offer Conversion Rate: X%</h1>
  </StatComponent>
);

export default Stats;
