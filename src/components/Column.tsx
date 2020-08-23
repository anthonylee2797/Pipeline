import React, { useEffect, useRef, useState } from 'react';

interface props {
  columnName: string;
  children: React.ReactNode;
}

const Column = ({ columnName, children }: props) => (
  <div>
    <h1>
      ColumnName: {columnName} {children}
    </h1>
  </div>
);

export default Column;
