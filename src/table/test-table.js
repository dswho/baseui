/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';
import {Column, Table} from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once

// Table data as an array of objects
const generateData = (size = 20) => {
  const data = [];
  for (let i = 0; i < 20; i++) {
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
  );
};
