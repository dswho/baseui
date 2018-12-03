/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';
import {Column, Table, InfiniteLoader} from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once

function isRowLoaded({index}) {
  return !!list[index];
}

function loadMoreRows({startIndex, stopIndex}) {
  // return fetch(`path/to/api?startIndex=${startIndex}&stopIndex=${stopIndex}`)
  //   .then(response => {
  //     // Store response data in list...
  //   });
  return generateData();
}

function rowRenderer({key, index, style}) {
  return (
    <div key={key} style={style}>
      {list[index]}
    </div>
  );
}

// Table data as an array of objects
const generateData = (start = 0, stop = 20) => {
  const data = [];
  for (let i = start; i < stop; i++) {
    data.push({
      name: `Brian Vaughn (${i})`,
      description: `Software engineer (${i})`,
    });
  }
  return data;
};
const list = generateData();
export const TestTable = () => {
  return (
    <InfiniteLoader
      isRowLoaded={isRowLoaded}
      loadMoreRows={loadMoreRows}
      rowCount={1000}
    >
      {({onRowsRendered, registerChild}) => (
        <Table
          width={300}
          height={300}
          headerHeight={20}
          rowHeight={30}
          rowCount={list.length}
          rowGetter={({index}) => list[index]}
        >
          <Column label="Name" dataKey="name" width={100} />
          <Column width={200} label="Description" dataKey="description" />
        </Table>
      )}
    </InfiniteLoader>
  );
};
