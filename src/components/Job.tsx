import React, { useEffect, useRef, useState } from 'react';

interface Props {
  company: string;
  status: string;
  id: any;
}

const Job = ({ company, status, id }: Props) => (
  <div>
    <h3>Name: {company}</h3>
  </div>
);

export default Job;
