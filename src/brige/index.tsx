import React, { FormEvent, useState } from "react";
import netImg from "../img/20211012212929.png";
import { SearchForm } from "./search-form";
import { ListElement, TransferList } from "./transfer-list";

export const Bridge = () => {

  const [source, setSource] = useState({
    addr: "",
  });


  const [target, setTarget] = useState({
    addr: "",
  });

  const [listChange, setListChange] = useState([] as string[]);

  const [list1, setList1] = useState([] as ListElement[]);

  const [list2, setList2] = useState([] as ListElement[]);

  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");


  const computerList = [
    {
      addr: "H1",
    },
    {
      addr: "H2",
    },
    {
      addr: "H3",
    },
    {
      addr: "H4",
    },
    {
      addr: "H5",
    },
    {
      addr: "H6",
    },
  ];

  const netDict: { [key: string]: { [key: string]: { [key1: string]: number }; } } = {
    "H1": { "left": {}, "right": { "B1": 1, "B2": 1 } },
    "H2": { "left": {}, "right": { "B1": 1, "B2": 1 } },
    "H3": { "left": { "B1": 2 }, "right": { "B2": 1 } },
    "H4": { "left": { "B1": 2 }, "right": { "B2": 1 } },
    "H5": { "left": { "B2": 2, "B1": 2 }, "right": {} },
    "H6": { "left": { "B2": 2, "B1": 2 }, "right": {} },
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const source = (event.currentTarget.elements[0] as HTMLFormElement).value;
    const target = (event.currentTarget.elements[1] as HTMLFormElement).value;
    console.log(source);

    const listChangeNew = [];
    for (const way in netDict) {
      if (way == source) {
        const singleNetDict = netDict[way];
        for (const key in singleNetDict) {
          const obj = singleNetDict[key];
          for (const key1 in obj) {
            if (key1 === "B1") {
              const index1 = list1.findIndex((value => value.source == source));
              if (index1 == -1) {
                setList1([...list1, {
                  source: source,
                  port: obj[key1],
                }]);
                listChangeNew.push("B1");
              }

              const index2 = list1.findIndex((value => value.source == target));
              if (index2 != -1 && list1[index2].port === obj[key1]) {
                setMessage1("B1丢弃该帧");
                break;
              } else {
                setMessage1("B1转发该帧");


              }
            } else if (key1 === "B2") {
              const index1 = list2.findIndex((value => value.source == source));
              if (index1 == -1) {
                setList2([...list2, {
                  source: source,
                  port: obj[key1],
                }]);
                listChangeNew.push("B2");
              }

              const index2 = list2.findIndex((value => value.source == target));
              if (index2 != -1 && list2[index2].port == obj[key1]) {
                setMessage2("B2丢弃该帧");
                break;
              } else {
                setMessage2("B2转发该帧");
              }
            }


          }


        }
      }


    }
    setListChange(listChangeNew);
  };

  const rollBack = () => {
    const param = listChange;
    console.log(param);
    if (param.includes("B1")) {
      const copy = [...list1];
      copy.splice(list1.length - 1, 1);
      setList1(copy);
    }
    if (param.includes("B2")) {
      const copy = [...list2];
      copy.splice(list2.length - 1, 1);
      setList2(copy);
    }
    setListChange([]);
  };

  return (
    <div>
      <div>
        <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
          <span>源地址：</span>
          <SearchForm computers={computerList} param={source} setParam={setSource}/>
          <span>目标地址：</span>
          <SearchForm computers={computerList} param={target} setParam={setTarget}/>
          <button type={"submit"}>开始</button>
        </form>
        <div style={{ textAlign: "center" }}>
          <button onClick={rollBack}>后退</button>
        </div>

      </div>

      <div style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <img style={{ textAlign: "center" }} src={netImg} alt={""}/>
      </div>

      <p>{message1}</p><p>{message2}</p>
      <div style={{ width: "50%", height: "100%", float: "left" }}>
        <span>B1转发表</span>
        <TransferList list={list1}/>
      </div>
      <div style={{ width: "50%", height: "100%", float: "left" }}>
        <span>B2转发表</span>
        <TransferList list={list2}/>
      </div>

    </div>
  );
};