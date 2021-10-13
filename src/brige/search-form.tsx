import React from "react";


interface ComputerProps {
  addr: string;
}

interface SearchFormProps {
  computers: ComputerProps[];
  param: ComputerProps;
  setParam: (param: ComputerProps) => void;

}

export const SearchForm = ({ computers, param, setParam }: SearchFormProps) => {
  return (
    // <form>
        <select value={param.addr} onChange={event => setParam({
          ...param,
          addr: event.target.value,
        })}>

          {
            computers.map(computer => <option key={computer.addr} value={computer.addr}>{computer.addr}</option>)
          }

        </select>
    // </form>
  );
};