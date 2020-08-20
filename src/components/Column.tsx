import React, { useEffect, useRef, useState } from 'react';

const Column = (props: any) => (
  <div>
    <h1>
      ColumnName: {props.columnName} {props.children}
    </h1>
  </div>
);

export default Column;
