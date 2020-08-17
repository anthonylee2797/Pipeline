import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Column from './Column';

const Pipeline = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);

  return (
    <div>
      <Column columnName='Applied'>
        {jobs.filter((el) => el.status === 'Applied').map((el) => (<Job/>))}
      </Column>
      <Column columnName='Accepted' >

      </Column>
      <Column columnName='Rejected'>

      </Column>
    </div>
  );
};

export default Pipeline;
