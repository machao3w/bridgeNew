import React from "react";

export interface ListElement {
  source: string;
  port: number;
}

interface ListProps {
  list: ListElement[];
}


export const TransferList = ({list} : ListProps) => {

  console.log(list);
  return <table>
    <thead>
    <tr>
      <th>地址</th>
      <th>端口</th>
    </tr>
    </thead>
    <tbody>
    {
      list.map((e, index) => <tr key={index}>
        <td>{e.source}</td>
        <td>{e.port}</td>
      </tr>)
    }
    </tbody>
  </table>;

};