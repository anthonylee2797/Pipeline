import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const JobComponent = styled('div')`
  color: green;
  text-align: center;
  border: 1px solid;
`;

interface Props {
  company: string;
  status: string;
  id: any;
}

const Job = ({ company, status, id }: Props) => <JobComponent>Names: {company}</JobComponent>;

export default Job;
